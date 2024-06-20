import { Box, Container, Flex, VStack, Text, Button, Image, Grid, GridItem, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaUserPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navbar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Image src="/images/youtube-logo.svg" alt="YouTube Logo" boxSize="40px" />
        </Box>
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search" bg="white" color="black" />
        </InputGroup>
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
              { src: "/images/video1.jpg", title: "How to Cook the Perfect Steak" },
              { src: "/images/video2.jpg", title: "Top 10 Travel Destinations for 2023" },
              { src: "/images/video3.jpg", title: "The Ultimate Guide to Yoga for Beginners" },
              { src: "/images/video4.jpg", title: "DIY Home Decor Ideas on a Budget" },
              { src: "/images/video5.jpg", title: "The Science Behind Climate Change Explained" },
              { src: "/images/video6-new.jpg", title: "Mastering the Art of Photography: Tips and Tricks" },
              { src: "/images/video7-new.jpg", title: "Exploring the Wonders of the Deep Sea" },
              { src: "/images/video8.jpg", title: "The History of Ancient Civilizations" },
              { src: "/images/video9.jpg", title: "How to Build a Successful Online Business" },
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