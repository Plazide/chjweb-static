/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/globals.css";

export const onClientEntry = async () => {
	if(typeof IntersectionObserver === "undefined")
		await import("intersection-observer");

	if(typeof window.fetch === "undefined")
		await import("whatwg-fetch");

	if(!browserCanUseCssVariables())
		await import("css-vars-ponyfill")();

	addAnalytics();
};

function browserCanUseCssVariables(){
	return window.CSS && CSS.supports("color", "var(--fake-var)");
}

function addAnalytics(){
	const script = document.createElement("script");
	script.defer = true;
	script.async = true;
	script.setAttribute("data-cf-beacon", "{\"token\": \"1fe9cd5b9e15450c97c3b43962d69161\"}");
	script.src = "https://static.cloudflareinsights.com/beacon.min.js";

	document.body.append(script);
}
