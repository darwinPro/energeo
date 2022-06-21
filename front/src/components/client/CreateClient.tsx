import {
  Paper,
  Toolbar,
  Typography,
  Divider,
  Button,
  ButtonGroup,
  TextField,
} from "@material-ui/core";
import React from "react";
import {
  Client,
  ClientState,
  CreateClientInput,
} from "../../generated/graphql";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  birthDate: yup.string().required("BirthDate is required"),
});

const EditClient = ({
  client,
  loading,
  onChange,
  onCancel,
}: {
  client?: Client;
  loading?: boolean;
  onChange?: (client: CreateClientInput) => void;
  onCancel?: () => void;
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      birthDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const contact = {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        birthDate: values.birthDate,
      };
      const createClientInput = {
        name: values.name,
        contact: contact,
        state: ClientState.Initial,
      } as CreateClientInput;
      onChange(createClientInput);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Paper elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="h2">
              {client ? "Editer un client" : "Créer un client"}
            </Typography>
          </Toolbar>
          <Divider />
          <div style={{ padding: "16px" }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Nom du client"
              autoComplete="off"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
        </Paper>

        <br />

        <Paper elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="h2">
              Informations du contact client:
            </Typography>
          </Toolbar>
          <Divider />
          <div style={{ padding: "16px" }}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="Prénom"
              autoComplete="off"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Nom de famille"
              autoComplete="off"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Numéro de telephone"
              autoComplete="off"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="birthDate"
              name="birthDate"
              label="Date de Naissance"
              type="date"
              value={formik.values.birthDate}
              onChange={formik.handleChange}
              error={
                formik.touched.birthDate && Boolean(formik.errors.birthDate)
              }
              helperText={formik.touched.birthDate && formik.errors.birthDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <Toolbar>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ButtonGroup
                variant="contained"
                aria-label="contained primary button group edit clients"
              >
                <Button color="primary" variant="contained" type="submit">
                  Sauvegarder client
                </Button>
                <Button color="secondary" onClick={() => onCancel()}>
                  Annuler
                </Button>
              </ButtonGroup>
            )}
          </Toolbar>
        </Paper>
      </form>
    </div>
  );
};

export default EditClient;
