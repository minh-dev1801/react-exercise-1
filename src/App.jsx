import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import FeaturesSection from "./components/FeaturesSection.JSX";

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Banner />
      <FeaturesSection />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
