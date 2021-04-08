import {
	GET_THREADS_FAILURE,
	GET_THREADS_REQUEST,
	GET_THREADS_SUCCESS, POST_THREAD_FAILURE,
	POST_THREAD_REQUEST, POST_THREAD_SUCCESS
} from "../actions/threadActions";

const initialState = {
	messages: null,
	getLoading: false,
	messagesError: '',
	postLoading: false,
	postError: ''
}

const threadReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_THREADS_REQUEST:
			return {...state, getLoading: true}
		case GET_THREADS_SUCCESS:
			return {...state, getLoading: false, messages: action.threads}
		case GET_THREADS_FAILURE:
			return {...state, getLoading: false, messagesError: action.error}
		case POST_THREAD_REQUEST:
			return {...state, postLoading: true, postError: action.error}
		case POST_THREAD_SUCCESS:
			return {...state, postLoading: false}
		case POST_THREAD_FAILURE:
			return {...state, postLoading: false, postError: action.error}
		default:
			return state
	}
};

export default threadReducer;