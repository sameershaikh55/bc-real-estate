import React from "react";

const ReleaseSetup = () => {
	return (
		<div className="product_setup release_setup pb-3 bg-white rounded-3">
			<h6 className="px-4 pt-3 color2 fw500">Release Setup</h6>
			<hr />
			<div className="px-4">
				<label htmlFor="Name">Name</label>
				<br />
				<input type="text" placeholder="50k Restock" />
				<br />
				<br />
				<label htmlFor="Description">Product Plan</label>
				<br />
				<select name="" id="">
					<option value="MoloAIO Renewal Subscription">
						MoloAIO Renewal Subscription
					</option>
					<option value="MoloAIO Renewal Subscription">
						MoloAIO Renewal Subscription
					</option>
				</select>
				<br />
				<br />
				<label htmlFor="Type">Type</label>
				<br />
				<select name="" id="">
					<option value="FCFS">FCFS</option>
					<option value="FCFS">FCFS</option>
				</select>
				<br />
				<br />
				<div>
					<label htmlFor="Initial Fee">Stock</label>
					<br />
					<input className="w-100" type="text" name="" id="" placeholder="25" />
				</div>
				<br />
				<div>
					<label htmlFor="Schedule (Date/Time)" className="mb-2">
						Schedule (Date/Time)
					</label>
					<label className="container_check ms-2">
						<input type="checkbox" />
						<span className="checkmark"></span>
					</label>
					<br />
					<div className="row">
						<div className="col-6 d-flex">
							<select className="first_s" name="" id="">
								<option value="25">25</option>
								<option value="25">25</option>
							</select>{" "}
							<select className="second_s" name="" id="">
								<option value="03">03</option>
								<option value="03">03</option>
							</select>{" "}
						</div>
						<div className="col-6 d-flex">
							<select className="first_s" name="" id="">
								<option value="17">17</option>
								<option value="17">17</option>
							</select>{" "}
							<select className="second_s" name="" id="">
								<option value="00">00</option>
								<option value="00">00</option>
							</select>{" "}
						</div>
					</div>
				</div>
				<br />
				<div>
					<label htmlFor="Price">Password</label>
					<br />
					<input
						className="w-100"
						type="text"
						name=""
						id=""
						placeholder="50krestock"
					/>
				</div>
				<br />
				<div>
					<label htmlFor="Frequency">Bot Protection </label>
					<label className="container_check ms-2">
						<input type="checkbox" />
						<span className="checkmark"></span>
					</label>
				</div>
				<hr />
				<div>
					<button className="border-0 text-white w-100">Create</button>
				</div>
			</div>
		</div>
	);
};

export default ReleaseSetup;
