const bestPrice = document.getElementById('best-price');
const total = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');

// memory event
const extraMemoryCharge = document.getElementById('memory-cost');
document.getElementById('memory-8bg').addEventListener('click', function(){
   extraMemoryCharge.innerText = '0'
   updateTotalPrice()
});
document.getElementById('memory-16bg').addEventListener('click', function(){
    extraMemoryCharge.innerText = '180';
    updateTotalPrice()
});

// storage cost event  
const storageCost = document.getElementById('storage-cost');
document.getElementById('storage-512bg').addEventListener('click', function(){
    storageCost.innerText = '100';
    updateTotalPrice();
});
document.getElementById('storage-1tb').addEventListener('click', function(){
    storageCost.innerText = '180';
    updateTotalPrice();
});
document.getElementById('storage-256bg').addEventListener('click', function(){
    storageCost.innerText = '0';
    updateTotalPrice();
});

// delivery charge event 
const deliveryCharge = document.getElementById('delivery-charge');
document.getElementById('free-charge').addEventListener('click', function(){
    deliveryCharge.innerText = '0';
    updateTotalPrice();
});
document.getElementById('charge-20d').addEventListener('click', function(){
    deliveryCharge.innerText = '20';
    updateTotalPrice();
});

// update total price
function updateTotalPrice(){
    const extraMemoryPrice = Number(extraMemoryCharge.innerText);
    const productPrice = Number(bestPrice.innerText);
    const storagePrice = Number(storageCost.innerText);
    const shippingCharge = Number(deliveryCharge.innerText);
    const totalPrice = extraMemoryPrice + productPrice + storagePrice + shippingCharge;
    grandTotal.innerText = totalPrice;
    total.innerText = totalPrice;
}

// promo code event
document.getElementById('promo-apply-button').addEventListener('click', function(){
    updateTotalPrice()
    const finalTotal = total.innerText;
    const pomoInput = document.getElementById('promo-code');
    const pomoValid = pomoInput.value;
    if(pomoValid == 'stevekaku'){
        const finalPrice = (finalTotal - finalTotal * .2);
        grandTotal.innerText = finalPrice;    
     }
});

