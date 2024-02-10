const http=require("https").get
    const promise1=(url)=>{
        return new Promise((resolve,reject)=>{
            const request = http(url, (response) => {
                let data = ''
                response.on('data', (chunk) => {
                    data += chunk;
                })
                response.on('end', () => {
                    resolve(JSON.parse(data));
                })
            })
            request.on('error', (error) => {
                reject(error);
            })
        })
    }
    

promise1('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => console.log(data))
    .catch((error) => console.error(error))