 //ini function to load youtube api library and set apikey
 function init() {

     gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

     gapi.client.load("youtube", "v3", function() {

     });

 };

 $(document).ready(function() {
    var results;
    var loadMoreCount = 0;

    //functionality of load more
    $("#MoreViewsVideos").on("click",function(){
        loadMoreCount++;
        for (var i = 0+3*loadMoreCount; i < 3+3*loadMoreCount; i++) {


                 console.log(results[i]);

                 //get the data videoId, imageUrl and videoTitle from results
                 var videoId = results[i].id.videoId;
                 // console.log(videoId);
                 var imageUrl = results[i].snippet.thumbnails.medium.url;
                 console.log(imageUrl);
                 var videoTitleFull = results[i].snippet.title;
                 //console.log(videoTitleFull);

                 //trim video title so it display properly

                 if (videoTitleFull.length > 40) {
                     var videoTitle = (videoTitleFull.slice(0, 40) + "...");

                 } else {

                     var videoTitle = videoTitleFull;
                 }
                // var p = $("<p>").text(videoTitle);

                 console.log(videoTitleFull);
                 console.log(videoTitle);

                 //create class image for each video        
                 var videoDiv = $("<div class = 'col-sm-4 item'>");

                 
                 var videoThumb = $("<div class='recommendVideos' style='margin-bottom:15px;'>");
                 
                 //add videoThumb to videoDiv
                 videoDiv.append(videoThumb);
                 
                 var video_image = $("<div class='video_image'>");

                 var videoImage = $("<img>");
                //add class to image
                 videoImage.addClass('video-image');

                 //set src image
                 //set data-videoid
                 videoImage.attr("src", imageUrl);
                 videoImage.attr("data-videoId", videoId);
                 videoImage.attr("value", "click");
                 videoImage.attr("data-href", 'https://www.youtube.com/embed/' + videoId);
                 
                 //add videoImage to video_image
                 video_image.append(videoImage);
                 //add video_image to videoThumb
                 videoThumb.append(video_image);

                 //create videoTitleHolder to hold title
                 var videoTitleHolder = $("<div class='videoTitleHolder'>");
                 var title = $("<h6>")
                 title.attr("id", 'view_title_1');
                 title.text(videoTitle);
                 
                 // create viewMeta data
                 var viewsMeta = $("<div class='viewsMeta'>");
                 viewsMeta.attr("id", "viewsNumber");
                 videoThumb.append(viewsMeta);

               //create favorite buttton
                 var saveButton = $("<button type='button' class='favorite-button btn btn-primary btn-sm'>");
                 saveButton.attr("id", "favorite");
                 saveButton.text("Save")        
                 saveButton.attr("data-href", 'https://www.youtube.com/embed/' + videoId);
                 saveButton.attr("data-videoId", videoId);
                 saveButton.attr("data-src", imageUrl);
                //create append title, saveButton to videoTitleHolder
                //apeend videoTitleHolder to videoThumb
                 videoTitleHolder.append(title);
                 videoTitleHolder.append(saveButton);
                 videoThumb.append(videoTitleHolder);

                 $("#video-appear-here").prepend(videoDiv);
    }
})

      
     //capture search-term text box when user click search-button
     $("#search-button").on("click", function(event) {
         event.preventDefault();
        
         
           $(".youtube-player").removeAttr("src");
          $(".youtube-player").empty();
         
          $("#video-appear-here").empty();
          // player.destroy();

         console.log("hello");
         var searchTerm = $('#search-term-1 option:selected').val();
         var customerKeyword = $('#customerKeywords').val();
         console.log(searchTerm);
         console.log(customerKeyword);

         //prepare request
         var request = gapi.client.youtube.search.list({
             part: 'snippet',
             q: customerKeyword + " " + searchTerm,
             maxResults: 50,
             order: "viewCount",
             type: "video"

         });

             
         //execute request
         request.execute(function(response) {
             console.log(response);

             results = response.items;
            // console.log(results);

             for (var i = 0; i < 3; i++) {
                 console.log(results[i]);

                 //get the data videoId, imageUrl and videoTitle from results
                 var videoId = results[i].id.videoId;
                 // console.log(videoId);
                 var imageUrl = results[i].snippet.thumbnails.medium.url;
                 console.log(imageUrl);
                 var videoTitleFull = results[i].snippet.title;
                 //console.log(videoTitleFull);

                 //trim video title so it display properly

                 if (videoTitleFull.length > 40) {
                     var videoTitle = (videoTitleFull.slice(0, 40) + "...");

                 } else {

                     var videoTitle = videoTitleFull;
                 }
                // var p = $("<p>").text(videoTitle);

                 console.log(videoTitleFull);
                 console.log(videoTitle);

                 //create class image for each video        
                 var videoDiv = $("<div class = 'col-sm-4 item'>");

                 
                 var videoThumb = $("<div class='recommendVideos'>");
                 
                 //add videoThumb to videoDiv
                 videoDiv.append(videoThumb);
                 
                 var video_image = $("<div class='video_image'>");

                 var videoImage = $("<img>");
                //add class to image
                 videoImage.addClass('video-image');

                 //set src image
                 //set data-videoid
                 videoImage.attr("src", imageUrl);
                 videoImage.attr("data-videoId", videoId);
                 videoImage.attr("value", "click");
                 videoImage.attr("data-href", 'https://www.youtube.com/embed/' + videoId);
                 
                 //add videoImage to video_image
                 video_image.append(videoImage);
                 //add video_image to videoThumb
                 videoThumb.append(video_image);

                 //create videoTitleHolder to hold title
                 var videoTitleHolder = $("<div class='videoTitleHolder'>");
                 var title = $("<h6>")
                 title.attr("id", 'view_title_1');
                 title.text(videoTitle);
                 
                 // create viewMeta data
                 var viewsMeta = $("<div class='viewsMeta'>");
                 viewsMeta.attr("id", "viewsNumber");
                 videoThumb.append(viewsMeta);

               //create favorite buttton
                 var saveButton = $("<button type='button' class='favorite-button btn btn-primary btn-sm'>");
                 saveButton.attr("id", "favorite");
                 saveButton.text("Save")        
                 saveButton.attr("data-href", 'https://www.youtube.com/embed/' + videoId);
                 saveButton.attr("data-videoId", videoId);
                 saveButton.attr("data-src", imageUrl);
                //create append title, saveButton to videoTitleHolder
                //apeend videoTitleHolder to videoThumb
                 videoTitleHolder.append(title);
                 videoTitleHolder.append(saveButton);
                 videoThumb.append(videoTitleHolder);

                 $("#video-appear-here").prepend(videoDiv);

             }; //for loop

             
         }); //response

            //hide rungame, jumbotron and move search box
            $("#mainBox").css("display", "block");
           $("#runGame").css("display", "none");
           $(".jumbotron").css("display", "none");
           $("#searchBar").css("padding", "40px 0px 40px 0px");
           $("#searchBar").css('background', 'url(assets/images/bg.jpg) no-repeat center fixed');
           $("#SMlogo").css("display", "block");




     }); //search button
    
     //start video, click on image

     $(document).on('click', '.video-image', function(e) {
         console.log("clicked")
         e.preventDefault();
         var href = $(this).attr('data-href');
         console.log("src: " + href);
         // maybe use an ID instead
         $('iframe').attr('src', href);
     });

     //displaying correct content on tabs navigation
     
     // tab
            //    $(document).ready(function(){         
            //     if (location.hash) {
            //         $("a[href='" + location.hash + "']").tab("show");
            //     }
            //     $(document.body).on("click", "a[data-toggle]", function(event) {
            //         location.hash = this.getAttribute("href");
            //     });
            //  });
            // $(window).on("popstate", function() {
            //     var anchor = location.hash || $("a[data-toggle='tab']").first().attr("href");
            //     $("a[href='" + anchor + "']").tab("show");
            // });
 }); //document.ready
