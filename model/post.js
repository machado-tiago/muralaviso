module.exports={
    posts: [
        {id:"id teste", title:"Título Teste",description:"Descrição teste"}
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        let id = generateId()
        let post = {id, title, description}
        this.posts.push(post)

    }
}

function generateId(){
    return Math.random().toString(36).substring(2,9)
}