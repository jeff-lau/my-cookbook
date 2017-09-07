import './pageWrapper.css'
import React from 'react'

const PageWrapper = (props) => {
	return(
		<div className="pageWrapper">
			{props.children}
		</div>
	)
}

export default PageWrapper