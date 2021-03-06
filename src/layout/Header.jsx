import React, { } from "react";
import { Link } from "gatsby";
import * as cls from "../css/Header.module.css"


import viber from "../images/viber.svg"
import telegram from "../images/telegram.svg"



export const Header = (props) => {


	return <nav className={`container ${cls.navbar}`}>
		<div className={cls.logo}>
			.webstuff
		</div>

		<div className={cls.contactswrap}>
			<div className={cls.selectorClass}>
				<ul>
					<li>
						<Link to="/en">En</Link>
					</li>
					<li>
						<Link to="/">Ru</Link>
					</li>
				</ul>
			</div>

			<div className={cls.number}>
				<a className={cls.phone} href="tel:+380634247864">
					+38 (063) 424-78-64
				</a>

				<a className={cls.social} href="viber://chat?number=%2B380508716557">
					<img src={viber} alt="viber" />
				</a>
				<a className={cls.social} href="https://t.me/Kirill_Shalaev">
					<img src={telegram} alt="telegram" />
				</a>
			</div>
		</div>
	</nav>
}
