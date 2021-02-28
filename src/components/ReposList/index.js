import { useContext, useEffect, Fragment } from "react";
import star from "../../assets/star.svg";
import styled from "styled-components";
import context from "../../Context";
import { useScrollBottom } from "../../hooks/useScrollBottom";
import Loading from "../Loading";

const CardBox = styled.ul`
  > li {
    display: block;
    width: 500px;
    margin: 0 auto 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 3px 5px rgba(rgb(71, 71, 71), 0.1);
    h1,
    h2,
    a,
    div {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }
    > h1.title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    > h2.description {
      color: #7f7f7f;
      font-size: 16px;
      margin-bottom: 5px;
    }
    > a {
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
    }
  }
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-weight: bold;
  color: #888;
  > img.star_icon {
    display: block;
    width: 20px;
    margin-right: 4px;
  }
`;

function ReposList() {
  const store = useContext(context);
  const { state, nextPage } = store;
  const { isBottom } = useScrollBottom();

  // 卷軸滑到底部
  useEffect(() => {
    if (!isBottom) return;
    nextPage();
  }, [isBottom]);

  return (
    <Fragment>
      <CardBox>
        {state.repoList.map((item) => (
          <li key={item.id}>
            <h1 className="title">{item.name}</h1>
            <h2 className="description">{item.description}</h2>
            <a
              className="url"
              rel="noreferrer"
              href={item.html_url}
              target="_blank"
            >
              {item.html_url}
            </a>
            <StarBox>
              <img className="star_icon" src={star} alt="" />
              {item.stargazers_count}
            </StarBox>
          </li>
        ))}
      </CardBox>
      {state.page < state.allPage && <Loading></Loading>}
    </Fragment>
  );
}

export default ReposList;
