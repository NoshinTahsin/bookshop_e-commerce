function RemoveBtnCart(){

    function RemoveBtnCart(rem_id, viewbtn){

        const cartcard=CreateCartCard();
        const store_var=Storage();
        const uitil = Utiliy();
        const counterDom = uitil.domQuery.getDomByQuery('.counter');
        let cartProduct=store_var.storage.getData('cart-product');
        var localstorageLength=cartProduct.length;
         
        for(ls=0;ls<localstorageLength;ls++){
             if( cartProduct[ls].id==rem_id){
                    uitil.domQuery.getDomByQuery(`.di-button-${rem_id}`).style.display="none";
                    uitil.domQuery.getDomByQuery(`.button-${rem_id}`).style.display="block";
                    var removed=cartProduct.splice(ls,1);
                    store_var.storage.setData('cart-product', cartProduct);
                     
                    break;
             
            }
        }

        counter = cartProduct.length;
        uitil.domQuery.setDomInnerHTML(counterDom, counter);
        
        let navcard = '';
        const navcardlist = uitil.domQuery.getDomByQuery('.nav-list');
        cartProduct=store_var.storage.getData('cart-product');
        console.log(cartProduct);

        let rem_counter=0; //to set unique id for each remove button
        cartProduct.forEach(pro => {
            
            navcard += cartcard.CreateCartCard(pro,rem_counter);
        });
    
        //want to acess the value of q and if 0, increment it
     
        uitil.domQuery.setDomInnerHTML(navcardlist, navcard);

        const remove_btn = uitil.domQuery.getDomByClass('remove-cart-action');
        removeClickButton(remove_btn);
        

        function removeClickButton(dom_remove_btn){
            const len_remove = dom_remove_btn.length;
            for (let e = 0; e < len_remove; e++) {
                dom_remove_btn[e].addEventListener('click', (e) => {
                    //debugger
                    let {id} = e.target.dataset;
                    RemoveBtnCart(id, viewbtn);  
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


            
    return {RemoveBtnCart};
}