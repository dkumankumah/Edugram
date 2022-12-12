/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */

import { Input, InputProps } from "@chakra-ui/react";

interface ComponentProps extends InputProps {
<<<<<<< HEAD
    placeholder: string,
    id?: string
}

export function InputField({placeholder, id, ...props}: ComponentProps) {
  return (
    <Input bg='EduWhite' id={id}  {...props} fontSize='xs' maxW='265px' placeholder={placeholder}/>
=======
    placeholder: string;
    id?: string;
    label: string;
}

export function InputField({placeholder, label, id, ...props}: ComponentProps) {
  return (
    <Input bg='EduWhite' aria-label={label} id={id}   {...props} fontSize='xs' maxW='265px' placeholder={placeholder}/>
>>>>>>> 9dafa381de851d791bc44627e7f428528f0d7674
  );
}
