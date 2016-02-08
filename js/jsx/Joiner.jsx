import React from "react";

export default class Joiner extends React.Component {

	joinRoom() {

		var name = this.refs.name.value;
		this.props.joinRoom( name );
		this.refs.name.value = "";

	}

	handleKeyUp( e ) {

		if( e.keyCode === 13 ) {

			this.joinRoom();

		}

	}

	handleClick( e ) {

		e.preventDefault();
		this.joinRoom();

	}

	renderJoined() {

		return <div>You have joined the room as: {this.props.name}</div>;
	}

	renderJoining() {

		return <div>Joining, please wait...</div>;

	}

	renderForm() {

		return 	<div>

            <input type="text" ref="name" placeholder="Your name" onKeyUp={ e => this.handleKeyUp( e ) } />
            <button type="button" onClick={ e => this.handleClick( e ) }>Enter the room</button>
            <div className="validation-messages"></div>

        </div>;

	}
	render() {

		return this.props.isJoined ? this.renderJoined()
			: ( this.props.isJoining ? this.renderJoining()
				: this.renderForm() );

    }

}
