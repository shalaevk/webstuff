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
				<a className={cls.phone} href="tel:+380508716557">
					+38 (050) 871-65-57
					<img src={phone} />
				</a>
				<a className={cls.social} href="viber://chat?number=%2B380508716557">
					<img src={viber} alt="viber" />
				</a>
				<a className={cls.social} href="https://t.me/Kirill_Shalaev">
					<img src={telegram} alt="telegram" />
				</a>
			</div>
		</div>


	</footer>
}
