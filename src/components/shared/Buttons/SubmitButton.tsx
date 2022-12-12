/**
 * @author Bugra Karaaslan, 500830631, This is a submitButton component.
 */
import { Button, ButtonProps } from '@chakra-ui/react';

interface ComponentProps extends ButtonProps {  
<<<<<<< HEAD
}

export function SubmitButton({ children, color, ...props }: ComponentProps) {
  return (
    <Button
=======
  label: string;
}

export function SubmitButton({ children, label, color, ...props }: ComponentProps) {
  return (
    <Button
      aria-label={label}
>>>>>>> 9dafa381de851d791bc44627e7f428528f0d7674
      sx={{
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 'medium',
        fontSize: 'xs',
        bg: color || 'yellow',
        color: color || 'black',
        hover: 'none',
        minWidth:'135px',
        height: '45px',
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
