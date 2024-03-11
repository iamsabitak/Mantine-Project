import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 40px;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 50px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const CardImage = styled.img`
  max-height: 300px;
`;

const CardTitle = styled.h5`
  color: #333;
  font-size: 20px;
  margin-top: 20px;
`;

const CardText = styled.p`
  color: #555;
  text-align: center;
  margin-top: 10px;
`;

const LearnMoreButton = styled.a`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Heading>Our Services</Heading>
      <div className="row">
        <ServiceCard className="col-md-4">
          <CardImage
            src="https://p7.hiclipart.com/preview/337/513/284/password-manager-privacy-policy-password-strength-random-password-generator-service.jpg"
            alt="Service 1"
          />
          <div className="card-body">
            <CardTitle>Service 1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
              enim in lectus convallis tempus.
            </CardText>
            <LearnMoreButton href="#">Learn More</LearnMoreButton>
          </div>
        </ServiceCard>
        <ServiceCard className="col-md-4">
          <CardImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY9K_lb8olBs1-CHaGJx_DMOpJBuTc_7GIsKhgpToGSszLpnSfIdPG9CDS9SzgUcjW2E&usqp=CAU"
            alt="Service 2"
          />
          <div className="card-body">
            <CardTitle>Service 2</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
              enim in lectus convallis tempus.
            </CardText>
            <LearnMoreButton href="#">Learn More</LearnMoreButton>
          </div>
        </ServiceCard>
        <ServiceCard className="col-md-4">
          <CardImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxggn3n_VnHanqYquI4yc5fQe9TclfT5-QCLq60ZNLS9q70YwtaWYkWtc04acYPBPv7s&usqp=CAU"
            alt="Service 3"
          />
          <div>
            <CardTitle>Service 3</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
              enim in lectus convallis tempus.
            </CardText>
            <LearnMoreButton href="#">Learn More</LearnMoreButton>
          </div>
        </ServiceCard>
      </div>
    </ServicesContainer>
  );
};

export default Services;
