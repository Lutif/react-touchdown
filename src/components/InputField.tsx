import {
  FormControl,
  Input,
  FormErrorMessage,
  InputLeftElement,
  InputGroup,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";
import React from "react";
import { useField } from "formik";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  Icon: ComponentWithAs<"svg", IconProps>;
};

export const InputField: React.FC<InputFieldProps> = ({
  size: _,
  Icon,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl mb={2} minHeight="67px" isInvalid={!!error}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon color="gray.300" />}
        />

        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder || field.name}
          maxWidth={550}
          variant="filled"
        />
      </InputGroup>
      <FormErrorMessage noOfLines={1}>{error}</FormErrorMessage>
    </FormControl>
  );
};
