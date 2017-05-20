 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnzcFwJ9ZZOBPQ0JWYw4YOiHCmTB9TjFE",
    authDomain: "my-first-project-be346.firebaseapp.com",
    databaseURL: "https://my-first-project-be346.firebaseio.com",
    projectId: "my-first-project-be346",
    storageBucket: "my-first-project-be346.appspot.com",
    messagingSenderId: "734320396671"
  };
  firebase.initializeApp(config);

     var database = firebase.database();
        //var ref = firebase.database().ref();

        //Create firebase event for adding train to table on page

       database.ref().on("child_added", function(childSnapshot, prevChildKey) {

        //create variable and store value 

        var newVideoId = childSnapshot.val().videoId;
        var newHref = childSnapshot.val().href;
        var newImageUrl = childSnapshot.val().imageUrl;
        var newVideoTitle = childSnapshot.val().title;
        


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
                 videoImage.attr("src", newImageUrl);
                 videoImage.attr("data-videoId", newVideoId);
                 videoImage.attr("value", "click");
                 videoImage.attr("data-href", 'https://www.youtube.com/embed/' + newVideoId);
                 
                 //add videoImage to video_image
                 video_image.append(videoImage);
                 //add video_image to videoThumb
                 videoThumb.append(video_image);

                 //create videoTitleHolder to hold title
                 var videoTitleHolder = $("<div class='videoTitleHolder'>");
                 var title = $("<h6>")
                 title.attr("id", 'view_title_1');
                  title.text(newVideoTitle);
                 
                 // create viewMeta data
                 var viewsMeta = $("<div class='viewsMeta'>");
                 viewsMeta.attr("id", "viewsNumber");
                 videoThumb.append(viewsMeta);

               //create delete buttton
                 var removeButton = $("<button type='button' class='remove-button btn btn-primary btn-sm'>");
                 removeButton.attr("id", "remove");
                 removeButton.text("Remove")        
                 removeButton.attr("data-href", 'https://www.youtube.com/embed/' + newVideoId);
                //create append title, saveButton to videoTitleHolder
                //apeend videoTitleHolder to videoThumb
                 videoTitleHolder.append(title);
                 videoTitleHolder.append(removeButton);
                 videoThumb.append(videoTitleHolder);

               $("#saved-appear-here").prepend(videoDiv);
              

            // }; //for loop


  });              

 
/////////clicking on fav button to move to watch later col
 $(document).ready(function(){
        $(document).on('click', '.favorite-button', function(e) {
         console.log("clicked")
         e.preventDefault();
                            
          //get the data videoId, imageUrl and videoTitle from results

             //get the data videoId, imageUrl and videoTitle from results

             var videoId = $(this).attr("data-videoId");
             
              console.log(videoId);
              var imageUrl = $(this).attr("data-src");
     
              console.log(imageUrl);
             
              var title = $(this).siblings('h6').text();
              console.log(title);
              var href_1 = $(this).attr("data-href");
              
              console.log(href_1);
 
                database.ref().push({
                "videoId": videoId,
                "imageUrl": imageUrl,
                 "href": href_1,
                  "title": title
                });
             

    });

 

     ////////////////////////////////

     $(document).on('click', '.video-image', function(e) {
         console.log("clicked")
         e.preventDefault();
         var href = $(this).attr('data-href');
         console.log("src: " + href);
         // maybe use an ID instead
         $('iframe').attr('src', href);
     });
     //remove watch later video click remove button
      $(document).on('click', '.remove-button', function(e) {
         console.log("clicked")
         e.preventDefault();
         $(this).closest('.col-sm-4').remove();

         //  var getKey = $(this).parent().key();
          
         //   // database.ref.child().remove();
         //  console.log("remove: "+ getKey);
         //database.ref().child(getKey).remove();
        //$(this).attr(".thumbnail").empty();
      
// 

 var $rec = $(this).closest('.col-sm-4');
    var id = $rec.attr('.col-sm-4') || null;
    if( id ) {
       // remove any nested children
       
          datbase.ref().child($(this).attr('.col-sm-4')).remove(); 

      }


      });

});
          