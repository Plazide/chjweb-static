import React from "react";

// Layout
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function CMS(){
	return (
		<Layout>
			<SEO 
				title="Valfri CMS" 
				description="CHJ Webblösningar låter er välja den CMS som passar er bäst." 
				url="/cms"
			/>
		</Layout>
	)
}