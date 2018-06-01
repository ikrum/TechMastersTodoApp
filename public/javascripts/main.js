

function fetch(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("view").innerHTML = this.responseText;
      // console.log(this.responseText);
    }
  };


  xhttp.open("GET", "http://localhost:3000/api/v1/todos/", true);
  xhttp.send();
}
