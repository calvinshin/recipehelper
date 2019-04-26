dictionarySearch = function(term) {
    console.log("dictionarysearch worked!");
    var MirrWebKEY = config.MirrWebKEY;
    var dictionarySearchTerm = "reciprocate"; 
    var queryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + dictionarySearchTerm + "?key=" + MirrWebKEY;
    console.log(dictionarySearchTerm);

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);
        //create a onclick function for each word from rachel.js>> recipe response
        
        //dynamically create a div within <div class="technique"> that provides a pop-up window
        var popUpdiv = $("<div>");
        //add attributes to new div
        popUpdiv.attr("class", "popUp")
        //display response.meta.id to pull search term
        var termP = $("<p>").text(response[0].meta.id);
        // console.log(termP);
        //display response.def[i].vd to pull speech type (e.g. noun, verb, adj)
        // console.log(response[0].def[0].vd);
        for (i = 0; i < response[0].def[i].vd; i++){
            var speechP = $("<p>").text(JSON.stringify(response[0].def[i].vd));
        };
        //display response.shortdef[i] to pull all available definitions
        // console.log(response[0].shortdef.length);
        for (j = 0; j < response[0].shortdef[j]; j++){
            var defP = $("<p>").text(JSON.stringify(response[0].shortdef[j]));
        };
        //append responses to pop up window
        popUpdiv.append(termP, speechP, defP);
        console.log(popUpdiv);
        //for testing purposes
        $(".technique").append(popUpdiv);
    });

};

// ytSearch = function(video) {
//     console.log("Eureka! YouTube!");
//     var YTKEY = config.YTKEY;
//     var ytVideos = "cooking+techniques";
//     var queryURL = "https://www.googleapis.com/youtube/v3/search?part="+ytVideos+"&maxResults=25&key=" + YTKEY;

//     $.ajax({
//         url: queryURL,
//         method: "GET",
//     }).then(function(response){
//         console.log(response)
//     });
// };
