import axios from "axios";

const gitHubRequest = axios.create({
  baseURL: "https://api.github.com/"
});

export const getUserData = name => gitHubRequest.get(`/users/${name}`);

export const getRepos = (name, page, per_page) =>
  gitHubRequest.get(
    `/users/${name}/repos?page=${page}&per_page=${per_page}&sort=pushed`
  );
