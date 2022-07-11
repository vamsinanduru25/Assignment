import React from "react";

function List({ data }) {
	return (
		<div className="container">
			<table className="table align-middle mb-0 bg-white">
				<tbody>
					{data.map((d) => (
						<tr key={d.id}>
							<td>
								<div className="d-flex align-items-center">
									<img
										src={d.photo}
										alt="sdks"
										style={{ width: "45px", height: "45px" }}
									/>
									<div className="ms-3">
										<p className="fw-bold mb-1">{d.name}</p>
									</div>
								</div>
							</td>
							<td>
								<p className="fw-normal mb-1">{d.music}</p>
								<p className="text-muted mb-0">{d.localtion}</p>
							</td>
							<td>
								<span className="badge badge-success rounded-pill d-inline">
									Active
								</span>
							</td>
							<td> ${d.price}</td>
							<td>
								<button
									type="button"
									className="btn btn-primary btn-sm btn-rounded"
								>
									Add To Cart
								</button>
								<div
									type="button"
									className="btn btn-primary btn-sm btn-rounded ms-5"
								>
									Make an Offer
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default List;
