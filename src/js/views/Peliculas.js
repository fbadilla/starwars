import React, { Component } from "react";
import { Context } from "../store/appContext";

export class Peliculas extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							if (store.infoPeliculas.length > 0) {
								return store.infoPeliculas.map((pelicula, i) => {
									return (
										<div className="col-sm-3" key={i}>
											<div className="card">
												<img
													src="https://i1.wp.com/gamerfocus.co/wp-content/uploads/2015/07/Star-Wars.png"
													className="card-img-top"
													alt="..."
												/>
												<div className="card-body">
													<h5 className="card-title">{pelicula.title}</h5>
													<p className="card-text">{pelicula.director}</p>
													<a className="btn btn-primary">{pelicula.director}</a>
												</div>
											</div>
										</div>
									);
								});
							} else {
								return "";
							}
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
