import { Box, Flex, Text, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <Box
      as="header"
      bg="blue.600"
      p={4}
      color="white"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" letterSpacing="tight">
          MyApp
        </Text>

        <HStack spacing={8} display={{ base: "none", md: "flex" }} as="nav">
          <Text
            as="a"
            href="#"
            _hover={{ color: "blue.200", textDecoration: "underline" }}
            cursor="pointer"
            fontSize="lg"
          >
            Home
          </Text>
          <Text
            as="a"
            href="#"
            _hover={{ color: "blue.200", textDecoration: "underline" }}
            cursor="pointer"
            fontSize="lg"
          >
            About
          </Text>
          <Text
            as="a"
            href="#"
            _hover={{ color: "blue.200", textDecoration: "underline" }}
            cursor="pointer"
            fontSize="lg"
          >
            Contact
          </Text>
        </HStack>

        <IconButton
          aria-label="Menu"
          icon={<FaBars size={20} />}
          display={{ base: "flex", md: "none" }}
          variant="outline"
          colorScheme="whiteAlpha"
          _hover={{ bg: "blue.700" }}
        />

        <Button
          colorScheme="blue"
          variant="solid"
          display={{ base: "none", md: "flex" }}
          _hover={{ bg: "blue.700" }}
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
