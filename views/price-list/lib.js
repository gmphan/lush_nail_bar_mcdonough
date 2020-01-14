'use strict'


let crrtActiveLiElement = document.getElementById('ul-priceList').childNodes[0]
let crrtShowIdElement = document.getElementById('acrylic')

$('.price-link').on("click", function(){
    //remove active from current active li
    crrtActiveLiElement.classList.remove('active')
    //get href query string
    const $thisHref = $(this).attr("href")
    var numberSymbolPosition = $thisHref.search('#')
    const qryString = $thisHref.substring(numberSymbolPosition+1, numberSymbolPosition.length)
    //add active to new current active li

    var index = getChildNodeIndex('ul-priceList', $thisHref)

    crrtActiveLiElement = document.getElementById('ul-priceList').childNodes[index]
    console.log(crrtActiveLiElement)
    crrtActiveLiElement.classList.add('active')

    //add hidden class to current Id s    
    crrtShowIdElement.classList.add('hidden')
    //remove hidden from new current ID
    crrtShowIdElement = document.getElementById(qryString)
    crrtShowIdElement.classList.remove('hidden')
    
})

function getChildNodeIndex(parentId, href){
     
    var parentElementChildNodes = document.getElementById(parentId).childNodes
    

    for(let i=0; i<parentElementChildNodes.length; i++){
        var aTag = parentElementChildNodes[i].childNodes[0]
        var fullHref = aTag.href 
        var numSymbolPos = fullHref.search("#")
        var queryString = fullHref.substring(numSymbolPos, fullHref.length)
        if(queryString === href){
            console.log(href)
            return i
        }
    }

}







