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

async function sendHireEmail(email, msg){
	try{
		const info = await transporter.sendMail({
			from: "contact@chjweb.se",
			to: "contact@chjweb.se",
			subject: `${email} vill ha en offert!`,
			html: `
			<p><a href="mailto:${email}">${email}</a> har skickat en offertförfrågan. Hen har skrivit så här:<p>

			<pre>${msg}<pre>
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
	const msg = body.msg;
	if(!email || !/^.+@.+\..{2,8}$/.test(email)) return{ statusCode: 400, body: "Malformed data" };
	if(!msg) return{ statusCode: 400, body: "Maformed data" };

	const accepted = await sendHireEmail(email, msg);

	if(accepted)
		return{ statusCode: 200, body: "Accepted" };
	else
		return{ statusCode: 500, body: "Internal Server Error" };
}
;
