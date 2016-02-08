import Joiner from "./Joiner.jsx";
import { connect } from "react-redux";
import * as actionCreators from "../action-creators";

const mapStateToProps = state => state.joining;
const mapDispatchToProps = dispatch => ( {

	joinRoom: ( name ) => dispatch( actionCreators.joinRoom( name ) )

} );
const JoinerContainer = connect( mapStateToProps, mapDispatchToProps )( Joiner );

export default JoinerContainer;
