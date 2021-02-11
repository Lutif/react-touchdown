import { Box } from "@chakra-ui/react";
import React from "react";

interface wrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<wrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      alignItems="center"
      alignSelf="center"
      p={variant === "regular" ? "145px" : "50px"}
      backgroundColor="white"
      borderRadius={15}
    >
      {children}
    </Box>
  );
};
