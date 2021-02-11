import { Box, Heading, VStack, Button, HStack } from "@chakra-ui/react";
import React from "react";

import { useHistory } from "react-router-dom";

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  const history = useHistory();

  return (
    <Box backgroundColor="white">
      <VStack>
        <Heading>Welcome to TouchDown</Heading>
        <HStack mt={30}>
          <Button
            backgroundColor="#22272c"
            textColor="white"
            variant="solid"
            loadingText="Register..."
            minWidth="300px"
            size="lg"
            onClick={() => history.push("/register")}
          >
            Register
          </Button>
          <Button
            backgroundColor="#22272c"
            textColor="white"
            variant="solid"
            loadingText="Register..."
            minWidth="300px"
            size="lg"
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
