
$(document).ready(async function(){  
    var homeUrl = getHomeUrl()
    console.log('home URL:', homeUrl)
    //session will keep a value from page to page
    sessionStorage.setItem("homeUrl", homeUrl)
});

function getHomeUrl(){
    var homeLink = document.getElementById('homeLink')
    var homeUrl = homeLink.innerHTML
    return homeUrl
}


