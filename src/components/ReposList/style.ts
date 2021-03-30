import styled from "styled-components";

export const CardItem = styled.li`
  display: block;
  width: 500px;
  margin: 0 auto 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(rgb(71, 71, 71), 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
`;

export const CardTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardDescription = styled.h2`
  color: #7f7f7f;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const CardLink = styled.a`
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

export const StarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-weight: bold;
  color: #888;
`;

export const StarIcon = styled.img`
  display: block;
  width: 20px;
  margin-right: 4px;
`;