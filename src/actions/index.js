import $ from 'jquery-ajax';

export function fetchData(email) {
  return function(dispatch) {
    dispatch(requestData());
      const url =  "https://api.fullcontact.com/v2/person.json?email=cody@grandcircus.co"; 
      $.ajax({url: url, headers: {"X-FullContact-APIKey": "aa1febea3072edd9"}}).done(function(data) {
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

export function next() {
  return {
    type: "NEXT"
  }
}


// curl -H 'X-FullContact-APIKey:$your_key' 'https://api.fullcontact.com/v2/person.json?email=barton@fullcontact.com'
