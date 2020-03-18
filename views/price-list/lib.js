'use strict'



let crrtActiveLiElement = document.getElementById('ul-priceList').childNodes[0]
let crrtDisplayId = '#acrylic'

$('.price-link').on("click", function(){
    //get href query string
    const $thisHref = $(this).attr("href")
    var numberSymbolPosition = $thisHref.search('#')
    const qryString = $thisHref.substring(numberSymbolPosition+1, numberSymbolPosition.length)

    /**for the navi */
    //remove active from current active li
    crrtActiveLiElement.classList.remove('active')

    //add active to new current active li
    var index = getChildNodeIndex('ul-priceList', $thisHref)
    crrtActiveLiElement = document.getElementById('ul-priceList').childNodes[index]
    console.log(crrtActiveLiElement)
    crrtActiveLiElement.classList.add('active')
    /**end the navi */

    /** for show and hide the menu */
    //hide the current display by id
    document.getElementById(crrtDisplayId).className = "row hidden"
    crrtDisplayId = $thisHref

    //display the clicked id
    document.getElementById(crrtDisplayId).className = "row"   
    /** end show and hide the menu */ 
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







