//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response and store it as a variable
    request.onreadystatechange = function () {
      if(request.readystate === XMLHttpRequest.DONE);
      //Take Some action
      if(request.status === 200) {
        var counter = response.requestText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
      }
    }
      //Not done yet
};
    //Make a request
    request.open('GET','http://muruga121.imad.hasura-app.io/counter',true);
   request.send(null);
};