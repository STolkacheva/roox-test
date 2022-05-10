import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userType } from "../../types/userType";
import styled from "styled-components";

export const UserInfoEl = styled.div`
  margin: 3%;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  @media (max-width: 559px) {    
    > div {
      flex-flow: column;
    }
  }
`;
export const User = styled.div `
  width: 440px;
  box-sizing: border-box;
  border-radius: var(--radius);
  border: 1px solid var(--light-grey);
  padding: 3%;

  p {
    font-size: var(--fs-s);
  }
  
  @media (min-width: 560px) and (max-width: 665px) {
    width: 350px;
  }

  @media (max-width: 559px) {
    width: auto;
  }
`;
export const Input = styled.input`
  border: 1px solid #D8D8D8;
  border-radius: var(--radius-small);
  padding: 5px;
  width: 97%;
  opacity: ${(props) =>
    props.readOnly ? '0.3' : '1'};

  :required {
    border: 1px solid ${(props) =>
      props.value === "" ? "#ff0000" : '#D8D8D8'};
  }
`;
export const InputArea = styled(Input)`
  height: 55px;
`;
export const Button = styled.button`
`;
export const ButtonSubmit =  styled(Button)`
  background: ${(props) =>
    props.disabled ? 'var(--dark-grey)' : 'var(--green)'};
  margin-top: 10px;
  float: right;
`;
export const Title = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fs-l);
  line-height: var(--lh-largh);
`;

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<userType>();
  const [readonlyMode, setReadonlyMode] = useState(true);
  const [comment, setComment] = useState("");

  const location = useLocation();
  const item = location.state as userType;

  useEffect(() => {
    setUser(item);
  }, [item]);

  const onChangeField = (evt: { target: { name: string; value: string } }) => {
    const { name, value } = evt.target;
    setUser((prev) => ({ ...prev, [name]: value } as userType));
  };

  const onChangeFieldAddress = (evt: { target: { name: string; value: string } }) => {
    const { name, value } = evt.target;
    setUser((prev) => ({
       ...prev, 
       address: {
         ...prev?.address,
         [name]: value 
        }
      } as userType));
  };
  const onHandleEdit = () => {
    setReadonlyMode(!readonlyMode);
  };

  const onHandleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const info = {
      user: user,
      comment: comment,
    };
    console.log(info);    
  };

  return user ? (
    <UserInfoEl>
      <div>
        <Title>Профиль пользователя</Title>
        <Button onClick={onHandleEdit}>
          Редактировать
        </Button>
      </div>
      <form onSubmit={onHandleSubmit}>
      <User>
        <p>Name</p>
        <Input
          name="name"
          value={user.name}
          onChange={onChangeField}
          readOnly={readonlyMode}
          required
        />
        <p>User name</p>
        <Input
          name="username"
          value={user.username}
          onChange={onChangeField}
          readOnly={readonlyMode}
          required
        />
        <p>E-mail</p>
        <Input
          name="email"
          value={user.email}
          onChange={onChangeField}
          readOnly={readonlyMode}
          required
        />
        <p>Street</p>
        <Input
          name="street"
          value={user.address.street}
          onChange={onChangeFieldAddress}
          readOnly={readonlyMode}
          required
        />
        <p>City</p>
        <Input
          name="city"
          value={user.address.city}
          onChange={onChangeFieldAddress}
          readOnly={readonlyMode}
          required
        />
        <p>Zip code</p>
        <Input
          name="zipcode"
          value={user.address.zipcode}
          onChange={onChangeFieldAddress}
          readOnly={readonlyMode}
          required
        />
        <p>Phone</p>
        <Input
          name="phone"
          value={user.phone}
          onChange={onChangeField}
          readOnly={readonlyMode}
          required
        />
        <p>Website</p>
        <Input
          name="website"
          value={user.website}
          onChange={onChangeField}
          readOnly={readonlyMode}
          required
        />
        <p>Comment</p>
        <InputArea
          name="comment"
          value={comment}
          onChange={(e) => { setComment(e.target.value) }}
          readOnly={readonlyMode}
        />
      </User>
      <ButtonSubmit disabled={readonlyMode} type="submit"> Отправить </ButtonSubmit>
      </form>
    </UserInfoEl>
  ) : null;
};

export { UserInfo };
