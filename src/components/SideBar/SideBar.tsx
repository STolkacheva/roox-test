import React from "react";
import { useActions } from "../../hooks/useActions";
import styled from "styled-components";

const SideBarEl = styled.div`
  width: 150px;
  padding: 3%;
  background: var(--grey);
  display: flex;
  flex-flow: column;
  
  > p {
    margin-top: 0;
    margin-bottom: 10px
  }

  @media (max-width: 559px) {
    width: auto;
  }
`;
const Button = styled.button`
  margin-bottom: 10px;
`;

const SideBar: React.FC = () => {

  const { sortByCity, sortByCompany } = useActions();

  const onSortByCompany = () => {
    sortByCompany();
  };
  const onSortByCity = () => {
    sortByCity();
  };

  return (
    <SideBarEl>
      <p>Сортировка</p>
      <Button onClick={onSortByCity} > По городу </Button>
      <Button onClick={onSortByCompany} > По компании </Button>
    </SideBarEl>
  );
};

export { SideBar };
