ytSearch = function(video) {
    console.log("Eureka! YouTube!");
    var YTKEY = config.YTKEY;
    var ytVideos = video; //<-- get this to match recipe.title
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet"+"&q="+ytVideos+"&maxResults=5&key=" + YTKEY;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        // console.log(response)
        // console.log(response.items[0]);
        
        var ytArray = []; 

        for (var k = 0; k < response.items.length; k++){
            var ytCard = { 
                title : response.items[k].snippet.title,
                img : response.items[k].snippet.thumbnails.medium.url,
                text: "",
                url : "http://youtu.be/" + response.items[k].id.videoId,
                description : response.items[k].snippet.description,
            }; 
            // console.log(ytCard.description);
            //push ytVard var into ytArray
            ytArray.push(ytCard);
        };
        //pushes created array into Rachel's cardmaker function for CSS styling later
        cardmaker(ytArray, "YT");

        // // display video to div 
        // var video = response.items;
        // var html = "";
        // video.forEach(function(item){
        //     // Include the YouTube Watch URL youtu.be 
        //     html += '<p><a href="http://youtu.be/' + item.id.videoId + '">';
        //     // Add the default video thumbnail (default quality)
        //     html += '<img src="' + item.snippet.thumbnails.default.url + '">';
        // });
        // //append all
    });
};