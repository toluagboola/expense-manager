import React, { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
	const [isActive, setActive] = useState(false);

	return (
		<nav className="navbar is-fixed-top px-5 py-2">
			<div className="navbar-brand">
				<div className="navbar-item">
					<h3 className="is-uppercase has-text-white">Expense Manager</h3>
				</div>

				<div
					role="button"
					className={`navbar-burger ${isActive ? "is-active" : ""}`}
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					onClick={() => setActive(!isActive)}
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div>
			</div>

			<div className="navbar-end">
				<div
					className={`navbar-menu ${isActive ? "is-active" : ""}`}
					id="nav-menu"
				>
					<div className="navbar-item">
						<div className="buttons">
							<a
								href="https://github.com/toluagboola/expense-manager"
								className="button is-light is-uppercase"
							>
								GitHub
							</a>
							<a href="/login" className="button is-info is-uppercase">
								Log out
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
