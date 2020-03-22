'use strict'

$(document).ready(function(){
  $('#photo-upload-form').submit(function(e){
    e.preventDefault();
    console.log('testing')
    // $.ajax({
    //   type:'POST',
    //   url:'/update/post',
    //   data:{
    //     postId:url.substr(url.lastIndexOf('/')+1),
    //     postName:$("input[name='post_name']").val(),
    //     postContent:$("textarea[name='postContent']").val()        
    //   },
    //   success:function(){
    //     window.location.href='/post/'+url.substr(url.lastIndexOf('/')+1);
    //     //console.log('Successfully');
    //   },
    //   error:function(){
    //     alert('Error updating the post');
    //   }
    // });
  });
})


function myFunction(){
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
        for (var i = 0; i < x.files.length; i++) {
          txt += "<br><strong>" + (i+1) + ". file</strong><br>";
          var file = x.files[i];
          if ('name' in file) {
            txt += "name: " + file.name + "<br>";
          }
          if ('size' in file) {
            txt += "size: " + file.size + " bytes <br>";
          }
        }
      }
    } 
    else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
      }
    }
    document.getElementById("demo").innerHTML = txt;
  }

  //remember to create everything modularity
  //create an submitPhoto 
  //submitPhoto will upload the photos to the upload folder
  function uploadPhotos(photoJson){
    //take the json ajax an endpoint
    $.ajax({
      type:'POST',
      url:'/receivePhotos',
      data:{
        usrname:$('#usrname').val(),
        psw:$('#psw').val()
      },
      success:function(returnData){
        if(returnData==='badUsername'){
          alert('Wrong Username');
        }else if(returnData==='badPassword'){
          alert('Wrong Password');
        }else if(returnData==='matched'){
          href:window.location.href='/';
        }
      },
      error:function(){
        alert('Error ajax /validate/login');
      }
    })
    
  }