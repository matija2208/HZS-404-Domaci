function takeID(){
    var queryString = location.search.substring(1);
    console.log("query:" + queryString);
}

window.onload =  takeID();