import fetch, { RequestInit } from "node-fetch";
import querystring from "querystring";

interface CapsuleOptions{
	token: string;
}

interface RequestOptions{
	endpoint: string;
	method: "post" | "get" | "put" | "patch" | "delete",
	body?: any;
}

type PartyList = {
	since?: Date;
	page?: number;
	perPage?: number;
}

interface User{
	id: number;
	username?: string;
	pictureURL?: string;
	name?: string;
}

interface Team{
	id: number;
	name: string;
}

interface NestedParty{
	id?: string;
	name?: string;
	type?: "person" | "organisation";
	pictureURL?: string;
	isRestricted?: boolean;
}

interface PhoneNumber{
	id: number;
	type?: "Home" | "Work" | "Mobile" | "Fax" | "Direct";
	number: string;
}

interface Address{
	id: number;
	type: "Home" | "Postal" | "Office" | "Billing" | "Shipping";
	street: string;
	city: string;
	state: string;
	country: string;
	zip: string;
}

interface EmailAddress{
	id?: number;
	type?: "Home" | "Work";
	address: string;
}

interface Website{
	id: string;
	service: "URL" | "SKYPE" | "TWITTER" | "LINKED_IN" | "FACEBOOK" | "XING" | "FEED" | "GOOGLE_PLUS" | "FLICKR" | "GITHUB" | "YOUTUBE" | "INSTAGRAM" | "PINTEREST";
	address: string;
	type?: "Home" | "Work";
	url: string;
}

interface Party{
	id: number;
	owner: User;
	team: Team | null;
	type: "person" | "organisation";
	name: string | null;
	about: string | null;
	firstName: string | null;
	lastName: string | null;
	jobTitle: string | null;
	createdAt: string;
	updatedAt: string;
	organisation: NestedParty | null;
	lastContactedAt: string | null;
	pictureURL: string;
	title: string | null;
	phoneNumbers: PhoneNumber[];
	addresses: Address[];
	emailAddresses: EmailAddress[];
	websites: Website[];
}

export default class CapsuleAPI {
	token: string;
	baseUrl: string;

	constructor({ token }: CapsuleOptions){
		this.token = token;
		this.baseUrl = "https://api.capsulecrm.com/api/v2";
	}

	async _request({ endpoint, method, body }: RequestOptions){
		const url = this.baseUrl + (endpoint.substr(0, 1) === "/"
			? endpoint
			: "/" + endpoint);

		console.log(url);
		const options: RequestInit = {
			method,
			headers: {
				"Authorization": `Bearer ${this.token}`,
				"Content-Type": "application/json"
			}
		};

		if(body) options.body = body;

		return fetch(url, options);
	}

	party = {
		_instance: this,
		async create(options: Partial<Party>): Promise<{ party: Party }>{
			const endpoint = "/parties";
			const response = await this._instance._request({
				endpoint,
				method: "post",
				body: JSON.stringify({ party: options })
			});
			return response.json();
		},
		async list(options?: PartyList): Promise<{ parties: Party[] }>{
			const parsedOptions = options ? {
				...options,
				since: options.since?.toISOString() || undefined
			} : null;
			const query = parsedOptions
				? "?" + querystring.stringify(parsedOptions)
				: "";
			const endpoint = `/parties${query}`;

			const response = await this._instance._request({
				endpoint,
				method: "get"
			});

			return response.json();
		}
	}
	parties = this.party;
}
