//was working fine before calculateCart() 

function calculateCart(){

    
    function cartCalculation(id) {
        let cartProduct = [], counter = cartProduct.length;
    window.alert("ashchi");
    
    const store_var=Storage();
    const uitil = Utiliy();
    const counterDom = uitil.domQuery.getDomByQuery('.counter');
    const product_list=ProductList();
    const products = product_list.productList();
    const product = products.find( pro => pro.id === id);
    cartProduct = [...cartProduct, product];
    store_var.storage.setData('cart-product', cartProduct);
    counter = cartProduct.length;
    uitil.domQuery.setDomInnerHTML(counterDom, counter);
    let showProduct=store_var.storage.getData('cart-product');
    let alertString="";
 
    for(ss=0;ss<counter;ss++){ 
        
        let no=ss+1;
        alertString+="Product-"+no+"\nTitle: "+showProduct[ss].title+
        "\nAuthor: "+showProduct[ss].author+
        "\nPrice: "+showProduct[ss].price+"\n\n";

    }

    window.alert( alertString);
    }

    return {cartCalculation};
}