const INITIAL_STATE = {
  data: null,
  isLoading: true,
  screen: 1
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
        isLoading: false,
      });
    case "NEXT":
      return Object.assign({}, state, {
        screen: state.screen + 1
      });
    default:
      return state;
    }
}
