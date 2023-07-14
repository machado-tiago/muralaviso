document.addEventListener('DOMContentLoaded',()=>{
    getPosts()
})

function getPosts() {
    fetch("http://localhost:8080/post/all").then(res=>{
        return res.json()
    })
    .then(json=>{
        let postElements =''
        let postsJson= JSON.parse(json)//converte uma string em objeto JSON
        postsJson.forEach(element => {
            let htmlElement = `<tr>
                                    <td>${element.id}</td>
                                    <td>${element.title}</td>
                                    <td>${element.description}</td>
                               </tr>`
            postElements+=htmlElement
        })
        document.getElementById("posts").innerHTML=postElements
    });
}