var term;

$("#searchterm").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#search").click();
  }
});

$(document).on("click", "#search", function() {
  term = $("#searchterm")
    .val()
    .trim();
  console.log(term);

  // var appId = config.APP_ID;
  // var appKey = config.APP_KEY;

  var queryURL =
    "https://api.edamam.com/search?q=" +
    term +
<<<<<<< HEAD
    "&app_id=" + config.edam_ID + "&app_key=" + config.edam_KEY + "";
=======
    "&app_id=" + config.edam_ID + "&app_key=" + config.edam_KEY;
>>>>>>> 2077d52f293081937ca2f2fab7befcdd22805900

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
      newItem.url = recipe.url;
<<<<<<< HEAD
=======

>>>>>>> 2077d52f293081937ca2f2fab7befcdd22805900

      newarray.push(newItem);
    }
    console.log(newarray);

    cardmaker(newarray);
  });
<<<<<<< HEAD
=======

>>>>>>> 2077d52f293081937ca2f2fab7befcdd22805900
});
