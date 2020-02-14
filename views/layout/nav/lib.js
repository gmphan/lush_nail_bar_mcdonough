//get nav-link for redirect purpose
$(".nav-link").on("click", function redirectPage(){
    if(window.location.href !== "http://localhost:8081/"){
        const hrefValue = $(this).attr("href")
        console.log(hrefValue) 
        window.location.href = "http://localhost:8081/"+hrefValue
    }        
})   