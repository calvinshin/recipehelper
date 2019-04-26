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
        console.log(JSON.stringify(response));
        //create a onclick function for each word from rachel.js>> recipe response
        
        //dynamically create a div within <div class="technique"> that provides a pop-up window
            // CS: I wouldn't recommend creating it within the div class = "technique"; what you might want to do is use positioning
            // position : absolute;
            // CS: What's happening right now is that because you add it into the <div class = "technique">, when you click the definition, it re-runs the AJAX call.
        var popUpdiv = $("<div>");
        popUpdiv.attr("class", "hoverWrapper");

        // CS: we might not need this part, since the AJAX call is performed after the click. We don't need a new listener for hover; just change the listener type on master.js
                //beginning part of a hover over function...
                $(".technique").hover(
                    function() {
                        $(this).append(popUpdiv)
                    });
        // end

        //display response.meta.id to pull search term
        var termP = $("<p>").text(response[0].meta.id);
        console.log(termP);

        //display response.def[i].vd to pull speech type (e.g. noun, verb, adj)
        console.log(response[0].def[0].vd);

        // You don't actually need to use JSON.stringify. The attributes inside the object are already strings.
        // I removed [i] from the response[0].def.length
                // originally was response[0].def[i].length
        
                //convert to string from an object using stringify
                for (var i = 0; i < response[0].def.length; i++){
                    var speechP = $("<p>").text(JSON.stringify(response[0].def[i].vd));
                    // var speechP = $("<p>").text(response[0].def[i].vd);
                };
                //display response.shortdef[i] to pull all available definitions
                // console.log(response[0].shortdef.length);
                for (var j = 0; j < response[0].shortdef; j++){
                    var defP = $("<p>").text(JSON.stringify(response[0].shortdef[j]));
                };

        // CS: Try console logging termP and speechP here. Notice how the speechP is blank.
        // I would recommend just providing a single definition for now to make sure you can get it owrking.

        //append responses to pop up window
        popUpdiv.append(termP, speechP, defP);
        //for testing purposes
        $(".technique").append(popUpdiv);
    });

};

ytSearch = function(video) {
    console.log("Eureka! YouTube!");
    var YTKEY = config.YTKEY;
    var ytVideos = "snippet";
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part="+ytVideos+"&maxResults=25&key=" + YTKEY;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response)
        //when .technique is clicked display title to div
        var vidResults = $("<div>");
        console.log(response.items[0]);
        // Changed this to var k so that the variable lives only inside of the function
        for (var k = 0; k < response.items.length; k++){
            // Looks like you're finding some really amazing things with forEach, but I'm not sure how it works so I can't help you. Below is using your for loop you already created:
            // What you can do instead is create separate divs with all the things you need here


            // Create a div that shows the all video details.
            var singleResult = $("<a>");
            // create an href for this <a> tag
            // check this for documentation on how to do this using jquery https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_attr_set

            // create a class for this a tag for styling


            // Create a videoTitle for the video results
            var videoTitle = response.items[k].snippet.title;
            singleResult.append(videoTitle);
            // Create a class for this title for styling


            // Create the image for the video results as a preview


            // Append the videotitle and the iamge into the singleResult div

            // Append singleResult (for now) into the bodydiv.
            $("#bodydiv").append(singleResult); 
        };

        // CS: after doing the above steps, I would remove the below lines because it lives inside the for loop. 
        vidResults.text(videoTitle);
        // display video to div 
        var video = response.items;
        var html = "";
        video.forEach(function(item){
            // Include the YouTube Watch URL youtu.be 
            html += '<p><a href="http://youtu.be/' + item.id + '">';
            // Add the default video thumbnail (default quality)
            html += '<img src="http://i.ytimg.com/vi/' + item.id + '/default.jpg">';
        });
        //append all
        $(".technique").append(vidResults, video, html)
    });
};
