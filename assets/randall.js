ytSearch = function(video) {
    console.log("Eureka! YouTube!");
    var YTKEY = config.YTKEY;
    var ytVideos = "snippet";
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part="+ytVideos+"&maxResults=9&key=" + YTKEY;

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
            html += '<p><a href="http://youtu.be/' + item.id.videoId + '">';
            // Add the default video thumbnail (default quality)
            html += '<img src="' + item.snippet.thumbnails.default.url + '">';
        });
        //append all
        $(".technique").append(vidResults, html);
    });
};
