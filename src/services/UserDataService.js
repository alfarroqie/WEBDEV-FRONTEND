import http from "../http-common";
const USER_BASE_URL = "/users"

class UserDataService{

    login(data){
        return http.post(USER_BASE_URL+"/login", data);
    }

    changePassword(data){
        return http.put(USER_BASE_URL+"/change-password", data);
    }
    delete(id) {
        return http.delete(USER_BASE_URL+`/id/${id}`);
    }
}

export default new UserDataService();