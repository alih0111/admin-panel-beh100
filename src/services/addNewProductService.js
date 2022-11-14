import http from "./httpService";
export function addNewProduct(data) {
  return http.post("/products",data);  
}
