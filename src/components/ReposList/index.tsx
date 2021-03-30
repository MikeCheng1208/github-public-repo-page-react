import { useContext, useEffect, Fragment } from "react";
import star from "../../assets/star.svg";
// import styled from "styled-components";
import context from "../../Context";
import { useScrollBottom } from "../../hooks/useScrollBottom";
import Loading from "../Loading";
import {  StoreType } from "../../Context/interface";
import { 
  CardItem,
  CardTitle,
  CardDescription,
  CardLink,
  StarBox,
  StarIcon,
 } from "./style";

function ReposList() {
  const store = useContext(context) as StoreType;
  const { state, nextPage } = store;
  const { isBottom } = useScrollBottom();

  // 卷軸滑到底部
  useEffect(() => {
    if (!isBottom) return;
    nextPage();
  }, [isBottom]); // eslint-disable-line

  return (
    <Fragment>
      <ul>
        {state.repoList.map((item) => (
          <CardItem key={item.id}>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardLink rel="noreferrer" href={item.html_url} target="_blank">
              {item.html_url}
            </CardLink>
            <StarBox>
              <StarIcon src={star} />
              {item.stargazers_count}
            </StarBox>
          </CardItem>
        ))}
      </ul>
      {state.page < state.allPage && <Loading></Loading>}
    </Fragment>
  );
}

export default ReposList;
