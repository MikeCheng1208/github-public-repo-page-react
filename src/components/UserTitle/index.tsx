import { useState, useContext, useEffect } from "react";
// import styled from "styled-components";
import edit from "../../assets/edit.svg";
import checkMark from "../../assets/check-mark.svg";
import cancelButton from "../../assets/cancel-button.svg";
import context from "../../Context";
import { MouseEventTarget, KeyEvent } from "./interface";
import { StoreType } from "../../Context/interface";
import { 
  UserTitleWrapper, AvatarImg, EditBox, EditName, EditInput, EditBtnBox, EditBtn, EditBtnWrapper 
} from "./style";

function UserTitle() {
  const store = useContext(context) as StoreType;
  const { state, setUserData } = store;
  const [editNameText, setEditNameText] = useState<string>("MikeCheng1208");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handEdit = (bool: boolean):void => {
    setIsEdit(bool as boolean);
  };

  useEffect(() => {
    if (!isEdit) return;
    setEditNameText(state.userName);
  }, [isEdit]); // eslint-disable-line

  const handNameChange = (e: MouseEventTarget) => {
    setEditNameText(e.target.value);
  };

  const inputKeySubmit:React.KeyboardEventHandler<HTMLInputElement> | undefined = (e: KeyEvent) => {
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
