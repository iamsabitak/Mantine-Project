import { Button, Card, Grid, Image, Title } from "@mantine/core";

const Services = () => {
  return (
    <>
      <Title style={{ textAlign: "center", marginBottom: "20px" }}>
        Our Services
      </Title>
      <Grid
        gutter="md"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Grid.Col style={{ marginTop: "1rem" }}>
          {" "}
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            style={{ border: "1px solid #e1e1e1", borderRadius: "6px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ width: "50%", height: "200px", overflow: "hidden" }}
              >
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  alt="Service 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <div style={{ textAlign: "center", marginLeft: "20px" }}>
                <Title style={{ marginBottom: "10px" }}>Service 1</Title>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  eget enim in lectus convallis tempus.
                </p>
                <Button
                  style={{
                    height: "2.3rem",
                    backgroundColor: "green",
                    border: "1px solid green",
                    boxShadow: "0 0 2px green",
                    borderRadius: "5px",
                    color: "white",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                  variant="primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ marginTop: "1rem" }}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            style={{ border: "1px solid #e1e1e1", borderRadius: "6px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ width: "50%", height: "200px", overflow: "hidden" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="Service 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <div style={{ textAlign: "center", marginLeft: "20px" }}>
                <Title style={{ marginBottom: "10px" }}>Service 2</Title>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  eget enim in lectus convallis tempus.
                </p>
                <Button
                  style={{
                    height: "2.3rem",
                    backgroundColor: "green",
                    border: "1px solid green",
                    boxShadow: "0 0 2px green",
                    borderRadius: "5px",
                    color: "white",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                  variant="primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ marginTop: "1rem" }}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            style={{ border: "1px solid #e1e1e1", borderRadius: "6px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ width: "50%", height: "200px", overflow: "hidden" }}
              >
                <Image
                  src="https://p7.hiclipart.com/preview/337/513/284/password-manager-privacy-policy-password-strength-random-password-generator-service.jpg"
                  alt="Service 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <div style={{ textAlign: "center", marginLeft: "20px" }}>
                <Title style={{ marginBottom: "10px" }}>Service 3</Title>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  eget enim in lectus convallis tempus.
                </p>
                <Button
                  style={{
                    height: "2.3rem",
                    backgroundColor: "green",
                    border: "1px solid green",
                    boxShadow: "0 0 2px green",
                    borderRadius: "5px",
                    color: "white",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                  variant="primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Services;
