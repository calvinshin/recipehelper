var app = {
    hoverListenerFunction : function() {
        $(".technique").click(function() {
            console.log("hover done!");
            var technique = this.innerText;
            console.log(technique);
            // Insert the function here:
            // dictionarySearch(technique);
            ytSearch(technique);

        })
    },

    youtubeListenerFunction : function() {
      $(".youtube").click(function() {
        ytSearch(this.title);
      })
    },

    externalListenerFunction : function() {
      $(".recipeContainer").click(function() {
        window.open(this.getAttribute("href"));
      })
    }

}

// app.searchListenerFunction();
app.hoverListenerFunction();




function cardmaker(array, type) {
  // array should have the following elements:
  // each recipe should have:
  // recipe.title
  // recipe.img
  // recipe.text
  // recipe.url

  // there are 10 responses, so we need to do some sort of loop;
  for (var i = 0; i < array.length; i++) {
    // inside the loop, we should be creating a containerdiv

    var recipe = array[i];

    $overarchingDiv = $("<div>"); // new div
    $overarchingDiv.addClass("overarching column is-one-quarter is-primary");

    $containerDiv = $("<div>");
    $containerDiv.addClass("recipeContainer");
    $containerDiv.attr("href", recipe.url);
    $containerDiv.attr("target", "_blank");

    title = $("<h1>").text(recipe.title);
    img = $("<img>").attr("src", recipe.img);

    // .text(recipe.ingredientLines[j]);

    // Checks if the text is an array and if it is, it provides ingredietns as a list
    if(Array.isArray(recipe.text)) {
      $ingr = $("<ul>");
      for (var j = 0; j < recipe.text.length; j++) {
        var $list = $("<li>").text(recipe.text[j]);
        $ingr.append($list);
      }
    }
    // Otherwise, if it's just text, it's provided as a string.
    else{
      $ingr = $("<div>").text(recipe.text);
    }

    // add classes to each element and the containerdiv
    title.addClass("title");
    img.addClass("image");
    $ingr.addClass("ingredients");

    $containerDiv.append(title);
    $containerDiv.append(img);
    $containerDiv.append($ingr);

    // CS: Create a new div for the youtube link
    $youtubeDiv = $("<div>");
    $youtubeDiv.addClass("")

    // If the type is not youtube, create the youtube div. Otherwise, no youtube div elements.
    if(type != "YT") {
      // Add an attribute title with the value recipe.title
      $youtubeDiv.attr("title", recipe.title);
      
      var searchTest = recipe.title;
    //   console.log('searchTest ', searchTest)
    // Insert text into the div that says something like, search for youtube!
    // $youtubeDiv.text("search for youtube!");
    var ytButton = $("<button>", {
        id: "searchYT",
        text: "Find something like it on YouTube!",
        class: "button is-warning is-small"
        //calls on youTube video

        // CS: There's already a youtube listener, so we don't need this click as a part of the creation.
        // click: ytSearch (searchTest),


        //find a way to pass youtube thumbnails when clicked
      });
      $youtubeDiv.append(ytButton);
      // add a class for this div
      $youtubeDiv.addClass("youtube");
    }

    // append the $containerdiv and the youtube div above into the overarching div
    $overarchingDiv.append($containerDiv);
    $overarchingDiv.append($youtubeDiv);
    // Append overarching div instead of containerdiv
    $("#bodydiv").append($overarchingDiv);
  }

  // Add listener for clicking youtubeDiv
  app.youtubeListenerFunction();

  app.externalListenerFunction();
}
