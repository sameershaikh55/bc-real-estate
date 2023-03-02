import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const ReleaseTable = () => {
	const [List, setList] = useState(true);

	const [cal, setCal] = useState(7);

	const data = [
		"January 2021",
		"February 2021",
		"March 2021",
		"April 2021",
		"May 2021",
		"June 2021",
		"July 2021",
		"August 2021",
		"September 2021",
		"October 2021",
		"November 2021",
		"December 2021",
	];

	function prev() {
		if (cal >= 1) {
			setCal(cal - 1);
		}
	}

	function next() {
		if (cal <= 10) {
			setCal(cal + 1);
		}
	}

	return (
		<div className="release_table bg-white rounded-3">
			<div className="pt-3 px-4">
				<div className="d-flex justify-content-end position-relative">
					<div className="position-absolute d-flex text-center justify-content-center align-items-center mt-5 mt-md-0 w-100">
						<img onClick={prev} src={left} alt="" className="pointer" />
						<p className="fw600 mb-0 mx-2">{data[cal]}</p>
						<img onClick={next} src={right} alt="" className="pointer" />
					</div>

					<span className="btns_span bg-purple-light rounded-3">
						<button
							onClick={() => {
								setList(true);
							}}
							className={`${
								(List && "bg-purple-dark text-white") || "color1"
							} px-4 border-0 f14 rounded-3 py-1 px-4 bg-transparent`}
						>
							List
						</button>
						<button
							onClick={() => {
								setList(false);
							}}
							className={`${
								(!List && "bg-purple-dark text-white") || "color1"
							} px-4 border-0 f14 rounded-3 py-1 px-4 bg-transparent`}
						>
							Calendar
						</button>
					</span>
				</div>
			</div>
			{(List && (
				<div>
					<div className="payment_table mt-5 mt-md-0">
						<table className="table">
							<thead>
								<tr>
									<th className="color2 ps-4 fw500">Name</th>
									<th className="color2 fw500">Product Plan</th>
									<th className="color2 fw500">Type</th>
									<th className="color2 fw500">Stock</th>
									<th className="color2 fw500">Bought</th>
									<th className="color2 fw500">Schedule</th>
									<th className="color2 text-end pe-4 fw500">Password</th>
									<th className="color2 text-end pe-4 fw500">Actions</th>
								</tr>
							</thead>
							<tbody>
								{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
									return (
										<tr>
											<td className="color3 ps-4 fw400">50k Restock</td>
											<td className="color3 fw400">MoloAIO Renewa...</td>
											<td className="color3 fw400">FCFS</td>
											<td className="color3 fw400">25</td>
											<td className="color3 fw400">3</td>
											<td className="color3 fw400">25 Aug - 13:00</td>
											<td className="color3 fw400">50krestock</td>
											<td className="color3 text-end pe-4 fw400">
												<HiPencil
													fontSize="1.2rem"
													color="#8961de"
													className="pointer"
												/>
												<RiDeleteBinFill
													className="ms-2 pointer"
													fontSize="1.2rem"
													color="#8961de"
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center px-4 pb-3">
						<p className="mb-0 color2">Page 1 of 37</p>
						<div className="user_btn_container">
							<button className="border-0 color2">Previous</button>
							<button className="ms-3 border-0 text-white mt-3 mt-md-0">
								Next
							</button>
						</div>
					</div>
				</div>
			)) || (
				<div className="payment_table releaseCal container-fluid px-0 pt-4">
					{/* BODY START */}
					<table className="cal table table-bordered">
						<tbody>
							<tr>
								<td className="color3 fw500 mb-0 text-center py-2">Sun</td>
								<td className="color3 fw500 mb-0 text-center py-2">Mon</td>
								<td className="color3 fw500 mb-0 text-center py-2">Tue</td>
								<td className="color3 fw500 mb-0 text-center py-2">Wed</td>
								<td className="color3 fw500 mb-0 text-center py-2">Thu</td>
								<td className="color3 fw500 mb-0 text-center py-2">Fri</td>
								<td className="color3 fw500 mb-0 text-center py-2">Sat</td>
							</tr>
							<tr>
								<td className="body_p"></td>
								<td className="body_p">
									<div className="active f14">17:00 - 50k Resto...</div>
									<div className="active f14 mt-2">17:30 - GB MoloN...</div>
								</td>
								<td className="body_p">
									<div className="active f14">13:00 - LT Restock</div>
								</td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
							</tr>
							<tr>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p" colSpan="5">
									<div className="col2 active f14">
										00:00 - MoloAIO Renewal Restock (Raffle)
									</div>
									<div className="active f14 mt-2">
										00:00 - MoloAIO LT Restock (Raffle)
									</div>
								</td>
							</tr>
							<tr>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p">
									<div className="active f14">
										00:00 - MoloAIO Renewal Restock (Raffle)
									</div>
									<div className="active f14 mt-2">
										00:00 - MoloAIO Renewal Restock (Raffle)
									</div>
								</td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
							</tr>
							<tr>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
							</tr>
							<tr>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
								<td className="body_p"></td>
							</tr>
						</tbody>
					</table>
					{/* BODY END */}
				</div>
			)}
		</div>
	);
};

export default ReleaseTable;
