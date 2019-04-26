var app = {
    searchListenerFunction : function() {
        $("#search").click(function() {
            console.log("button was clicked!")
            // insert the function for the listener, whatever you call it, here.
            var searchterm = $("#searchterm").val();;
            console.log(searchterm);
            // For example, if your funcction is called rachelPullRequest, it would be rachelPullRequest(searchterm);
            recipeSearch(searchterm);
        })

    },
    hoverListenerFunction : function() {
        $(".technique").click(function() {
            console.log("hover done!");
            var technique = this.innerText;
            console.log(technique);
            // Insert the function here:
            dictionarySearch(technique);
            // ytSearch(technique);

        })
    }
}

app.searchListenerFunction();
app.hoverListenerFunction();