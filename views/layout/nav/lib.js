//get homeUrl from the session 
var homeUrl = sessionStorage.homeUrl
$(".nav-link").on("click", function redirectPage(){
    if(window.location.href !== homeUrl){
        const hrefValue = $(this).attr("href")
        console.log(homeUrl) 
        window.location.href = homeUrl+hrefValue
    }        
})   
