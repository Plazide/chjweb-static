import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { createPerson } from "./util/person";
import { sendToCustomer, sendToMe } from "./util/emails";

const capsuleToken = process.env.CAPSULE_TOKEN;

interface Body{
	"contact-name": string;
	"contact-email": string;
	company: string;
	tierName: string;
	tierId: string;
	tierTimeFrame: "monthly" | "yearly";
	tierType: "solo" | "small" | "large";
}

export async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2>{
	if(event.httpMethod.toLowerCase() !== "post") return{ statusCode: 404 };
	if(!event.body) return{ statusCode: 400 };
	const body: Body = JSON.parse(event.body);
	const{
		"contact-email": email,
		"contact-name": name,
		tierName,
		company,
		tierTimeFrame,
		tierType
	} = body;

	if(!capsuleToken) return{ statusCode: 500 };
	const person = await createPerson({
		token: capsuleToken,
		name,
		company,
		email
	});
	const personId = person.id;

	await sendToCustomer({ tierName, tierTimeFrame, tierType, email, name });
	await sendToMe({ email, name, tierName, personId, company });

	return{
		statusCode: 200,
		body: JSON.stringify({
			data: event.body
		})
	};
};
