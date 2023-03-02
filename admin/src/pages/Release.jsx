import React from "react";
import ReleaseSetup from "../components/ReleaseSetup";
import ReleaseTable from "../components/ReleaseTable";
import Layout from "../layout";

const Release = () => {
	return (
		<Layout>
			<div className="container-fluid px-4 py-3">
				<div className="d-flex align-items-center bg-white rounded-3 px-4 py-4">
					<h3 className="fw600 f24 mb-1">Payment Plans</h3>
					<button className="ms-4 bg-purple-light border-0 px-3 py-1 rounded-3 color1 fw600">
						2 Plans
					</button>
				</div>

				{/* BOTTOM SECTION */}
				<div className="payment_container_upper mt-4">
					<div className="row gy-4">
						<div className="col-12 col-lg-3">
							<ReleaseSetup />
						</div>
						<div className="col-12 col-lg-9">
							<ReleaseTable />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Release;
