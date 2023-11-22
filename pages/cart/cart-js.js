



// first cart box 


let addBtn = document.querySelector('.plus-cart');
let subBtn = document.querySelector('.minus-cart');
let totalCart = document.querySelector('.total-cart');

addBtn.addEventListener('click', ()=>{
    totalCart.value = parseInt(totalCart.value) + 1;

})


subBtn.addEventListener('click', ()=>{
    if (totalCart.value <= 0) {
        totalCart.value = 0;
    }
    else{
        totalCart.value = parseInt(totalCart.value) - 1;
    }
    
})



// first cart box 



// second cart box 

let addBtn1 = document.querySelector('.plus-cart1');
let subBtn1 = document.querySelector('.minus-cart1');
let totalCart1 = document.querySelector('.total-cart1');

addBtn1.addEventListener('click', ()=>{
    totalCart1.value = parseInt(totalCart1.value) + 1;

})


subBtn1.addEventListener('click', ()=>{
    if (totalCart1.value <= 0) {
        totalCart1.value = 0;
    }
    else{
        totalCart1.value = parseInt(totalCart1.value) - 1;
    }
    
})

// second cart box 