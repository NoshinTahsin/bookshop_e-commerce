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
        </div>
        
        `;
    }

    return {
        
        createCardDom
    }
}