var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       	alert(xhttp.responseText);
    }
};
xhttp.open("GET", "https://cloud.samsara.com/r/auth/csrf", true);
xhttp.send();

