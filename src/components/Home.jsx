import { Container, Group, Image, Text, Title } from "@mantine/core";

const Home = () => {
  return (
    <Container style={{ display: "flex", marginTop: "-4rem" }}>
      <Group style={{ marginTop: "10rem", marginLeft: "2rem" }}>
        <Title style={{ marginBottom: "20px", fontSize: "24px" }}>
          Welcome to Our Website
        </Title>
        <Text style={{ lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu
          nisi. Curabitur ac leo eu libero elementum convallis nec eget velit.
          Proin consequat eros vel felis mattis, nec consectetur mauris finibus.
        </Text>
        <Text style={{ lineHeight: "1.6" }}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In aliquet turpis a urna maximus, nec elementum
          velit luctus. Maecenas nec nunc mi.
        </Text>
      </Group>

      <Image
        src="https://media.istockphoto.com/id/1312128591/vector/home-icon-vector-house-sign.jpg?s=612x612&w=0&k=20&c=jxUT546g8Cfgv1SiAfh2Eos46XI3DqYvPLhxGFaobpE="
        alt="Welcome Image"
        style={{ zIndex: "-1" }}
      />
    </Container>
  );
};

export default Home;
