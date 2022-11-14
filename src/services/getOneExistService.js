import http from "./httpService";

export function getOneExist(id){
    return http.get(`/category/${id}`)
}