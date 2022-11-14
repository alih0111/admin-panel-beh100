import http from "./httpService";

export default function updateExist(id, data) {
  return http.put(`/category/${id}`, data);
}
