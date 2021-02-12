import { FormControl, Input, FormErrorMessage, Text } from "@chakra-ui/react";
import React from "react";
import { useField } from "formik";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl mb={2} minHeight="67px" isInvalid={!!error}>
      <Input
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder || field.name}
        maxWidth={550}
        variant="filled"
      />
      <FormErrorMessage noOfLines={1}>{error}</FormErrorMessage>
    </FormControl>
  );
};
