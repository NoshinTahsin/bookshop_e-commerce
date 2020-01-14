function Utiliy() {
    
    function QuerySelector() {
        this.getDomByQuery = (selector) => {
            return document.querySelector(selector);
        }

        this.getDomByClass = (selector) => {
            return document.getElementsByClassName(selector);
        }

        

        this.getDomByTag = (selector) => {
            return document.getElementsByTagName(selector);
        }

        this.getDomInnerHTML = (dom) => {
            return dom.innerHTML;
        }

        this.setDomInnerHTML = (dom, value) => {
            dom.innerHTML = value;
        }
    }
 

    return {
        domQuery: new QuerySelector() 
    }
}
