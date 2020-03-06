
/**
 * THINGS TO REMEMBER:
 * Since the original design was for one page website but I customized it to have
 * extra page (gallery), more javascript was added to the page to fix the navigation function
 * REMEMBER to put javascript on the relevant lib of each view. 
 */

$(document).ready(async function(){  
    var homeUrl = getHomeUrl()
    console.log('home URL:', homeUrl)

    //session will keep a value from page to page
    sessionStorage.setItem("homeUrl", homeUrl) 

    //check to see if this page was a come back from another page beside the homepage
    if(typeof sessionStorage.hrefHolder !== 'undefined'){

        //doing the special rolling one time instead of modified original code
        $('html, body').stop().animate({
            scrollTop: ($(sessionStorage.getItem('hrefHolder')).offset().top - 50)
        }, 1250, 'easeInOutExpo');

        //need to reset the sessionStorage for hrefHolder, so it won't go back to the last hrefHolder when refresh the page
        sessionStorage.setItem('hrefHolder', '');
    }
});

function getHomeUrl(){
    var homeLink = document.getElementById('homeLink')
    var homeUrl = homeLink.innerHTML
    return homeUrl
}


