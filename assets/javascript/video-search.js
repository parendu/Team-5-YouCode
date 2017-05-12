 //ini function to load youtube api library and set apikey
 function init() {

     gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

     gapi.client.load("youtube", "v3", function() {

     });

 };

 //capture search-term text box when user click search-button
 $("#search-button").on("click", function(event) {
     event.preventDefault();
     console.log("hello");
     
     var searchTerm = $('#search-term').val();
     console.log(searchTerm);
     // search(searchTerm);

     //prepare request
     var request = gapi.client.youtube.search.list({
         part: 'snippet',
         q: searchTerm,
         maxResults: 3,
         order: "viewCount",
         type: "video"

     });
     //execute request
     request.execute(function(response) {
         console.log(response);

         var results = response.items;
         console.log(results);

         for (var i = 0; i < results.length; i++) {
             console.log(results[i]);

             var videoId = results[i].id.videoId;
             console.log(videoId);
             var imageUrl = results[i].snippet.thumbnails.default.url;
             console.log(imageUrl);
             var videoTitle = results[i].snippet.title;
             console.log(videoTitle);


             // <iframe width="560" height="315" src="https://www.youtube.com/embed/WPvGqX-TXP0" frameborder="0" allowfullscreen></iframe>
             $("#videos-appear-here").append("video image: " + imageUrl);
             $("#videos-appear-here").append("video id: " + videoId);
             $("#videos-appear-here").append("video title: " + videoTitle);
             //  $("#videos-appear-here").append("video id: " + item.id.video);


         }; //for loop

     }); //response
 }); //search button