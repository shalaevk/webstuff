import React from "react"
import * as cls from '../css/Footer.module.css'

import viber from "../images/viber.svg"
import telegram from "../images/telegram.svg"
import phone from "../images/cell-phone.svg"





export const Footer = (props) => {
	return <footer className={`container ${cls.footer}`}>
		<div className={cls.topfooter}>
			<div className={cls.logo}>
				.webstuff
			</div>
			<div className={cls.number}>
				<a className={cls.phone} href="tel:+380634247864">
					+38 (066) 424-78-64
					<img src={phone} />
				</a>
				<a className={cls.social} href="https://viber">
					<img src={viber} alt="viber" />
				</a>
				<a className={cls.social} href="https://viber">
					<img src={telegram} alt="telegram" />
				</a>
			</div>
		</div>


	</footer>
}
