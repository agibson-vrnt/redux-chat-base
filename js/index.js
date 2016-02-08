/*eslint-env browser*/



import * as actionCreators from "./action-creators";
import BrowserChatRoom from "../chat-service/BrowserChatRoom";
import store from "./store/index";
BrowserChatRoom.on( "message", message => store.dispatch( actionCreators.receivedMessage( message ) ) );
BrowserChatRoom.on( "peerJoined", peer => store.dispatch( actionCreators.peerJoined( peer ) ) );





import React from "react"; //eslint-disable-line
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import JoinerContainer from "./jsx/JoinerContainer.jsx";
import ChatterContainer from "./jsx/ChatterContainer.jsx";
import SpeakContainer from "./jsx/SpeakContainer.jsx";

window.addEventListener( "DOMContentLoaded", () => {

	var target = document.querySelector( "#container" );
	ReactDOM.render(

		<Provider store={store}>
			<section className="app">
				<JoinerContainer />
				<ChatterContainer />
				<SpeakContainer />
			</section>
		</Provider>,
		target

	);

} );
