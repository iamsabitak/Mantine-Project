import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const AboutHeading = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  margin-top: 30px;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutContainer>
      <AboutHeading>About Us</AboutHeading>
      <ImageContainer>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBIzsyULZ3ZaZ2c9DgZb7EAgwiDhIUftt1zIFboVJgA&s"
          alt="About Us"
        />
      </ImageContainer>
      <TextContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu
          nisi. Curabitur ac leo eu libero elementum convallis nec eget velit.
          Proin consequat eros vel felis mattis, nec consectetur mauris
          finibus.
        </Paragraph>
        <Paragraph>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In aliquet turpis a urna maximus, nec
          elementum velit luctus. Maecenas nec nunc mi.
        </Paragraph>
      </TextContainer>
    </AboutContainer>
  );
}

export default About;
