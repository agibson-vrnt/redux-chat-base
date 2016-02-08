export default ( state = {}, action ) => {

	switch( action.type ) {

		case "join-room":
			return {
				...state,
				name: action.name,
				isJoining: true
			};
		case "joined-room":
			return {
				...state,
				isJoining: false,
				isJoined: true
			};
		default:
			return state;

	}

};
