import React from "react";

function Table({ data, setDialog, refs }) {
	const { merchantRef, totalRef, dateRef, commentRef } = refs;

	return (
		<table className="table is-striped is-fullwidth">
			<thead>
				<tr>
					<td>Date</td>
					<td>Merchant</td>
					<td>Total</td>
					<td>Comment</td>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr
						key={item.id}
						onClick={() => {
							setDialog({
								eventID: item.id,
								isBeingEdited: true,
								isModalActive: true,
							});

							merchantRef.current.value = item.merchant;
							totalRef.current.value = item.total;
							dateRef.current.value = item.date;
							commentRef.current.value = item.comment;
						}}
					>
						<td>{item.date}</td>
						<td>{item.merchant}</td>
						<td>${item.total}</td>
						<td>{item.comment}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
