
let body = document.querySelector('body');

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    body.className = 'them1';
});
let btn= document.getElementById('item');
btn.addEventListener('click', ()=>{
    if(body.className == 'them1'){
        body.className = 'them2';
    }else if(body.className == 'them2'){
          body.className = 'them3'
    }else{
        body.className='them1'
    }
})