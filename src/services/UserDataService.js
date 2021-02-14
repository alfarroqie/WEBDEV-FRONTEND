import http from "../http-common";
import auth from "../services/authService";
const USER_BASE_URL = "/users"

class UserDataService{
    create(data) {
        return http.post(USER_BASE_URL+"/signup", data);
    }

    getAll(){
        return http.get(USER_BASE_URL);
    }
    login(data){
        return http.post(USER_BASE_URL+"/login", data);
    }

    changePassword(data){
        return http.put(USER_BASE_URL+"/change-password", data, {headers: auth()});
    }
    delete(id) {
        return http.delete(USER_BASE_URL+`/delete/${id}`, {headers: auth()});
    }
    getProfilUser(id){
        return http.get(USER_BASE_URL+`/${id}`);
    }
}

export default new UserDataService();