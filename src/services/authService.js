export default function authService() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accesstoken) {
    //   return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'Authorization': user.accesstoken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }