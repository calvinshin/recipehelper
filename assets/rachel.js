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
    var newarray = [];

    for(var p = 0; p < results.length; p++) {
      var recipe = results[p].recipe;
      var newItem = {};
      // add title as attribute
      newItem.title = recipe.label
      // add image as attribute
      newItem.img = recipe.image
      // add ingredients as attribute
      newItem.text = recipe.ingredientLines

      // CS add html link as an attribute ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

      recipe = array[i]

      // CS: new overarchingdiv here
      $containerDiv = $("<div>");

      title = $("<h1>").text(recipe.title); // "title, img, ingr" all taken from example in Edamam documentation

      img = $("<img>").attr("src", recipe.img); // found this looking in the console.. might not be right
      $ingr = $("<ul>");
      $
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
      // Add an attribute title with the value recipe.title
      // Insert text into the div that says something like, search for youtube!
      // add a class for this div

      // append the $containerdiv and the youtube div above into the overarching div

      // Append overarching div instead of containerdiv
      $("#bodydiv").append($containerDiv);
    }
  }