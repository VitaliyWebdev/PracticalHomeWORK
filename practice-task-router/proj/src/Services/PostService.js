export default class PostService{
    url = 'https://jsonplaceholder.typicode.com/posts'


    async getAllPosts(id){
        return await fetch(this.url+id).then(value => value.json())
    }






}