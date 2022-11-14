import http from "./httpService";

export function getTree() {
  return http.get("/tree");
}
