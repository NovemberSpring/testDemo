import * as requestService from '../services/requestUrl';
export default {
  namespace: 'requestData',
  state: {
    data: [],
  },
  effects: {
    * test({ payload }, { call, put }) {
      const result = yield call(requestService.requestUrl, payload);
      yield put({
        type: 'changeValue',
        payload: {
          data: result.data.apis
        }
      })
    }
  },
  reducers: {
    changeValue(state, action) {
      return {
        ...state,
        data: action.payload.data
      };
    },
  },
};