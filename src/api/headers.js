export default function () {
  let token = localStorage.getItem("token");
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  return headers;
}