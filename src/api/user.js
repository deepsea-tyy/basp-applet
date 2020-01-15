import req from '../utils/request'

export function userInfo() {
    return req.get("/user/info");
}

export function login(data) {
    return req.post("/user/login", data);
}
