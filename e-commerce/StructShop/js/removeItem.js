function RemoveItemFromCart(){

    function RemoveItem(rem_id, viewbtn){

        const cartcard=CreateCartCard();
    
        const store_var=Storage();
        const uitil = Utiliy();
        const counterDom = uitil.domQuery.getDomByQuery('.counter');
        // const product_list=ProductList();
        //const products = product_list.productList();
        ///const product = products.find( pro => pro.id === id);
        //quantity should be increased in localstoragelet cartProduct=store_var.storage.getData('cart-product');
        let cartProduct=store_var.storage.getData('cart-product');
        var localstorageLength=cartProduct.length;
        //localstorageLength=parseInt(localstorageLength);
        //finding the product if it already exists
        //var flagStore=false;

        for(ls=0;ls<localstorageLength;ls++){
           // window.alert(cartProduct[ls].id);
            if( cartProduct[ls].id==rem_id){
                //product already added to local storage
                //just increase the quantity 
                if(cartProduct[ls].quantity>1){
                    cartProduct[ls].quantity--;
                    var id_to_update=cartProduct[ls].id;
                    const up_q=uitil.domQuery.getDomByQuery(`.pro-quantity-${id_to_update}`);
                    uitil.domQuery.setDomInnerHTML(up_q,cartProduct[ls].quantity);
                    store_var.storage.setData('cart-product', cartProduct);
            }

            else{
                    //need to remove the item from localstorage
                    uitil.domQuery.getDomByQuery(`.di-button-${rem_id}`).style.display="none";
                    console.log(uitil.domQuery.getDomByQuery(`.button-${rem_id}`), rem_id );
                    uitil.domQuery.getDomByQuery(`.button-${rem_id}`).style.display="block";
                    var removed=cartProduct.splice(ls,1);
                    store_var.storage.setData('cart-product', cartProduct);
                    
                    
                    break;
            }
            
                // flagStore=true;
            
            }
        }

        counter = cartProduct.length;
        uitil.domQuery.setDomInnerHTML(counterDom, counter);
        
        var latestQuantity=uitil.domQuery.getDomInnerHTML(uitil.domQuery.getDomByQuery(`.quantity-${rem_id}`));
        latestQuantity=parseInt(latestQuantity);
        // debugger
        if(latestQuantity>1){
            uitil.domQuery.setDomInnerHTML(uitil.domQuery.getDomByQuery(`.quantity-${rem_id}`),latestQuantity-1);
        }
        else{
            const rrr=RemoveBtnCart();
            rrr.RemoveBtnCart(rem_id,viewbtn);
        }

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
       
    return {RemoveItem};
}