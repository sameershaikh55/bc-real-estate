import React from "react";
import upload from "../assets/upload.svg";
import uploadD from "../assets/uploadD.svg";

export const AccountSettings = () => {
	return (
		<div className="forms pb-3 bg-white rounded-3">
			<h6 className="px-4 pt-3 color2 fw500">Account Settings</h6>
			<hr />
			<div className="px-4">
				<label htmlFor="Name">Account Name</label>
				<br />
				<input type="text" placeholder="MoloAIO" />
				<br />
				<br />
				<label htmlFor="Name">Website URL</label>
				<br />
				<input type="text" placeholder="https://moloaio.com" />
				<br />
				<br />
				<label htmlFor="Name">Domain</label>
				<br />
				<input type="text" placeholder="moloaio.reformdash.com" />
				<br />
				<br />
			</div>
		</div>
	);
};

// Display Settings
export const DisplaySettings = ({ setMode, mode, localMode }) => {
	return (
		<div className="forms pb-3 bg-white rounded-3">
			<h6 className="px-4 pt-3 color2 fw500">Display Settings</h6>
			<hr />
			<div className="px-4">
				<label htmlFor="Name">Logo</label>
				<br />
				<div className="upload-btn-wrapper mt-1 pointer">
					{(!localMode && <img src={upload} alt="" className="pointer" />) ||
						(localMode == 1 && (
							<img src={upload} alt="" className="pointer" />
						)) || <img src={uploadD} alt="" className="pointer" />}

					<input type="file" name="myfile" className="pointer" />
				</div>
				<br />
				<br />
				<label htmlFor="Description">Background Style</label>
				<br />
				<select name="" id="">
					<option value="NFT Edition">NFT Edition</option>
					<option value="NFT Edition">NFT Edition</option>
				</select>
				<br />
				<br />
				<label htmlFor="Type">Primary Colour</label>
				<br />
				<div className="position-relative">
					<input type="text" placeholder="#8961DE" className="ps-5" />
					<svg
						className="position-absolute abs"
						width="15"
						height="19"
						viewBox="0 0 15 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.49427 0.75C3.4259 0.75 0.0625 4.00315 0.0625 8.02804C0.0625 10.0562 0.799236 11.9392 2.01419 13.5351C3.34208 15.2956 4.99289 16.8294 6.86164 18.0334C7.32839 18.3326 7.7122 18.3116 8.13748 18.0334C9.99564 16.8294 11.6465 15.2956 12.9858 13.5351C14.1999 11.9392 14.9375 10.0562 14.9375 8.02804C14.9375 4.00315 11.5741 0.75 7.49427 0.75Z"
							fill="#8961DE"
						/>
					</svg>
				</div>
				<br />
				<div>
					<label htmlFor="Initial Fee">Secondary Colour</label>
					<br />
					<div className="position-relative">
						<input
							className="w-100 ps-5"
							type="text"
							name=""
							id=""
							placeholder="#BB9BFF"
						/>
						<svg
							className="position-absolute abs"
							width="15"
							height="19"
							viewBox="0 0 15 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.49427 0.75C3.4259 0.75 0.0625 4.00315 0.0625 8.02804C0.0625 10.0562 0.799236 11.9392 2.01419 13.5351C3.34208 15.2956 4.99289 16.8294 6.86164 18.0334C7.32839 18.3326 7.7122 18.3116 8.13748 18.0334C9.99564 16.8294 11.6465 15.2956 12.9858 13.5351C14.1999 11.9392 14.9375 10.0562 14.9375 8.02804C14.9375 4.00315 11.5741 0.75 7.49427 0.75Z"
								fill="#BB9BFF"
							/>
						</svg>
					</div>
				</div>
				<br />
				<div>
					<label htmlFor="Trial Days">Dashboard Appearance</label>
					<br />
					<span className="">
						<button
							onClick={() => {
								setMode(1);
								localStorage.setItem("modeLocal", 1);
							}}
							className={`${
								(!localMode && "bg-purple-dark text-white") ||
								(localMode == 1 && "bg-purple-dark text-white") ||
								"bg-purple-light color1"
							} px-4 border-0`}
						>
							Light
						</button>
						<button
							onClick={() => {
								setMode(2);
								localStorage.setItem("modeLocal", 2);
							}}
							className={`${
								(localMode == 2 && "bg-purple-dark text-white") ||
								"bg-purple-light color1"
							} px-4 border-0`}
						>
							Dark
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

// Stripe Information
export const StripeInformation = () => {
	return (
		<div className="forms pb-3 bg-white rounded-3">
			<h6 className="px-4 pt-3 color2 fw500">Stripe Information</h6>
			<hr />
			<div className="px-4">
				<label htmlFor="Name">Stripe API Key</label>
				<br />
				<input type="text" placeholder="juskAD_73_LoYTRm19" />
			</div>
		</div>
	);
};

// Useful Links
export const UsefulLinks = () => {
	return (
		<div className="forms pb-3 bg-white rounded-3">
			<h6 className="px-4 pt-3 color2 fw500">Useful Links</h6>
			<hr />
			<div className="px-4">
				<label htmlFor="Name">Download URL</label>
				<br />
				<input type="text" placeholder="https://moloaio-download.zip" />
				<br />
				<br />
				<label htmlFor="Name">Guide URL</label>
				<br />
				<input type="text" placeholder="https://moloaio-guides.com" />
			</div>
		</div>
	);
};

// Useful Links
export const LicenseTransferSettings = () => {
	return (
		<div className="forms pb-3 bg-white rounded-3">
			<h6 className="px-4 pt-3 color2 fw500">License Transfer Settings</h6>
			<hr />
			<div className="px-4">
				<label htmlFor="Frequency">Enable License Transfers</label>
				<label className="container_check ms-2">
					<input type="checkbox" />
					<span className="checkmark"></span>
				</label>
				<br />
				<br />
				<div className="row gy-4 gx-3">
					<div className="col-7 col-lg-12 col-xl-7">
						<label htmlFor="Frequency">Transfer Cooldown</label>
						<div className="d-flex w-100">
							<div className="d-flex w-100">
								<input className="w-50 inp1" type="text" name="" id="" />
								<select className="w-100 inp2" name="" id="">
									<option value="month">month</option>
									<option value="month">month</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
