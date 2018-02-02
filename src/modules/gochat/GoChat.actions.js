import * as types from '../../constants/actionTypes';

export function getCurrentRate(){
	return {
		type: types.GET_CURRENT_RATE,
		offset: {'hello': 'world'}
	};
}