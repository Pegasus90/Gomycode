let price = document.querySelectorAll('.price');
let quantity = document.querySelectorAll('.quantity');
let buttonplus = document.querySelectorAll('.btnplus');
let buttonminus = document.querySelectorAll('.btnminus');
let remove = document.querySelectorAll('.delete');
let total = document.querySelector('.tot');
let item = document.querySelectorAll('.item');
let prices = [10,20,350,180];
let heart = document.querySelectorAll('.fa');

//Adding event listener + quantity

buttonplus.forEach((button,i) => {
    button.addEventListener('click', () => {
        quantity[i].innerHTML = parseInt(quantity[i].innerHTML)+1;
        price[i].innerHTML = parseInt(price[i].innerHTML)+prices[i];
        total.innerHTML = parseInt(total.innerHTML) + prices[i];
    });
});

//Adding event listener - quantity

buttonminus.forEach((button,i) => {
    button.addEventListener('click', () => {
        if(quantity[i].innerHTML>0){
            quantity[i].innerHTML = parseInt(quantity[i].innerHTML)-1;
            price[i].innerHTML = parseInt(price[i].innerHTML)-prices[i];
            total.innerHTML = parseInt(total.innerHTML) - prices[i];
        }
    });
});


price.forEach((e,i)=>{
    //remove
    remove[i].addEventListener ('click', ()=> {
        total.innerHTML = parseInt(total.innerHTML) - parseInt(price[i].innerHTML);
        if(total.innerHTML<0)total.innerHTML=0;
        item[i].remove();
    })
    //heart
    heart[i].addEventListener ('click', ()=> {
        if (heart[i].className == "fa fa-heart") heart[i].className = "fa fa-heart-o";
        else heart[i].className = "fa fa-heart";
    })
})