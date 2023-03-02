import React from "react";
import i1 from "../assets/states/i1.svg";
import i2 from "../assets/states/i2.svg";
import i3 from "../assets/states/i3.svg";
import i4 from "../assets/states/i4.svg";

const States = () => {
	const data = [
		{
			i: i1,
			t: "19,870",
			d: "Total Sales",
		},
		{
			i: i2,
			t: "$298,050.00",
			d: "Total Revenue",
		},
		{
			i: i2,
			t: "$10,476.00",
			d: "Upcoming Revenue",
		},
		{
			i: i3,
			t: "1,324",
			d: "Users",
		},
		{
			i: i4,
			t: "2",
			d: "Upcoming Cancels",
		},
	];

	return (
		<div className="states_container">
			{data.map((prev, i) => {
				return (
					<div className="state" key={i}>
						<div className="inner_state py-3 px-3 d-flex justify-content-between align-items-center">
							<img src={prev.i} alt="" />
							<div className="d-flex flex-column align-items-end">
								<h6 className="mb-1 f18 fw600">{prev.t}</h6>
								<p className="mb-0 color1 f14 text-end mx-content">{prev.d}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default States;
