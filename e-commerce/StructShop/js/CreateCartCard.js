function CreateCartCard(){ 
 
 function CreateCartCard(cartItem) {
        return `
         
        <div class="card">
            <div class="product-image">
                <img src="${cartItem.img}" alt="Book_Cover">
            </div>
            <div class="product-info">
                <h4 class="title">${cartItem.title}</h4>
                <h4 class="author">${cartItem.author}</h4>
                <h4 class="des">${cartItem.des}</h4>
                <h4 class="price">$${cartItem.price}</h4>
            </div>
             
            <div class="add-cart-action">
                <button class="add-cart-btn button-${cartItem.id}" data-id="${cartItem.id}">Add to Cart</button>
            </div>
        </div>
        
        `;
    }

    return {
        
        CreateCartCard
    }
}