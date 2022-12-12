import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
<<<<<<< HEAD

export default function App({ Component: Page, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
=======
import { Navbar } from "../components/shared/Navbar";
import { useRouter } from "next/router";

export default function App({ Component: Page, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      {router.asPath === "/register" || router.asPath === "/" ? null : (<Navbar/>)}
>>>>>>> 9dafa381de851d791bc44627e7f428528f0d7674
      <Page {...pageProps} />
    </ChakraProvider>
  );
}
