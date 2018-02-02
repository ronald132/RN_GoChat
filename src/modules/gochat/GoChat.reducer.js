import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.rate, action){
	switch(action.type){
		case types.GET_CURRENT_RATE:
			return {
				...state,
				currentRate: action.offset
			};
		default:
			return state;
	}
}