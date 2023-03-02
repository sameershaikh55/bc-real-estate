import React from "react";

const RecentTrans = () => {
	return (
		<div className="mt-4 bg-white rounded-3">
			<h5 className="fw600 px-4 py-4 mb-0">Recent Transactions</h5>

			<div className="recent_trans">
				<table className="table">
					<thead>
						<tr>
							<th className="color2 ps-4 fw500">Order ID</th>
							<th className="color2 fw500">Product</th>
							<th className="color2 fw500">Release</th>
							<th className="color2 fw500">Name</th>
							<th className="color2 fw500">Email</th>
							<th className="color2 fw500">Status</th>
							<th className="color2 pe-4 fw500">Date</th>
						</tr>
					</thead>
					<tbody>
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
							return (
								<tr className="">
									<td className="color3 ps-4 fw400">#J4891LAX</td>
									<td className="color3 fw400">MoloAIO Renewal Sub...</td>
									<td className="color3 fw400">50krestock</td>
									<td className="color3 fw400">John Doe</td>
									<td className="color3 fw400">johndoe@gm...</td>
									<td className="color3 fw400">
										<button className="f14 px-3 border-0">Paid</button>
									</td>
									<td className="color3 pe-4 fw400">24/08/2021</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentTrans;
