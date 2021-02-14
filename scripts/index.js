/* Include all scripts required for index.html */

/* script to display Create Post modal screen*/
function showCreatePost(){
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
  }
  
/* script to hide Create Post modal screen */  
function hideCreatePostModal(){
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
  }

/* script to hide Create Post modal screen */  
window.addEventListener('click' , function(event) {
    var postmodal = document.getElementById("create-post-modal")
    if (event.target == postmodal) {
      postmodal.style.display = "none";
    }
  });

/* script to redirect the current window to open postlist.html page */  
function showBlogList() {
    window.open('./html/postslist.html',"_self");
  }

/* End of index.js scripts */  