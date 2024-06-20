import { Box, Container, Flex, VStack, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navbar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Image src="/images/youtube-logo.svg" alt="YouTube Logo" boxSize="40px" />
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
            {[
              { src: "/images/video1.jpg", title: "Video Title 1" },
              { src: "/images/video2.jpg", title: "Video Title 2" },
              { src: "/images/video3.jpg", title: "Video Title 3" },
              { src: "/images/video4.jpg", title: "Video Title 4" },
              { src: "/images/video5.jpg", title: "Video Title 5" },
              { src: "/images/video6.jpg", title: "Video Title 6" },
              { src: "/images/video7.jpg", title: "Video Title 7" },
              { src: "/images/video8.jpg", title: "Video Title 8" },
              { src: "/images/video9.jpg", title: "Video Title 9" },
            ].map((video, index) => (
              <GridItem key={index} w="100%" h="200px" bg="gray.200">
                <Image src={video.src} alt={video.title} />
                <Text mt={2}>{video.title}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;