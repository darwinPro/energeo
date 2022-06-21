import MainContainer from "src/components/layout/MainContainer";
import Layout from "../components/layout/Layout";
import Typography from "@material-ui/core/Typography";

const Dashboard = () => {
  return (
    <Layout>
      <MainContainer>
        <Typography variant="h6" component="h1">
          Dashboard
        </Typography>
        <p>Vous allez voir ici toutes les statistiques</p>
      </MainContainer>
    </Layout>
  );
};

export default Dashboard;
