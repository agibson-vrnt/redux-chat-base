export default ( state = { messages: [] }, action ) => {

	switch( action.type ) {

		case "received-message":
			return {

				...state,
				messages: [
					...state.messages,
					{
						...action.message,
						when: new Date()
					}

				]

			};
		case "peer-joined":
			return {

				...state,
				messages: [

					...state.messages,
					{
						"type": "peer-joined",
						name: action.peer.name,
						when: new Date()
					}

				]
			};
		default:
			return state;

	}

}