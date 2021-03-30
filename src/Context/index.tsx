import { createContext, useEffect, useState, ReactNode } from "react";
import { apiGetUserData, apiGetRepos } from "../api";
import notFound from "../assets/notFound.jpg";
import { StoreType, ArrType } from "./interface";

type Props = {
  children: ReactNode
};


const context = createContext({} as StoreType);
export default context;
export const DataProvider = ({ children }:Props) => {
  const [state, setState] = useState<ArrType>({
    userName: "",
    repoList: [],
    avatarUrl: "",
    updatedAt: "",
    publicRepos: 0,
    page: 1,
    limit: 10,
    allPage: 0,
  });

  const setUserData = (user: string) => {
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
    setState((state) => ({
      ...state,
      page: state.page + 1,
    }));
  };

  useEffect(() => {
    if (!state.userName) return;
    fetchUserData(state.userName);
  }, [state.userName]);

  // 取得user資料
  const fetchUserData = async (name: string) => {
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
  const fetchRepos = async (names: string) => {
    if (state.page > state.allPage) return;
    const repos =  await apiGetRepos(names, state.page, state.limit);
    setState((state) => ({
      ...state,
      repoList: [...state.repoList, ...repos.data], 
    }));
  };

  const value: StoreType= {
    state,
    setUserData,
    nextPage,
    fetchRepos,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};
