function calculateCart(){

    function cartCalculation(id, viewbtn) {

    const cartcard=CreateCartCard();
    
    const store_var=Storage();
    const uitil = Utiliy();
    const counterDom = uitil.domQuery.getDomByQuery('.counter');
    const product_list=ProductList();
    const products = product_list.productList();
    const product = products.find( pro => pro.id === id);
    //quantity should be increased in localstorage
     
    let cartProduct=store_var.storage.getData('cart-product');
    var localstorageLength=cartProduct.length;
    //localstorageLength=parseInt(localstorageLength);

    //finding the product if it already exists
    var flagStore=false;

    if(localstorageLength!=0){
            for(ls=0;ls<localstorageLength;ls++){
                if( cartProduct[ls].id==id){
                    //product already added to local storage
                    //just increase the quantity 
                    cartProduct[ls].quantity++;
                    store_var.storage.setData('cart-product', cartProduct);
                    flagStore=true;
                }
            }
    }

    if(localstorageLength==0 || flagStore==false){
           //add product to localstorage
           cartProduct = [...cartProduct, product];
           store_var.storage.setData('cart-product', cartProduct);
    }
    
    counter = cartProduct.length;
    uitil.domQuery.setDomInnerHTML(counterDom, counter);
    
    let navcard = '';
    const navcardlist = uitil.domQuery.getDomByQuery('.nav-list');
    
    let rem_counter=0; //to set unique id for each remove button
    cartProduct=store_var.storage.getData('cart-product');
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
        //const rmv_cart = uitil.domQuery.getDomByQuery('.remove-cart-action');
        //rmv_cart_func(rmv_cart); 
        close.addEventListener('click', csn);
        function csn(){
            uitil.domQuery.getDomByQuery(".sidenav").style.width = "0px";
        }
    }

     
    }
    return {cartCalculation};
}