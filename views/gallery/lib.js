
//get homeUrl from the session which capture from home/lib.js
var homeUrl = sessionStorage.homeUrl
$(".nav-link").on("click", function redirectPage(){
    //figure out if it is still in the home page then do nothing    
    console.log('home url from nav', homeUrl)
    if(window.location.href !== homeUrl){
        const hrefValue = $(this).attr("href")
        sessionStorage.setItem('hrefHolder', hrefValue)
        window.location.href = homeUrl //+hrefValue 
    }        
})   


