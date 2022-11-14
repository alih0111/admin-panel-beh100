import http from "./httpService";

export function deleteCategory(id){
    return http.delete(`/category/${id}`)
}