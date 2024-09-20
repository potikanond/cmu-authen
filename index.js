const axios = require('axios');
const prompt = require("prompt-sync")({ sigint: true });
const moment = require("moment");

const keep_session = async (secret,username) => {
	try {
		const response = await axios.post("https://login-api.cmu.ac.th/",{"username":username},
			{headers: {"x-session-secret":secret}}
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		return {
                        status: error.response.status + ' ' + error.response.statusText,
                        message: error.response.data.msg
                };
	}
}

const next_refresh_time = (interval) => {
	return moment().add(interval,'millisecond').format('HH:mm:ss');
}


(async()=>{
	const interval = 1500000; // 25 minutes = 1500000
	const username = prompt("Enter CMU Email address or Guest Account : ");
	const token = prompt("Enter authentication token from login.cmu.ac.th : ");	
	//console.log(`${username} : ${password}`);
	let secret = token;
	const sessions = await keep_session(secret,username);
	console.log(`-----------Next refresh on ${next_refresh_time(interval)}-----------`)

	if ('current_session' in sessions) {
		secret = sessions.current_session.secret;		
		const refresh = setInterval(async() => {			
			const sessions = await keep_session(secret,username);			
			if ('current_session' in sessions === false) {
				console.error(sessions)
				clearInterval(refresh)
			}else{
				secret = sessions.current_session.secret;
				console.log(`-----------Next refresh on ${next_refresh_time(interval)}-----------`);
			}
			
		}, interval);

	}else{
		console.error(sessions)
	}
})()
