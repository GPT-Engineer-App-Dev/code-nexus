import { Box, Button, Container, Flex, Heading, HStack, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">CodeLearn</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="gray.100"
        p={10}
        textAlign="center"
      >
        <VStack spacing={4} maxW="lg">
          <Heading size="2xl">Learn to Code with CodeLearn</Heading>
          <Text fontSize="lg">Join our community and start your coding journey today!</Text>
          <Button colorScheme="blue" size="lg">Get Started</Button>
        </VStack>
        <Image src="/images/hero-image.png" alt="Hero Image" boxSize="400px" objectFit="cover" />
      </Flex>

      {/* Featured Courses Section */}
      <Box as="section" p={10}>
        <Heading size="xl" mb={6} textAlign="center">Featured Courses</Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden" m={4} maxW="sm">
            <Image src="/images/course1.jpg" alt="Course 1" />
            <Box p={4}>
              <Heading size="md">Course Title 1</Heading>
              <Text mt={2}>Short description of the course.</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden" m={4} maxW="sm">
            <Image src="/images/course2.jpg" alt="Course 2" />
            <Box p={4}>
              <Heading size="md">Course Title 2</Heading>
              <Text mt={2}>Short description of the course.</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden" m={4} maxW="sm">
            <Image src="/images/course3.jpg" alt="Course 3" />
            <Box p={4}>
              <Heading size="md">Course Title 3</Heading>
              <Text mt={2}>Short description of the course.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* About Section */}
      <Flex as="section" direction={{ base: "column", md: "row" }} align="center" p={10} bg="gray.100">
        <Image src="/images/about-image.jpg" alt="About Image" boxSize="400px" objectFit="cover" />
        <Box p={4} maxW="lg">
          <Heading size="xl">About CodeLearn</Heading>
          <Text mt={4}>
            CodeLearn is an online platform dedicated to teaching coding skills to learners of all levels. Our mission is to make coding accessible and enjoyable for everyone.
          </Text>
        </Box>
      </Flex>

      {/* Contact Form Section */}
      <Box as="section" p={10}>
        <Heading size="xl" mb={6} textAlign="center">Contact Us</Heading>
        <VStack spacing={4} maxW="lg" mx="auto">
          <Input placeholder="Name" size="lg" />
          <Input placeholder="Email" size="lg" />
          <Textarea placeholder="Message" size="lg" />
          <Button colorScheme="blue" size="lg">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;