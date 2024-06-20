import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxW="container.sm" p={4}>
      <Box bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Log In
        </Heading>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="blue" size="lg" width="full">
            Log In
          </Button>
        </VStack>
        <Flex justifyContent="center" mt={4}>
          <Text>Don't have an account?</Text>
          <Link to="/signup">
            <Button variant="link" colorScheme="blue" ml={2}>
              Sign Up
            </Button>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Login;