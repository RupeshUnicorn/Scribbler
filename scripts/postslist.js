/* Include all scripts required for postslist.html */

var modal = document.getElementById('trash-modal');
var trashIcon = document.getElementsByClassName('trash');
var closemodal = document.getElementById('noButton');
var deletePost = document.getElementById('yesButton');
var postValue = -1;

for(let i = 0; i < trashIcon.length; i++) {
    trashIcon[i].onclick = function() {
        postValue = i;
        modal.style.display = "block";   
        
    }
}

deletePost.onclick = function() {
    var post = document.getElementsByClassName('post');
    modal.style.display = "none";
    post[postValue].style.display = "none";
}

closemodal.onclick = function() {
     modal.style.display = "none";       
}

/* End of postslist.js scripts */

