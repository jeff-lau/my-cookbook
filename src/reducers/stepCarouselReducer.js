const initState = {
	isOpen: false,
	stepIndex: 0
}

function stepCarouselReducer(state = initState, action) {
	switch(action.type) {
		case TOGGLE_OPEN_STATE:
			return {
				isOpen: action.payload.isOpen,
				stepIndex: action.payload.stepIndex === undefined ? 0 : action.payload.stepIndex
			}
		default:
			return state
	}
}

// action
export const TOGGLE_OPEN_STATE = 'TOGGLE_OPEN_STATE'
export const toggleCarouselState = (isOpen, stepIndex) => ({ type: TOGGLE_OPEN_STATE, payload: { isOpen, stepIndex }})
export default stepCarouselReducer
