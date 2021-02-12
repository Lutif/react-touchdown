import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppStateType } from "../types";
import { useLogoutHook } from "../utils/api/useLogoutHook";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { logout } = useLogoutHook();

  const auth = useSelector((state: AppStateType) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      history.push("/");
    }
  }, [auth.isLoggedIn]);
  console.log("hello", auth?.user);

  return (
    <Box backgroundColor="white">
      <VStack>
        <Heading>Welcome to TouchDown {auth.user?.fullName}</Heading>
        <Text>Still working on homepage thank you for registering</Text>
        <Text>Bored? </Text>
        <Button
          backgroundColor="#22272c"
          textColor="white"
          variant="solid"
          loadingText="Register..."
          minWidth="300px"
          mt={"30"}
          size="lg"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </VStack>
    </Box>
  );
};
