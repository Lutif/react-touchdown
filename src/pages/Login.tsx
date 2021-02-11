import { Button, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect } from "react";

import { InputField, Wrapper } from "../components";
import { loginValidationSchema } from "../utils/formValidations";
import { useLoginHook } from "../utils/api";
import { useSelector } from "react-redux";
import { AppStateType } from "../types";
import { useHistory } from "react-router-dom";

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
          Wrong Creadientials
        </Text>
      )}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => login(values)}
        validationSchema={loginValidationSchema}
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
              loadingText="Login..."
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
    </Wrapper>
  );
};
