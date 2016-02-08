import React from "react";

export default class Chatter extends React.Component {

	renderWhen( message ) {

		return 			<span className="when">{message.when.toLocaleTimeString()}</span>;

	}

	renderPeerJoined( message, index ) {

		return <li className="new-joiner" key={index}>
			{this.renderWhen( message )}
			<span>{message.name} is in the room</span>
		</li>;

	}

	renderContentMessage( message, index ) {

		var who = message.isMine ? "Me" : message.from;
    	return <li className={message.isMine ? "me message" : "message"} key={index}>
			<span className="name">{who}</span>
			{this.renderWhen( message )}
            <span className="content">{message.content}</span>
        </li>;

	}

	componentDidUpdate() {

		window.scrollTo(0,document.body.scrollHeight);

	}

	renderMessage( message, index ) {

		if( message.type === "peer-joined" ) {

			return this.renderPeerJoined( message, index );

		} else {

			return this.renderContentMessage( message, index );

		}

	}

	render() {

		return 	<ol className="chatter">

			{this.props.messages.map( ( m, index ) => this.renderMessage( m, index ) )}

		</ol>;

    }

}
