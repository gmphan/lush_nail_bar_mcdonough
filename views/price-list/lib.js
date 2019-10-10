
// $('.text_container').addClass("hidden");
// $('.text_container').click(function() {
//     var $this = $(this);

//     if ($this.hasClass("hidden")) {
//         $(this).removeClass("hidden").addClass("visible");

//     } else {
//         $(this).removeClass("visible").addClass("hidden");
//     }
// });

var crntActiveId = getCurrtPriceList()
$('.price-link').on("click", function(){
    
    //get current active class
    //get value which related to id content
})



function getCurrtPriceList(){
    var pricelistElement = document.getElementById('price-list')
    var pricelistList = pricelistElement.childNodes[1].getElementsByClassName('components')
    var pricelistActive = pricelistList[0].getElementsByClassName('active')
    var currentActHref = pricelistActive[0].childNodes[0].href
    var numSymbolPos = currentActHref.search('#')
    var crntActId = currentActHref.substring(numSymbolPos+1, currentActHref.length)
    return crntActId
    // console.log(crntActId)
}
function getDisplayClass(id){
    
}