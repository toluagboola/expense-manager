import React from "react";
import "../css/SideBar.css";

const SideBar = ({ refs, clearFilters, filterExpenses }) => {
	const { fromDateRef, toDateRef, minRef, maxRef, merchantFilterRef } = refs;

	return (
		<div className={`sidebar is-2 pt-4 px-5`}>
			<div className="sidebar-top">
				<h3>Filter expenses</h3>
				<p className="has-text-info clear-filters" onClick={clearFilters}>
					Clear filters
				</p>
			</div>

			<hr />
			<form className="pt-1">
				<div className="field">
					<div className="control">
						<label className="label">From</label>
						<input
							className="input"
							name="start"
							type="date"
							ref={fromDateRef}
							onChange={filterExpenses}
						/>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<label className="label">To</label>
						<input
							className="input"
							type="date"
							name="end"
							ref={toDateRef}
							onChange={filterExpenses}
						/>
					</div>
				</div>

				<div className="field is-horizontal">
					<div className="field-body">
						<div className="field">
							<div className="control">
								<label className="label">Min</label>
								<input
									className="input"
									type="number"
									name="min"
									ref={minRef}
									onChange={filterExpenses}
								/>
							</div>
						</div>

						<div className="field">
							<div className="control">
								<label className="label">Max</label>
								<input
									className="input"
									type="number"
									name="max"
									ref={maxRef}
									onChange={filterExpenses}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="field">
					<div className="control">
						<label className="label">Merchant</label>
						<div className="select is-fullwidth">
							<select
								name="merchant"
								ref={merchantFilterRef}
								onChange={filterExpenses}
							>
								<option value=""></option>
								<option value="Office supplies">Office supplies</option>
								<option value="Parking">Parking</option>
								<option value="Rental car">Rental car</option>
								<option value="Electronics">Electronics</option>
								<option value="Ride sharing">Ride sharing</option>
								<option value="Shuttle">Shuttle</option>
								<option value="Hotel">Hotel</option>
								<option value="Breakfast">Breakfast</option>
								<option value="Taxi">Taxi</option>
								<option value="Airline">Airline</option>
								<option value="Restaurant">Restaurant</option>
								<option value="Fast food">Fast food</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SideBar;
