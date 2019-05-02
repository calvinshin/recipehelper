ytSearch = function(video) {
    var YTKEY = config.YTKEY;
    var ytVideos = video; //<-- match to recipe.title
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet"+"&q="+ytVideos+"&maxResults=8&key=" + YTKEY;

    // AJAX REQUEST FOR YOUTUBE
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        
        //EMPTY ARRAY FOR RESPONSES
        var ytArray = []; 

        //RESPONSES
        for (var k = 0; k < response.items.length; k++){
            var ytCard = { 
                title : response.items[k].snippet.title,
                img : response.items[k].snippet.thumbnails.medium.url,
                text: "",
                url : "http://youtu.be/" + response.items[k].id.videoId,
                description : response.items[k].snippet.description,
            }; 
            
            //PUSH RESPONSES INTO ARRAY
            ytArray.push(ytCard);
        };

        //PUSH ARRAY INTO RACHEL.JS CARMAKER FUNCTION
        cardmaker(ytArray, "YT");


        // EMBED VIDEO TO DIV
        $(document).on("click", ytCard, function(){

            var video = response.items;
            var html = "";
            video.forEach(function(item){
                // Include the YouTube Watch URL youtu.be 
                html += '<p><a href="http://youtu.be/' + item.id.videoId + '">';
            });
            
        });
        // //append all
    });
};