const nodemailer = require("nodemailer");
require("dotenv").config();

const host = process.env.EMAIL_HOST;
const port = process.env.EMAIL_PORT;
const secure = process.env.EMAIL_SECURE;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

console.log(host);

const transporter = nodemailer.createTransport({
	host,
	port,
	secure,
	auth: {
		user,
		pass
	}
});

async function sendHireEmail(email){
	try{
		const info = await transporter.sendMail({
			from: email,
			to: "contact@chjweb.se",
			subject: "Förfrågan om att anlita",
			html: `
			<a href="mailto:${email}">${email}</a> är intresserad av att anlita CHJ Webblösningar. Skicka ett mejl direkt!
			`
		});

		return true;
	}catch(err){
		console.error(err);
		return false;
	}
}

exports.handler = async (event, context) => {
	if(event.httpMethod !== "POST") return { statusCode: 400, body: "Method not supported" }

	const email = JSON.parse(event.body).email;
	if(!email || !/^.+@.+\..{2,8}$/.test(email)) return { statusCode: 400, body: "Malformed data" }

	const accepted = await sendHireEmail(email);

	if(accepted)
		return { statusCode: 200, body: "Accepted" };
	else
		return { statusCode: 500, body: "Internal Server Error" };
}