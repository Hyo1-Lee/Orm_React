import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const GNB = () => {
	return (
		<header className="p-3 text-bg-dark">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<Link
						to="/"
						className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
					>
						<svg
							className="bi me-2"
							width="40"
							height="32"
							role="img"
							aria-label="Bootstrap"
						></svg>
					</Link>

					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li>
							<Link to="/" className="nav-link px-2 text-white">
								Home
							</Link>
						</li>
						<li>
							<Link to="/community" className="nav-link px-2 text-white">
								커뮤니티
							</Link>
						</li>
						<li>
							<Link to="#" className="nav-link px-2 text-white">
								쇼핑
							</Link>
						</li>
						<li>
							<Link to="#" className="nav-link px-2 text-white">
								생활
							</Link>
						</li>
					</ul>

					<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
						<input
							type="search"
							className="form-control form-control-dark text-bg-dark"
							placeholder="Search..."
							aria-label="Search"
						/>
					</form>

					<div className="text-end">
						<button type="button" className="btn btn-outline-light me-2">
							<Link to="/signin" className="nav-link px-2 text-white">
								로그인
							</Link>
						</button>
						<button type="button" className="btn btn-warning">
							<Link to="/signup" className="nav-link px-2 text-white">
								회원가입
							</Link>
						</button>
						<li>
							<Link to="/article" className="nav-link px-2 text-white">
								회원가입
							</Link>
						</li>

						<Dropdown className="d-inline mx-2">
							<Dropdown.Toggle id="dropdown-autoclose-true" variant="info">
								글쓰기
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item as={Link} to="/article/create">
									일상 게시글 작성
								</Dropdown.Item>
								<Dropdown.Item as={Link} to="#">
									Another action
								</Dropdown.Item>
								<Dropdown.Item as={Link} to="#">
									Something else
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item as={Link} to="#">
									Separated link
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</div>
		</header>
	);
};

export default GNB;
