import { createContext, useEffect, useState } from "react";
import { apiGetUserData, apiGetRepos } from "../api";
import notFound from "../assets/notFound.jpg";

const context = createContext();
export default context;

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({
    userName: "",
    repoList: [],
    avatarUrl: "",
    updatedAt: "",
    publicRepos: 0,
    page: 1,
    limit: 10,
    allPage: 0,
  });

  const setUserData = (user) => {
    setState((state) => ({
      ...state,
      userName: user,
      repoList: [],
      avatarUrl: "",
      updatedAt: "",
      publicRepos: 0,
      page: 1,
      limit: 10,
      allPage: 0,
    }));
  };

  const nextPage = () => {
    let i = state.page;
    i++;
    setState((state) => ({
      ...state,
      page: i,
    }));
  };

  useEffect(() => {
    if (!state.userName) return;
    fetchUserData(state.userName);
  }, [state.userName]);

  // 取得user資料
  const fetchUserData = async (name) => {
    try {
      const ud = await apiGetUserData(name);
      const { login, avatar_url, public_repos, updated_at } = ud.data;
      setState((state) => ({
        ...state,
        userName: login,
        avatarUrl: avatar_url,
        updatedAt: updated_at,
        publicRepos: public_repos,
        allPage: Math.ceil(public_repos / state.limit),
      }));
    } catch (error) {
      if (error.response.status === 404) {
        setState((state) => ({
          ...state,
          avatarUrl: notFound,
          userName: "This user is not found!",
        }));
      }
    }
  };

  useEffect(() => {
    if (!state.userName) return;
    if (state.allPage === 0) return;
    fetchRepos(state.userName);
  }, [state.userName, state.page, state.allPage]); // eslint-disable-line

  // 取得Repo列表
  const fetchRepos = async (name) => {
    if (state.page > state.allPage) return;
    const repos = await apiGetRepos(name, state.page, state.limit);
    setState((state) => ({
      ...state,
      repoList: [...state.repoList, ...repos.data],
    }));
  };

  const value = {
    state,
    setUserData,
    nextPage,
    fetchRepos,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};
