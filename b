




        
function changeRole(csrf_token){             
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //console.log(JSON.parse(xhttp.responseText)['meta']['csrf_token'])
    }
};
xhttp.open("PUT", "https://mobashir.freshdesk.com/api/_/agents/84009833934", true);
xhttp.setRequestHeader('X-CSRF-Token',csrf_token)
xhttp.setRequestHeader('Content-Type','application/json; charset=UTF-8')
xhttp.send(JSON.stringify({"role_ids":[84000263893]}));


}



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       changeRole(JSON.parse(xhttp.responseText)['meta']['csrf_token'])
    }
};
xhttp.open("GET", "https://mobashir.freshdesk.com/api/_/bootstrap/me", true);
xhttp.send();
