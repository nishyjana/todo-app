import React, { Component } from "react";

export default class jitsi extends Component {
	domain = "meet.expertrepublic.com";
	api = {};

	constructor(props) {
		super(props);
		this.state = {
			room: "Nishy",
			isAudioMuted: false,
			isVideoMuted: false,
			details: "",
		};
	}

	startMeet = () => {
		const options = {
			width: "100%",
			height: 900,
			parentNode: document.querySelector("#jitsi-iframe"),
			jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiaHR0cHM6Ly93d3cuZGFpbHltb3NzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9mdW5ueS1wcm9maWxlLXBpYzU5LmpwZyIsIm5hbWUiOiJuaXNoeSIsImVtYWlsIjoibmlzaHlAcm9vdGNvZGVsYWJzLmNvbSJ9fSwiYXVkIjoiMDQ0RTMiLCJpc3MiOiIwNDRFMyIsInN1YiI6Im1lZXQuZXhwZXJ0cmVwdWJsaWMuY29tIiwicm9vbSI6Im5pc2h5In0.2j2qFLlEyGMtjoXRxzeB7oF2Hp3xNkN3XM_1bJHIfiQ",
		};

		this.api = new window.JitsiMeetExternalAPI(this.domain, options);

		// this.api.addEventListeners({
		// 	readyToClose: this.handleClose,
		// 	participantLeft: this.handleParticipantLeft,
		// 	participantJoined: this.handleParticipantJoined,
		// 	videoConferenceJoined: this.handleVideoConferenceJoined,
		// 	videoConferenceLeft: this.handleVideoConferenceLeft,
		// 	audioMuteStatusChanged: this.handleMuteStatus,
		// 	videoMuteStatusChanged: this.handleVideoStatus,
		// });
		const details = this.api.getParticipantsInfo();
		this.setState.details = details;
	};
	componentDidMount() {
		// 
        this.startMeet()
	}

	render() {
		return (
			<div>
				<h1>{this.details}</h1>
			</div>
		);
	}
}
