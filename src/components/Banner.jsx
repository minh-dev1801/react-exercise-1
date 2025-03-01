import { Box, Text, Button, Stack } from "@chakra-ui/react";

function Banner() {
  return (
    <Box
      bg="gray.100"
      p={8}
      borderRadius={8}
      maxW="1200px"
      mx="auto"
      boxShadow="md"
      textAlign="center"
      my={8}
    >
      <Stack spacing={4} align="center">
        <Text fontSize="4xl" fontWeight="bold" color="black">
          A warm welcome!
        </Text>
        <Text fontSize="md" color="gray.600">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </Text>
        <Button
          colorScheme="blue"
          variant="solid"
          size="lg"
          _hover={{ bg: "blue.700" }}
        >
          Call to action
        </Button>
      </Stack>
    </Box>
  );
}

export default Banner;
