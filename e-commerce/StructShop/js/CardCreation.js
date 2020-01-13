function CardCreation(){ 
 
 function createCardDom(product) {
        return `
         
        <div class="card">
            <div class="product-image">
                <img src="${product.img}" alt="Book_Cover">
            </div>
            <div class="product-info">
                <h4 class="title">${product.title}</h4>
                <h4 class="author">${product.author}</h4>
                <h4 class="des">${product.des}</h4>
                <h4 class="price">$${product.price}</h4>
            </div>
             
            <div class="add-cart-action">
                <button class="add-cart-btn button-${product.id}" data-id="${product.id}">Add to Cart</button>
            </div>

            <div class="quantity di-button-${product.id}">
                <button class="minus-btn minus-btn-${product.id}" data-id="${product.id}" id="minus" type="button"   name="button">
                    -
                </button>
                <span class="pro-quantity pro-quantity-${product.id}">${product.quantity}</span>
    
                <button class="plus-btn plus-btn-${product.id}" data-id="${product.id}" id="plus" type="button"   name="button">
                    +
                </button>
            </div>


        </div>
        
        `;
    }

    return {
        
        createCardDom
    }
}