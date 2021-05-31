import axios from "axios";
import React, { useState, useEffect } from "react";
import Jitsi from './components/jitsi'

function App() {
	const [token, setToken] = useState([]);
	useEffect(() => {
		async function fetchdata() {
			const result = await axios.get("http://localhost:8000/token");
			setToken(result.data);
		}
		fetchdata();
	}, []);

  
  //  this.api = new window.JitsiMeetExternalAPI(domain, options);

  // const meetingDetails = this.api.getParticipantsInfo();


	return (
		<div>
			<a href={`https://${token}`}>Start Meeting</a>
	
		</div>
	);
}

export default App;
