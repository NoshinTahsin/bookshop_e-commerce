 function Shop() {
    
    const uitil = Utiliy();
    const createCard=CardCreation();
    const product_list=ProductList();
    const cc=calculateCart();
    const viewbtn = uitil.domQuery.getDomByQuery('.cart-image');
    const close = uitil.domQuery.getDomByQuery('.closebtn');
    const productListDom = uitil.domQuery.getDomByQuery('.product-list');
    const store_var=Storage();
    const rmv=RemoveItemFromCart();
    
    
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
        const plusbtn = uitil.domQuery.getDomByClass('plus-btn');
        const minusbtn = uitil.domQuery.getDomByClass('minus-btn');
        
       
        console.log(uitil.domQuery.getDomByClass('remove-cart-action'));

      // const plusbtn =  document.getElementById('plus');
     //  debugger
        addToCartEvent(btn,plusbtn,minusbtn);

    }

    const atc=AddToCart();
    const incdec=IncDec();

    function addToCartEvent(dom, domplus, domminus )
    {
        const len = dom.length;
        for (let e = 0; e < len; e++) {
            dom[e].addEventListener('click', (e) => {
                let {id} = e.target.dataset;
                id = parseInt(id);
               // debugger
                const disBtn = uitil.domQuery.getDomByQuery(`.button-${id}`);
                uitil.domQuery.getDomByQuery(`.di-button-${id}`).style.display="block";
                uitil.domQuery.getDomByQuery(`.button-${id}`).style.display="none";
                atc.AddToCart(id, viewbtn);  
            });
        }

        const lenplus = domplus.length;
        for (let e = 0; e < lenplus; e++) {
            domplus[e].addEventListener('click', (e) => {
                let {id} = e.target.dataset;
                incdec.IncDec(id, viewbtn);  
            });
        }

        const lenminus = domminus.length;
        for (let e = 0; e < lenminus; e++) {
            domminus[e].addEventListener('click', (e) => {
                let {id} = e.target.dataset;
                rmv.RemoveItem(id, viewbtn);  
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




