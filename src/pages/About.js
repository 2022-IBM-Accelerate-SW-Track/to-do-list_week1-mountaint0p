import React, { Component } from "react";
import "./About.css";
import face_picture from "../assets/face.jpg";
export default class About extends Component {
	render() {
		return (
			<div>
				<div>
					<div class="split left">
						<div className="centered">
							<img
								className="profile_image"
								src={face_picture}
								alt="Profile Pic"
							></img>
						</div>
					</div>
					<div className="split right">
						<div className="centered">
							<div className="name_title">Summit Pradhan</div>
							<div className="brief_description">
								I'm from Morrisville, North Carolina, and I'm a computer science
								major at Swarthmore College, located outside Philadelphia. I am
								excited to be a part of IBM Accelerate this summer!
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
