import React, { useState } from "react";
import { Header } from "./Header"
import { Footer } from "./Footer"


const PrimaryLayout = (props) => {
	return (<>
		<Header />
		{props.children}
		<Footer />
	</>)
}

export default PrimaryLayout;


