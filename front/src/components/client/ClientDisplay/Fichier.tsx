import React from "react";
import {
  Client,
  useDeleteFileMutation,
  DeleteClientFileInput,
  File,
} from "../../../generated/graphql";
import Typography from "@material-ui/core/Typography";
import { useFileUpload } from "../../../hooks/useFileUpload";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  CircularProgress,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    input: {
      display: "none",
    },
    buttonSuccess: {
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: "absolute",
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const ClientDisplayFichier = ({
  client,
  onChange,
}: {
  client?: Client;
  onChange?: () => void;
}) => {
  const { uploadFile, loading } = useFileUpload();
  const classes = useStyles();

  const [deleteClientFileMutation] = useDeleteFileMutation({
    refetchQueries: ["Clients", "Client"],
  });

  const deleteClietFile = (input: DeleteClientFileInput) =>
    deleteClientFileMutation({
      variables: {
        input,
      },
    });

  const onDelete = async (file: File) => {
    const input: DeleteClientFileInput = {
      clientId: client.id,
      fileId: file.id,
    };
    await deleteClietFile(input);
    onChange();
  };

  return (
    <Paper elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="h2">
          Fichiers :
        </Typography>
      </Toolbar>
      <Divider />
      <Table size="small">
        <TableBody>
          {client?.files?.map((file) => (
            <TableRow key={file.id}>
              <TableCell width={170}>
                <a href={file.fileUrl} target="_blank">
                  {file.name}
                </a>
              </TableCell>
              <TableCell>{file.creationDate}</TableCell>
              <TableCell align="right">
                <Button color="primary" onClick={() => onDelete(file)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {client?.files == null && (
            <>
              <TableRow>
                <TableCell>
                  Il n'y a pas encore de fichiers téléchargés
                </TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
      <Toolbar>
        <div className={classes.wrapper}>
          <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              component="span"
              disabled={loading}
            >
              Upload File
            </Button>
          </label>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>

        <input
          type="file"
          name="file"
          id="contained-button-file"
          className={classes.input}
          onChange={async (e) => {
            await uploadFile(client.id, e.target.files[0]);
            onChange();
          }}
        />
      </Toolbar>
    </Paper>
  );
};

export default ClientDisplayFichier;
