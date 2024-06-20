import { Box, Container, Flex, VStack, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navbar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">YouTube</Text>
        </Box>
        <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid">
          Sign Up
        </Button>
      </Flex>

      {/* Main Content */}
      <Flex>
        {/* Sidebar */}
        <Box w="20%" bg="gray.100" p={4}>
          <VStack align="start" spacing={4}>
            <Text>Home</Text>
            <Text>Trending</Text>
            <Text>Subscriptions</Text>
            <Text>Library</Text>
          </VStack>
        </Box>

        {/* Video Section */}
        <Box w="80%" p={4}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {Array.from({ length: 9 }).map((_, index) => (
              <GridItem key={index} w="100%" h="200px" bg="gray.200">
                <Image src={`https://via.placeholder.com/300x200?text=Video+${index + 1}`} alt={`Video ${index + 1}`} />
                <Text mt={2}>Video Title {index + 1}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;