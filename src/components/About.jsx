import { Group, Image, Text, Title } from "@mantine/core";

function About() {
  return (
    <>
      <Title order={2} style={{ textAlign: "center" }}>
        About Us
      </Title>
      <div style={{ textAlign: "center" }}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBIzsyULZ3ZaZ2c9DgZb7EAgwiDhIUftt1zIFboVJgA&s"
          alt="About Us"
          style={{ borderRadius: "10px", maxWidth: "100%" }}
        />
      </div>
      <Group style={{ lineHeight: "1.6" }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu
          nisi. Curabitur ac leo eu libero elementum convallis nec eget velit.
          Proin consequat eros vel felis mattis, nec consectetur mauris finibus.
        </Text>
        <Text>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In aliquet turpis a urna maximus, nec elementum
          velit luctus. Maecenas nec nunc mi.
        </Text>
      </Group>
    </>
  );
}

export default About;
