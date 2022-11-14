import http from "./httpService";

export function getAllCategories() {
  return http.get("/category");
}
