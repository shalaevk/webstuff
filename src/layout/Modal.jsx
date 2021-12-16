
import React, { } from "react"



export const Modal = ({ lang, text, handleClose, show }) => {



	const showHideClassName = show ? 'modal display-block' : 'modal display-none';

	if (show) {
		return (<div className={showHideClassName}>
			<section className='modal-main'>
				<button onClick={handleClose} className="closebtn">
					<img src="jdjdj" alt="close button" />
				</button>
				form

			</section>
		</div>)
	}
	if (!show) {
		return (
			<></>
		);
	}

};