var term;

// make the enter key functional for searching
$("#searchterm").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#search").click();
  }
});

// create the click event for the search button
$(document).on("click", "#search", function() {
  term = $("#searchterm")
    .val()
    .trim();

  // create check boxes for certain dietary restrictions
  labels1 = $("#label1").prop("checked");
  labels2 = $("#label2").prop("checked");
  labels3 = $("#label3").prop("checked");

  // enter queryURL, var term, and edamam ID/ KEY
  var queryURL =
    "https://api.edamam.com/search?q=" +
    term +
    "&app_id=" +
    config.edam_ID +
    "&app_key=" +
    config.edam_KEY;

  // logic for check boxes
  if (labels1 == true) {
    queryURL += "&health=peanut-free";
  } else if (labels2 == true) {
    queryURL += "&health=vegan";
  } else if (labels3 == true) {
    queryURL += "&health=sugar-conscious";
  }

  function myCallback(response) {
    var result = JSON.stringify(response);
    // console.log("Inside ajax: "+ result);
    // Do whatever you need with result variable
  }

  // make the AJAX call
  $.ajax({
    url: queryURL,
    method: "GET",
    datatype: "json",
    success: myCallback
  }).then(function(response) {
    // console.log(response.hits);

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
      // add healthLabels as attribute
      newItem.text = recipe.healthLabels;

      // add html link as an attribute
      newItem.url = recipe.url;

      newarray.push(newItem);
    }
    // console.log(newarray);

    divmaker(term, "EM");

    cardmaker(newarray);
  });
});

// use the same AJAX call for Hello Kitty's recommendations
// default her favorite (apple) and set it as a string
$(document).on("click", "#hkPic", function() {
  var term = "apple";

  var queryURL =
    "https://api.edamam.com/search?q=" +
    term +
    "&app_id=" +
    config.edam_ID +
    "&app_key=" +
    config.edam_KEY;

  function myCallback2(response) {
    var result = JSON.stringify(response);
    // console.log("Inside ajax: "+ result);
    // Do whatever you need with result variable
  }

  $.ajax({
    url: queryURL,
    method: "GET",
    datatype: "JSON",
    success: myCallback2
  }).then(function(response) {
    console.log(response);

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
      // add healthLabels as attribute
      newItem.text = recipe.healthLabels;
      // add html link as an attribute
      newItem.url = recipe.url;

      newarray.push(newItem);
    }

    divmaker(term, "EM");
    cardmaker(newarray);
  });
});
