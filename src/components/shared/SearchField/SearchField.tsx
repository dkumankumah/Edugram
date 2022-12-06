/**
 * @author Bugra Karaaslan, 500830631, This is an inputfield component.
 */

import {
  InputGroup,
  Input,
  InputProps,
  InputRightElement,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import * as Icon from "react-icons/ai";
import { IconContext } from "react-icons";

interface ComponentProps extends InputProps {
  placeholder: string;
  label: string;
  id?: string;
}

export function SearchField({ placeholder, label, id, ...props }: ComponentProps) {
  return (
    <InputGroup maxW={{sm: "260px", md:"290px"}}>
      <Input
        aria-label=""
        bg="EduWhite"
        id={id}
        active='none'
        focis='none'
        borderRadius={20}
        {...props}
        fontSize="xs"
        h="45px"
        placeholder={placeholder}
        label={label}
      ></Input>
      <InputRightElement>
        <IconButton
          aria-label="Search database"
          bg="yellow"
          mr={2}
          mt={1}
          size='sm'
          borderRadius={30}
          icon={<IconContext.Provider value={{ style: { color: '#FFF' }, className: "global-class-name", }} >
            <Icon.AiOutlineSearch/>
          </IconContext.Provider>}
        />
      </InputRightElement>
    </InputGroup>
  );
}
