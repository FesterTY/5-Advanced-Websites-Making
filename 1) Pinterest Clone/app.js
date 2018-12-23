//Fixed navigation bar
var navbar = document.querySelector('#nav-bar');
var fixedOffset = navbar.offsetTop;

window.addEventListener('scroll',function(e){
    if(this.pageYOffset >= fixedOffset){
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

//Unsubscribe from groups
const subbedGroups = document.querySelector('#subscribed-groups');

subbedGroups.addEventListener('click', function(e){
    
    if(e.target.className == "unsubscribe-btn"){
        const group = e.target.parentElement;
        subbedGroups.querySelector('.front-gallery').removeChild(group);
    }

});
