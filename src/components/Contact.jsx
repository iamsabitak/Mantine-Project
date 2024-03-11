import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 40px;
`;

const ContactHeading = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeading>Contact Us</ContactHeading>
      <FormContainer>
        <form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" rows="5"></TextArea>
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
