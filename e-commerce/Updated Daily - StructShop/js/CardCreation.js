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
                <button class="plus-btn" id="plus" type="button" onclick="increment()" name="button">
                    <img src="assets/plus.svg" alt="" />
                </button>
                <span class="pro-quantity">${product.quantity}</span>
                <button class="minus-btn" id="minus" type="button" onclick="decrement()" name="button">
                    <img src="assets/minus.svg" alt=""/>
                </button>
            </div>


        </div>
        
        `;
    }

    return {
        
        createCardDom
    }
}