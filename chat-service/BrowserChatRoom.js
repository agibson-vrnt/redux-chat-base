import RoomClient from "./RoomClient";
import EventEmitter from "events";

class BrowserChatRoom extends EventEmitter {

	constructor() {

		super();
		this.client = new RoomClient( "b49d981f-8be9-4e82-979e-bf4cbbaca78c", "browser-chat-room" );
		this.client.on( "message", message => this.emit( "message", {

			from: message.from.name,
			fromId: message.fromId,
			isMine: message.fromId == this.client.peerId,
			content: message.content

		} ) );
		this.client.on( "peerJoined", peer => this.emit( "peerJoined", peer ) );

	}

	enterAs( options, callback ) {

		this.client.enter( options.name, callback );

	}

	say( text ) {

		this.client.sendMessage( text );

	}

}
var instance = new BrowserChatRoom();
export default instance;
