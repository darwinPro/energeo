import MainContainer from "src/components/layout/MainContainer";
import Layout from "../components/layout/Layout";
import Typography from "@material-ui/core/Typography";

const Notifications = () => {
  return (
    <Layout>
      <MainContainer>
        <Typography variant="h6" component="h1">
          Configuration
        </Typography>
        <p>Appelez le 06 63 71 90 82 pour mettre en place la configuration</p>
      </MainContainer>
    </Layout>
  );
};

export default Notifications;
