import React from "react";
import { Box, VStack, Heading, Image, Link, Text } from "@chakra-ui/react";

const Index = () => {
  const websiteUrl = "https://run.gptengineer.app/?token=6o0sWYv6Ylsiue";

  return (
    <Box bg="gray.100" minH="100vh" p={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Get access to GPT Engineer
        </Heading>
        <Box borderRadius="lg" overflow="hidden" boxShadow="md">
          <Image src="https://i.ibb.co/51bytMg/QRCode-Monkey.png" alt="QR Code" w="300px" h="300px" objectFit="cover" />
        </Box>
        <Link href={websiteUrl} isExternal color="blue.500" fontSize="xl">
          {websiteUrl}
        </Link>
        <Text fontSize="lg" textAlign="center" maxW="500px">
          Scan the QR code or click the link above to get access to GPT Engineer, the powerful AI assistant that can help you with all your coding and development needs!
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
