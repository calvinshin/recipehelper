var term;

$(document).on("click", "#search", function() {
  term = $("#searchterm")
    .val()
    .trim();
  labels1 = $("#label1").prop("checked");
  console.log(labels1);
  labels2 = $("#label2").prop("checked");
  labels3 = $("#label3").prop("checked");

  console.log(term);
  console.log(labels2);

  // var appId = config.APP_ID;
  // var appKey = config.APP_KEY;

  var queryURL =
    "https://api.edamam.com/search?q=" +
    term +
    "&app_id=" +
    config.edam_ID +
    "&app_key=" +
    config.edam_KEY;
  // "&healthLabels=keto-friendly";

  if (labels1 == true) {
    queryURL += "&healthLabels=keto-friendly";
  } else if (labels2 == true) {
    queryURL += "&healthLabels=paleo";
  } else if (labels3 == true) {
    queryURL += "&healthLabels=gluten-free";
  }

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

      newarray.push(newItem);
    }
    console.log(newarray);

    cardmaker(newarray);
  });
});
