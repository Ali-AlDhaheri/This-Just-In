

function myFunction() {
$.ajax({
  url:"/api",
  type: 'GET',
  dataType: 'json',
  error: function(data){
    console.log(data);
    document.getElementById('myDIV').innerHTML = data.responseText;
    document.getElementById('myDIV').style.fontFamily = "Courier New";
    if (data = undefined ){
      document.getElementById('myDIV').innerHTML = 'Sorry, we cannot reach SANA at the moment';
      document.getElementById('myDIV').style.fontFamily = "Courier New";
    }
  },
  success: function(data){
    console.log(data);
    document.getElementById('myDIV').innerHTML = data.responseText;
  }

});
}
function myFunction1() {
$.ajax({
  url:"/api1",
  type: 'GET',
  dataType: 'json',
  error: function(data){
    console.log(data);
    document.getElementById('myDIV1').innerHTML = data.responseText;
    document.getElementById('myDIV1').style.fontFamily = "Courier New";
    
},
  success: function(data){
    console.log(data);
    document.getElementById('myDIV1').innerHTML = data.responseText;
  }

});
}
function myFunction2() {
$.ajax({
  url:"/api2",
  type: 'GET',
  dataType: 'json',
  error: function(data){
    console.log(data);
    document.getElementById('myDIV2').innerHTML = data.responseText;
    document.getElementById('myDIV2').style.fontFamily = "Courier New";
  },
  success: function(data){
    console.log(data);
    document.getElementById('myDIV2').innerHTML = data.responseText;
  }

});
}
//---------------------------------------------------------------------------------------------------------------------------------------



