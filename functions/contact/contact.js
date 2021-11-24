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

exports.handler = async (event) => {
	if(event.httpMethod !== "POST") return{ statusCode: 404, body: "Not found" };

	const body = JSON.parse(event.body);
	const{ name, email, message } = body;

	if(!name || !email || !message) return badRequest();
	if(!/^.*@.*..*$/.test(email)) return badRequest();

	return sendMessage(body);
};

async function sendMessage({ email, name, message }){
	const headline = `<b><i>${name}</i> har skickat ett meddelande från chjweb.se</b>`;
	const body = `<p>${message}</p>`;
	const replyTo = `<span>E-post: <b>${email}</b></span>`;
	const html = headline + body + replyTo;

	try{
		const result = await transporter.sendMail({
			from: "contact@chjweb.se",
			to: "carl@chjweb.se",
			subject: `Nytt meddelande från ${name}`,
			html
		});

		console.log(result);
		return{ statusCode: 200, body: "OK" };
	}catch(err){
		console.error(err);
		return{ statusCode: 500, body: "Internal Server Error" };
	}
}

function badRequest(){
	return{ statusCode: 400, body: "Bad request" };
}
