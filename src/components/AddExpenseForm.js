import React from "react";

function AddExpenseForm({ isActive, setDialog, refs, addExpense }) {
	const { merchantRef, totalRef, dateRef, commentRef } = refs;

	return (
		<div id="modal-dialog" className={`modal ${isActive} modal-fx-fadeInScale`}>
			<div className="modal-background" onClick={() => setDialog(false)}></div>

			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title mb-0">Add Expense</p>
					<button
						className="delete"
						aria-label="close"
						onClick={() => setDialog(false)}
					></button>
				</header>

				<section className="modal-card-body">
					<form>
						<div className="field">
							<label className="label">Merchant</label>
							<div className="control">
								<div className="select">
									<select name="merchant" ref={merchantRef}>
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

						<div className="field">
							<div className="control">
								<label className="label">Total</label>
								<input className="input" type="number" ref={totalRef} />
							</div>
						</div>

						<div className="field">
							<div className="control">
								<label className="label">Date</label>
								<input className="input" type="date" ref={dateRef} />
							</div>
						</div>

						<div className="field">
							<div className="control">
								<label className="label">Comments</label>
								<textarea
									name="notes"
									ref={commentRef}
									className="textarea"
									placeholder="Why are you tracking this event?"
									required
								></textarea>
							</div>
						</div>
					</form>
				</section>

				<footer className="modal-card-foot">
					<button
						className="button has-pink-bg"
						type="submit"
						onClick={addExpense}
					>
						Save
					</button>
					<button className="button" onClick={() => setDialog(false)}>
						Cancel
					</button>
				</footer>
			</div>
		</div>
	);
}

export default AddExpenseForm;
