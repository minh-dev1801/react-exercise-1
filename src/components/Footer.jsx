import { Box, Flex, Text, HStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer" bg="blue.600" color="white" p={4} mt="auto" boxShadow="md">
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </Text>

        <HStack spacing={6} display={{ base: "flex", md: "flex" }} as="nav">
          <Link
            href="#"
            color="white"
            _hover={{ color: "blue.200", textDecoration: "underline" }}
          >
            About Us
          </Link>
          <Link
            href="#"
            color="white"
            _hover={{ color: "blue.200", textDecoration: "underline" }}
          >
            Contact
          </Link>
          <Link
            href="#"
            color="white"
            _hover={{ color: "blue.200", textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
        </HStack>

        <HStack spacing={4}>
          <Link href="#" isExternal _hover={{ color: "blue.200" }}>
            <FaFacebook size={20} />
          </Link>
          <Link href="#" isExternal _hover={{ color: "blue.200" }}>
            <FaTwitter size={20} />
          </Link>
          <Link href="#" isExternal _hover={{ color: "blue.200" }}>
            <FaInstagram size={20} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
