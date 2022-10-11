class Request {

    async get(url){
        const res = await fetch(url)
        return res.json();
    }

    delete(url){
        return fetch(url, {
            method: "DELETE",
            headers: {'Content-type': 'application/json'}
        })
    }

    post(url, payload){
        return fetch(url, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(payload)
        })
    }

    put(url){
        return fetch(url, {
            method: "PUT",
            headers: {'Content-type': 'application/json'}
        })
    
    }




    

}

export default Request;