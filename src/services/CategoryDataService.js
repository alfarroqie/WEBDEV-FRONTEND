import http from "../http-common";
const CATEGORY_BASE_URL = "/categorys"
class CategoryDataService{
    
    create(data) {
        return http.post(CATEGORY_BASE_URL+"/create", data);
    }

    getAll() {
        return http.get(CATEGORY_BASE_URL+"/");
    }
    
    async getAllCategorySitemap(){
        const result = await http.get(CATEGORY_BASE_URL+"/");
        let array = [];
        result.data.forEach(item => {
            array.push({
                    category : item.name
            })
        });
        return array;
    }

    get(id) {
        return http.get(CATEGORY_BASE_URL+`/id/${id}`);
    }

    update(id, data) {
        return http.put(CATEGORY_BASE_URL+`/id/${id}`, data);
    }

    delete(id) {
        return http.delete(CATEGORY_BASE_URL+`/id/${id}`);
    }
}

export default new CategoryDataService();