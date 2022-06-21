import { useUsersQuery, UserState } from "../generated/graphql";
import redirect from "../utils/auth/redirect";
import Layout from "../components/layout/Layout";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import MainContainer from "../components/layout/MainContainer";
import { Grid, Divider, Paper, Toolbar } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ItemTableUser from "src/components/user/ItemTableUser";
import Progress from "src/components/layout/Progress";

const headCells = [
  { id: "numeber", label: "Indice" },
  { id: "now", label: "Nombres d'usuario " },
  { id: "email", label: "Email" },
  { id: "type", label: "Type user" },
];

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const filterState = (list) => {
  return list.filter((user) => user.state !== UserState.Disabled);
};

const Users = () => {
  const classes = useStyles();
  const { data, loading } = useUsersQuery();
  const users = filterState(data?.users?.users || []);

  if (loading) return <Progress title="Loading..."/> ;

  return (
    <Layout>
      <MainContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={0} style={{ padding: "12px 24px" }}>
              <Toolbar className={classes.root}>
                <Typography
                  variant="h6"
                  component="h1"
                  className={classes.title}
                >
                  Liste de users
                </Typography>
                <Link href="/user">
                  <Button href="#text-buttons" color="primary">
                    Créer un nouveau user
                  </Button>
                </Link>
              </Toolbar>
              <Divider />
              {!users && <div>Pas de users</div>}
              {users && (
                <>
                  <Table size={"small"}>
                    <TableHead>
                      <TableRow>
                        {headCells.map((headCell) => (
                          <TableCell key={headCell.id}>
                            {headCell.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <ItemTableUser
                          user={user}
                          index={users.indexOf(user) + 1}
                          key={user.id}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </MainContainer>
    </Layout>
  );
};

export default redirect(Users, { renderIfLoading: <Progress title="Loading..."/>});
