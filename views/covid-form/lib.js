$(function(){
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
        console.log(data)
        document.getElementById('covid19consent').reset();
        
        let ajaxRes = await ajaxFunc('POST', '/covid-form', data)
        // console.log(ajaxRes)
        // if(ajaxRes === true){
        //     alert('We have recieved your message. Thank you '+data.name+'!')
        //     document.getElementById('email-form').reset();
        // }
        // else if(ajaxRes === false){
        //     alert('Sorry '+data.name+' your email was failed to delivery. Please try again later.')
        // }
    });    
})