
import * as React from "react";
import { navigate } from "gatsby-link";


function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

const FormStyle = {
	width: "100%",
}
const Content = {
	maxWidth: "60%",
	margin: "0 auto",
	padding: "2% 5%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	background: "#fff",
	color: "#000",
}
const Field = {
	marginBottom: "25px",
}
const Label = {
	fontSize: "20px",
}
const Select = {
	border: "1px solid #c9c9c9",
	height: "60px",
	width: "100%",
	padding: "0 15px",
	fontSize: "16px",
	borderRadius: "10px",
}
const Input = {
	width: "100%",
	boxSizing: "border-box",
	height: "60px",
	padding: "0 20px",
	fontSize: "16px",
	lineHeight: "1.33",
	color: "#000000",
	border: "1px solid #c9c9c9",
	borderRadius: "10px",
}
const Button = {
	border: "none",
	padding: "15px 45px",
	background: "#7900ba",
	color: "#fff",
	textTransform: "uppercase",
	borderRadius: "10px",
}



export default class Form extends React.Component {


	render() {

		return (

			<section className="section">
				<div className="container">
					<div className="content-form" style={Content}>
						<h1 style={{ marginBottom: "45px" }}>{this.props.lang === "en_US" ? "Contact" : "Связаться"}</h1>
						<form
							style={FormStyle}
							name="contact-form"
							method="post"
							action="https://webstuff.com.ua/"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							
						>
							{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
							<input type="hidden" name="contact-form" value="contact" />
							<div hidden>
								<label>
									Don’t fill this out:{" "}
									<input name="bot-field" />
								</label>
							</div>
							<div style={Field}>
								<div className="control">
									<input
										style={Input}
										placeholder={this.props.lang === "en_US" ? "Your name" : "Имя"}
										type={"text"}
										name={"name"}
										
										id={"name"}
										required={true}
									/>
								</div>
							</div>
							<div style={Field}>

								<div className="control">
									<input
										style={Input}
										placeholder={this.props.lang === "en_US" ? "Phone" : "Телефон"}
										type={"tel"}
										name={"tel"}
										
										id={"tel"}
										required={true}
									/>
								</div>
							</div>
							<div style={Field}>
								<div className="control">
									<input
										style={Input}
										placeholder={this.props.lang === "en_US" ? "Email" : "Email"}
										
										name={"email"}
										
										id={"email"}
										required={true}
									/>
								</div>
							</div>
							{this.props.lang === "en_US" ? "" : <div style={Field}>
								<label style={Label} >
									<span style={{ marginBottom: "15px", display: "block", }}>Как удобнее связаться?</span>
									<select style={Select}  name={"connection"} >
										<option value="Позвонить">Позвонить</option>
										<option value="Написать">Написать</option>
									</select></label>
							</div>}

							<div style={Field}>
								<button style={Button} className="button is-link btn-send" type="submit">
									{this.props.lang === "en_US" ? "Send" : "Отправить"}
								</button>
							</div>
						</form>
					</div>
				</div >
			</section >

		);
	}
}
