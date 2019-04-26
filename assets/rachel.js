var term;

$(document).on("click", "#search", function() {
  term = $("#searchterm")
    .val()
    .trim();
  console.log(term);

  //   recipeSearch = function(term) {
  //     console.log(term);

  // var appId = config.APP_ID;
  // var appKey = config.APP_KEY;

  // Do I need this?
  // "Content-Type: application/json"

  //   var searchTerm = "broccoli";
  //   console.log("broccoli");
  var queryURL =
    "https://api.edamam.com/search?q=" +
    term +
    "&app_id=a79ef939&app_key=f4c70c373b3b4086dbca855aba56f666";

  // make the AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.hits);

    // set the 10 responses back as an array
    var results = response.hits;

    // there are 10 responses, so we need to do some sort of loop;
    for (var i = 0; i < results.length; i++) {
      // inside the loop, we should be creating a containerdiv
      console.log(results[1].recipe.label);
      containerDiv = $("<div>");

      // we add three elements based on the response[i] (image, name, preview of recipe instructions)
      title = $("<h1>").text(results[1].recipe.label); // "title, img, ingr" all taken from example in Edamam documentation

      $("#bodydiv").append(title);
      img = $("<img>").attr("src", response.recipe.image); // found this looking in the console.. might not be right
      ingr = $("<h4>").text(response.recipe.ingredients);

      // add classes to each element and the containerdiv
      title.addClass("title");
      img.addClass("image");
      ingr.addClass("ingredients");

      // add attributes to the containerdiv that has the name of the recipe
      title.attr("src");
      img.attr("src");
      ingr.attr("src");

      // append the elements into the containerdiv
      $(containerDiv).append("#title");
      $(containerDiv).append("#image");
      $(containerDiv).append("#ingredients");

      // append the containerdiv to #bodydiv
      $(containerDiv).append("#bodydiv");
    }
  });
  //   };
});
