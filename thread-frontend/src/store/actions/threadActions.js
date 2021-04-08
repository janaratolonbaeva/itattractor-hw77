import axiosApi from "../../axiosApi";

export const GET_THREADS_REQUEST = 'GET_THREADS_REQUEST';
export const GET_THREADS_SUCCESS = 'GET_THREADS_SUCCESS';
export const GET_THREADS_FAILURE = 'GET_THREADS_FAILURE';

export const POST_THREAD_REQUEST = 'POST_THREAD_REQUEST';
export const POST_THREAD_SUCCESS = 'POST_THREAD_SUCCESS';
export const POST_THREAD_FAILURE = 'POST_THREAD_FAILURE';

export const getThreadsRequest = () => ({type: GET_THREADS_REQUEST});
export const getThreadsSuccess = threads => ({type: GET_THREADS_SUCCESS, threads});
export const getThreadsFailure = error => ({type: GET_THREADS_FAILURE, error});

export const postThreadRequest = () => ({type: POST_THREAD_REQUEST});
export const postThreadSuccess = () => ({type: POST_THREAD_SUCCESS});
export const postThreadFailure = error => ({type: POST_THREAD_FAILURE, error});

export const fetchThreads = () => {
	return async dispatch => {
		try {
			dispatch(getThreadsRequest());

			const response = await axiosApi.get('/');
			dispatch(getThreadsSuccess(response.data));
		} catch (e) {
			dispatch(getThreadsFailure(e));
		}
	};
};

export const postThread = (thread) => {
	return async dispatch => {
		try {
			dispatch(postThreadRequest());

			await axiosApi.post('/', thread);
			dispatch(postThreadSuccess());
		} catch (e) {
			dispatch(postThreadFailure(e));
		}
		dispatch(fetchThreads());
	};
};



