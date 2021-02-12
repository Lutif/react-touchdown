import { Button, HStack, Heading, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { Wrapper, InputField } from "../components";
import { registerValidationSchema } from "../utils/formValidations";
import { useRegisterHook } from "../utils/api/useRegisterHook";
import { Link, useHistory } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { ImOffice } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";

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
    <Wrapper variant="regular">
      {res.status === 409 && (
        <Text mb={10} color="red">
          Account already exists for this email,
          <Link to="/login"> Please login.</Link>
        </Text>
      )}
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
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form>
            <Heading mb={10}>Sign Up</Heading>
            <HStack>
              <InputField
                name="firstName"
                placeholder="First Name"
                Icon={() => <Icon color="gray.400" as={AiOutlineUser} />}
              />
              <InputField
                name="lastName"
                placeholder="Last Name"
                Icon={() => <Icon color="gray.400" as={AiOutlineUser} />}
              />
            </HStack>
            <InputField
              name="companyName"
              placeholder="Company Name"
              Icon={() => <Icon color="gray.400" as={ImOffice} />}
            />
            <InputField
              name="email"
              placeholder="Email address"
              Icon={() => <Icon color="gray.400" as={AiOutlineMail} />}
            />
            <HStack>
              <InputField
                name="password"
                placeholder="Password"
                type="password"
                Icon={() => <Icon color="gray.400" as={RiLockPasswordFill} />}
              />
              <InputField
                name="passwordRepeat"
                placeholder="Repeat Password"
                type="password"
                Icon={() => <Icon color="gray.400" as={RiLockPasswordFill} />}
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
      <Link to="/login">
        <Text mt={4} fontSize="14px">
          Already Registered? login
        </Text>
      </Link>
    </Wrapper>
  );
};
