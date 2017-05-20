 //capture search-term text box when user click search-button
$(document).ready(function(){
 $("#search-button").on("click", function(event) {
     event.preventDefault();

     var searchTerm = $('#search-term').val();
     console.log(searchTerm);
     // The Base URL
     var queryUrl = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=2d7535a7fe9c4f85a3ecff0e4993a567";

     // putting the url togehter and append &callback=?
     var url = queryUrl;
     console.log(url);

     // Call The API for a JSON
     $.getJSON(url, function() {
         console.log("success");
     }).done(function(response) {
         console.log("second success");

         console.log(response.articles);

         //var results = response.articles;

         console.log(response.articles);

         
         //create news articles list 
         // for (var i = 0; i < response.articles.length; i++) {
          for (var i = 0; i < 5; i++) {
              var eachPaper = $("<div class='eachPaper'>");
              var articleTitle = $("<h3 id='paper_1_title'>");
              articleTitle.text(response.articles[i].title);
              eachPaper.append(articleTitle);
              var articleDiscription = $("<p id='paper_1_body'>");
              articleDiscription.text(response.articles[i].description);
              eachPaper.append(articleDiscription);

              var link = $("<a>");
              link.attr("href", response.articles[i].url);
              var articlesButtons =$("<button type='button' class='btn btn-primary paperButtons' id='paperButton_1' style='float: right'>");
              link.append(articlesButtons);
              // articlesButtons.attr("onclick", response.articles[i].url);
              
              articlesButtons.text("Read");
              eachPaper.append(link);
              
              $(".articles").append(eachPaper);

         }; //loop
          
         
         // }).fail(function() {
         //   console.log("error");
         //  }).always(function() {
         //  console.log("always");
         //  });

     }); //response
   

 }); //click
});  //document ready