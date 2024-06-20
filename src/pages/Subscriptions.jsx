import { Box, Text, Flex, VStack, Heading, Button } from "@chakra-ui/react";

const Subscriptions = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$9.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Standard Plan",
      price: "$19.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Premium Plan",
      price: "$29.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Subscription Plans
      </Heading>
      <Flex justifyContent="center" gap={6}>
        {plans.map((plan, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            bg="white"
            boxShadow="md"
            width="300px"
          >
            <VStack spacing={4}>
              <Heading as="h2" size="md">
                {plan.name}
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                {plan.price}
              </Text>
              <VStack spacing={2} alignItems="start">
                {plan.features.map((feature, idx) => (
                  <Text key={idx}>{feature}</Text>
                ))}
              </VStack>
              <Button colorScheme="blue" size="lg">
                Choose Plan
              </Button>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Subscriptions;