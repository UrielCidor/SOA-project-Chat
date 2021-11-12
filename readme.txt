TALK-BACK chat application - SOA project 

1. create server using Node.js technology:
	create new server.js file -> npm init
	import express -> npm i express -> create instance
	import http -> create http server instance passing express
	import socket.io -> npm i socket.io 
	use listen method on server to confirm connection and log server port (8080)
	use cors middlware on express to allow cross origin bullshit... also needed to add in soket.io cors options for allow origin from client (localhost:3000)
	establish io connection from server to client, passing socket object in argument. soket emit event for establishing connection from client to server.
2. create client using react technology:
	create react project -> npx npx create-react-app chat-client
	import soket.io-client -> npm i socket.io-client
	create chat folder for components:
		Chat - main view page. display contacts panel and messages panel
		ChannelList - display contacts list - basiclly all users, on and off line
		Channel - disply contact chat
		MessagesPanel - disply messages in contact's chat
		Message - disply message, sender and dateTime
3. Developing logic for communtication between server and client:
	retrive channels/contacts information fetching it from the back end with GET method (for now sending STATIC_CHANNELS). fetch method in loadChannels() gets data from (localhost:8080/getChannels) at componentDidMount().
	the client is now connected with the backend via websocket and http. 
	define listners in client's Chat component and emit and event ('channel-join') to update the information in every channel/contact's chat
	