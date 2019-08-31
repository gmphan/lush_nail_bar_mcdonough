$('#home-form-1').submit(function(e){
    e.preventDefault();
    console.log('submit function hit');
    await ajaxFunc('POST', '/email', 'testing')
});
