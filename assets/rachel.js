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

      var recipe = results[i].recipe;

      $containerDiv = $("<div>");

      // we add three elements based on the response[i] (image, name, preview of recipe instructions)
      // CS: note here that results[1] is fixed! If you're inside a for loop, you'll want to go through each value in the results array
      // It'll have to go through [1]... [2]... [3]... so how do you do that within a for loop?
      // https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex
      // What should [1] be changed to?
      title = $("<h1>").text(recipe.label); // "title, img, ingr" all taken from example in Edamam documentation

      // $("#bodydiv").append(title);

      // on line 44 (for title), you use results[1].recipe.label
      // but for img and ingr, you're using response.recipe.image.
      // You're right that it's not right!
      // change the format of the below two lines to be similar to the title one.
      img = $("<img>").attr("src", recipe.image); // found this looking in the console.. might not be right
      $ingr = $("<ul>");
      // .text(recipe.ingredientLines[j]);

      for (var j = 0; j < recipe.ingredientLines.length; j++) {
        var $list = $("<li>").text(recipe.ingredientLines[j]);
        $ingr.append($list);
      }

      // add classes to each element and the containerdiv
      title.addClass("title");
      img.addClass("image");
      $ingr.addClass("ingredients");

      // add attributes to the containerdiv that has the name of the recipe
      // title.attr("src");
      // img.attr("src");
      // $ingr.attr("src");

      // append the elements into the containerdiv
      // CS: Really close with this!
      // This should actually be
      // $containerDiv.append(title)
      $containerDiv.append(title);
      $containerDiv.append(img);
      $containerDiv.append($ingr);

      // append the containerdiv to #bodydiv
      // CS: Close! Check this out https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append_ref
      // You're actually doing something similar to this on line 49 (and that one is actually correct)
      $("#bodydiv").append($containerDiv);
    }
  });
  //   };
});
