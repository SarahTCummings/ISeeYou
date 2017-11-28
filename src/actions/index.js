import $ from 'jquery-ajax';

export function fetchData(email) {
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


// curl -H "X-FullContact-APIKey:$your_key" 'https://api.fullcontact.com/v2/person.json?email=barton@fullcontact.com'
