import nodemailer from "nodemailer";

interface SendToMeOptions{
	name: string;
	email: string;
	company: string;
	tierName: string;
	personId: number;
}

interface SendToCustomerOptions{
	tierTimeFrame: "monthly" | "yearly";
	tierType: "solo" | "small" | "large";
	tierName: string;
	email: string;
	name: string;
}

const host = process.env.EMAIL_HOST || "smtp.qboxmail.com";
const port = process.env.EMAIL_PORT;
const secure = process.env.EMAIL_SECURE || true;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
	host,
	port: port ? parseInt(port) : undefined,
	secure: !!secure,
	auth: {
		user,
		pass
	}
});

const IntervalTrans = new Map([
	["monthly", "månad"],
	["yearly", "år"]
]);

const priceTable = {
	solo: {
		yearly: 9600,
		monthly: 2800
	},
	small: {
		yearly: 22500,
		monthly: 2800
	},
	large: {
		yearly: 48000,
		monthly: 6000
	}
};

export async function sendToMe({ name, email, tierName, personId, company }: SendToMeOptions){
	const subject = `Ny beställning: ${tierName}`;
	const message = `${name} från ${company} är intresserad av ${tierName}.
	
Skicka ett meddelande och fråga efter moms.nr, org.nr och address.

Capsule sida: https://chjweb.capsulecrm.com/party/${personId}
	`;

	await transporter.sendMail({
		from: `${name} <${email}>`,
		to: "carl@chjweb.se",
		text: message,
		subject
	});
}

export async function sendToCustomer({ tierType, tierTimeFrame, tierName, email, name }: SendToCustomerOptions){
	const price = priceTable[tierType][tierTimeFrame];
	const interval = IntervalTrans.get(tierTimeFrame);
	const currency = "SEK";
	const amount = new Intl.NumberFormat("sv-SE", {
		currency,
		style: "currency",
		currencyDisplay: "narrowSymbol"
	}).format(price);

	const customerSubject = `Beställning: ${tierName}`;
	const customerMessage = `(Det här meddelandet skickades automatiskt)

Hej ${name},
	
Ni har valt att beställa ${tierName}, för en kostnad om ${amount} per ${interval}. Som sagt har ni ännu inte accepterat något kontrakt eller avtal och kan avbryta beställningen när som helst.

Jag kommer att skicka ett manuellt mejl om en kort stund där jag kommer be om mer information som org.nr, moms.nr och företagets address. Därefter kommer jag skicka ett kontrakt som ni kan signera digitalt. När kontraktet är signerat skickas den första fakturan och ni kan ge mig mina första uppdrag.

Jag ser fram emot ett givande samarbete.
	`;

	await transporter.sendMail({
		from: "Carl Hallén Jansson <carl@chjweb.se>",
		to: email,
		text: customerMessage,
		subject: customerSubject
	});
}
