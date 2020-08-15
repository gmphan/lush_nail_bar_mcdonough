async function getPhotos(){
    let alreadyLoad 
    if(alreadyLoad === 'yes'){
        return true
    }
    alreadyLoad = 'yes'
    document.getElementById("click1").innerHTML = `<button hidden id="click1" onclick="getPhotos()">Click here to view Photos</button>`
    let ajaxRes = await ajaxFunc('GET', '/gallery', true)
    let photoNameArr = ajaxRes.photoNam
    // photoNameArr = photoNameArr.slice(0,5) //for testing purpose
    let htmlStr = `<div class="row no-gutters popup-gallery">`
    for(let name of photoNameArr){
        console.log(name)
        if(name === '.DS_Store'){
            continue
        }
        htmlStr+=`
            <div class="col">                        
                <a class="" href="/public/assets/img/gallery/${name}">                                                      
                    <img class="img-size" src="/public/assets/img/portfolio/thumbnails/${name}" alt=""> 
                </a>                        
            </div>
        `
    }
    // console.log(htmlStr)
    document.getElementById("photo1").innerHTML = htmlStr
    return true
}