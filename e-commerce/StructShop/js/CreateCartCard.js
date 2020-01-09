function CreateCartCard(){ 
 
 function CreateCartCard(cartItem) {
        return `
         
        <div class="cart-card">

            <div class="cart-product-image">
                <img src="${cartItem.img}" alt="Book_Cover">
            </div>
            <div class="cart-product-info">
                <h4 class="cart-title">${cartItem.title}</h4>
                <h4 class="cart-author">${cartItem.author}</h4>
                <h4 class="cart-des">${cartItem.des}</h4>
                <h4 class="cart-price">$${cartItem.price}</h4>
                
            </div>

            <div class="remove-cart-action">
                    <button class="remove-cart-btn button-${cartItem.id}" data-id="${cartItem.id}">Remove from cart</button>
            </div>

           


  

        </div>
        
        `;
    }

    return {
        
        CreateCartCard
    }
}