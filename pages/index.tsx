import type { NextPage } from "next";
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import InfoCard from "../components/InfoCard";

const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            LearnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container
        justify="center"
        css={{
          height: "500px",
          backgroundImage: "url(https://littlevisuals.co/images/sunset.jpg)",
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: "100%" }}>
            <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
              The Education Platform
            </Text>
            <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
              Of The Future
            </Text>
            <Button
              size="md"
              shadow
              color="gradient"
              css={{ width: "100%", marginTop: "10px" }}
            >
              Join For Free
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        {courses.map((course) => (
          <Grid key={course.title} xs={12} sm={4}>
            <InfoCard {...course} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

const courses = [
  {
    label: "Course",
    title: "Learn Next.js With Cooper Codes",
    imageURL: "https://littlevisuals.co/images/red_dawn.jpg",
    studentCount: "3,500",
  },
  {
    label: "Course",
    title: "Learn Apollo Server With Cooper Codes",
    imageURL: "https://littlevisuals.co/images/sunset.jpg",
    studentCount: "1,000",
  },
  {
    label: "Course",
    title: "Create A Startup With Cooper Codes",
    imageURL: "https://littlevisuals.co/images/tail.jpg",
    studentCount: "5,000",
  },
];
export default Home;
