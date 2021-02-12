import { Button, Heading, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useEffect } from "react";

import { InputField, Wrapper } from "../components";
import { loginValidationSchema } from "../utils/formValidations";
import { useLoginHook } from "../utils/api";
import { useSelector } from "react-redux";
import { AppStateType } from "../types";
import { useHistory, Link } from "react-router-dom";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const { res, login } = useLoginHook();
  const history = useHistory();

  const auth = useSelector((state: AppStateType) => state.auth);
  useEffect(() => {
    if (auth.isLoggedIn) {
      history.push("/home");
    }
  }, [auth.isLoggedIn]);

  return (
    <Wrapper variant="regular">
      {res.status === 401 && (
        <Text mb={10} color="red">
          Wrong credential
        </Text>
      )}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => login(values)}
        validationSchema={loginValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form>
            <Heading mb={10}>Login</Heading>
            <InputField name="email" placeholder="Email address" />
            <InputField type="password" name="password" />
            <Button
              backgroundColor="#22272c"
              textColor="white"
              variant="solid"
              loadingText="Please wait..."
              isLoading={isSubmitting}
              minWidth="300px"
              mt={"30"}
              size="lg"
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
      <Link to="/register">
        <Text mt={4} fontSize="14px">
          Don't have an account? Sign Up
        </Text>
      </Link>
    </Wrapper>
  );
};
