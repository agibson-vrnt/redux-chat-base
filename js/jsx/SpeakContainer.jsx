
import Speak from "./Speak.jsx";
import { connect } from "react-redux";
import * as actionCreators from "../action-creators";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ( {

	sendMessage: ( text ) => dispatch( actionCreators.sendMessage( text ) )

} );
const SpeakContainer = connect( mapStateToProps, mapDispatchToProps )( Speak );

export default SpeakContainer;
