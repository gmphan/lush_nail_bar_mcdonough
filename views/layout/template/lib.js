$(document).ready(function(){});

async function ajaxFunc(typeP, urlP, dataP){
    return $.ajax({
        type:typeP,
        url:urlP,
        contentType: "application/json",                
        data: JSON.stringify({
            dataK:dataP
            // test:'testing'
        }),
        // dataType:'json', //tells jQuery that you want it to parse the returned JSON
        success: function(dataR){
            return dataR
        },
        error: function(){
            console.log('FAILED TO AJAX /' + urlP)                        
        }                    
    })    
}
