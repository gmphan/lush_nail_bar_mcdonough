'use strict'


//testing
// !(async()=>{
//    let test =  await createHtml()
//    console.log(test)
// })()


async function createHtml(){
    let inputObj = {
        input1:'<input id="wholename1" type="text" name="wholename1" required>',
        input2:'<input id="initial1" type="text" name="initial1" required>',
        input3:'<input id="initial2" type="text" name="initial2" required>',
        input4:'<input id="initial3" type="text" name="initial3" required>',
        input5:'<input id="temp" type="text" name="temp" required>',
        input6:'<input id="initial4" type="text" name="initial4" required>',
        input7:'<input id="initial6" type="text" name="initial6" required>',
        input8:'<input id="initial7" type="text" name="initial7" required>',
        input9:'<input id="wholename2" type="text" name="wholename2" required>',
        input10:'<input id="date" type="text" name="date" required>'
    }
    
    let htmlObj = {html:`                  
            <h3 style="text-align:center"><u>COVID-19 Pandemic Nail Treatment Consent Form</u></h3><br><br>
            <form id="covid19consent" class="needs-validation" >
            <p>
                I,
                ${inputObj.input1}
                , knowingly and willingly consent to have nail treatment during the COVID-19 pandemic and will not hold anyone of Lush Nail Bar Mc Donough liable for the possibility of contrating COVID-19.<br><br>
                I understand the COVID-19 virus has a long incubation period during which carriers of the visu may not show synmtoms and still be hightly contagious. It is impossible to determine who has it and who does not given the current limits in virus testing.
                ${inputObj.input2} (Initial)<br><br>
                I understand that due to the frequency of visits of other clients, the characteristics of the virus, and the characteristics of the nail treatments, that I have a elevated rish of contracting the virus simply by being in a salon. 
                ${inputObj.input3} (Initial)<br><br>
                I confirm that I am not presenting any of the following symptoms of COVID-19 listed below: 
                ${inputObj.input4} (Initial)<br>
                <ul>
                <li>Fever-Temperature:
                    ${inputObj.input5}
                    degrees<br>
                </li>
                <li>Shortness of Breath</li>
                <li>Loss of Sense of Taste or Smell</li>
                <li>Dry Cough</li>
                <li>Runny Nose</li>
                <li>Sore Throat</li>			
                </ul>
                <br>
                To prevent the spread of contangious of the viruses and to help protect each other, I understand that I will have to follow the salon's strict guidelines.
                ${inputObj.input6}
                (Initial)<br><br>
                I understand that air travel significantly increases my risk of contracting and transmitting the COVID-19 virus, and I understand that the CDC, OSHA and Georgia Board of Cosmetology and Barbers recommend social distancing of at least six feet.<input type="text" id="initial5" name="initial5" required>(Initial)<br><br>
                <ul>
                <li>I verify that I have not traveled outside the United States in the past 14 days to countries that have been affected by COVID-19.
                    ${inputObj.input7}(Initial)<br><br></li>
                <li>I verify that I have not domestically within the United States by commercial airlines, buses, or trains within the past 14 days. 
                    ${inputObj.input8}(Initial)<br><br></li>
                </ul>
                <label for="name">Name:</label>
                ${inputObj.input9}<br><br>
                <label for="date">Date:</label>
                ${inputObj.input10}
            </p>
            <br/>
            <div id="sbmtC19btn" style="text-align:center; padding-bottom:50px">
                <button type="submit" class="btn btn-dark btn-xl" value="submit">Submit</button>        
            </div>            
            </form> 
            `,
            htmlInput:inputObj
    }
    return htmlObj
}


module.exports=createHtml