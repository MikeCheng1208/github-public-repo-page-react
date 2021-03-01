import { useContext, useEffect, Fragment } from "react";
import star from "../../assets/star.svg";
import styled from "styled-components";
import context from "../../Context";
import { useScrollBottom } from "../../hooks/useScrollBottom";
import Loading from "../Loading";

const CardItem = styled.li`
  display: block;
  width: 500px;
  margin: 0 auto 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(rgb(71, 71, 71), 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
`;

const CardTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardDescription = styled.h2`
  color: #7f7f7f;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const CardLink = styled.a`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #888;
  text-decoration: none;
  margin-bottom: 5px;
  &:hover {
    color: #3d638a;
    font-weight: bold;
  }
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-weight: bold;
  color: #888;
`;

const StarIcon = styled.img`
  display: block;
  width: 20px;
  margin-right: 4px;
`;

function ReposList() {
  const store = useContext(context);
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
            <CardLink
              className="url"
              rel="noreferrer"
              href={item.html_url}
              target="_blank"
            >
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
