import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div class="container">
			<footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
				<div class="col mb-3">
					<a
						href="/"
						class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
					>
						<svg class="bi me-2" width="40" height="32">
						</svg>
					</a>
					<p class="text-body-secondary">&copy; 2024</p>
				</div>

				<div class="col mb-3"></div>

				<div class="col mb-3">
					<h5>Section</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Home
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Features
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Pricing
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								FAQs
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								About
							</Link>
						</li>
					</ul>
				</div>

				<div class="col mb-3">
					<h5>Section</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Home
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Features
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Pricing
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								FAQs
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								About
							</Link>
						</li>
					</ul>
				</div>

				<div class="col mb-3">
					<h5>Section</h5>
					<ul class="nav flex-column">
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Home
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Features
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								Pricing
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								FAQs
							</Link>
						</li>
						<li class="nav-item mb-2">
							<Link href="#" class="nav-link p-0 text-body-secondary">
								About
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
