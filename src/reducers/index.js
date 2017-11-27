const INITIAL_STATE = {
  data: null,
  isLoading: true
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST":
      return Object.assign({}, state, {
        data: {},
        isLoading: true
      });
    case "RECEIVE":
      return Object.assign({}, state, {
        data: action.data,
        isLoading: false
      });
    default:
      return state;
    }
}
