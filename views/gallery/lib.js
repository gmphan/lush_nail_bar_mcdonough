
//get homeUrl from the session which capture from home/lib.js
var homeUrl = sessionStorage.homeUrl
$(".nav-link").on("click", function redirectPage(){
    //figure out if it is still in the home page then do nothing      
    if(window.location.href !== homeUrl){
        const hrefValue = $(this).attr("href")
        sessionStorage.setItem('hrefHolder', hrefValue)
        window.location.href = homeUrl //+hrefValue 
    }        
})   

/**
 * The reason to have URL capture in sessionStorage because of a few things:
 * 1. The original home page was a free one page web from bootrap, and it use #menu in
 * its navigation, so the page can go back and forth with the browser.
 * 2. Gallery page is an another view and completely separate from the main page, and 
 * to use the same navigation, I have to use the code block above to hit the server again
 * to go back to the homepage 
 */


