'use strict'


let input = {input1:'helloworld'}
!(async()=>{
    let html = `<div><p>${input.input1}</p></div>`
    let test = await createHtmlpage(html)
    console.log(test)
})()


async function createHtmlpage(html, input){
    let thtml = html
    //console.log('hello')
    return thtml
}

