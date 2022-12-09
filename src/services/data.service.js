const baseUrl = "http://localhost:4000"

export const dataService = {
    getData
}

async function getData() {
    const requestOptions = {
        method: 'GET',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    }

    return fetch(`${baseUrl}` + "/data", requestOptions)
        .then((res) => {
            return res.json();
        });
}