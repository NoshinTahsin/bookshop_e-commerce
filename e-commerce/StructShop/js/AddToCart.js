function AddToCart(){
    function AddToCart(id,viewbtn){
        
    const cartcard=CreateCartCard();
    
    const store_var=Storage();
    const uitil = Utiliy();
    const counterDom = uitil.domQuery.getDomByQuery('.counter');
    const product_list=ProductList();
    const products = product_list.productList();
    const product = products.find( pro => pro.id === id);
    //quantity should be increased in localstorage
     
    let cartProduct=store_var.storage.getData('cart-product');
   // var localstorageLength=cartProduct.length;
    //localstorageLength=parseInt(localstorageLength);

    //add product to localstorage
    cartProduct = [...cartProduct, product];
    store_var.storage.setData('cart-product', cartProduct);
    
    counter = cartProduct.length;
    uitil.domQuery.setDomInnerHTML(counterDom, counter);
    
    let navcard = '';
    const navcardlist = uitil.domQuery.getDomByQuery('.nav-list');
   // const productListDom = uitil.domQuery.getDomByQuery('.product-list');

    
    let rem_counter=0; //to set unique id for each remove button
    cartProduct=store_var.storage.getData('cart-product');
    cartProduct.forEach(pro => {
        rem_counter+=1;
        var id_to_update=pro.id;
        const up_q=uitil.domQuery.getDomByQuery(`.pro-quantity-${id_to_update}`);
        uitil.domQuery.setDomInnerHTML(up_q,pro.quantity);
        navcard += cartcard.CreateCartCard(pro,rem_counter);
    });

    //want to acess the value of q and if 0, increment it
 
    uitil.domQuery.setDomInnerHTML(navcardlist, navcard);

    const remove_btn = uitil.domQuery.getDomByClass('remove-cart-action');
    removeClickButton(remove_btn);
    const rmv_button=RemoveBtnCart(); 

    function removeClickButton(dom_remove_btn){
        const len_remove = dom_remove_btn.length;
        for (let e = 0; e < len_remove; e++) {
            dom_remove_btn[e].addEventListener('click', (e) => {
              //  debugger
                let {id} = e.target.dataset;
                rmv_button.RemoveBtnCart(id, viewbtn);  
            });
        }
    }
 
    viewbtn.addEventListener('click', osn);
    const close = uitil.domQuery.getDomByQuery('.closebtn');
  
    function osn(){
        uitil.domQuery.getDomByQuery(".sidenav").style.width = "500px";
        var para = uitil.domQuery.getDomByTag("P");
        //const rmv_cart = uitil.domQuery.getDomByQuery('.remove-cart-action');
        //rmv_cart_func(rmv_cart); 
        close.addEventListener('click', csn);
        function csn(){
            uitil.domQuery.getDomByQuery(".sidenav").style.width = "0px";
        }
    }

     

    }

    return {AddToCart};
}