import $ from 'jquery-ajax';

export function fetchData(email) {
  return function(dispatch) {
    //this url below says to get the information using the express server to make the ajax get request to Full Contact. The "/getdata" replaces the "http://fullcontact" portion of the url. The full url can be found in server.js file outside of the client folder.
    console.log(email);
      let url =  "/getdata?email=" + email;
          // url = "/david.json";
      $.ajax({url: url}).done(function(data) {
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

// the function below helps us to change from page to page by hitting the submit button on each component.
export function next(screen) {
  return {
    type: "NEXT",
    screen
  }
}

// the function below allows the user to go back if they've hit the 404 (NoInfo) page.
export function back() {
  return {
    type: "BACK"
  }
}


// curl -H 'X-FullContact-APIKey:$your_key' 'https://api.fullcontact.com/v2/person.json?email=barton@fullcontact.com'
