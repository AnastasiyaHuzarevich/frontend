import axios from 'axios';

const ITEM_API_BASE_URL = 'http://localhost:8080/api/v1/item';

class ItemService{

    getItems(){
        return axios.get(ITEM_API_BASE_URL);
    }
    
    deleteAllDone(){
        return axios.delete('http://localhost:8080/api/v1/item/deleteAll');
    }

    addTodo(){
        return axios.post('http://localhost:8080/api/v1/item');
    }
}

export default new ItemService();
