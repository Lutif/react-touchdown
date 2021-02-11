import { Button, HStack, Heading, Grid, Box } from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { Wrapper, InputField } from "../components";
import { registerValidationSchema } from "../utils/formValidations";
import { useRegisterHook } from "../utils/api/useRegisterHook";
import { useHistory } from "react-router-dom";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const { res, register } = useRegisterHook();
  const history = useHistory();

  useEffect(() => {
    if (res.success) {
      history.push("/login");
    }
  }, [res]);

  return (
    <Box textAlign="center" backgroundColor="grey" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Wrapper variant="regular">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              companyName: "",
              email: "",
              password: "",
              passwordRepeat: "",
            }}
            onSubmit={async (values) => {
              register(values);
            }}
            validationSchema={registerValidationSchema}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form>
                <Heading mb={10}>Sign Up</Heading>
                <HStack>
                  <InputField name="firstName" placeholder="First Name" />
                  <InputField name="lastName" placeholder="Last Name" />
                </HStack>
                <InputField name="companyName" placeholder="Company Name" />
                <InputField name="email" placeholder="Email address" />
                <HStack>
                  <InputField
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <InputField
                    name="passwordRepeat"
                    placeholder="Repeat Password"
                    type="password"
                  />
                </HStack>
                <Button
                  backgroundColor="#22272c"
                  textColor="white"
                  variant="solid"
                  loadingText="Register..."
                  isLoading={isSubmitting}
                  minWidth="300px"
                  mt={"30"}
                  size="lg"
                  onClick={() => handleSubmit()}
                >
                  Register
                </Button>
              </form>
            )}
          </Formik>
        </Wrapper>
      </Grid>
    </Box>
  );
};
