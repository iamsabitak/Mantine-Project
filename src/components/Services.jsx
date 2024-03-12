import { Button, Card, Image, Title } from "@mantine/core";

const Services = () => {
  return (
    <>
      <Title>Our Services</Title>
      <div style={{ gridRow: "1" }}>
        <>
          <Card
            src="https://p7.hiclipart.com/preview/337/513/284/password-manager-privacy-policy-password-strength-random-password-generator-service.jpg"
            alt="Service 1"
          />
          <div>
            <Title>Service 1</Title>
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eget enim in lectus convallis tempus.
            </>
            <Button variant="primary">Learn More</Button>
          </div>
        </>
        <>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY9K_lb8olBs1-CHaGJx_DMOpJBuTc_7GIsKhgpToGSszLpnSfIdPG9CDS9SzgUcjW2E&usqp=CAU"
            alt="Service 2"
          />
          <div>
            <Title>Service 2</Title>
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eget enim in lectus convallis tempus.
            </>
            <Button variant="primary">Learn More</Button>
          </div>
        </>
        <>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxggn3n_VnHanqYquI4yc5fQe9TclfT5-QCLq60ZNLS9q70YwtaWYkWtc04acYPBPv7s&usqp=CAU"
            alt="Service 3"
          />
          <div>
            <>Service 3</>
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              eget enim in lectus convallis tempus.
            </>
            <Button variant="primary">Learn More</Button>
          </div>
        </>
      </div>
    </>
  );
};

export default Services;
