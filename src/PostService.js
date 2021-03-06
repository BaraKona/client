//Service that handles making requests:  For this we use axios
import axios from 'axios';

const url= 'http://localhost:5000/api/posts';

class postService {

    //Get
    static getPosts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    //Create
    static insertPost(text){
        return axios.post(url, {
            text
        });
    }
    //Delete
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default postService;