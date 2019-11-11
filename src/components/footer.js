import React from 'react'

// Components
import Navigation from "./navigation";

// css
import "./styles/footer.css";

// Images
import LogoLight from "../images/logo_light.svg";
import FacebookIcon from "../images/social/facebook.svg";
import TwitterIcon from "../images/social/twitter.svg";


export default function Footer({ siteTitle }) {
	return (
		<footer>
			<div className="content">
				<div className="row">
					<img src={LogoLight} alt={siteTitle} alt={siteTitle} />
				</div>
				<Contact />
				<Explore />
				<Follow />
				<Terms />
			</div>
		</footer>
	)
}

function Contact(){
	return (
		<div className="column">
				<h3>Kontakt</h3>
				<address>
					<a href="mailto:contact@chjweb.se">contact@chjweb.se</a>
					<a href="tel:0501601909">0501-60 19 09</a>
				</address>
			</div>
	)
}

function Explore(){
	return(
		<div className="column">
			<h3>Utforska</h3>
			<Navigation />
		</div>
	);
}

function Follow(){
	return (
		<div className="column">
			<h3>Följ</h3>
			<ul className="social">
				<li>
					<SocialLink 
						icon={FacebookIcon} 
						title="Facebook" 
						url="https://www.facebook.com/chjweb"
					/>
				</li>
				<li>
					<SocialLink 
						icon={TwitterIcon} 
						title="Twitter" 
						url="https://twitter.com/chj_web"
					/>
				</li>
			</ul>
		</div>
	)
}

function Terms(){
	return (
		<div className="column">
			<h3>Villkor</h3>
			<ul>
				<li>
					<a href="/integritetspolicy">Integritetspolicy</a>
				</li>
			</ul>
		</div>
	)
}

function SocialLink ({icon, title, url}){
	return (
		<a href={url}>
			<img src={icon} alt={title} className="icon" />
			<span className="text">{title}</span>
		</a>
	)
}
