import React from "react";
import Signup from "../../components/auth/SignUp";
import CenterContainer from "../../components/layout/centerContainer";
import Header from "../../components/layout/Header";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <CenterContainer>
        <Signup />
      </CenterContainer>
    </>
  );
};

export { SignUpPage };
