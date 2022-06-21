import { useClientsQuery, UserRole } from "../generated/graphql";
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
import ClientDisplayStateTableList from "../components/client/ClientDisplay/StateTableList";
import { Grid, Divider, Paper, Toolbar } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useUser from "../utils/auth/useUser";
import Progress from "src/components/layout/Progress";

const headCells = [
  { id: "numeber", label: "Indice" },
  { id: "now", label: "Nom du client " },
  { id: "courtier", label: "Courtier" },
  { id: "state", label: "State Client" },
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

const Clients = () => {
  const classes = useStyles();
  const { data, loading } = useClientsQuery();
  const { user } = useUser();

  const filterAddress = (list) => {
    return list.filter((client) => client.state !== "disabled");
  };

  const filtroControlRole = (list) => {
    if (user.role === UserRole.Sales) {
      return list.filter((client) => client.salesId === user.id);
    }
    return list;
  };

  const sortedClients = (list) => {
    return list.sort((c1, c2) => c1.name.localeCompare(c2.name)) || [];
  };

  const clients = data?.clients?.clients
    ? sortedClients(filtroControlRole(filterAddress(data?.clients?.clients)))
    : [];

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
                  Liste de clients
                </Typography>
                <Link href="/client">
                  <Button href="#text-buttons" color="primary">
                    Créer un nouveau client
                  </Button>
                </Link>
              </Toolbar>
              <Divider />
              {!clients || (!clients.length && <div>Pas de clients</div>)}
              {clients && (
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
                      {clients.map((c) => (
                        <Link href={`/client/${c.id}`}>
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={c.id}
                            style={{cursor:"pointer"}}
                          >
                            <TableCell>{clients.indexOf(c) + 1}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>
                              {c.salesId ? (
                                <>{`${c.sales.firstName} ${c.sales.lastName}`}</>
                              ) : (
                                <>pas d'asignado</>
                              )}
                            </TableCell>
                            <TableCell>
                              <ClientDisplayStateTableList state={c.state} />
                            </TableCell>
                          </TableRow>
                        </Link>
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
//ça doit rediriger cers le client/cid
export default redirect(Clients, { renderIfLoading: <Progress title="Loading..."/> });
