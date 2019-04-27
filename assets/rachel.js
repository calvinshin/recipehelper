var term;

$(document).on("click", "#search", function() {
  term = $("#searchterm")
    .val()
    .trim();
  console.log(term);

  // var appId = config.APP_ID;
  // var appKey = config.APP_KEY;

  // Do I need this?
  // "Content-Type: application/json"

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
    var newarray = [];

    for (var p = 0; p < results.length; p++) {
      var recipe = results[p].recipe;
      var newItem = {};
      // add title as attribute
      newItem.title = recipe.label;
      // add image as attribute
      newItem.img = recipe.image;
      // add ingredients as attribute
      newItem.text = recipe.ingredientLines;

      // CS add html link as an attribute ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      newItem.html = recipe.url;

      newarray.push(newItem);
    }
    console.log(newarray);

    cardmaker(newarray);
  });
});

function cardmaker(array, location) {
  // array should have the following elements:
  // each recipe should have:
  // recipe.title
  // recipe.img
  // recipe.text

  // there are 10 responses, so we need to do some sort of loop;
  for (var i = 0; i < array.length; i++) {
    // inside the loop, we should be creating a containerdiv
    console.log(array[1].title);

    var recipe = array[i];

    $overarchingDiv = $("<div>"); // new div
    $overarchingDiv.addClass("overarching");
    $containerDiv = $("<div>");
    $containerDiv.addClass("container");

    title = $("<h1>").text(recipe.title);
    img = $("<img>").attr("src", recipe.img);
    $ingr = $("<ul>");

    // .text(recipe.ingredientLines[j]);

    for (var j = 0; j < recipe.text.length; j++) {
      var $list = $("<li>").text(recipe.text[j]);
      $ingr.append($list);
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

    // Add an attribute title with the value recipe.title
    $youtubeDiv.attr("title", recipe.title);
    // Insert text into the div that says something like, search for youtube!
    $youtubeDiv.text("search for youtube!");
    // add a class for this div
    $youtubeDiv.addClass("youtube");

    // append the $containerdiv and the youtube div above into the overarching div
    $overarchingDiv.append($containerDiv);
    $overarchingDiv.append($youtubeDiv);
    // Append overarching div instead of containerdiv
    $("#bodydiv").append($overarchingDiv);
  }
}
