function calculateCart(){

    function cartCalculation(id, viewbtn) {

    const cartcard=CreateCartCard();
    const rmv=RemoveItemFromCart(); 
    const store_var=Storage();
    const uitil = Utiliy();
    const counterDom = uitil.domQuery.getDomByQuery('.counter');
    const product_list=ProductList();
    const products = product_list.productList();
    const product = products.find( pro => pro.id === id);
 
    let cartProduct=store_var.storage.getData('cart-product');
    cartProduct = [...cartProduct, product];
    store_var.storage.setData('cart-product', cartProduct);

    counter = cartProduct.length;
    uitil.domQuery.setDomInnerHTML(counterDom, counter);
    
    let navcard = '';
    const navcardlist = uitil.domQuery.getDomByQuery('.nav-list');
    
    let rem_counter=0; //to set unique id for each remove button
    cartProduct.forEach(pro => {
        rem_counter+=1;
        navcard += cartcard.CreateCartCard(pro,rem_counter);
    });

    //want to acess the value of q and if 0, increment it
 
    uitil.domQuery.setDomInnerHTML(navcardlist, navcard);
 
    viewbtn.addEventListener('click', osn);
    const close = uitil.domQuery.getDomByQuery('.closebtn');
  
    function osn(){
        uitil.domQuery.getDomByQuery(".sidenav").style.width = "500px";
        var para = uitil.domQuery.getDomByTag("P");
        const rmv_cart = uitil.domQuery.getDomByQuery('.remove-cart-action');
        rmv_cart_func(rmv_cart); 
        close.addEventListener('click', csn);
        function csn(){
            uitil.domQuery.getDomByQuery(".sidenav").style.width = "0px";
        }
    }

    function rmv_cart_func(dom){
            
        const len = dom.length;         
        for (let e = 0; e < len; e++) {
            dom[e].addEventListener('click', (e) => {
                let {rem_id} = e.target.dataset;
                rem_id = parseInt(rem_id);
                rmv.RemoveItem(rem_id);  
            });
        }      
    }
    }
    return {cartCalculation};
}