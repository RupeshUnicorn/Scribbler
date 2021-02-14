/* Include all scripts required for post.html */

/* script for like functionality */
var numberOfClicks=0;
function postLiked(){
   var button = document.getElementById("addLikes")
   button.innerHTML = '<i class="fa fa-thumbs-up ">'+'</i>'+'&nbsp;'+"Liked!";
   button.style.border="none";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }

/* scripts for comments section */
function addComment(id){
   if (id.value.length>0){
    var addEventName = id.value ;
    document.getElementById('addEventNames').innerHTML += '<p id="comment">' + addEventName + '</p>' ; 
    var a = document.getElementById('userComments');         
    a.value=a.defaultValue;
   }
}

/* scripts for Edit and Save post */
var titleContent = document.getElementById('post-title-name');
var contentText = document.getElementById('post-body');
var editButton = document.getElementById('editButton');
var saveButton = document.getElementById('saveButton');

function editContent(){
    contentText.contentEditable="true";
    titleContent.contentEditable="true";
    contentText.style.border="1px solid red";
    titleContent.style.border="1px solid red";
    editButton.style.display="none";
    saveButton.style.display="block";
    contentText.focus();
}

function saveContent(){
    contentText.contentEditable="false";
    titleContent.contentEditable="false";
    contentText.style.border="none";
    titleContent.style.border="none";
    editButton.style.display="block";
    saveButton.style.display="none"; 
}

/* End of post.js scripts */