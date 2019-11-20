/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/globals.css";
import cssVars from "css-vars-ponyfill";

export const onClientEntry = async () => {
	if(typeof IntersectionObserver === "undefined")
		await import("intersection-observer");

	if(typeof window.fetch === "undefined")
		await import("whatwg-fetch");

	if(!browserCanUseCssVariables())
		cssVars();
	
}

function browserCanUseCssVariables() {
	return window.CSS && CSS.supports('color', 'var(--fake-var)');
}