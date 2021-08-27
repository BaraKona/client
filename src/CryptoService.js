//Service that handles making requests:  For this we use axios
import axios from 'axios';

const url= 'http://localhost:5000/api/crypto';

class cryptoService {

    //Get
    static getCrypto() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(crypto => ({
                        ...crypto,
                        //createdAt: new Date(crypto.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    //Create
    static insertCrypto(text){
        return axios.post(url, {
            text
        });
    }
    //Delete
    static deleteCrypto(id){
        return axios.delete(`${url}${id}`);
    }
}

export default cryptoService;