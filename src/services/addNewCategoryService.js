import http from "./httpService";
export function addNewCategory(data) {
  return http.post("/category",data);  
}
