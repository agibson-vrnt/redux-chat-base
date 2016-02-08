/*eslint-env node*/
/*global Skylink*/

import EventEmitter from "events";
import uuid from "./uuid";

class RoomClient extends EventEmitter {

    constructor( apiKey, roomName ) {

        super();
        this.clientId = uuid();
        this._key = apiKey;
        this.roomName = roomName;
        this.skylink = new Skylink();
        this.skylink.on( "peerJoined", this.handlePeerJoined.bind( this ) );
        this.skylink.on( "incomingMessage", this.handleIncomingMessage.bind( this ) );

    }

    enter( name, callback ) {

        var options = {

            apiKey: this._key,
            defaultRoom: this.roomName

        };
        this.skylink.init( options, () =>

            this.skylink.joinRoom( { userData: { name: name, id: this.clientId } }, ( err, success ) => {

                if( err ) { callback( err ); }
                else {

                    this.peerId = success.peerId;
                    this.peerInfo = success.peerInfo;
                    callback( null );

                }

            } )

        );

    }

    handlePeerJoined( peerId, data ) {

        var joinedId = data.userData.id;
        if( joinedId !== this.clientId ) {

            setTimeout( () => this.emit( "peerJoined", data.userData ), 0 );

        }

    }

    handleIncomingMessage( channelMessage, fromPeerId, fromJoiner ) {

        this.emit( "message", { content: channelMessage.content, from: fromJoiner.userData, fromId: fromPeerId } );

    }

    sendMessage( message ) {

        this.skylink.sendMessage( message );

    }

}

export default RoomClient;
