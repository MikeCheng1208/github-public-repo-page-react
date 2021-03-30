export interface RepoDetails{
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    [x: string]: any
}

export interface ArrType {
    repoList: Array<RepoDetails>;
    userName: string;
    page: number;
    allPage: number;
    avatarUrl: string;
    updatedAt: string;
    publicRepos: number;
    limit: number;
}

export interface StoreType {
    state: ArrType;
    nextPage: ()=> void;
    setUserData: (text: string)=> void;
    fetchRepos: (name: string)=> void;
}
