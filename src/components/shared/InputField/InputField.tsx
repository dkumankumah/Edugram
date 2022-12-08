/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */

import { Input, InputProps } from "@chakra-ui/react";

interface ComponentProps extends InputProps {
    placeholder: string,
    id?: string
}

export function InputField({placeholder, id, ...props}: ComponentProps) {
  return (
    <Input bg='EduWhite' id={id}  {...props} fontSize='xs' maxW='265px' placeholder={placeholder}/>
  );
}
