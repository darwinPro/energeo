import {
  Paper,
  Toolbar,
  Typography,
  Divider,
  Button,
  ButtonGroup,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import { User, CreateUserInput, UserRole } from "../../generated/graphql";
import { useFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup.string().required("Role is required"),
});

const Alert = styled.div`
  padding: 16px 8px;
  color: red;
`;

const CreateUser = ({
  user,
  loading,
  onChange,
  onCancel,
  messageError,
}: {
  user?: User;
  loading?: boolean;
  onChange?: (client: CreateUserInput) => void;
  onCancel?: () => void;
  messageError?: string;
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const createUserInput = values as CreateUserInput;
      onChange(createUserInput);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Paper elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="h2">
              {user ? "Editer un user" : "Créer un user"}
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
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <FormControl fullWidth>
              <InputLabel id="roleType">Type de role</InputLabel>
              <Select
                labelId="roleType"
                id="roleType"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                fullWidth
                error={formik.touched.role && Boolean(formik.errors.role)}
              >
                <MenuItem value={UserRole.Admin}>Admin</MenuItem>
                <MenuItem value={UserRole.Assistant}>Assistant</MenuItem>
                <MenuItem value={UserRole.Sales}>Sales</MenuItem>
              </Select>
            </FormControl>
            {messageError && <Alert>{messageError}</Alert>}
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
                  Sauvegarder user
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

export default CreateUser;
