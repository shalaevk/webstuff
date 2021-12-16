import React, { } from "react";
import { Link } from "gatsby";
import * as cls from "../css/Header.module.css"


import viber from "../../public/viber.svg"
import telegram from "../../public/telegram.svg"



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

				<a className={cls.social} href="https://viber">
					<img src={viber} alt="viber" />
				</a>
				<a className={cls.social} href="https://telegram">
					<img src={telegram} alt="telegram" />
				</a>
			</div>
		</div>
	</nav>
}
