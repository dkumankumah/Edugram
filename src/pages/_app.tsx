import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import {Navbar} from "../components/shared/Navbar";
import {useRouter} from "next/router"

export default function App({ Component: Page, pageProps }: AppProps) {

  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      {router.asPath === "/register" || router.asPath === "/" ? null : (<Navbar/>)}
      <Page {...pageProps} />
    </ChakraProvider>
  );
}
