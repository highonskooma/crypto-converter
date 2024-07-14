import React from "react";
import '../styles/Footer.css';
import Form from 'react-bootstrap/Form';

function Footer() {
	return (
		<footer className="custom-footer">
			<div className="footer-content-wrapper">
				<hr />	
				<div className="footer-content">
					<div className="logo-section">
						<img
							src="/logo/uphold-logo-green.png"
							width="90"
							height="30"
							alt="Uphold Logo"
						/>
					</div>
					<div className="links-section">
						<div className="link-column">
							<h4>Products</h4>
							<ul>
								<li>Consumers</li>
								<li>Business</li>
								<li>Partners</li>
							</ul>
						</div>
						<div className="link-column">
							<h4>Company</h4>
							<ul>
								<li>About</li>
								<li>Careers</li>
								<li>Press</li>
								<li>Blog</li>
							</ul>
						</div>
						<div className="link-column">
							<h4>Help</h4>
							<ul>
								<li>FAQ & Support</li>
								<li>Platform Status</li>
								<li>Criptionary</li>
								<li>Pricing</li>
								<li>Legal</li>
							</ul>
						</div>
						<div className="link-column">
							<h4>Social</h4>
							<ul>
								<li>Facebook</li>
								<li>Twitter</li>
								<li>Instagram</li>
								<li>LinkedIn</li>
							</ul>
						</div>
					</div>
					<div className="language-appstore-section">
						<div className="app-store-section">
							<img
								src="/icons/appstore.svg"
								width="20"
								height="30"
								className="d-inline-block align-top"
								alt="Logo"
							/>
							<img
								src="/icons/playstore.svg"
								width="20"
								height="30"
								className="d-inline-block align-top"
								alt="Logo"
							/>
						</div>
						<div className="language-selector">
							<Form.Select name="language" id="language" >
								<option value="en">English</option>
								<option value="es">Español</option>
							</Form.Select>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="company-info">
					<p>Uphold Europe Limited, Reg No. 09281410, Registered Office: Interchange Triangle, Chalk Farm Road, London, England, NW1 8AB</p>
					<div className="line2">
						<p>© Uphold, Inc. 2018. All Rights Reserved.</p>
						<ul>
							<li>Agreements</li>
							<li>Privacy & Data Policy</li>
							<li>Cookie Policy</li>
						</ul>
					</div>
				</div>
				<div className="qr-code">
				<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 37 37" width="40"><path d="       M 7 0 l 1 0 0 1 -1 0 Z  M 9 0 l 1 0 0 1 -1 0 Z M 10 0 l 1 0 0 1 -1 0 Z  M 12 0 l 1 0 0 1 -1 0 Z M 13 0 l 1 0 0 1 -1 0 Z M 14 0 l 1 0 0 1 -1 0 Z M 15 0 l 1 0 0 1 -1 0 Z   M 18 0 l 1 0 0 1 -1 0 Z    M 22 0 l 1 0 0 1 -1 0 Z M 23 0 l 1 0 0 1 -1 0 Z M 24 0 l 1 0 0 1 -1 0 Z    M 28 0 l 1 0 0 1 -1 0 Z M 29 0 l 1 0 0 1 -1 0 Z         M 1 1 l 1 0 0 1 -1 0 Z M 2 1 l 1 0 0 1 -1 0 Z M 3 1 l 1 0 0 1 -1 0 Z M 4 1 l 1 0 0 1 -1 0 Z M 5 1 l 1 0 0 1 -1 0 Z  M 7 1 l 1 0 0 1 -1 0 Z   M 10 1 l 1 0 0 1 -1 0 Z M 11 1 l 1 0 0 1 -1 0 Z    M 15 1 l 1 0 0 1 -1 0 Z M 16 1 l 1 0 0 1 -1 0 Z    M 20 1 l 1 0 0 1 -1 0 Z    M 24 1 l 1 0 0 1 -1 0 Z M 25 1 l 1 0 0 1 -1 0 Z    M 29 1 l 1 0 0 1 -1 0 Z  M 31 1 l 1 0 0 1 -1 0 Z M 32 1 l 1 0 0 1 -1 0 Z M 33 1 l 1 0 0 1 -1 0 Z M 34 1 l 1 0 0 1 -1 0 Z M 35 1 l 1 0 0 1 -1 0 Z   M 1 2 l 1 0 0 1 -1 0 Z    M 5 2 l 1 0 0 1 -1 0 Z  M 7 2 l 1 0 0 1 -1 0 Z M 8 2 l 1 0 0 1 -1 0 Z M 9 2 l 1 0 0 1 -1 0 Z   M 12 2 l 1 0 0 1 -1 0 Z M 13 2 l 1 0 0 1 -1 0 Z M 14 2 l 1 0 0 1 -1 0 Z  M 16 2 l 1 0 0 1 -1 0 Z   M 19 2 l 1 0 0 1 -1 0 Z M 20 2 l 1 0 0 1 -1 0 Z   M 23 2 l 1 0 0 1 -1 0 Z M 24 2 l 1 0 0 1 -1 0 Z M 25 2 l 1 0 0 1 -1 0 Z M 26 2 l 1 0 0 1 -1 0 Z  M 28 2 l 1 0 0 1 -1 0 Z M 29 2 l 1 0 0 1 -1 0 Z  M 31 2 l 1 0 0 1 -1 0 Z    M 35 2 l 1 0 0 1 -1 0 Z   M 1 3 l 1 0 0 1 -1 0 Z    M 5 3 l 1 0 0 1 -1 0 Z  M 7 3 l 1 0 0 1 -1 0 Z   M 10 3 l 1 0 0 1 -1 0 Z M 11 3 l 1 0 0 1 -1 0 Z M 12 3 l 1 0 0 1 -1 0 Z M 13 3 l 1 0 0 1 -1 0 Z   M 16 3 l 1 0 0 1 -1 0 Z M 17 3 l 1 0 0 1 -1 0 Z M 18 3 l 1 0 0 1 -1 0 Z M 19 3 l 1 0 0 1 -1 0 Z  M 21 3 l 1 0 0 1 -1 0 Z M 22 3 l 1 0 0 1 -1 0 Z  M 24 3 l 1 0 0 1 -1 0 Z M 25 3 l 1 0 0 1 -1 0 Z  M 27 3 l 1 0 0 1 -1 0 Z M 28 3 l 1 0 0 1 -1 0 Z M 29 3 l 1 0 0 1 -1 0 Z  M 31 3 l 1 0 0 1 -1 0 Z    M 35 3 l 1 0 0 1 -1 0 Z   M 1 4 l 1 0 0 1 -1 0 Z    M 5 4 l 1 0 0 1 -1 0 Z  M 7 4 l 1 0 0 1 -1 0 Z     M 12 4 l 1 0 0 1 -1 0 Z  M 14 4 l 1 0 0 1 -1 0 Z M 15 4 l 1 0 0 1 -1 0 Z  M 17 4 l 1 0 0 1 -1 0 Z      M 23 4 l 1 0 0 1 -1 0 Z M 24 4 l 1 0 0 1 -1 0 Z M 25 4 l 1 0 0 1 -1 0 Z   M 28 4 l 1 0 0 1 -1 0 Z M 29 4 l 1 0 0 1 -1 0 Z  M 31 4 l 1 0 0 1 -1 0 Z    M 35 4 l 1 0 0 1 -1 0 Z   M 1 5 l 1 0 0 1 -1 0 Z M 2 5 l 1 0 0 1 -1 0 Z M 3 5 l 1 0 0 1 -1 0 Z M 4 5 l 1 0 0 1 -1 0 Z M 5 5 l 1 0 0 1 -1 0 Z  M 7 5 l 1 0 0 1 -1 0 Z  M 9 5 l 1 0 0 1 -1 0 Z    M 13 5 l 1 0 0 1 -1 0 Z M 14 5 l 1 0 0 1 -1 0 Z    M 18 5 l 1 0 0 1 -1 0 Z   M 21 5 l 1 0 0 1 -1 0 Z  M 23 5 l 1 0 0 1 -1 0 Z  M 25 5 l 1 0 0 1 -1 0 Z M 26 5 l 1 0 0 1 -1 0 Z   M 29 5 l 1 0 0 1 -1 0 Z  M 31 5 l 1 0 0 1 -1 0 Z M 32 5 l 1 0 0 1 -1 0 Z M 33 5 l 1 0 0 1 -1 0 Z M 34 5 l 1 0 0 1 -1 0 Z M 35 5 l 1 0 0 1 -1 0 Z         M 7 6 l 1 0 0 1 -1 0 Z  M 9 6 l 1 0 0 1 -1 0 Z  M 11 6 l 1 0 0 1 -1 0 Z  M 13 6 l 1 0 0 1 -1 0 Z  M 15 6 l 1 0 0 1 -1 0 Z  M 17 6 l 1 0 0 1 -1 0 Z  M 19 6 l 1 0 0 1 -1 0 Z  M 21 6 l 1 0 0 1 -1 0 Z  M 23 6 l 1 0 0 1 -1 0 Z  M 25 6 l 1 0 0 1 -1 0 Z  M 27 6 l 1 0 0 1 -1 0 Z  M 29 6 l 1 0 0 1 -1 0 Z        M 0 7 l 1 0 0 1 -1 0 Z M 1 7 l 1 0 0 1 -1 0 Z M 2 7 l 1 0 0 1 -1 0 Z M 3 7 l 1 0 0 1 -1 0 Z M 4 7 l 1 0 0 1 -1 0 Z M 5 7 l 1 0 0 1 -1 0 Z M 6 7 l 1 0 0 1 -1 0 Z M 7 7 l 1 0 0 1 -1 0 Z M 8 7 l 1 0 0 1 -1 0 Z M 9 7 l 1 0 0 1 -1 0 Z     M 14 7 l 1 0 0 1 -1 0 Z M 15 7 l 1 0 0 1 -1 0 Z M 16 7 l 1 0 0 1 -1 0 Z      M 22 7 l 1 0 0 1 -1 0 Z  M 24 7 l 1 0 0 1 -1 0 Z  M 26 7 l 1 0 0 1 -1 0 Z M 27 7 l 1 0 0 1 -1 0 Z M 28 7 l 1 0 0 1 -1 0 Z M 29 7 l 1 0 0 1 -1 0 Z M 30 7 l 1 0 0 1 -1 0 Z M 31 7 l 1 0 0 1 -1 0 Z M 32 7 l 1 0 0 1 -1 0 Z M 33 7 l 1 0 0 1 -1 0 Z M 34 7 l 1 0 0 1 -1 0 Z M 35 7 l 1 0 0 1 -1 0 Z M 36 7 l 1 0 0 1 -1 0 Z M 0 8 l 1 0 0 1 -1 0 Z M 1 8 l 1 0 0 1 -1 0 Z M 2 8 l 1 0 0 1 -1 0 Z  M 4 8 l 1 0 0 1 -1 0 Z M 5 8 l 1 0 0 1 -1 0 Z  M 7 8 l 1 0 0 1 -1 0 Z M 8 8 l 1 0 0 1 -1 0 Z    M 12 8 l 1 0 0 1 -1 0 Z   M 15 8 l 1 0 0 1 -1 0 Z M 16 8 l 1 0 0 1 -1 0 Z M 17 8 l 1 0 0 1 -1 0 Z M 18 8 l 1 0 0 1 -1 0 Z M 19 8 l 1 0 0 1 -1 0 Z      M 25 8 l 1 0 0 1 -1 0 Z   M 28 8 l 1 0 0 1 -1 0 Z M 29 8 l 1 0 0 1 -1 0 Z M 30 8 l 1 0 0 1 -1 0 Z    M 34 8 l 1 0 0 1 -1 0 Z   M 0 9 l 1 0 0 1 -1 0 Z  M 2 9 l 1 0 0 1 -1 0 Z   M 5 9 l 1 0 0 1 -1 0 Z M 6 9 l 1 0 0 1 -1 0 Z  M 8 9 l 1 0 0 1 -1 0 Z M 9 9 l 1 0 0 1 -1 0 Z    M 13 9 l 1 0 0 1 -1 0 Z  M 15 9 l 1 0 0 1 -1 0 Z M 16 9 l 1 0 0 1 -1 0 Z  M 18 9 l 1 0 0 1 -1 0 Z  M 20 9 l 1 0 0 1 -1 0 Z M 21 9 l 1 0 0 1 -1 0 Z M 22 9 l 1 0 0 1 -1 0 Z M 23 9 l 1 0 0 1 -1 0 Z M 24 9 l 1 0 0 1 -1 0 Z M 25 9 l 1 0 0 1 -1 0 Z M 26 9 l 1 0 0 1 -1 0 Z  M 28 9 l 1 0 0 1 -1 0 Z  M 30 9 l 1 0 0 1 -1 0 Z M 31 9 l 1 0 0 1 -1 0 Z  M 33 9 l 1 0 0 1 -1 0 Z M 34 9 l 1 0 0 1 -1 0 Z   M 0 10 l 1 0 0 1 -1 0 Z         M 9 10 l 1 0 0 1 -1 0 Z      M 15 10 l 1 0 0 1 -1 0 Z    M 19 10 l 1 0 0 1 -1 0 Z M 20 10 l 1 0 0 1 -1 0 Z M 21 10 l 1 0 0 1 -1 0 Z   M 24 10 l 1 0 0 1 -1 0 Z M 25 10 l 1 0 0 1 -1 0 Z M 26 10 l 1 0 0 1 -1 0 Z M 27 10 l 1 0 0 1 -1 0 Z  M 29 10 l 1 0 0 1 -1 0 Z   M 32 10 l 1 0 0 1 -1 0 Z M 33 10 l 1 0 0 1 -1 0 Z M 34 10 l 1 0 0 1 -1 0 Z M 35 10 l 1 0 0 1 -1 0 Z    M 2 11 l 1 0 0 1 -1 0 Z M 3 11 l 1 0 0 1 -1 0 Z   M 6 11 l 1 0 0 1 -1 0 Z   M 9 11 l 1 0 0 1 -1 0 Z    M 13 11 l 1 0 0 1 -1 0 Z M 14 11 l 1 0 0 1 -1 0 Z M 15 11 l 1 0 0 1 -1 0 Z  M 17 11 l 1 0 0 1 -1 0 Z M 18 11 l 1 0 0 1 -1 0 Z  M 20 11 l 1 0 0 1 -1 0 Z M 21 11 l 1 0 0 1 -1 0 Z  M 23 11 l 1 0 0 1 -1 0 Z   M 26 11 l 1 0 0 1 -1 0 Z  M 28 11 l 1 0 0 1 -1 0 Z M 29 11 l 1 0 0 1 -1 0 Z M 30 11 l 1 0 0 1 -1 0 Z M 31 11 l 1 0 0 1 -1 0 Z M 32 11 l 1 0 0 1 -1 0 Z M 33 11 l 1 0 0 1 -1 0 Z M 34 11 l 1 0 0 1 -1 0 Z  M 36 11 l 1 0 0 1 -1 0 Z M 0 12 l 1 0 0 1 -1 0 Z M 1 12 l 1 0 0 1 -1 0 Z   M 4 12 l 1 0 0 1 -1 0 Z M 5 12 l 1 0 0 1 -1 0 Z   M 8 12 l 1 0 0 1 -1 0 Z M 9 12 l 1 0 0 1 -1 0 Z M 10 12 l 1 0 0 1 -1 0 Z M 11 12 l 1 0 0 1 -1 0 Z    M 15 12 l 1 0 0 1 -1 0 Z       M 22 12 l 1 0 0 1 -1 0 Z  M 24 12 l 1 0 0 1 -1 0 Z  M 26 12 l 1 0 0 1 -1 0 Z M 27 12 l 1 0 0 1 -1 0 Z     M 32 12 l 1 0 0 1 -1 0 Z  M 34 12 l 1 0 0 1 -1 0 Z    M 1 13 l 1 0 0 1 -1 0 Z     M 6 13 l 1 0 0 1 -1 0 Z M 7 13 l 1 0 0 1 -1 0 Z M 8 13 l 1 0 0 1 -1 0 Z   M 11 13 l 1 0 0 1 -1 0 Z    M 15 13 l 1 0 0 1 -1 0 Z M 16 13 l 1 0 0 1 -1 0 Z M 17 13 l 1 0 0 1 -1 0 Z M 18 13 l 1 0 0 1 -1 0 Z  M 20 13 l 1 0 0 1 -1 0 Z M 21 13 l 1 0 0 1 -1 0 Z M 22 13 l 1 0 0 1 -1 0 Z M 23 13 l 1 0 0 1 -1 0 Z    M 27 13 l 1 0 0 1 -1 0 Z M 28 13 l 1 0 0 1 -1 0 Z M 29 13 l 1 0 0 1 -1 0 Z   M 32 13 l 1 0 0 1 -1 0 Z  M 34 13 l 1 0 0 1 -1 0 Z    M 1 14 l 1 0 0 1 -1 0 Z M 2 14 l 1 0 0 1 -1 0 Z     M 7 14 l 1 0 0 1 -1 0 Z M 8 14 l 1 0 0 1 -1 0 Z     M 13 14 l 1 0 0 1 -1 0 Z   M 16 14 l 1 0 0 1 -1 0 Z M 17 14 l 1 0 0 1 -1 0 Z   M 20 14 l 1 0 0 1 -1 0 Z M 21 14 l 1 0 0 1 -1 0 Z  M 23 14 l 1 0 0 1 -1 0 Z M 24 14 l 1 0 0 1 -1 0 Z  M 26 14 l 1 0 0 1 -1 0 Z M 27 14 l 1 0 0 1 -1 0 Z M 28 14 l 1 0 0 1 -1 0 Z M 29 14 l 1 0 0 1 -1 0 Z  M 31 14 l 1 0 0 1 -1 0 Z  M 33 14 l 1 0 0 1 -1 0 Z    M 0 15 l 1 0 0 1 -1 0 Z  M 2 15 l 1 0 0 1 -1 0 Z M 3 15 l 1 0 0 1 -1 0 Z M 4 15 l 1 0 0 1 -1 0 Z  M 6 15 l 1 0 0 1 -1 0 Z    M 10 15 l 1 0 0 1 -1 0 Z M 11 15 l 1 0 0 1 -1 0 Z    M 15 15 l 1 0 0 1 -1 0 Z     M 20 15 l 1 0 0 1 -1 0 Z M 21 15 l 1 0 0 1 -1 0 Z M 22 15 l 1 0 0 1 -1 0 Z     M 27 15 l 1 0 0 1 -1 0 Z  M 29 15 l 1 0 0 1 -1 0 Z M 30 15 l 1 0 0 1 -1 0 Z M 31 15 l 1 0 0 1 -1 0 Z M 32 15 l 1 0 0 1 -1 0 Z M 33 15 l 1 0 0 1 -1 0 Z M 34 15 l 1 0 0 1 -1 0 Z M 35 15 l 1 0 0 1 -1 0 Z M 36 15 l 1 0 0 1 -1 0 Z M 0 16 l 1 0 0 1 -1 0 Z    M 4 16 l 1 0 0 1 -1 0 Z M 5 16 l 1 0 0 1 -1 0 Z   M 8 16 l 1 0 0 1 -1 0 Z M 9 16 l 1 0 0 1 -1 0 Z M 10 16 l 1 0 0 1 -1 0 Z    M 14 16 l 1 0 0 1 -1 0 Z  M 16 16 l 1 0 0 1 -1 0 Z M 17 16 l 1 0 0 1 -1 0 Z M 18 16 l 1 0 0 1 -1 0 Z M 19 16 l 1 0 0 1 -1 0 Z   M 22 16 l 1 0 0 1 -1 0 Z M 23 16 l 1 0 0 1 -1 0 Z  M 25 16 l 1 0 0 1 -1 0 Z   M 28 16 l 1 0 0 1 -1 0 Z    M 32 16 l 1 0 0 1 -1 0 Z      M 1 17 l 1 0 0 1 -1 0 Z M 2 17 l 1 0 0 1 -1 0 Z  M 4 17 l 1 0 0 1 -1 0 Z  M 6 17 l 1 0 0 1 -1 0 Z     M 11 17 l 1 0 0 1 -1 0 Z  M 13 17 l 1 0 0 1 -1 0 Z  M 15 17 l 1 0 0 1 -1 0 Z     M 20 17 l 1 0 0 1 -1 0 Z M 21 17 l 1 0 0 1 -1 0 Z    M 25 17 l 1 0 0 1 -1 0 Z  M 27 17 l 1 0 0 1 -1 0 Z  M 29 17 l 1 0 0 1 -1 0 Z  M 31 17 l 1 0 0 1 -1 0 Z  M 33 17 l 1 0 0 1 -1 0 Z  M 35 17 l 1 0 0 1 -1 0 Z   M 1 18 l 1 0 0 1 -1 0 Z  M 3 18 l 1 0 0 1 -1 0 Z M 4 18 l 1 0 0 1 -1 0 Z   M 7 18 l 1 0 0 1 -1 0 Z   M 10 18 l 1 0 0 1 -1 0 Z  M 12 18 l 1 0 0 1 -1 0 Z M 13 18 l 1 0 0 1 -1 0 Z   M 16 18 l 1 0 0 1 -1 0 Z     M 21 18 l 1 0 0 1 -1 0 Z  M 23 18 l 1 0 0 1 -1 0 Z    M 27 18 l 1 0 0 1 -1 0 Z M 28 18 l 1 0 0 1 -1 0 Z   M 31 18 l 1 0 0 1 -1 0 Z M 32 18 l 1 0 0 1 -1 0 Z M 33 18 l 1 0 0 1 -1 0 Z M 34 18 l 1 0 0 1 -1 0 Z      M 3 19 l 1 0 0 1 -1 0 Z   M 6 19 l 1 0 0 1 -1 0 Z  M 8 19 l 1 0 0 1 -1 0 Z M 9 19 l 1 0 0 1 -1 0 Z    M 13 19 l 1 0 0 1 -1 0 Z M 14 19 l 1 0 0 1 -1 0 Z M 15 19 l 1 0 0 1 -1 0 Z M 16 19 l 1 0 0 1 -1 0 Z   M 19 19 l 1 0 0 1 -1 0 Z M 20 19 l 1 0 0 1 -1 0 Z M 21 19 l 1 0 0 1 -1 0 Z M 22 19 l 1 0 0 1 -1 0 Z M 23 19 l 1 0 0 1 -1 0 Z  M 25 19 l 1 0 0 1 -1 0 Z M 26 19 l 1 0 0 1 -1 0 Z       M 33 19 l 1 0 0 1 -1 0 Z   M 36 19 l 1 0 0 1 -1 0 Z M 0 20 l 1 0 0 1 -1 0 Z M 1 20 l 1 0 0 1 -1 0 Z M 2 20 l 1 0 0 1 -1 0 Z     M 7 20 l 1 0 0 1 -1 0 Z M 8 20 l 1 0 0 1 -1 0 Z M 9 20 l 1 0 0 1 -1 0 Z M 10 20 l 1 0 0 1 -1 0 Z   M 13 20 l 1 0 0 1 -1 0 Z M 14 20 l 1 0 0 1 -1 0 Z  M 16 20 l 1 0 0 1 -1 0 Z  M 18 20 l 1 0 0 1 -1 0 Z M 19 20 l 1 0 0 1 -1 0 Z M 20 20 l 1 0 0 1 -1 0 Z   M 23 20 l 1 0 0 1 -1 0 Z      M 29 20 l 1 0 0 1 -1 0 Z    M 33 20 l 1 0 0 1 -1 0 Z M 34 20 l 1 0 0 1 -1 0 Z M 35 20 l 1 0 0 1 -1 0 Z   M 1 21 l 1 0 0 1 -1 0 Z M 2 21 l 1 0 0 1 -1 0 Z    M 6 21 l 1 0 0 1 -1 0 Z M 7 21 l 1 0 0 1 -1 0 Z M 8 21 l 1 0 0 1 -1 0 Z M 9 21 l 1 0 0 1 -1 0 Z M 10 21 l 1 0 0 1 -1 0 Z    M 14 21 l 1 0 0 1 -1 0 Z  M 16 21 l 1 0 0 1 -1 0 Z     M 21 21 l 1 0 0 1 -1 0 Z     M 26 21 l 1 0 0 1 -1 0 Z M 27 21 l 1 0 0 1 -1 0 Z M 28 21 l 1 0 0 1 -1 0 Z   M 31 21 l 1 0 0 1 -1 0 Z M 32 21 l 1 0 0 1 -1 0 Z M 33 21 l 1 0 0 1 -1 0 Z  M 35 21 l 1 0 0 1 -1 0 Z   M 1 22 l 1 0 0 1 -1 0 Z M 2 22 l 1 0 0 1 -1 0 Z M 3 22 l 1 0 0 1 -1 0 Z M 4 22 l 1 0 0 1 -1 0 Z    M 8 22 l 1 0 0 1 -1 0 Z  M 10 22 l 1 0 0 1 -1 0 Z     M 15 22 l 1 0 0 1 -1 0 Z M 16 22 l 1 0 0 1 -1 0 Z M 17 22 l 1 0 0 1 -1 0 Z M 18 22 l 1 0 0 1 -1 0 Z  M 20 22 l 1 0 0 1 -1 0 Z M 21 22 l 1 0 0 1 -1 0 Z M 22 22 l 1 0 0 1 -1 0 Z  M 24 22 l 1 0 0 1 -1 0 Z   M 27 22 l 1 0 0 1 -1 0 Z M 28 22 l 1 0 0 1 -1 0 Z M 29 22 l 1 0 0 1 -1 0 Z      M 35 22 l 1 0 0 1 -1 0 Z      M 4 23 l 1 0 0 1 -1 0 Z M 5 23 l 1 0 0 1 -1 0 Z M 6 23 l 1 0 0 1 -1 0 Z M 7 23 l 1 0 0 1 -1 0 Z  M 9 23 l 1 0 0 1 -1 0 Z  M 11 23 l 1 0 0 1 -1 0 Z M 12 23 l 1 0 0 1 -1 0 Z M 13 23 l 1 0 0 1 -1 0 Z  M 15 23 l 1 0 0 1 -1 0 Z M 16 23 l 1 0 0 1 -1 0 Z M 17 23 l 1 0 0 1 -1 0 Z M 18 23 l 1 0 0 1 -1 0 Z M 19 23 l 1 0 0 1 -1 0 Z     M 24 23 l 1 0 0 1 -1 0 Z  M 26 23 l 1 0 0 1 -1 0 Z M 27 23 l 1 0 0 1 -1 0 Z M 28 23 l 1 0 0 1 -1 0 Z  M 30 23 l 1 0 0 1 -1 0 Z M 31 23 l 1 0 0 1 -1 0 Z  M 33 23 l 1 0 0 1 -1 0 Z M 34 23 l 1 0 0 1 -1 0 Z M 35 23 l 1 0 0 1 -1 0 Z      M 4 24 l 1 0 0 1 -1 0 Z M 5 24 l 1 0 0 1 -1 0 Z     M 10 24 l 1 0 0 1 -1 0 Z     M 15 24 l 1 0 0 1 -1 0 Z  M 17 24 l 1 0 0 1 -1 0 Z M 18 24 l 1 0 0 1 -1 0 Z M 19 24 l 1 0 0 1 -1 0 Z  M 21 24 l 1 0 0 1 -1 0 Z   M 24 24 l 1 0 0 1 -1 0 Z M 25 24 l 1 0 0 1 -1 0 Z    M 29 24 l 1 0 0 1 -1 0 Z  M 31 24 l 1 0 0 1 -1 0 Z      M 0 25 l 1 0 0 1 -1 0 Z M 1 25 l 1 0 0 1 -1 0 Z  M 3 25 l 1 0 0 1 -1 0 Z M 4 25 l 1 0 0 1 -1 0 Z M 5 25 l 1 0 0 1 -1 0 Z M 6 25 l 1 0 0 1 -1 0 Z M 7 25 l 1 0 0 1 -1 0 Z  M 9 25 l 1 0 0 1 -1 0 Z M 10 25 l 1 0 0 1 -1 0 Z  M 12 25 l 1 0 0 1 -1 0 Z       M 19 25 l 1 0 0 1 -1 0 Z  M 21 25 l 1 0 0 1 -1 0 Z M 22 25 l 1 0 0 1 -1 0 Z  M 24 25 l 1 0 0 1 -1 0 Z M 25 25 l 1 0 0 1 -1 0 Z   M 28 25 l 1 0 0 1 -1 0 Z M 29 25 l 1 0 0 1 -1 0 Z M 30 25 l 1 0 0 1 -1 0 Z M 31 25 l 1 0 0 1 -1 0 Z M 32 25 l 1 0 0 1 -1 0 Z      M 1 26 l 1 0 0 1 -1 0 Z      M 7 26 l 1 0 0 1 -1 0 Z  M 9 26 l 1 0 0 1 -1 0 Z M 10 26 l 1 0 0 1 -1 0 Z   M 13 26 l 1 0 0 1 -1 0 Z M 14 26 l 1 0 0 1 -1 0 Z  M 16 26 l 1 0 0 1 -1 0 Z M 17 26 l 1 0 0 1 -1 0 Z  M 19 26 l 1 0 0 1 -1 0 Z M 20 26 l 1 0 0 1 -1 0 Z M 21 26 l 1 0 0 1 -1 0 Z M 22 26 l 1 0 0 1 -1 0 Z  M 24 26 l 1 0 0 1 -1 0 Z  M 26 26 l 1 0 0 1 -1 0 Z      M 32 26 l 1 0 0 1 -1 0 Z M 33 26 l 1 0 0 1 -1 0 Z M 34 26 l 1 0 0 1 -1 0 Z M 35 26 l 1 0 0 1 -1 0 Z  M 0 27 l 1 0 0 1 -1 0 Z  M 2 27 l 1 0 0 1 -1 0 Z  M 4 27 l 1 0 0 1 -1 0 Z  M 6 27 l 1 0 0 1 -1 0 Z M 7 27 l 1 0 0 1 -1 0 Z    M 11 27 l 1 0 0 1 -1 0 Z M 12 27 l 1 0 0 1 -1 0 Z  M 14 27 l 1 0 0 1 -1 0 Z M 15 27 l 1 0 0 1 -1 0 Z    M 19 27 l 1 0 0 1 -1 0 Z M 20 27 l 1 0 0 1 -1 0 Z    M 24 27 l 1 0 0 1 -1 0 Z   M 27 27 l 1 0 0 1 -1 0 Z  M 29 27 l 1 0 0 1 -1 0 Z  M 31 27 l 1 0 0 1 -1 0 Z M 32 27 l 1 0 0 1 -1 0 Z M 33 27 l 1 0 0 1 -1 0 Z M 34 27 l 1 0 0 1 -1 0 Z M 35 27 l 1 0 0 1 -1 0 Z M 36 27 l 1 0 0 1 -1 0 Z      M 5 28 l 1 0 0 1 -1 0 Z  M 7 28 l 1 0 0 1 -1 0 Z  M 9 28 l 1 0 0 1 -1 0 Z M 10 28 l 1 0 0 1 -1 0 Z M 11 28 l 1 0 0 1 -1 0 Z  M 13 28 l 1 0 0 1 -1 0 Z M 14 28 l 1 0 0 1 -1 0 Z  M 16 28 l 1 0 0 1 -1 0 Z M 17 28 l 1 0 0 1 -1 0 Z M 18 28 l 1 0 0 1 -1 0 Z  M 20 28 l 1 0 0 1 -1 0 Z  M 22 28 l 1 0 0 1 -1 0 Z M 23 28 l 1 0 0 1 -1 0 Z M 24 28 l 1 0 0 1 -1 0 Z M 25 28 l 1 0 0 1 -1 0 Z M 26 28 l 1 0 0 1 -1 0 Z          M 36 28 l 1 0 0 1 -1 0 Z M 0 29 l 1 0 0 1 -1 0 Z M 1 29 l 1 0 0 1 -1 0 Z M 2 29 l 1 0 0 1 -1 0 Z M 3 29 l 1 0 0 1 -1 0 Z M 4 29 l 1 0 0 1 -1 0 Z M 5 29 l 1 0 0 1 -1 0 Z M 6 29 l 1 0 0 1 -1 0 Z M 7 29 l 1 0 0 1 -1 0 Z      M 13 29 l 1 0 0 1 -1 0 Z  M 15 29 l 1 0 0 1 -1 0 Z M 16 29 l 1 0 0 1 -1 0 Z  M 18 29 l 1 0 0 1 -1 0 Z M 19 29 l 1 0 0 1 -1 0 Z M 20 29 l 1 0 0 1 -1 0 Z     M 25 29 l 1 0 0 1 -1 0 Z    M 29 29 l 1 0 0 1 -1 0 Z M 30 29 l 1 0 0 1 -1 0 Z M 31 29 l 1 0 0 1 -1 0 Z  M 33 29 l 1 0 0 1 -1 0 Z M 34 29 l 1 0 0 1 -1 0 Z M 35 29 l 1 0 0 1 -1 0 Z         M 7 30 l 1 0 0 1 -1 0 Z M 8 30 l 1 0 0 1 -1 0 Z M 9 30 l 1 0 0 1 -1 0 Z  M 11 30 l 1 0 0 1 -1 0 Z    M 15 30 l 1 0 0 1 -1 0 Z M 16 30 l 1 0 0 1 -1 0 Z M 17 30 l 1 0 0 1 -1 0 Z   M 20 30 l 1 0 0 1 -1 0 Z M 21 30 l 1 0 0 1 -1 0 Z  M 23 30 l 1 0 0 1 -1 0 Z   M 26 30 l 1 0 0 1 -1 0 Z   M 29 30 l 1 0 0 1 -1 0 Z  M 31 30 l 1 0 0 1 -1 0 Z  M 33 30 l 1 0 0 1 -1 0 Z     M 1 31 l 1 0 0 1 -1 0 Z M 2 31 l 1 0 0 1 -1 0 Z M 3 31 l 1 0 0 1 -1 0 Z M 4 31 l 1 0 0 1 -1 0 Z M 5 31 l 1 0 0 1 -1 0 Z  M 7 31 l 1 0 0 1 -1 0 Z M 8 31 l 1 0 0 1 -1 0 Z M 9 31 l 1 0 0 1 -1 0 Z   M 12 31 l 1 0 0 1 -1 0 Z M 13 31 l 1 0 0 1 -1 0 Z M 14 31 l 1 0 0 1 -1 0 Z M 15 31 l 1 0 0 1 -1 0 Z M 16 31 l 1 0 0 1 -1 0 Z       M 23 31 l 1 0 0 1 -1 0 Z M 24 31 l 1 0 0 1 -1 0 Z M 25 31 l 1 0 0 1 -1 0 Z M 26 31 l 1 0 0 1 -1 0 Z   M 29 31 l 1 0 0 1 -1 0 Z M 30 31 l 1 0 0 1 -1 0 Z M 31 31 l 1 0 0 1 -1 0 Z  M 33 31 l 1 0 0 1 -1 0 Z  M 35 31 l 1 0 0 1 -1 0 Z M 36 31 l 1 0 0 1 -1 0 Z  M 1 32 l 1 0 0 1 -1 0 Z    M 5 32 l 1 0 0 1 -1 0 Z  M 7 32 l 1 0 0 1 -1 0 Z M 8 32 l 1 0 0 1 -1 0 Z   M 11 32 l 1 0 0 1 -1 0 Z  M 13 32 l 1 0 0 1 -1 0 Z M 14 32 l 1 0 0 1 -1 0 Z  M 16 32 l 1 0 0 1 -1 0 Z   M 19 32 l 1 0 0 1 -1 0 Z  M 21 32 l 1 0 0 1 -1 0 Z M 22 32 l 1 0 0 1 -1 0 Z M 23 32 l 1 0 0 1 -1 0 Z    M 27 32 l 1 0 0 1 -1 0 Z       M 34 32 l 1 0 0 1 -1 0 Z M 35 32 l 1 0 0 1 -1 0 Z M 36 32 l 1 0 0 1 -1 0 Z  M 1 33 l 1 0 0 1 -1 0 Z    M 5 33 l 1 0 0 1 -1 0 Z  M 7 33 l 1 0 0 1 -1 0 Z    M 11 33 l 1 0 0 1 -1 0 Z     M 16 33 l 1 0 0 1 -1 0 Z  M 18 33 l 1 0 0 1 -1 0 Z M 19 33 l 1 0 0 1 -1 0 Z M 20 33 l 1 0 0 1 -1 0 Z  M 22 33 l 1 0 0 1 -1 0 Z    M 26 33 l 1 0 0 1 -1 0 Z M 27 33 l 1 0 0 1 -1 0 Z M 28 33 l 1 0 0 1 -1 0 Z  M 30 33 l 1 0 0 1 -1 0 Z   M 33 33 l 1 0 0 1 -1 0 Z     M 1 34 l 1 0 0 1 -1 0 Z    M 5 34 l 1 0 0 1 -1 0 Z  M 7 34 l 1 0 0 1 -1 0 Z M 8 34 l 1 0 0 1 -1 0 Z M 9 34 l 1 0 0 1 -1 0 Z  M 11 34 l 1 0 0 1 -1 0 Z   M 14 34 l 1 0 0 1 -1 0 Z   M 17 34 l 1 0 0 1 -1 0 Z M 18 34 l 1 0 0 1 -1 0 Z M 19 34 l 1 0 0 1 -1 0 Z  M 21 34 l 1 0 0 1 -1 0 Z    M 25 34 l 1 0 0 1 -1 0 Z M 26 34 l 1 0 0 1 -1 0 Z  M 28 34 l 1 0 0 1 -1 0 Z  M 30 34 l 1 0 0 1 -1 0 Z M 31 34 l 1 0 0 1 -1 0 Z    M 35 34 l 1 0 0 1 -1 0 Z   M 1 35 l 1 0 0 1 -1 0 Z M 2 35 l 1 0 0 1 -1 0 Z M 3 35 l 1 0 0 1 -1 0 Z M 4 35 l 1 0 0 1 -1 0 Z M 5 35 l 1 0 0 1 -1 0 Z  M 7 35 l 1 0 0 1 -1 0 Z M 8 35 l 1 0 0 1 -1 0 Z  M 10 35 l 1 0 0 1 -1 0 Z    M 14 35 l 1 0 0 1 -1 0 Z M 15 35 l 1 0 0 1 -1 0 Z  M 17 35 l 1 0 0 1 -1 0 Z M 18 35 l 1 0 0 1 -1 0 Z M 19 35 l 1 0 0 1 -1 0 Z M 20 35 l 1 0 0 1 -1 0 Z M 21 35 l 1 0 0 1 -1 0 Z            M 33 35 l 1 0 0 1 -1 0 Z M 34 35 l 1 0 0 1 -1 0 Z M 35 35 l 1 0 0 1 -1 0 Z M 36 35 l 1 0 0 1 -1 0 Z        M 7 36 l 1 0 0 1 -1 0 Z M 8 36 l 1 0 0 1 -1 0 Z M 9 36 l 1 0 0 1 -1 0 Z M 10 36 l 1 0 0 1 -1 0 Z   M 13 36 l 1 0 0 1 -1 0 Z M 14 36 l 1 0 0 1 -1 0 Z  M 16 36 l 1 0 0 1 -1 0 Z   M 19 36 l 1 0 0 1 -1 0 Z M 20 36 l 1 0 0 1 -1 0 Z M 21 36 l 1 0 0 1 -1 0 Z M 22 36 l 1 0 0 1 -1 0 Z  M 24 36 l 1 0 0 1 -1 0 Z  M 26 36 l 1 0 0 1 -1 0 Z   M 29 36 l 1 0 0 1 -1 0 Z    M 33 36 l 1 0 0 1 -1 0 Z M 34 36 l 1 0 0 1 -1 0 Z  " fill="transparent"></path><path d="M 0 0 l 1 0 0 1 -1 0 Z M 1 0 l 1 0 0 1 -1 0 Z M 2 0 l 1 0 0 1 -1 0 Z M 3 0 l 1 0 0 1 -1 0 Z M 4 0 l 1 0 0 1 -1 0 Z M 5 0 l 1 0 0 1 -1 0 Z M 6 0 l 1 0 0 1 -1 0 Z  M 8 0 l 1 0 0 1 -1 0 Z   M 11 0 l 1 0 0 1 -1 0 Z     M 16 0 l 1 0 0 1 -1 0 Z M 17 0 l 1 0 0 1 -1 0 Z  M 19 0 l 1 0 0 1 -1 0 Z M 20 0 l 1 0 0 1 -1 0 Z M 21 0 l 1 0 0 1 -1 0 Z    M 25 0 l 1 0 0 1 -1 0 Z M 26 0 l 1 0 0 1 -1 0 Z M 27 0 l 1 0 0 1 -1 0 Z   M 30 0 l 1 0 0 1 -1 0 Z M 31 0 l 1 0 0 1 -1 0 Z M 32 0 l 1 0 0 1 -1 0 Z M 33 0 l 1 0 0 1 -1 0 Z M 34 0 l 1 0 0 1 -1 0 Z M 35 0 l 1 0 0 1 -1 0 Z M 36 0 l 1 0 0 1 -1 0 Z M 0 1 l 1 0 0 1 -1 0 Z      M 6 1 l 1 0 0 1 -1 0 Z  M 8 1 l 1 0 0 1 -1 0 Z M 9 1 l 1 0 0 1 -1 0 Z   M 12 1 l 1 0 0 1 -1 0 Z M 13 1 l 1 0 0 1 -1 0 Z M 14 1 l 1 0 0 1 -1 0 Z   M 17 1 l 1 0 0 1 -1 0 Z M 18 1 l 1 0 0 1 -1 0 Z M 19 1 l 1 0 0 1 -1 0 Z  M 21 1 l 1 0 0 1 -1 0 Z M 22 1 l 1 0 0 1 -1 0 Z M 23 1 l 1 0 0 1 -1 0 Z   M 26 1 l 1 0 0 1 -1 0 Z M 27 1 l 1 0 0 1 -1 0 Z M 28 1 l 1 0 0 1 -1 0 Z  M 30 1 l 1 0 0 1 -1 0 Z      M 36 1 l 1 0 0 1 -1 0 Z M 0 2 l 1 0 0 1 -1 0 Z  M 2 2 l 1 0 0 1 -1 0 Z M 3 2 l 1 0 0 1 -1 0 Z M 4 2 l 1 0 0 1 -1 0 Z  M 6 2 l 1 0 0 1 -1 0 Z    M 10 2 l 1 0 0 1 -1 0 Z M 11 2 l 1 0 0 1 -1 0 Z    M 15 2 l 1 0 0 1 -1 0 Z  M 17 2 l 1 0 0 1 -1 0 Z M 18 2 l 1 0 0 1 -1 0 Z   M 21 2 l 1 0 0 1 -1 0 Z M 22 2 l 1 0 0 1 -1 0 Z     M 27 2 l 1 0 0 1 -1 0 Z   M 30 2 l 1 0 0 1 -1 0 Z  M 32 2 l 1 0 0 1 -1 0 Z M 33 2 l 1 0 0 1 -1 0 Z M 34 2 l 1 0 0 1 -1 0 Z  M 36 2 l 1 0 0 1 -1 0 Z M 0 3 l 1 0 0 1 -1 0 Z  M 2 3 l 1 0 0 1 -1 0 Z M 3 3 l 1 0 0 1 -1 0 Z M 4 3 l 1 0 0 1 -1 0 Z  M 6 3 l 1 0 0 1 -1 0 Z  M 8 3 l 1 0 0 1 -1 0 Z M 9 3 l 1 0 0 1 -1 0 Z     M 14 3 l 1 0 0 1 -1 0 Z M 15 3 l 1 0 0 1 -1 0 Z     M 20 3 l 1 0 0 1 -1 0 Z   M 23 3 l 1 0 0 1 -1 0 Z   M 26 3 l 1 0 0 1 -1 0 Z    M 30 3 l 1 0 0 1 -1 0 Z  M 32 3 l 1 0 0 1 -1 0 Z M 33 3 l 1 0 0 1 -1 0 Z M 34 3 l 1 0 0 1 -1 0 Z  M 36 3 l 1 0 0 1 -1 0 Z M 0 4 l 1 0 0 1 -1 0 Z  M 2 4 l 1 0 0 1 -1 0 Z M 3 4 l 1 0 0 1 -1 0 Z M 4 4 l 1 0 0 1 -1 0 Z  M 6 4 l 1 0 0 1 -1 0 Z  M 8 4 l 1 0 0 1 -1 0 Z M 9 4 l 1 0 0 1 -1 0 Z M 10 4 l 1 0 0 1 -1 0 Z M 11 4 l 1 0 0 1 -1 0 Z  M 13 4 l 1 0 0 1 -1 0 Z   M 16 4 l 1 0 0 1 -1 0 Z  M 18 4 l 1 0 0 1 -1 0 Z M 19 4 l 1 0 0 1 -1 0 Z M 20 4 l 1 0 0 1 -1 0 Z M 21 4 l 1 0 0 1 -1 0 Z M 22 4 l 1 0 0 1 -1 0 Z    M 26 4 l 1 0 0 1 -1 0 Z M 27 4 l 1 0 0 1 -1 0 Z   M 30 4 l 1 0 0 1 -1 0 Z  M 32 4 l 1 0 0 1 -1 0 Z M 33 4 l 1 0 0 1 -1 0 Z M 34 4 l 1 0 0 1 -1 0 Z  M 36 4 l 1 0 0 1 -1 0 Z M 0 5 l 1 0 0 1 -1 0 Z      M 6 5 l 1 0 0 1 -1 0 Z  M 8 5 l 1 0 0 1 -1 0 Z  M 10 5 l 1 0 0 1 -1 0 Z M 11 5 l 1 0 0 1 -1 0 Z M 12 5 l 1 0 0 1 -1 0 Z   M 15 5 l 1 0 0 1 -1 0 Z M 16 5 l 1 0 0 1 -1 0 Z M 17 5 l 1 0 0 1 -1 0 Z  M 19 5 l 1 0 0 1 -1 0 Z M 20 5 l 1 0 0 1 -1 0 Z  M 22 5 l 1 0 0 1 -1 0 Z  M 24 5 l 1 0 0 1 -1 0 Z   M 27 5 l 1 0 0 1 -1 0 Z M 28 5 l 1 0 0 1 -1 0 Z  M 30 5 l 1 0 0 1 -1 0 Z      M 36 5 l 1 0 0 1 -1 0 Z M 0 6 l 1 0 0 1 -1 0 Z M 1 6 l 1 0 0 1 -1 0 Z M 2 6 l 1 0 0 1 -1 0 Z M 3 6 l 1 0 0 1 -1 0 Z M 4 6 l 1 0 0 1 -1 0 Z M 5 6 l 1 0 0 1 -1 0 Z M 6 6 l 1 0 0 1 -1 0 Z  M 8 6 l 1 0 0 1 -1 0 Z  M 10 6 l 1 0 0 1 -1 0 Z  M 12 6 l 1 0 0 1 -1 0 Z  M 14 6 l 1 0 0 1 -1 0 Z  M 16 6 l 1 0 0 1 -1 0 Z  M 18 6 l 1 0 0 1 -1 0 Z  M 20 6 l 1 0 0 1 -1 0 Z  M 22 6 l 1 0 0 1 -1 0 Z  M 24 6 l 1 0 0 1 -1 0 Z  M 26 6 l 1 0 0 1 -1 0 Z  M 28 6 l 1 0 0 1 -1 0 Z  M 30 6 l 1 0 0 1 -1 0 Z M 31 6 l 1 0 0 1 -1 0 Z M 32 6 l 1 0 0 1 -1 0 Z M 33 6 l 1 0 0 1 -1 0 Z M 34 6 l 1 0 0 1 -1 0 Z M 35 6 l 1 0 0 1 -1 0 Z M 36 6 l 1 0 0 1 -1 0 Z           M 10 7 l 1 0 0 1 -1 0 Z M 11 7 l 1 0 0 1 -1 0 Z M 12 7 l 1 0 0 1 -1 0 Z M 13 7 l 1 0 0 1 -1 0 Z    M 17 7 l 1 0 0 1 -1 0 Z M 18 7 l 1 0 0 1 -1 0 Z M 19 7 l 1 0 0 1 -1 0 Z M 20 7 l 1 0 0 1 -1 0 Z M 21 7 l 1 0 0 1 -1 0 Z  M 23 7 l 1 0 0 1 -1 0 Z  M 25 7 l 1 0 0 1 -1 0 Z               M 3 8 l 1 0 0 1 -1 0 Z   M 6 8 l 1 0 0 1 -1 0 Z   M 9 8 l 1 0 0 1 -1 0 Z M 10 8 l 1 0 0 1 -1 0 Z M 11 8 l 1 0 0 1 -1 0 Z  M 13 8 l 1 0 0 1 -1 0 Z M 14 8 l 1 0 0 1 -1 0 Z      M 20 8 l 1 0 0 1 -1 0 Z M 21 8 l 1 0 0 1 -1 0 Z M 22 8 l 1 0 0 1 -1 0 Z M 23 8 l 1 0 0 1 -1 0 Z M 24 8 l 1 0 0 1 -1 0 Z  M 26 8 l 1 0 0 1 -1 0 Z M 27 8 l 1 0 0 1 -1 0 Z    M 31 8 l 1 0 0 1 -1 0 Z M 32 8 l 1 0 0 1 -1 0 Z M 33 8 l 1 0 0 1 -1 0 Z  M 35 8 l 1 0 0 1 -1 0 Z M 36 8 l 1 0 0 1 -1 0 Z  M 1 9 l 1 0 0 1 -1 0 Z  M 3 9 l 1 0 0 1 -1 0 Z M 4 9 l 1 0 0 1 -1 0 Z   M 7 9 l 1 0 0 1 -1 0 Z   M 10 9 l 1 0 0 1 -1 0 Z M 11 9 l 1 0 0 1 -1 0 Z M 12 9 l 1 0 0 1 -1 0 Z  M 14 9 l 1 0 0 1 -1 0 Z   M 17 9 l 1 0 0 1 -1 0 Z  M 19 9 l 1 0 0 1 -1 0 Z        M 27 9 l 1 0 0 1 -1 0 Z  M 29 9 l 1 0 0 1 -1 0 Z   M 32 9 l 1 0 0 1 -1 0 Z   M 35 9 l 1 0 0 1 -1 0 Z M 36 9 l 1 0 0 1 -1 0 Z  M 1 10 l 1 0 0 1 -1 0 Z M 2 10 l 1 0 0 1 -1 0 Z M 3 10 l 1 0 0 1 -1 0 Z M 4 10 l 1 0 0 1 -1 0 Z M 5 10 l 1 0 0 1 -1 0 Z M 6 10 l 1 0 0 1 -1 0 Z M 7 10 l 1 0 0 1 -1 0 Z M 8 10 l 1 0 0 1 -1 0 Z  M 10 10 l 1 0 0 1 -1 0 Z M 11 10 l 1 0 0 1 -1 0 Z M 12 10 l 1 0 0 1 -1 0 Z M 13 10 l 1 0 0 1 -1 0 Z M 14 10 l 1 0 0 1 -1 0 Z  M 16 10 l 1 0 0 1 -1 0 Z M 17 10 l 1 0 0 1 -1 0 Z M 18 10 l 1 0 0 1 -1 0 Z    M 22 10 l 1 0 0 1 -1 0 Z M 23 10 l 1 0 0 1 -1 0 Z     M 28 10 l 1 0 0 1 -1 0 Z  M 30 10 l 1 0 0 1 -1 0 Z M 31 10 l 1 0 0 1 -1 0 Z     M 36 10 l 1 0 0 1 -1 0 Z M 0 11 l 1 0 0 1 -1 0 Z M 1 11 l 1 0 0 1 -1 0 Z   M 4 11 l 1 0 0 1 -1 0 Z M 5 11 l 1 0 0 1 -1 0 Z  M 7 11 l 1 0 0 1 -1 0 Z M 8 11 l 1 0 0 1 -1 0 Z  M 10 11 l 1 0 0 1 -1 0 Z M 11 11 l 1 0 0 1 -1 0 Z M 12 11 l 1 0 0 1 -1 0 Z    M 16 11 l 1 0 0 1 -1 0 Z   M 19 11 l 1 0 0 1 -1 0 Z   M 22 11 l 1 0 0 1 -1 0 Z  M 24 11 l 1 0 0 1 -1 0 Z M 25 11 l 1 0 0 1 -1 0 Z  M 27 11 l 1 0 0 1 -1 0 Z        M 35 11 l 1 0 0 1 -1 0 Z    M 2 12 l 1 0 0 1 -1 0 Z M 3 12 l 1 0 0 1 -1 0 Z   M 6 12 l 1 0 0 1 -1 0 Z M 7 12 l 1 0 0 1 -1 0 Z     M 12 12 l 1 0 0 1 -1 0 Z M 13 12 l 1 0 0 1 -1 0 Z M 14 12 l 1 0 0 1 -1 0 Z  M 16 12 l 1 0 0 1 -1 0 Z M 17 12 l 1 0 0 1 -1 0 Z M 18 12 l 1 0 0 1 -1 0 Z M 19 12 l 1 0 0 1 -1 0 Z M 20 12 l 1 0 0 1 -1 0 Z M 21 12 l 1 0 0 1 -1 0 Z  M 23 12 l 1 0 0 1 -1 0 Z  M 25 12 l 1 0 0 1 -1 0 Z   M 28 12 l 1 0 0 1 -1 0 Z M 29 12 l 1 0 0 1 -1 0 Z M 30 12 l 1 0 0 1 -1 0 Z M 31 12 l 1 0 0 1 -1 0 Z  M 33 12 l 1 0 0 1 -1 0 Z  M 35 12 l 1 0 0 1 -1 0 Z M 36 12 l 1 0 0 1 -1 0 Z M 0 13 l 1 0 0 1 -1 0 Z  M 2 13 l 1 0 0 1 -1 0 Z M 3 13 l 1 0 0 1 -1 0 Z M 4 13 l 1 0 0 1 -1 0 Z M 5 13 l 1 0 0 1 -1 0 Z    M 9 13 l 1 0 0 1 -1 0 Z M 10 13 l 1 0 0 1 -1 0 Z  M 12 13 l 1 0 0 1 -1 0 Z M 13 13 l 1 0 0 1 -1 0 Z M 14 13 l 1 0 0 1 -1 0 Z     M 19 13 l 1 0 0 1 -1 0 Z     M 24 13 l 1 0 0 1 -1 0 Z M 25 13 l 1 0 0 1 -1 0 Z M 26 13 l 1 0 0 1 -1 0 Z    M 30 13 l 1 0 0 1 -1 0 Z M 31 13 l 1 0 0 1 -1 0 Z  M 33 13 l 1 0 0 1 -1 0 Z  M 35 13 l 1 0 0 1 -1 0 Z M 36 13 l 1 0 0 1 -1 0 Z M 0 14 l 1 0 0 1 -1 0 Z   M 3 14 l 1 0 0 1 -1 0 Z M 4 14 l 1 0 0 1 -1 0 Z M 5 14 l 1 0 0 1 -1 0 Z M 6 14 l 1 0 0 1 -1 0 Z   M 9 14 l 1 0 0 1 -1 0 Z M 10 14 l 1 0 0 1 -1 0 Z M 11 14 l 1 0 0 1 -1 0 Z M 12 14 l 1 0 0 1 -1 0 Z  M 14 14 l 1 0 0 1 -1 0 Z M 15 14 l 1 0 0 1 -1 0 Z   M 18 14 l 1 0 0 1 -1 0 Z M 19 14 l 1 0 0 1 -1 0 Z   M 22 14 l 1 0 0 1 -1 0 Z   M 25 14 l 1 0 0 1 -1 0 Z     M 30 14 l 1 0 0 1 -1 0 Z  M 32 14 l 1 0 0 1 -1 0 Z  M 34 14 l 1 0 0 1 -1 0 Z M 35 14 l 1 0 0 1 -1 0 Z M 36 14 l 1 0 0 1 -1 0 Z  M 1 15 l 1 0 0 1 -1 0 Z    M 5 15 l 1 0 0 1 -1 0 Z  M 7 15 l 1 0 0 1 -1 0 Z M 8 15 l 1 0 0 1 -1 0 Z M 9 15 l 1 0 0 1 -1 0 Z   M 12 15 l 1 0 0 1 -1 0 Z M 13 15 l 1 0 0 1 -1 0 Z M 14 15 l 1 0 0 1 -1 0 Z  M 16 15 l 1 0 0 1 -1 0 Z M 17 15 l 1 0 0 1 -1 0 Z M 18 15 l 1 0 0 1 -1 0 Z M 19 15 l 1 0 0 1 -1 0 Z    M 23 15 l 1 0 0 1 -1 0 Z M 24 15 l 1 0 0 1 -1 0 Z M 25 15 l 1 0 0 1 -1 0 Z M 26 15 l 1 0 0 1 -1 0 Z  M 28 15 l 1 0 0 1 -1 0 Z          M 1 16 l 1 0 0 1 -1 0 Z M 2 16 l 1 0 0 1 -1 0 Z M 3 16 l 1 0 0 1 -1 0 Z   M 6 16 l 1 0 0 1 -1 0 Z M 7 16 l 1 0 0 1 -1 0 Z    M 11 16 l 1 0 0 1 -1 0 Z M 12 16 l 1 0 0 1 -1 0 Z M 13 16 l 1 0 0 1 -1 0 Z  M 15 16 l 1 0 0 1 -1 0 Z     M 20 16 l 1 0 0 1 -1 0 Z M 21 16 l 1 0 0 1 -1 0 Z   M 24 16 l 1 0 0 1 -1 0 Z  M 26 16 l 1 0 0 1 -1 0 Z M 27 16 l 1 0 0 1 -1 0 Z  M 29 16 l 1 0 0 1 -1 0 Z M 30 16 l 1 0 0 1 -1 0 Z M 31 16 l 1 0 0 1 -1 0 Z  M 33 16 l 1 0 0 1 -1 0 Z M 34 16 l 1 0 0 1 -1 0 Z M 35 16 l 1 0 0 1 -1 0 Z M 36 16 l 1 0 0 1 -1 0 Z M 0 17 l 1 0 0 1 -1 0 Z   M 3 17 l 1 0 0 1 -1 0 Z  M 5 17 l 1 0 0 1 -1 0 Z  M 7 17 l 1 0 0 1 -1 0 Z M 8 17 l 1 0 0 1 -1 0 Z M 9 17 l 1 0 0 1 -1 0 Z M 10 17 l 1 0 0 1 -1 0 Z  M 12 17 l 1 0 0 1 -1 0 Z  M 14 17 l 1 0 0 1 -1 0 Z  M 16 17 l 1 0 0 1 -1 0 Z M 17 17 l 1 0 0 1 -1 0 Z M 18 17 l 1 0 0 1 -1 0 Z M 19 17 l 1 0 0 1 -1 0 Z   M 22 17 l 1 0 0 1 -1 0 Z M 23 17 l 1 0 0 1 -1 0 Z M 24 17 l 1 0 0 1 -1 0 Z  M 26 17 l 1 0 0 1 -1 0 Z  M 28 17 l 1 0 0 1 -1 0 Z  M 30 17 l 1 0 0 1 -1 0 Z  M 32 17 l 1 0 0 1 -1 0 Z  M 34 17 l 1 0 0 1 -1 0 Z  M 36 17 l 1 0 0 1 -1 0 Z M 0 18 l 1 0 0 1 -1 0 Z  M 2 18 l 1 0 0 1 -1 0 Z   M 5 18 l 1 0 0 1 -1 0 Z M 6 18 l 1 0 0 1 -1 0 Z  M 8 18 l 1 0 0 1 -1 0 Z M 9 18 l 1 0 0 1 -1 0 Z  M 11 18 l 1 0 0 1 -1 0 Z   M 14 18 l 1 0 0 1 -1 0 Z M 15 18 l 1 0 0 1 -1 0 Z  M 17 18 l 1 0 0 1 -1 0 Z M 18 18 l 1 0 0 1 -1 0 Z M 19 18 l 1 0 0 1 -1 0 Z M 20 18 l 1 0 0 1 -1 0 Z  M 22 18 l 1 0 0 1 -1 0 Z  M 24 18 l 1 0 0 1 -1 0 Z M 25 18 l 1 0 0 1 -1 0 Z M 26 18 l 1 0 0 1 -1 0 Z   M 29 18 l 1 0 0 1 -1 0 Z M 30 18 l 1 0 0 1 -1 0 Z     M 35 18 l 1 0 0 1 -1 0 Z M 36 18 l 1 0 0 1 -1 0 Z M 0 19 l 1 0 0 1 -1 0 Z M 1 19 l 1 0 0 1 -1 0 Z M 2 19 l 1 0 0 1 -1 0 Z  M 4 19 l 1 0 0 1 -1 0 Z M 5 19 l 1 0 0 1 -1 0 Z  M 7 19 l 1 0 0 1 -1 0 Z   M 10 19 l 1 0 0 1 -1 0 Z M 11 19 l 1 0 0 1 -1 0 Z M 12 19 l 1 0 0 1 -1 0 Z     M 17 19 l 1 0 0 1 -1 0 Z M 18 19 l 1 0 0 1 -1 0 Z      M 24 19 l 1 0 0 1 -1 0 Z   M 27 19 l 1 0 0 1 -1 0 Z M 28 19 l 1 0 0 1 -1 0 Z M 29 19 l 1 0 0 1 -1 0 Z M 30 19 l 1 0 0 1 -1 0 Z M 31 19 l 1 0 0 1 -1 0 Z M 32 19 l 1 0 0 1 -1 0 Z  M 34 19 l 1 0 0 1 -1 0 Z M 35 19 l 1 0 0 1 -1 0 Z     M 3 20 l 1 0 0 1 -1 0 Z M 4 20 l 1 0 0 1 -1 0 Z M 5 20 l 1 0 0 1 -1 0 Z M 6 20 l 1 0 0 1 -1 0 Z     M 11 20 l 1 0 0 1 -1 0 Z M 12 20 l 1 0 0 1 -1 0 Z   M 15 20 l 1 0 0 1 -1 0 Z  M 17 20 l 1 0 0 1 -1 0 Z    M 21 20 l 1 0 0 1 -1 0 Z M 22 20 l 1 0 0 1 -1 0 Z  M 24 20 l 1 0 0 1 -1 0 Z M 25 20 l 1 0 0 1 -1 0 Z M 26 20 l 1 0 0 1 -1 0 Z M 27 20 l 1 0 0 1 -1 0 Z M 28 20 l 1 0 0 1 -1 0 Z  M 30 20 l 1 0 0 1 -1 0 Z M 31 20 l 1 0 0 1 -1 0 Z M 32 20 l 1 0 0 1 -1 0 Z    M 36 20 l 1 0 0 1 -1 0 Z M 0 21 l 1 0 0 1 -1 0 Z   M 3 21 l 1 0 0 1 -1 0 Z M 4 21 l 1 0 0 1 -1 0 Z M 5 21 l 1 0 0 1 -1 0 Z      M 11 21 l 1 0 0 1 -1 0 Z M 12 21 l 1 0 0 1 -1 0 Z M 13 21 l 1 0 0 1 -1 0 Z  M 15 21 l 1 0 0 1 -1 0 Z  M 17 21 l 1 0 0 1 -1 0 Z M 18 21 l 1 0 0 1 -1 0 Z M 19 21 l 1 0 0 1 -1 0 Z M 20 21 l 1 0 0 1 -1 0 Z  M 22 21 l 1 0 0 1 -1 0 Z M 23 21 l 1 0 0 1 -1 0 Z M 24 21 l 1 0 0 1 -1 0 Z M 25 21 l 1 0 0 1 -1 0 Z    M 29 21 l 1 0 0 1 -1 0 Z M 30 21 l 1 0 0 1 -1 0 Z    M 34 21 l 1 0 0 1 -1 0 Z  M 36 21 l 1 0 0 1 -1 0 Z M 0 22 l 1 0 0 1 -1 0 Z     M 5 22 l 1 0 0 1 -1 0 Z M 6 22 l 1 0 0 1 -1 0 Z M 7 22 l 1 0 0 1 -1 0 Z  M 9 22 l 1 0 0 1 -1 0 Z  M 11 22 l 1 0 0 1 -1 0 Z M 12 22 l 1 0 0 1 -1 0 Z M 13 22 l 1 0 0 1 -1 0 Z M 14 22 l 1 0 0 1 -1 0 Z     M 19 22 l 1 0 0 1 -1 0 Z    M 23 22 l 1 0 0 1 -1 0 Z  M 25 22 l 1 0 0 1 -1 0 Z M 26 22 l 1 0 0 1 -1 0 Z    M 30 22 l 1 0 0 1 -1 0 Z M 31 22 l 1 0 0 1 -1 0 Z M 32 22 l 1 0 0 1 -1 0 Z M 33 22 l 1 0 0 1 -1 0 Z M 34 22 l 1 0 0 1 -1 0 Z  M 36 22 l 1 0 0 1 -1 0 Z M 0 23 l 1 0 0 1 -1 0 Z M 1 23 l 1 0 0 1 -1 0 Z M 2 23 l 1 0 0 1 -1 0 Z M 3 23 l 1 0 0 1 -1 0 Z     M 8 23 l 1 0 0 1 -1 0 Z  M 10 23 l 1 0 0 1 -1 0 Z    M 14 23 l 1 0 0 1 -1 0 Z      M 20 23 l 1 0 0 1 -1 0 Z M 21 23 l 1 0 0 1 -1 0 Z M 22 23 l 1 0 0 1 -1 0 Z M 23 23 l 1 0 0 1 -1 0 Z  M 25 23 l 1 0 0 1 -1 0 Z    M 29 23 l 1 0 0 1 -1 0 Z   M 32 23 l 1 0 0 1 -1 0 Z    M 36 23 l 1 0 0 1 -1 0 Z M 0 24 l 1 0 0 1 -1 0 Z M 1 24 l 1 0 0 1 -1 0 Z M 2 24 l 1 0 0 1 -1 0 Z M 3 24 l 1 0 0 1 -1 0 Z   M 6 24 l 1 0 0 1 -1 0 Z M 7 24 l 1 0 0 1 -1 0 Z M 8 24 l 1 0 0 1 -1 0 Z M 9 24 l 1 0 0 1 -1 0 Z  M 11 24 l 1 0 0 1 -1 0 Z M 12 24 l 1 0 0 1 -1 0 Z M 13 24 l 1 0 0 1 -1 0 Z M 14 24 l 1 0 0 1 -1 0 Z  M 16 24 l 1 0 0 1 -1 0 Z    M 20 24 l 1 0 0 1 -1 0 Z  M 22 24 l 1 0 0 1 -1 0 Z M 23 24 l 1 0 0 1 -1 0 Z   M 26 24 l 1 0 0 1 -1 0 Z M 27 24 l 1 0 0 1 -1 0 Z M 28 24 l 1 0 0 1 -1 0 Z  M 30 24 l 1 0 0 1 -1 0 Z  M 32 24 l 1 0 0 1 -1 0 Z M 33 24 l 1 0 0 1 -1 0 Z M 34 24 l 1 0 0 1 -1 0 Z M 35 24 l 1 0 0 1 -1 0 Z M 36 24 l 1 0 0 1 -1 0 Z   M 2 25 l 1 0 0 1 -1 0 Z      M 8 25 l 1 0 0 1 -1 0 Z   M 11 25 l 1 0 0 1 -1 0 Z  M 13 25 l 1 0 0 1 -1 0 Z M 14 25 l 1 0 0 1 -1 0 Z M 15 25 l 1 0 0 1 -1 0 Z M 16 25 l 1 0 0 1 -1 0 Z M 17 25 l 1 0 0 1 -1 0 Z M 18 25 l 1 0 0 1 -1 0 Z  M 20 25 l 1 0 0 1 -1 0 Z   M 23 25 l 1 0 0 1 -1 0 Z   M 26 25 l 1 0 0 1 -1 0 Z M 27 25 l 1 0 0 1 -1 0 Z      M 33 25 l 1 0 0 1 -1 0 Z M 34 25 l 1 0 0 1 -1 0 Z M 35 25 l 1 0 0 1 -1 0 Z M 36 25 l 1 0 0 1 -1 0 Z M 0 26 l 1 0 0 1 -1 0 Z  M 2 26 l 1 0 0 1 -1 0 Z M 3 26 l 1 0 0 1 -1 0 Z M 4 26 l 1 0 0 1 -1 0 Z M 5 26 l 1 0 0 1 -1 0 Z M 6 26 l 1 0 0 1 -1 0 Z  M 8 26 l 1 0 0 1 -1 0 Z   M 11 26 l 1 0 0 1 -1 0 Z M 12 26 l 1 0 0 1 -1 0 Z   M 15 26 l 1 0 0 1 -1 0 Z   M 18 26 l 1 0 0 1 -1 0 Z     M 23 26 l 1 0 0 1 -1 0 Z  M 25 26 l 1 0 0 1 -1 0 Z  M 27 26 l 1 0 0 1 -1 0 Z M 28 26 l 1 0 0 1 -1 0 Z M 29 26 l 1 0 0 1 -1 0 Z M 30 26 l 1 0 0 1 -1 0 Z M 31 26 l 1 0 0 1 -1 0 Z     M 36 26 l 1 0 0 1 -1 0 Z  M 1 27 l 1 0 0 1 -1 0 Z  M 3 27 l 1 0 0 1 -1 0 Z  M 5 27 l 1 0 0 1 -1 0 Z   M 8 27 l 1 0 0 1 -1 0 Z M 9 27 l 1 0 0 1 -1 0 Z M 10 27 l 1 0 0 1 -1 0 Z   M 13 27 l 1 0 0 1 -1 0 Z   M 16 27 l 1 0 0 1 -1 0 Z M 17 27 l 1 0 0 1 -1 0 Z M 18 27 l 1 0 0 1 -1 0 Z   M 21 27 l 1 0 0 1 -1 0 Z M 22 27 l 1 0 0 1 -1 0 Z M 23 27 l 1 0 0 1 -1 0 Z  M 25 27 l 1 0 0 1 -1 0 Z M 26 27 l 1 0 0 1 -1 0 Z  M 28 27 l 1 0 0 1 -1 0 Z  M 30 27 l 1 0 0 1 -1 0 Z       M 0 28 l 1 0 0 1 -1 0 Z M 1 28 l 1 0 0 1 -1 0 Z M 2 28 l 1 0 0 1 -1 0 Z M 3 28 l 1 0 0 1 -1 0 Z M 4 28 l 1 0 0 1 -1 0 Z  M 6 28 l 1 0 0 1 -1 0 Z  M 8 28 l 1 0 0 1 -1 0 Z    M 12 28 l 1 0 0 1 -1 0 Z   M 15 28 l 1 0 0 1 -1 0 Z    M 19 28 l 1 0 0 1 -1 0 Z  M 21 28 l 1 0 0 1 -1 0 Z      M 27 28 l 1 0 0 1 -1 0 Z M 28 28 l 1 0 0 1 -1 0 Z M 29 28 l 1 0 0 1 -1 0 Z M 30 28 l 1 0 0 1 -1 0 Z M 31 28 l 1 0 0 1 -1 0 Z M 32 28 l 1 0 0 1 -1 0 Z M 33 28 l 1 0 0 1 -1 0 Z M 34 28 l 1 0 0 1 -1 0 Z M 35 28 l 1 0 0 1 -1 0 Z          M 8 29 l 1 0 0 1 -1 0 Z M 9 29 l 1 0 0 1 -1 0 Z M 10 29 l 1 0 0 1 -1 0 Z M 11 29 l 1 0 0 1 -1 0 Z M 12 29 l 1 0 0 1 -1 0 Z  M 14 29 l 1 0 0 1 -1 0 Z   M 17 29 l 1 0 0 1 -1 0 Z    M 21 29 l 1 0 0 1 -1 0 Z M 22 29 l 1 0 0 1 -1 0 Z M 23 29 l 1 0 0 1 -1 0 Z M 24 29 l 1 0 0 1 -1 0 Z  M 26 29 l 1 0 0 1 -1 0 Z M 27 29 l 1 0 0 1 -1 0 Z M 28 29 l 1 0 0 1 -1 0 Z    M 32 29 l 1 0 0 1 -1 0 Z    M 36 29 l 1 0 0 1 -1 0 Z M 0 30 l 1 0 0 1 -1 0 Z M 1 30 l 1 0 0 1 -1 0 Z M 2 30 l 1 0 0 1 -1 0 Z M 3 30 l 1 0 0 1 -1 0 Z M 4 30 l 1 0 0 1 -1 0 Z M 5 30 l 1 0 0 1 -1 0 Z M 6 30 l 1 0 0 1 -1 0 Z    M 10 30 l 1 0 0 1 -1 0 Z  M 12 30 l 1 0 0 1 -1 0 Z M 13 30 l 1 0 0 1 -1 0 Z M 14 30 l 1 0 0 1 -1 0 Z    M 18 30 l 1 0 0 1 -1 0 Z M 19 30 l 1 0 0 1 -1 0 Z   M 22 30 l 1 0 0 1 -1 0 Z  M 24 30 l 1 0 0 1 -1 0 Z M 25 30 l 1 0 0 1 -1 0 Z  M 27 30 l 1 0 0 1 -1 0 Z M 28 30 l 1 0 0 1 -1 0 Z  M 30 30 l 1 0 0 1 -1 0 Z  M 32 30 l 1 0 0 1 -1 0 Z  M 34 30 l 1 0 0 1 -1 0 Z M 35 30 l 1 0 0 1 -1 0 Z M 36 30 l 1 0 0 1 -1 0 Z M 0 31 l 1 0 0 1 -1 0 Z      M 6 31 l 1 0 0 1 -1 0 Z    M 10 31 l 1 0 0 1 -1 0 Z M 11 31 l 1 0 0 1 -1 0 Z      M 17 31 l 1 0 0 1 -1 0 Z M 18 31 l 1 0 0 1 -1 0 Z M 19 31 l 1 0 0 1 -1 0 Z M 20 31 l 1 0 0 1 -1 0 Z M 21 31 l 1 0 0 1 -1 0 Z M 22 31 l 1 0 0 1 -1 0 Z     M 27 31 l 1 0 0 1 -1 0 Z M 28 31 l 1 0 0 1 -1 0 Z    M 32 31 l 1 0 0 1 -1 0 Z  M 34 31 l 1 0 0 1 -1 0 Z   M 0 32 l 1 0 0 1 -1 0 Z  M 2 32 l 1 0 0 1 -1 0 Z M 3 32 l 1 0 0 1 -1 0 Z M 4 32 l 1 0 0 1 -1 0 Z  M 6 32 l 1 0 0 1 -1 0 Z   M 9 32 l 1 0 0 1 -1 0 Z M 10 32 l 1 0 0 1 -1 0 Z  M 12 32 l 1 0 0 1 -1 0 Z   M 15 32 l 1 0 0 1 -1 0 Z  M 17 32 l 1 0 0 1 -1 0 Z M 18 32 l 1 0 0 1 -1 0 Z  M 20 32 l 1 0 0 1 -1 0 Z    M 24 32 l 1 0 0 1 -1 0 Z M 25 32 l 1 0 0 1 -1 0 Z M 26 32 l 1 0 0 1 -1 0 Z  M 28 32 l 1 0 0 1 -1 0 Z M 29 32 l 1 0 0 1 -1 0 Z M 30 32 l 1 0 0 1 -1 0 Z M 31 32 l 1 0 0 1 -1 0 Z M 32 32 l 1 0 0 1 -1 0 Z M 33 32 l 1 0 0 1 -1 0 Z    M 0 33 l 1 0 0 1 -1 0 Z  M 2 33 l 1 0 0 1 -1 0 Z M 3 33 l 1 0 0 1 -1 0 Z M 4 33 l 1 0 0 1 -1 0 Z  M 6 33 l 1 0 0 1 -1 0 Z  M 8 33 l 1 0 0 1 -1 0 Z M 9 33 l 1 0 0 1 -1 0 Z M 10 33 l 1 0 0 1 -1 0 Z  M 12 33 l 1 0 0 1 -1 0 Z M 13 33 l 1 0 0 1 -1 0 Z M 14 33 l 1 0 0 1 -1 0 Z M 15 33 l 1 0 0 1 -1 0 Z  M 17 33 l 1 0 0 1 -1 0 Z    M 21 33 l 1 0 0 1 -1 0 Z  M 23 33 l 1 0 0 1 -1 0 Z M 24 33 l 1 0 0 1 -1 0 Z M 25 33 l 1 0 0 1 -1 0 Z    M 29 33 l 1 0 0 1 -1 0 Z  M 31 33 l 1 0 0 1 -1 0 Z M 32 33 l 1 0 0 1 -1 0 Z  M 34 33 l 1 0 0 1 -1 0 Z M 35 33 l 1 0 0 1 -1 0 Z M 36 33 l 1 0 0 1 -1 0 Z M 0 34 l 1 0 0 1 -1 0 Z  M 2 34 l 1 0 0 1 -1 0 Z M 3 34 l 1 0 0 1 -1 0 Z M 4 34 l 1 0 0 1 -1 0 Z  M 6 34 l 1 0 0 1 -1 0 Z    M 10 34 l 1 0 0 1 -1 0 Z  M 12 34 l 1 0 0 1 -1 0 Z M 13 34 l 1 0 0 1 -1 0 Z  M 15 34 l 1 0 0 1 -1 0 Z M 16 34 l 1 0 0 1 -1 0 Z    M 20 34 l 1 0 0 1 -1 0 Z  M 22 34 l 1 0 0 1 -1 0 Z M 23 34 l 1 0 0 1 -1 0 Z M 24 34 l 1 0 0 1 -1 0 Z   M 27 34 l 1 0 0 1 -1 0 Z  M 29 34 l 1 0 0 1 -1 0 Z   M 32 34 l 1 0 0 1 -1 0 Z M 33 34 l 1 0 0 1 -1 0 Z M 34 34 l 1 0 0 1 -1 0 Z  M 36 34 l 1 0 0 1 -1 0 Z M 0 35 l 1 0 0 1 -1 0 Z      M 6 35 l 1 0 0 1 -1 0 Z   M 9 35 l 1 0 0 1 -1 0 Z  M 11 35 l 1 0 0 1 -1 0 Z M 12 35 l 1 0 0 1 -1 0 Z M 13 35 l 1 0 0 1 -1 0 Z   M 16 35 l 1 0 0 1 -1 0 Z      M 22 35 l 1 0 0 1 -1 0 Z M 23 35 l 1 0 0 1 -1 0 Z M 24 35 l 1 0 0 1 -1 0 Z M 25 35 l 1 0 0 1 -1 0 Z M 26 35 l 1 0 0 1 -1 0 Z M 27 35 l 1 0 0 1 -1 0 Z M 28 35 l 1 0 0 1 -1 0 Z M 29 35 l 1 0 0 1 -1 0 Z M 30 35 l 1 0 0 1 -1 0 Z M 31 35 l 1 0 0 1 -1 0 Z M 32 35 l 1 0 0 1 -1 0 Z     M 0 36 l 1 0 0 1 -1 0 Z M 1 36 l 1 0 0 1 -1 0 Z M 2 36 l 1 0 0 1 -1 0 Z M 3 36 l 1 0 0 1 -1 0 Z M 4 36 l 1 0 0 1 -1 0 Z M 5 36 l 1 0 0 1 -1 0 Z M 6 36 l 1 0 0 1 -1 0 Z     M 11 36 l 1 0 0 1 -1 0 Z M 12 36 l 1 0 0 1 -1 0 Z   M 15 36 l 1 0 0 1 -1 0 Z  M 17 36 l 1 0 0 1 -1 0 Z M 18 36 l 1 0 0 1 -1 0 Z     M 23 36 l 1 0 0 1 -1 0 Z  M 25 36 l 1 0 0 1 -1 0 Z  M 27 36 l 1 0 0 1 -1 0 Z M 28 36 l 1 0 0 1 -1 0 Z  M 30 36 l 1 0 0 1 -1 0 Z M 31 36 l 1 0 0 1 -1 0 Z M 32 36 l 1 0 0 1 -1 0 Z   M 35 36 l 1 0 0 1 -1 0 Z M 36 36 l 1 0 0 1 -1 0 Z" fill="var(--color-primaryForDark)"></path></svg>
			</div>	
			</div>
		</footer>
	);
}

export default Footer;
