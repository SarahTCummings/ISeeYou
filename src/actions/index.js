import $ from 'jquery-ajax';

export function fetchData() {
  return function(dispatch) {
    dispatch(requestData());
    $.get("/david.json").done(function(data) {
      dispatch(receiveData(data));
    });
  };
}

function receiveData(data) {
  console.log(data);
  return {
    type: "RECEIVE",
    data
  };
}

function requestData() {
  return {
    type: "REQUEST",
  };
}
