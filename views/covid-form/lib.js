$(function(){
    $( "#covid11" ).datepicker();
    let inputElements = document.getElementsByTagName('input')
    let idArr = []
    for(let i=0; i<inputElements.length; i++){
        idArr.push(inputElements[i].id)
    }
    
    $('#covid19consent').submit(async function(e){
        e.preventDefault();      
        let data = {}
        
        for(let id of idArr){
            data[id]=$(`#${id}`).val()
        }      
        let customerName = data[idArr[0]]
        // console.log(data)
        // document.getElementById('covid19consent').reset();
        
        let ajaxRes = await ajaxFunc('POST', '/covid-form', data)
        // console.log(ajaxRes)
        if(ajaxRes === true){
            alert('Your form was submitted successfully. Thank you '+customerName+'!') 
            window.location.href = "http://lushnailbar-mcdonough.com/"          
            // document.getElementById('covid19consent').reset();            
            // document.getElementById('covid19consent').innerHTML = `
            //     <div style="text-align:center; padding-top:20px">
            //         <button type="button" class="btn btn-secondary"><a href="http://lushnailbar-mcdonough.com/">Click for Homepage</a></button>       
            //     </div>  
            // `;            
        }
        else {
            alert('Sorry '+customerName+', your form was failed to submit. Please try again later.')
        }
    });    
})