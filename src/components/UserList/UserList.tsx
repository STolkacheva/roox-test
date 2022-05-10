import React, { useEffect } from "react";
import { UserItem } from "./UserItem/UserItem";
import { userType } from "../../types/userType";
import { useSelector } from "react-redux";
import { UserState } from "../../actions/actionTypes";
import { useActions } from "../../hooks/useActions";
import styled from "styled-components";

export const UserListEl = styled.div`
    margin: 3%;  
`;
export const Title = styled.label`
    font-weight: var(--fw-bold);
    font-size: var(--fs-l);
    line-height: var(--lh-largh);
`;
export const Total = styled.label`
    float: right;
    margin-top: 10px;
`;

const UserList: React.FC = () => {
  const { users, error, loading } = useSelector((state) => state) as UserState;

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка ... </h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <UserListEl>
      <Title>Список пользователей</Title>
      {users.map((user: userType) => (
        <UserItem user={user} key={user.id} />
      ))}
      <Total>Найдено {users.length} пользователей</Total>
    </UserListEl>
  );
};

export { UserList };
