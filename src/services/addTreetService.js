import http from "./httpService";
export function addTree(data) {
  return http.post("/tree",data);  
}
