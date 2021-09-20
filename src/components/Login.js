import React from "react";
import "../css/Login.css";

function Login() {
	return (
		<section className="hero login is-fullheight has-text-white">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-5-tablet is-4-desktop is-3-widescreen">
							<h2 className="title has-text-white login-header">
								Expense Manager
							</h2>
							<form>
								<div className="field">
									<div className="control">
										<label className="label login-label has-text-light">
											Username
										</label>
										<input className="input" type="text" value="demo" />
									</div>
								</div>

								<div className="field">
									<div className="control">
										<label className="label login-label has-text-light">
											Password
										</label>
										<input className="input" type="password" value="demo" />
									</div>
								</div>
							</form>
							<a href="/">
								<button className="button is-info my-4">Login</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
