import React from "react";

export default class Speak extends React.Component {

	handleKeyUp( e ) {

		if( e.keyCode === 13 ) {

			var text = this.refs.message.value;
			this.refs.message.value = "";
			this.props.sendMessage( text );

		}

	}

	render() {

		return 	<input ref="message" className="message-box" placeholder="message" type="text" onKeyUp={ e => this.handleKeyUp( e ) } />;

	}

}
