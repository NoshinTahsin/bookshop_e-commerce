 function Shop() {
    
    const uitil = Utiliy();
    const createCard=CardCreation();
    const product_list=ProductList();
    const cc=calculateCart();
    const viewbtn = uitil.domQuery.getDomByQuery('.cart-image');
    const close = uitil.domQuery.getDomByQuery('.closebtn');
    const productListDom = uitil.domQuery.getDomByQuery('.product-list');
    const store_var=Storage();
    
    let cartProduct=[];
    store_var.storage.setData('cart-product', cartProduct);

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
        for (let e = 0; e < len; e++) {
            dom[e].addEventListener('click', (e) => {
                let {id} = e.target.dataset;
                id = parseInt(id);
                const disBtn = uitil.domQuery.getDomByQuery(`.button-${id}`);
                uitil.domQuery.getDomByQuery(`.di-button-${id}`).style.display="block";
                cc.cartCalculation(id, viewbtn);  
            });
        }
    } 

    viewbtn.addEventListener('click', osn);
    function osn(){
        uitil.domQuery.getDomByQuery(".sidenav").style.width = "500px";
        var para = uitil.domQuery.getDomByTag("P"); 
    }  
    
    close.addEventListener('click', csn);
    function csn(){
       uitil.domQuery.getDomByQuery(".sidenav").style.width = "0px";
    }

   

}




