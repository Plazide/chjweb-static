import React from 'react'

// CSS
import "./styles/buttons.css";

export default function Button({ variant = "filled", children, loading }) {
	return (
		<div className="button-wrapper">
			{loading ? 
				(<div className="button-loading"></div>)
				:
				(<button className={`button button-${variant}`}>
					{children}
				</button>)
			}
			
		</div>
		
	)
}
