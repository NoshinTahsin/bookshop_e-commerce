function IncDec(){
    function IncDec(id, viewbtn){
    
        const store_var=Storage();
        const uitil = Utiliy();
        const counterDom = uitil.domQuery.getDomByQuery('.counter');
        const product_list=ProductList();
        const products = product_list.productList();
        const product = products.find( pro => pro.id === id);
        
        let cartProduct=store_var.storage.getData('cart-product');
        var localstorageLength=cartProduct.length;
    
        var flagStore=false;

        if(localstorageLength!=0){
                for(ls=0;ls<localstorageLength;ls++){
                    if(cartProduct[ls].id==id){
                        //product already added to local storage
                        //just increase the quantity 
                        cartProduct[ls].quantity++;
                        var id_to_update=cartProduct[ls].id;
                        const up_q=uitil.domQuery.getDomByQuery(`.pro-quantity-${id_to_update}`);
                        uitil.domQuery.setDomInnerHTML(up_q,cartProduct[ls].quantity);
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

        var latestQuantity=uitil.domQuery.getDomInnerHTML(uitil.domQuery.getDomByQuery(`.quantity-${id}`));
        // window.alert(latestQuantity);
        console.log(latestQuantity)
        latestQuantity=parseInt(latestQuantity);

        uitil.domQuery.setDomInnerHTML(uitil.domQuery.getDomByQuery(`.quantity-${id}`),latestQuantity+1);
        

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
 
        viewbtn.addEventListener('click', function () {
            uitil.domQuery.getDomByQuery(".sidenav").style.width = "500px";
            var para = uitil.domQuery.getDomByTag("P");
            //const rmv_cart = uitil.domQuery.getDomByQuery('.remove-cart-action');
            //rmv_cart_func(rmv_cart); 
            close.addEventListener('click', function () {
                uitil.domQuery.getDomByQuery(".sidenav").style.width = "0px";
            });
            
        });
        const close = uitil.domQuery.getDomByQuery('.closebtn');

    }

    return {IncDec};
}