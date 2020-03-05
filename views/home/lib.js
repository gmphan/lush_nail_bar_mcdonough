
$(document).ready(async function(){  
    var homeUrl = getHomeUrl()
    console.log('home URL:', homeUrl)
    //session will keep a value from page to page
    sessionStorage.setItem("homeUrl", homeUrl)

    //check to see if this page was a come back from another page beside the homepage
    //get the rolling to work from a menu page to homepage
    if(typeof sessionStorage.hrefHolder !== 'undefined'){
        $('html, body').stop().animate({
            scrollTop: ($(sessionStorage.getItem('hrefHolder')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        sessionStorage.setItem('hrefholder', "");
    }
});

function getHomeUrl(){
    var homeLink = document.getElementById('homeLink')
    var homeUrl = homeLink.innerHTML
    return homeUrl
}


