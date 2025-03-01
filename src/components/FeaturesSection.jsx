import { Box, Grid, Text, Stack, Icon } from "@chakra-ui/react";
import {
  FiLayout,
  FiDownload,
  FiCode,
  FiBox,
  FiCheckSquare,
  FiAward,
} from "react-icons/fi";

function FeaturesSection() {
  const features = [
    {
      icon: FiLayout,
      title: "Fresh new layout",
      desc: "With Bootstrap 5, we’ve created a fresh new layout for this template!",
    },
    {
      icon: FiDownload,
      title: "Free to download",
      desc: "As always, Start Bootstrap has a powerful collection of free templates.",
    },
    {
      icon: FiCode,
      title: "Jumbotron hero header",
      desc: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      icon: FiBox,
      title: "Feature boxes",
      desc: "We’ve created some custom feature boxes using Bootstrap icons!",
    },
    {
      icon: FiCheckSquare,
      title: "Simple clean code",
      desc: "Keep our dependencies up to date and squash bugs as they come!",
    },
    {
      icon: FiAward,
      title: "A name you trust",
      desc: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];

  return (
    <Box py={8} bg="white" maxW="1200px" mx="auto">
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg="gray.50"
            p={6}
            borderRadius={8}
            boxShadow="md"
            textAlign="center"
          >
            <Stack spacing={4} align="center">
              <Icon as={feature.icon} boxSize={12} color="blue.500" />
              <Text fontSize="xl" fontWeight="bold" color="black">
                {feature.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {feature.desc}
              </Text>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturesSection;
