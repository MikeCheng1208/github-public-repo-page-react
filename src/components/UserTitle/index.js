import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import edit from "../../assets/edit.svg";
import checkMark from "../../assets/check-mark.svg";
import cancelButton from "../../assets/cancel-button.svg";
import context from "../../Context";

const UserTitleWrapper = styled.div``;

const AvatarImg = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 65px auto 20px auto;
  border: 5px solid #fff;
`;

const EditBox = styled.div`
  width: 310px;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditName = styled.h1`
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 25px;
  text-align: center;
`;
const EditInput = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 5px;
  font-size: 18px;
`;

const EditBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const EditBtn = styled.button`
  cursor: pointer;
  display: block;
  width: 18px;
  margin-left: 10px;
  border: none;
  background: none;
`;

const EditBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function UserTitle() {
  const store = useContext(context);
  const { state, setUserData } = store;
  const [editNameText, setEditNameText] = useState("MikeCheng1208");
  const [isEdit, setIsEdit] = useState(false);

  const handEdit = (bool) => {
    setIsEdit(bool);
  };

  useEffect(() => {
    if (!isEdit) return;
    setEditNameText(state.userName);
  }, [isEdit]); // eslint-disable-line

  const handNameChange = (e) => {
    setEditNameText(e.target.value);
  };

  const inputKeySubmit = (e) => {
    if (e.key === "Enter") {
      submitUserName();
    }
  };

  const submitUserName = () => {
    handEdit(false);
    if (editNameText === state.userName) return;
    setUserData(editNameText);
  };

  useEffect(() => {
    setUserData(editNameText);
  }, []); // eslint-disable-line

  return (
    <UserTitleWrapper>
      <AvatarImg src={state.avatarUrl} />
      <EditBox>
        {!isEdit && <EditName>{state.userName}</EditName>}
        {isEdit && (
          <EditInput
            type="text"
            value={editNameText}
            onChange={handNameChange}
            onKeyUp={inputKeySubmit}
          />
        )}
        <EditBtnBox>
          {!isEdit && (
            <EditBtn onClick={() => handEdit(true)}>
              <img src={edit} alt="" />
            </EditBtn>
          )}
          {isEdit && (
            <EditBtnWrapper>
              <EditBtn onClick={() => submitUserName()}>
                <img src={checkMark} alt="" />
              </EditBtn>
              <EditBtn onClick={() => handEdit(false)}>
                <img src={cancelButton} alt="" />
              </EditBtn>
            </EditBtnWrapper>
          )}
        </EditBtnBox>
      </EditBox>
    </UserTitleWrapper>
  );
}

export default UserTitle;
