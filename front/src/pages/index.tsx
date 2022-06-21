import MainContainer from "src/components/layout/MainContainer";
import Layout from "../components/layout/Layout";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <Typography variant="h6" component="h1">
          Bienvenue dans le meilleur CRM!
        </Typography>
      </MainContainer>
    </Layout>
  );
};

export default Home;
