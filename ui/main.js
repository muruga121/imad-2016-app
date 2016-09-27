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
    };
      //Not done yet
};
    //Make a request
   request.open('GET','http://muruga121.imad.hasura-app.io/counter',true);
   request.send(null);
};

//Submit Name
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
     //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response and store it as a variable
    request.onreadystatechange = function () {
      if(request.readystate === XMLHttpRequest.DONE);
      //Take Some action
      if(request.status === 200) {
        //Capture a list of name and render it as a list
  var names = request.responseText;
  names = JSON.parse(names);
  var list = '';
}
  for(var i=0;i<names.length;i++) {
      list +- '<li>' + names[i] + </li> ;
      var ul = document.getElementById('namelist');
      ul.innerHTML = list;
}   
}
      //Not done yet
};
    //Make a request
   var nameInput = document.getElementById('name');
   var name = nameInput.value;
   request.open('GET','http://muruga121.imad.hasura-app.io/submit-name?name=' +name,true);
   request.send(null);
  
  
