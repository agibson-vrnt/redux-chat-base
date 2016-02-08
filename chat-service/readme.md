# The chat-service API

For the purposes of this prototype, the API is restricted to accessing a single, pre-registered room with the WebRTC signal servers.

BrowserChatRoom exports the following interface:
```javascript
enterAs( options, callback( err ) )
say( text )
```

It also exposes the following events as an EventEmitter:
```javascript
on( "peerJoined", callback( peer ) )
on( "message", callback( { from, fromId, isMine, content } ) )
```

- - -

#The methods

## enterAs( options, callback( err ) )

An asynchronous call which callsback upon entering the room
####options
| property  | description                           |
|-----------|---------------------------------------|
| name      | the name of the user joining the room |


######Example
```javascript
BrowserChatRoom.enterAs( { name: "Bob" }, function( err ) {

    if( err ) { throw err; }
    console.log( "Bob has joined the room" );

} );
```
## say( text )

A synchronous call which returns control once the message has been dispatched to the room. You can monitor whether the message has been received by the room using the on( "message" ) event

####text
The text of the message to send to the room

######Example
```javascript
BrowserChatRoom.say( "Hello world!" );
```

- - -

#The Events

## on( "peerJoined", callback( peer ) )

This event is emitted when another user has joined the room. It is also called for every user in the room upon first joining the room.

####callback( peer )

Note: You may find other properties available on the peer object, but please don't depend on any except the list below as that interface may change going forward.

| property  | description                             |
|-----------|-----------------------------------------|
| name      | The name of the user who is in the room |

######Example
```javascript
BrowserChatRoom.on( "peerJoined", peer => {

    console.log( peer.name, "is in the room or has just joined" )

} );
```

##on( "message", callback( details )

This event is emitted when a message is received in the room. If it is a message sent by the current program, the isMine property will be set to true.

Properties of the details parameter are described below:

| property   | description                                               |
|------------|-----------------------------------------------------------|
| from       | Name of the person who sent the message                   |
| fromId     | Id of the person who sent the message                     |
| isMine     | True if the message was sent by the current program/user  |
| content    | Content of the message (text)                             |

######Example
```javascript
BrowserChatRoom.on( "message", { from, fromId, isMine, content } => {

    var who = isMine ? "I" : from;
    console.log( who, "said", content );

} );
```
- - -

That's it for this early prototype... (sorry the syntax is a bit shoddy...)
