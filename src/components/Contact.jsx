import { Button, Input, TextInput, Title } from "@mantine/core";
import "@mantine/core/styles/Button.css";

const Contact = () => {
  return (
    <>
      <Title order={2} style={{ marginLeft: "35rem" }}>
        Contact Us
      </Title>
      <Input.Wrapper style={{ marginLeft: "25rem" }}>
        <TextInput
          label="Name"
          type="text"
          placeholder="Full Name"
          styles={{
            input: {
              border: "1px solid grey",
              width: "50%",
              height: "2rem",
              fontSize: "1rem",
              borderRadius: "5px",
              marginTop: "15px",
              marginBottom: "15px",
            },
            label: { fontSize: "1rem" },
          }}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="Email Address"
          styles={{
            input: {
              border: "1px solid grey",
              width: "50%",
              height: "2rem",
              fontSize: "1rem",
              borderRadius: "5px",
              marginTop: "15px",
              marginBottom: "15px",
            },
            label: { fontSize: "1rem" },
          }}
        />
        <TextInput
          label="Message"
          type="message"
          placeholder="Message"
          styles={{
            input: {
              border: "1px solid grey",
              width: "50%",
              height: "2rem",
              fontSize: "1rem",
              borderRadius: "5px",
              marginTop: "15px",
              marginBottom: "15px",
            },
            label: { fontSize: "1rem" },
          }}
        />
        <Button
          style={{
            marginLeft: "10rem",
            marginTop: "15px",
          }}
          variant="primary"
        >
          Submit
        </Button>
      </Input.Wrapper>
    </>
  );
};

export default Contact;
