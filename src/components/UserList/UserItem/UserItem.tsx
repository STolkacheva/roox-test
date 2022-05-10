import React from "react";
import { userType } from "../../../types/userType";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const UserItemEl = styled.div`
  width: 420px;
  margin-top: 20px;
  padding: 10px;
  background: var(--light-grey);
  border-radius: var(--radius);
  display: flex;
  justify-content: space-between;

  @media (min-width: 560px) and (max-width: 665px) {
    max-width: 300px;
    flex-flow: column;
  }

  @media (max-width: 559px) {
    width: auto;
    flex-flow: column;
  }
`;
export const Link = styled.a`
  align-self: end;
  color: var(--blue);
  :hover {
    opacity: 0.5;
  }
`;
export const UserItemInfo = styled.div`
  > div {
      margin-top: 7px;

      &:first-child {
      margin-top: 0;
    }
  }
`;
export const ItemTitle = styled.label`
  color: var(--dark-grey);
  margin-right: 7px;
`;
export const ItemValue = styled.label`
`;

interface IUserItem {
  user: userType;
}

const UserItem: React.FC<IUserItem> = (props) => {
  const { user } = props;
  const navigate = useNavigate();

  const onHandleInfo = (item: userType) => {
    navigate(`/${item.id}`, { state: { ...item } });
  };

  return (
    <UserItemEl>
      <UserItemInfo>
        <div>
          <ItemTitle>ФИО: </ItemTitle>
          <ItemValue>{user.name}</ItemValue>
        </div>
        <div>
          <ItemTitle>город; </ItemTitle>
          <ItemValue>{user.address.city}</ItemValue>
        </div>
        <div>
          <ItemTitle>компания: </ItemTitle>
          <ItemValue>{user.company.name}</ItemValue>
        </div>
      </UserItemInfo>
      <Link onClick={() => onHandleInfo(user)} key={user.id}>
        Подробнее
      </Link>
    </UserItemEl>
  );
};

export { UserItem };
