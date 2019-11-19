exports.handler = async (event, context) => {
	if(event.httpMethod !== "POST") return { statusCode: 400, body: "Method not supported" }

	const email = JSON.parse(event.body).email;
	console.log(email);

	if(!email || !/^.+@.+\..{2,8}$/.test(email)) return { statusCode: 400, body: "Malformed data" }

	return { statusCode: 200, body: "Accepted" };
}