import React from "react";
import { Trash, Edit2 } from "react-feather";

function Table({ data, setDialog, refs, deleteExpense }) {
	const { merchantRef, totalRef, dateRef, commentRef } = refs;

	const handleClick = (item) => {
		setDialog({
			eventID: item.id,
			isBeingEdited: true,
			isModalActive: true,
		});

		merchantRef.current.value = item.merchant;
		totalRef.current.value = item.total;
		dateRef.current.value = item.date;
		commentRef.current.value = item.comment;
	};

	return (
		<table className="table is-striped is-fullwidth">
			<thead>
				<tr>
					<td>
						<strong>Date</strong>
					</td>
					<td>
						<strong>Merchant</strong>
					</td>
					<td>
						<strong>Total</strong>
					</td>
					<td>
						<strong>Comment</strong>
					</td>
					<td>
						<strong>Action</strong>
					</td>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.date}</td>
						<td>{item.merchant}</td>
						<td>${item.total}</td>
						<td>{item.comment}</td>
						<td>
							<Trash
								className="delete-expense pr-1"
								onClick={() => deleteExpense(item.id)}
							/>
							<Edit2
								className="edit-expense pl-1"
								onClick={() => handleClick(item)}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
