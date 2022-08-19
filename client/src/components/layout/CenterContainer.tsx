import React, { ReactNode } from "react";
import styled from "styled-components";

type props = { children: ReactNode; isRowCenter?: boolean };

const CenterContainer = ({ children, isRowCenter }: props) => {
  return (
    <S.Container isRowCenter={isRowCenter ?? false}>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
};

export default CenterContainer;

const S: any = {};

S.Container = styled.div<{ isRowCenter: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isRowCenter }) => (isRowCenter ? "center" : "normal")};
  align-items: center;
  min-height: 80vh;
`;

S.Wrapper = styled.div`
  max-width: 50rem;
`;
