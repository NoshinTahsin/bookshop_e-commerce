 function Shop() {
    
    const uitil = Utiliy();
    const createCard=CardCreation();
    const product_list=ProductList();
    const cc=calculateCart();
    
    let cartProduct = [], counter = cartProduct.length;
    const counterDom = uitil.domQuery.getDomByQuery('.counter');
    uitil.domQuery.setDomInnerHTML(counterDom, counter);

    const productListDom = uitil.domQuery.getDomByQuery('.product-list');

    this.populateProduct = () => {
        const products = product_list.productList();
        let proDom = '';
        products.forEach(pro => {
            proDom += createCard.createCardDom(pro);
        });
        uitil.domQuery.setDomInnerHTML(productListDom, proDom);
        const btn = uitil.domQuery.getDomByClass('add-cart-btn');
        addToCartEvent(btn);
    }

    function addToCartEvent(dom) {

        const len = dom.length;
      //  window.alert(len);
        
        
        
        for (let e = 0; e < len; e++) {
 
            dom[e].addEventListener('click', (e) => {
               
                let {id} = e.target.dataset;
                id = parseInt(id);
                
                const disBtn = uitil.domQuery.getDomByQuery(`.button-${id}`);
                //disBtn.classList.add('disable');

                
               
                cc.cartCalculation(id);
                
                
            });
        }
    }

    

}




