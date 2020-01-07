 function Shop() {
    
    const uitil = utiliy();

    let cartProduct = [], counter = cartProduct.length;
    const counterDom = uitil.domQuery.getDomByQuery('.counter');
    uitil.domQuery.setDomInnerHTML(counterDom, counter);

    const productListDom = uitil.domQuery.getDomByQuery('.product-list');
    this.populateProduct = () => {
        const products = uitil.productList();
        let proDom = '';
        products.forEach(pro => {
            proDom += uitil.createCardDom(pro);
        });
        uitil.domQuery.setDomInnerHTML(productListDom, proDom);
        const btn = uitil.domQuery.getDomByClass('add-cart-btn');
        addToCartEvent(btn);
    }

    function addToCartEvent(dom) {
        const len = dom.length;
        for (let e = 0; e < len; e++) {
            dom[e].addEventListener('click', (e) => {
                let {id} = e.target.dataset;
                id = parseInt(id);
                const disBtn = uitil.domQuery.getDomByQuery(`.button-${id}`);
                disBtn.classList.add('disable');
                cartCalculation(id);
            });
        }
    }

    function cartCalculation(id) {
        const products = uitil.productList();
        const product = products.find( pro => pro.id === id);
        cartProduct = [...cartProduct, product];
        uitil.storage.setData('cart-product', cartProduct);
        counter = cartProduct.length;
        uitil.domQuery.setDomInnerHTML(counterDom, counter);

        let showProduct=uitil.storage.getData('cart-product');
        let alertString="";

        for(ss=0;ss<counter;ss++){ 
            
            let no=ss+1;
            alertString+="Product-"+no+"\nTitle: "+showProduct[ss].title+
            "\nAuthor: "+showProduct[ss].author+
            "\nPrice: "+showProduct[ss].price+"\n\n";
   
        }

        window.alert( alertString);
    }

}

function utiliy() {
    
    function QuerySelector() {
        this.getDomByQuery = (selector) => {
            return document.querySelector(selector);
        }

        this.getDomByClass = (selector) => {
            return document.getElementsByClassName(selector);
        }

        this.setDomInnerHTML = (dom, value) => {
            dom.innerHTML = value;
        }
    }

    function WebStorage() {
        this.getData = (name, initValue) => {
            const data = localStorage.getItem(name);
            return data && IsJsonString(data) ? JSON.parse(data) : initValue;
        }

        this.setData = (name, data) => {
            const jsonString = JSON.stringify(data);
            localStorage.setItem(name, jsonString);
        }

        function IsJsonString(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
    }

    function productList() {
        return [
            {
                id: 1, img: 'fahrenhite.jpg',
                title: 'Fahrenhite 451', author:'Ray Bradbury', price: 'BDT 220', des: 'A dystopian novel'
            },
            {
                id: 2, img: 'animal_farm.jpg',
                title: 'Animal Farm', author: 'George Orwell', price: 'BDT 120', des: 'A political satire'
            },
            {
                id: 3, img: 'hp.jpg',
                title: 'Harry Potter and The Philosopher\'s Stone', author: 'J.K. Rowling ', price: 'BDT 170', des: 'Fantasy'
            },
            {
                id: 4, img: 'time_machine.jfif',
                title: 'The Time Machine', author: 'H.G. Wells', price: 'BDT 180', des: 'A Dystopian Sci-fi'
            },
            {
                id: 5, img: 'whitefang.png',
                title: 'White Fang', author: 'Jack London', price: 'BDT 150', des: 'A political satire'
            },
            {
                id: 6, img: 'matilda.jpg',
                title: 'Matilda', author: 'Roald Dahl', price: 'BDT 120', des: 'Children\'s book - Fantasy'
            },
            {
                id: 7, img: 'little_prince.jpg',
                title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', price: 'BDT 140', des: 'A political satire'
            },
            {
                id: 8, img: 'tale.jfif',
                title: 'A Tale of Two Cities', author: 'Charles Dickens', price: 'BDT 240', des: 'A political satire'
            },
            {
                id: 9, img: 'kafka.jpg',
                title: 'Kafka On The Shore', author: 'Haruki Murakami', price: 'BDT 220', des: 'A political satire'
            }
        ]
    }

    function createCardDom(product) {
        return `
        

        
        <div class="card">
            <div class="product-image">
                <img src="${product.img}" alt="Book_Cover">
            </div>
            <div class="product-info">
                <h4 class="title">${product.title}</h4>
                <h4 class="author">${product.author}</h4>
                <h4 class="des">${product.des}</h4>
                <h4 class="price">$${product.price}</h4>
            </div>
             
            <div class="add-cart-action">
                <button class="add-cart-btn button-${product.id}" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
        
        `;
    }

    return {
        domQuery: new QuerySelector(),
        productList,
        createCardDom,
        storage: new WebStorage()
    }
}