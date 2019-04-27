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
        for ( k = 0; k < response.items.length; k++){
            var videoTitle = response.items[k].snippet.title;
            $("<p>").text(JSON.stringify(videoTitle)); 
        };
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
