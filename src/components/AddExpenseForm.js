import React from "react";

function AddExpenseForm({ isActive, dialog, closeModal, refs, addExpense }) {
	const { merchantRef, totalRef, dateRef, commentRef } = refs;
	const { eventID, isBeingEdited } = dialog;

	return (
		<div id="modal-dialog" className={`modal ${isActive} modal-fx-fadeInScale`}>
			<div className="modal-background" onClick={closeModal}></div>

			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title mb-0">
						{isBeingEdited ? "Edit expense" : "Add expense"}
					</p>
					<button
						className="delete"
						aria-label="close"
						onClick={closeModal}
					></button>
				</header>

				<section className="modal-card-body">
					<form>
						<div className="field">
							<label className="label">Merchant</label>
							<div className="control">
								<div className="select is-fullwidth">
									<select name="merchant" ref={merchantRef}>
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
									name="comments"
									ref={commentRef}
									className="textarea"
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
						onClick={() => addExpense(eventID)}
					>
						Save
					</button>
					<button className="button" onClick={closeModal}>
						Cancel
					</button>
				</footer>
			</div>
		</div>
	);
}

export default AddExpenseForm;
