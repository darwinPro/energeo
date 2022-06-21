import Layout from "../components/layout/Layout";
import Typography from "@material-ui/core/Typography";
import MainContainer from "src/components/layout/MainContainer";

const About = () => {
  return (
    <Layout>
      <MainContainer>
        <Typography variant="h6" component="h1">
          Bienvenue dans le meilleur CRM!
        </Typography>
        <p>
          Nerenco a été fondé en 2018 à Paris, ses cofondateurs sont Ricky
          Flores et Nenad.
        </p>
      </MainContainer>
    </Layout>
  );
};

export default About;
