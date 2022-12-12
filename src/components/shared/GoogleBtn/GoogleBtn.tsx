/**
 * @author Bugra Karaaslan, 500830631, This is a Google button component.
 */
import { Button, ButtonProps } from "@chakra-ui/react";
import * as fc from "react-icons/fc";
import { IconContext } from "react-icons";

<<<<<<< HEAD
interface ComponentProps extends ButtonProps {}

export function GoogleBtn({ children, color, ...props }: ComponentProps) {
  return (
    <Button
=======
interface ComponentProps extends ButtonProps {
  label: string
}

export function GoogleBtn({ children, label, color, ...props }: ComponentProps) {
  return (
    <Button
      aria-label={label}
>>>>>>> 9dafa381de851d791bc44627e7f428528f0d7674
      sx={{
        cursor: "pointer",
        userSelect: "none",
        fontWeight: "medium",
        fontSize: "xs",
        bg: "white",
        color: color || "black",
        hover: "none",
        minWidth: "265px",
        minH: "50px",
        borderRadius: "30px",
      }}
      {...props}
    >
      <IconContext.Provider
        value={{ style: { marginRight: "0.5rem" }, className: "global-class-name", }}>
        <fc.FcGoogle />
      </IconContext.Provider>
      {children}
    </Button>
  );
}
