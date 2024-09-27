import { axios } from "../NetworkManager";

export const fetchIssue = () => {
  return axios
    .get(`http://localhost:3000/api/v1/issues`)
    .then((res) => {
      console.log(res, "response");
      return res;
    })
    .catch((err) => {});
};


export const createIssue = (payload) => {
  return axios
    .post(`http://localhost:3000/api/v1/issues`, payload)
    .then((res) => {
      console.log(res, "response");
      return res;
    })
    .catch((err) => {});
};


export const deleteIssue = (id) => {
  return axios
    .delete(`http://localhost:3000/api/v1/issues/${id}`)
    .then((res) => {
      console.log(res, "response");
      return res;
    })
    .catch((err) => {});
};

export const updateIssue = (id, payload) => {
  return axios
    .patch(`http://localhost:3000/api/v1/issues/${id}`, {
      title: payload.title,
      description: payload.description,
    })
    .then((res) => {
      console.log(res, "response");
      return res;
    })
    .catch((err) => {});
};
