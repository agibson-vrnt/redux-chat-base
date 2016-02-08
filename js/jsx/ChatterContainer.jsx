import Chatter from "./Chatter.jsx";
import { connect } from "react-redux";
import * as actionCreators from "../action-creators";

const mapStateToProps = state => state.chatter;
const mapDispatchToProps = dispatch => ( {

} );
const ChatterContainer = connect( mapStateToProps, mapDispatchToProps )( Chatter );

export default ChatterContainer;
