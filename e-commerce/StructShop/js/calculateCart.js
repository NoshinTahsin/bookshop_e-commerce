function calculateCart(){

    function cartCalculation(id, viewbtn) {
  
    const cartcard=CreateCartCard();
    //const rmv=RemoveItemFromCart();
    
    const store_var=Storage();
    const uitil = Utiliy();

    const counterDom = uitil.domQuery.getDomByQuery('.counter');
    const product_list=ProductList();
    const products = product_list.productList();
    const product = products.find( pro => pro.id === id);

   //counter = cartProduct.length;
    
    //const counterDom = uitil.domQuery.getDomByQuery('.counter');
    //uitil.domQuery.setDomInnerHTML(counterDom, counter);
    let cartProduct=store_var.storage.getData('cart-product');
    cartProduct = [...cartProduct, product];

    store_var.storage.setData('cart-product', cartProduct);

    counter = cartProduct.length;
    uitil.domQuery.setDomInnerHTML(counterDom, counter);
    
    let alertString="";
    
    let navcard = '';
    const navcardlist = uitil.domQuery.getDomByQuery('.nav-list');
    
    cartProduct.forEach(pro => {
        navcard += cartcard.CreateCartCard(pro);
    });
 
    uitil.domQuery.setDomInnerHTML(navcardlist, navcard);

    


    for(ss=0;ss<counter;ss++){ 
        
        let no=ss+1;
        alertString+="Product-"+no+"\n\nTitle: "+showProduct[ss].title+
        "\nAuthor: "+showProduct[ss].author+
        "\nPrice: "+showProduct[ss].price+"\n\n";
    }

    
    viewbtn.addEventListener('click', osn);
    const close = uitil.domQuery.getDomByQuery('.closebtn');

    function osn(){
        
        uitil.domQuery.getDomByQuery(".sidenav").style.width = "500px";
        var para = uitil.domQuery.getDomByTag("P");
        // uitil.domQuery.setDomInnerHTML(para[0],alertString);
        close.addEventListener('click', csn);
        function csn(){
            uitil.domQuery.getDomByQuery(".sidenav").style.width = "0px";
        }
 
    }
     
    }

    return {cartCalculation};
}