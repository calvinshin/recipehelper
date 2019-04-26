recipeSearch = function(term) {
  console.log("recipesearch worked!");
};

// INPUT --> AJAX
// VARIABLE OUTPUT STORED
// DYNAMICALLY CREATED VARIABLE 

// what should be empty when you're first starting off? 
// what should your button be called? 
// create a function to loop through the area
// need to assign a class, attributes, text to it, append. 

// assigning a random value to variable for testing purposes
var searchTerm = "broccoli";

// start off the jQuery
$(document).on("click", "#container", function() {
  // insert content here
});

// Edamam application ID: a79ef939
// Edamam application key to authenticate requests: f4c70c373b3b4086dbca855aba56f666


var queryURL = "http://" + searchTerm + ""; //insert the API key here

$.ajax({
  url: queryURL,
  method: "GET"
})

// generating the response 
.then(function(response) {
    var results = response.data;

    // create a for loop 
    for (var i = 0; i < results.length; i++) {
        // what do you want it to loop through 
    }
});
