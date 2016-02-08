import BrowserChatRoom from "../chat-service/BrowserChatRoom";

export function joinRoom( name ) {

	return dispatch => {

		dispatch( { "type": "join-room", "name": name } );
		BrowserChatRoom.enterAs( { name: name }, err => {

			if( err ) {

				dispatch( { "type": "join-error", err: err } );

			} else {

				dispatch( { "type": "joined-room" } );

			}

		} );

	};

}

export function sendMessage( text ) {

	BrowserChatRoom.say( text );
	return { "type": "send-message", "text": text };

}

export function receivedMessage( message ) {

	return { "type": "received-message", "message": message };

}

export function peerJoined( peer ) {

	return { "type": "peer-joined", "peer": peer };

}
