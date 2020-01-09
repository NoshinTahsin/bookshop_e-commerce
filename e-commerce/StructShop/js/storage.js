function Storage(){
    
    function WebStorage() {

    this.getData = (name, initValue=[]) => {
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

return {
   
    storage: new WebStorage()
}

}


