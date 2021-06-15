import React from "react";
import PropTypes from "prop-types";

//create your first component
function Ficha(props) {
	return (
		<div className="card">
			<img src={props.imgficha} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.tituloficha}</h5>
				<p className="card-text">{props.textoficha}</p>
				<a href="" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
Ficha.propTypes = {
	imgficha: PropTypes.string,
	tituloficha: PropTypes.string,
	textoficha: PropTypes.string
};

function Misfichas() {
	return (
		<div className="card-deck">
			<Ficha
				imgficha="https://i.pinimg.com/originals/44/94/f5/4494f57b7a0c06bf50e6aa25fbb122fd.jpg"
				tituloficha="Card title"
				textoficha="Let's build this landing page using React Function Components. The idea is to split Bootstrap components into different function Components, they'll be all imported in the main component Home.jsx"
			/>
			<Ficha
				imgficha="https://i.pinimg.com/originals/44/94/f5/4494f57b7a0c06bf50e6aa25fbb122fd.jpg"
				tituloficha="Card title"
				textoficha="Let's build this landing page using React Function Components. The idea is to split Bootstrap components into different function Components, they'll be all imported in the main component Home.jsx"
			/>
			<Ficha
				imgficha="https://i.pinimg.com/originals/44/94/f5/4494f57b7a0c06bf50e6aa25fbb122fd.jpg"
				tituloficha="Card title"
				textoficha="Let's build this landing page using React Function Components. The idea is to split Bootstrap components into different function Components, they'll be all imported in the main component Home.jsx"
			/>
			<Ficha
				imgficha="https://i.pinimg.com/originals/44/94/f5/4494f57b7a0c06bf50e6aa25fbb122fd.jpg"
				tituloficha="Card title"
				textoficha="Let's build this landing page using React Function Components. The idea is to split Bootstrap components into different function Components, they'll be all imported in the main component Home.jsx"
			/>
		</div>
	);
}
export function Home() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container d-flex">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<ul className="nav justify-content-end ml-auto">
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">A Warmn Welcome!</h1>
					<p className="lead">
						This is my first page in React Javascript.
					</p>

					<p>
						For the first time ever, Bootstrap has its own open
						source SVG icon library, designed to work best with our
						components and documentation.
					</p>
					<a className="btn btn-primary btn-lg" href="" role="button">
						Call in action!!
					</a>
				</div>
				<Misfichas />
			</div>
			<footer className="page-footer font-small bg-dark ">
				<div className="footer-copyright text-center py-3 text-white">
					Copyright © Alejandra Del Rio 2021
				</div>
			</footer>
		</>
	);
}
