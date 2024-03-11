import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <div>
          <Heading>Welcome to Our Website</Heading>
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
        </div>
      </ContentContainer>
      <div>
        <Image
          src="https://media.istockphoto.com/id/1312128591/vector/home-icon-vector-house-sign.jpg?s=612x612&w=0&k=20&c=jxUT546g8Cfgv1SiAfh2Eos46XI3DqYvPLhxGFaobpE="
          alt="Welcome Image"
        />
      </div>
    </HomeContainer>
  );
};

export default Home;
