import { Box, Text, Flex, VStack, Heading, Button, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Subscriptions = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$9.99/month",
      features: ["Access to basic content", "Standard video quality", "Limited support"],
      description: "Ideal for casual viewers who want access to essential content.",
    },
    {
      name: "Standard Plan",
      price: "$19.99/month",
      features: ["Access to all content", "HD video quality", "Priority support", "Offline downloads"],
      description: "Perfect for regular viewers who want more content and better quality.",
    },
    {
      name: "Premium Plan",
      price: "$29.99/month",
      features: ["Access to all content", "4K video quality", "24/7 support", "Offline downloads", "Ad-free experience"],
      description: "Best for avid viewers who want the ultimate viewing experience with all features.",
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
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <VStack spacing={4}>
              <Heading as="h2" size="md">
                {plan.name}
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                {plan.price}
              </Text>
              <Text fontSize="md" mb={4}>{plan.description}</Text>
              <VStack spacing={2} alignItems="start">
                {plan.features.map((feature, idx) => (
                  <Flex key={idx} align="center">
                    <Icon as={FaCheckCircle} color="green.500" mr={2} />
                    <Text>{feature}</Text>
                  </Flex>
                ))}
              </VStack>
            </VStack>
            <Button colorScheme="blue" size="lg" mt={4}>
              Choose Plan
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Subscriptions;