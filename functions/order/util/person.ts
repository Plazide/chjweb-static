import CapsuleAPI from "./capsule";

interface PersonOptions{
	token: string;
	email: string;
	company: string;
	name: string;
}

export async function createPerson({ token, email, name, company }: PersonOptions){
	const capsule = new CapsuleAPI({ token });
	const partiesResult = await capsule.parties.list();
	const parties = partiesResult.parties;

	const personExists = parties.find( party => party.emailAddresses.some( emailItem => {
		return emailItem.address === email && party.type === "person";
	}));

	const names = name.split(" ");
	const firstName = names[0];
	const lastName = names.slice(1).join(" ");

	const person = personExists || (await capsule.party.create({
		type: "person",
		firstName,
		lastName,
		emailAddresses: [
			{
				address: email,
				type: "Work"
			}
		],
		owner: {
			id: 1
		},
		organisation: {
			name: company
		}
	})).party;

	return person;
}
