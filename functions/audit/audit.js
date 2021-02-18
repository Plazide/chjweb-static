const nodemailer = require("nodemailer");
require("dotenv").config();

const host = process.env.EMAIL_HOST;
const port = process.env.EMAIL_PORT;
const secure = process.env.EMAIL_SECURE;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
	host,
	port,
	secure,
	auth: {
		user,
		pass
	}
});

async function sendAuditEmail(email, website, link){
	try{
		const info = await transporter.sendMail({
			from: email,
			to: "contact@chjweb.se",
			subject: "Förfrågan om att granska hemsida",
			html: `
			<a href="mailto:${email}">${email}</a> vill att du granskar en hemsida: <a href="${link}">${website}</a>
			`
		});

		return true;
	}catch(err){
		console.error(err);
		return false;
	}
}

exports.handler = async (event, context) => {
	if(event.httpMethod !== "POST") return{ statusCode: 400, body: "Method not supported" };

	const body = JSON.parse(event.body);
	const email = body.email;
	const website = body.website;

	if(!email || !/^.+@.+\..{2,8}$/.test(email)) return{ statusCode: 400, body: "Malformed data" };
	if(!website || !/^(https?:\/\/)?(www.)?[a-z0-9]*\.[a-z]{2,62}/.test(website)) return{ statusCode: 400, body: "Malformed data" };

	const link = /^https?:\/\//.test(website) ? website : `https://${website}`;

	const accepted = await sendAuditEmail(email, website, link);

	if(accepted)
		return{ statusCode: 200, body: "Accepted" };
	else
		return{ statusCode: 500, body: "Internal Server Error" };
}
;
