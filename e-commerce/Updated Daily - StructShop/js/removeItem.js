function RemoveItemFromCart(){

    function RemoveItem(rem_id){

        const store_var=Storage();
        let cartProduct=store_var.storage.getData('cart-product');

        function checkRemoval(){
            cartProduct.forEach(pro => {
                return pro.rem_id!=rem_id;
            });
        }

        cartProduct.filter(checkRemoval);
        store_var.storage.setData('cart-product', cartProduct);
 
    }  

    return {RemoveItem};
}