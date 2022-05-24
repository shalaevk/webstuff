
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
	constructor(props) {
		super(props);
		this.state = { isValidated: false };
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...this.state,
			}),
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch((error) => alert(error));
	};

	render() {

		return (

			<section className="section">
				<div className="container">
					<div className="content-form" style={Content}>
						<h1 style={{ marginBottom: "45px" }}>{this.props.lang === "en_US" ? "Contact" : "Связаться"}</h1>
						<form
							style={FormStyle}
							name="Zakaz"
							method="post"
							action="/"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							onSubmit={this.handleSubmit}
						>
							{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
							<input type="hidden" name="Zakaz" value="contact" />
							<div hidden>
								<label>
									Don’t fill this out:{" "}
									<input name="bot-field" onChange={this.handleChange} />
								</label>
							</div>
							<div style={Field}>
								<div className="control">
									<input
										style={Input}
										placeholder={this.props.lang === "en_US" ? "Your name" : "Имя"}
										type={"text"}
										name={"name"}
										onChange={this.handleChange}
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
										onChange={this.handleChange}
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
										type={"email"}
										name={"email"}
										onChange={this.handleChange}
										id={"email"}
										required={true}
									/>
								</div>
							</div>
							{this.props.lang === "en_US" ? "" : <div style={Field}>
								<label style={Label} >
									<span style={{ marginBottom: "15px", display: "block", }}>Как удобнее связаться?</span>
									<select style={Select} name="role[]" >
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
