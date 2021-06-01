import "bootstrap/dist/css/bootstrap.css";
// import "../styles/css/NewPymeStyle.css";
import React from "react";
// import { render } from 'react-dom'
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import Wizard from "../controlsJS/ControlNewPyme";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
	await sleep(300);
	window.alert(JSON.stringify(values, 0, 2));
};

const Error = ({ name }) => (
	<Field
		name={name}
		subscription={{ touched: true, error: true }}
		render={({ meta: { touched, error } }) => (touched && error ? <span>{error}</span> : null)}
	/>
);

const required = value => (value ? undefined : "Required");

function NewPyme() {
	return (
		<>
			<div className="container">
				<h1>registro de Nueva Pyme</h1>
				<h2>Formulario</h2>

				<Wizard initialValues={{ dataRegistro: "01/01/01", ip: "111.11.11.111" }} onSubmit={onSubmit}>
					<Wizard.Page
						validate={values => {
							const errors = {};
							if (!values.email) {
								errors.email = "Required";
							}
							if (!values.clave) {
								errors.clave = "Required";
							}
							if (!values.clave2) {
								errors.clave2 = "Required";
							}
							if (values.clave !== values.clave2) {
								errors.clave2 = "clave Invalida";
							}
							return errors;
						}}>
						<div className="card">
							<div className="card-header">Paso 1 - Creación de usuario y contraseña</div>
							<div className="card-body">
								<div className="container">
									{/* <h4 class="card-title">Special title treatment</h4>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p> */}
									<div className="row">
										<div className="col">
											<div>
												<label>Email</label>
												<Field
													name="email"
													component="input"
													type="email"
													placeholder="Email"
												/>
												<Error name="email" />
											</div>
										</div>
										<div className="col">
											<div>
												<label>Clave</label>
												<Field name="clave" component="input" type="password" />
												<Error name="clave" />
											</div>
											<div>
												<label>Repita la clave</label>
												<Field name="clave2" component="input" type="password" />
												<Error name="clave2" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Wizard.Page>

					<Wizard.Page
						validate={values => {
							const errors = {};
							if (!values.direccion) {
								errors.direccion = "Required";
							}
							return errors;
						}}>
						<div className="card">
							<div className="card-header">Paso 1 - Creación de usuario y contraseña</div>
							<div className="card-body">
								<div className="container">
									{/* <h4 class="card-title">Special title treatment</h4>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p> */}
									<div className="row">
										<div className="col">
											<div />
										</div>
										<div className="col">
											<div />
											<div />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<label>Nombre Legal</label>
							<Field
								name="legalName"
								component="input"
								type="text"
								placeholder="Nombre de registro legal"
								validate={required}
							/>
							<Error name="legalName" />
						</div>
						<div>
							<label>Nombre de Fantasia</label>
							<Field
								name="fantasyName"
								component="input"
								type="text"
								placeholder="Last Name"
								validate={required}
							/>
							<Error name="fantasyName" />
						</div>
						<div>
							<label>Dirección Exacta</label>
							<Field name="direccion" component="textarea" placeholder="Notes" />
							<Error name="direccion" />
						</div>
					</Wizard.Page>
					<Wizard.Page
						validate={values => {
							const errors = {};
							if (!values.matPrima) {
								errors.matPrima = "Required";
							} else if (values.matPrima.length < 2) {
								errors.matPrima = "Choose more";
							}
							if (!values.tipoPyme) {
								errors.tipoPyme = "Required";
							}
							return errors;
						}}>
						{/* <div> */}
						{/* <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
              <Error name="email" />
            </div> */}
						<div>
							<label>Tipo de Pyme</label>
							<Field name="tipoPyme" component="select">
								<option />
								<option value="Manufactura">Manufactura</option>
								<option value="Servicios">Servicios</option>
								<option value="Comercial">Comercial</option>
								<option value="Otra">Otra</option>
							</Field>
							<Error name="tipoPyme" />
						</div>
						<label>Materia Prima que requiere</label>
						<Field name="matPrima" component="select" multiple>
							<option value="matprima01">Materia Prima para Panaderia, Pasteleria y bollerias</option>
							<option value="matprima02">Consumibles para restaurantes</option>
							<option value="matprima03">Materia prima para empresas de costura</option>
							<option value="cmatprima04">Materia Prima para empresas agroindustriales</option>
							<option value="matprima05">Materia Prima para empresas de limpieza</option>
						</Field>
						<Error name="matPrima" />
					</Wizard.Page>
					<Wizard.Page
					// validate={(values) => {
					//   const errors = {};
					//   if (!values.toppings) {
					//     errors.toppings = "Required";
					//   } else if (values.toppings.length < 2) {
					//     errors.toppings = "Choose more";
					//   }
					//   return errors;
					// }}
					>
						<div>
							<label>Quiere ser contactado por otras empresas</label>
							<Field name="econtacto" component="input" type="checkbox" />
						</div>
					</Wizard.Page>
					<Wizard.Page
					// validate={(values) => {
					//   const errors = {};
					//   if (!values.direccion) {
					//     errors.direccion = "Required";
					//   }
					//   return errors;
					// }}
					>
						<div>
							<label>Quiere recibir ofertas de otros tipos de pyme</label>
							<div>
								<label>
									<Field
										name="otroContact"
										component="input"
										type="radio"
										value="Servicios Financieros"
									/>{" "}
									Servicios Financieros
								</label>
								<label>
									<Field
										name="otroContact"
										component="input"
										type="radio"
										value="Consumibles de oficina"
									/>{" "}
									Consumibles de oficina
								</label>
								<label>
									<Field name="otroContact" component="input" type="radio" value="Transporte" />{" "}
									Transporte
								</label>
							</div>
						</div>
						{/* <div>
              <label>Dirección Exacta</label>
              <Field name="direccion" component="textarea" placeholder="Notes" />
              <Error name="direccion" />
            </div> */}
					</Wizard.Page>
				</Wizard>
				{/* </Styles> */}
			</div>
		</>
	);
}

export default NewPyme;
