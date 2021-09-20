import React, { useState } from "react";

function MobileToolbar({
	refs,
	clearFilters,
	filterExpenses,
	isFiltered,
	calculateTotal,
	filtered,
	expenses,
}) {
	const { fromDateRef, toDateRef, minRef, maxRef, merchantFilterRef } = refs;
	const [isExpanded, setExpanded] = useState(false);
	const expanded = isExpanded ? "expanded" : "collapsed";

	return (
		<div className="mobile-toolbar p-3">
			<div className="toolbar-top">
				<div className="total">
					<h3>Total amount spent:</h3>
					<h3>
						<strong>
							$
							{isFiltered ? calculateTotal(filtered) : calculateTotal(expenses)}
						</strong>
					</h3>
				</div>

				<div className="filters">
					<button className="button" onClick={() => setExpanded(!isExpanded)}>
						Filters
					</button>
				</div>
			</div>

			<div className={`expandable ${expanded}`}>
				<form className="pt-4">
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

				<div className="toolbar-top">
					<button className="button mt-3" onClick={() => setExpanded(false)}>
						Close
					</button>

					<p className="has-text-info" onClick={clearFilters}>
						Clear filters
					</p>
				</div>
			</div>
		</div>
	);
}

export default MobileToolbar;
