import { Box, Container, Flex, VStack, Text, Button, Image, Grid, GridItem, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaUserPlus, FaSearch, FaMicrophone, FaPlusSquare, FaBell } from "react-icons/fa";

const Index = () => {
  const videos = [
    { src: "/images/video1.jpg", title: "How to Cook the Perfect Steak", profile: "/images/profile1.jpg" },
    { src: "/images/video2.jpg", title: "Top 10 Travel Destinations for 2023", profile: "/images/profile2.jpg" },
    { src: "/images/video3.jpg", title: "The Ultimate Guide to Yoga for Beginners", profile: "/images/profile3.jpg" },
    { src: "/images/video4.jpg", title: "DIY Home Decor Ideas on a Budget", profile: "/images/profile4.jpg" },
    { src: "/images/video5.jpg", title: "The Science Behind Climate Change Explained", profile: "/images/profile5.jpg" },
    { src: "/images/video6-correct.jpg", title: "Mastering the Art of Photography: Tips and Tricks", profile: "/images/profile6.jpg" },
    { src: "/images/video7-correct.jpg", title: "Exploring the Wonders of the Deep Sea", profile: "/images/profile7.jpg" },
    { src: "/images/video8.jpg", title: "The History of Ancient Civilizations", profile: "/images/profile8.jpg" },
    { src: "/images/video9.jpg", title: "How to Build a Successful Online Business", profile: "/images/profile9.jpg" },
  ];

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navbar */}
      <Flex as="nav" bg="black" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Image src="/images/youtube-logo.svg" alt="YouTube Logo" boxSize="80px" />
        </Box>
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search" bg="white" color="black" />
        </InputGroup>
        <Flex alignItems="center">
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid" mr={4}>
            Sign Up
          </Button>
          <FaMicrophone size="24px" style={{ marginRight: '16px' }} />
          <FaPlusSquare size="24px" style={{ marginRight: '16px' }} />
          <FaBell size="24px" style={{ marginRight: '16px' }} />
          <Image src="/images/profile1.jpg" alt="Profile Image" borderRadius="full" boxSize="40px" />
        </Flex>
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
          <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
            {videos.map((video, index) => (
              <GridItem key={index} w="100%" h="auto" bg="gray.200" p={2} borderRadius="15px" boxShadow="md" display="flex" flexDirection="column" alignItems="center" position="relative">
                <Image src={video.profile} alt="Profile Image" borderRadius="full" boxSize="40px" position="absolute" bottom="10px" left="10px" />
                <Image src={video.src} alt={video.title} borderRadius="15px" objectFit="cover" w="100%" h="150px" />
                <Text mt={2} textAlign="center" noOfLines={2}>{video.title}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;