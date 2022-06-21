import React from "react";
import { Client } from "../../../generated/graphql";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Toolbar,
} from "@material-ui/core";
import {
  UpdateClientInput,
  useUpdateClientMutation,
} from "../../../generated/graphql";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  programmedVisitDate: yup.string(),
  billType: yup.string(),
  siret: yup.number().min(10),
  address: yup.string(),
  revenue: yup.number(),
  contractStartDate: yup.string(),
  contractEndDate: yup.string(),
});

const ClientDisplayDetails = ({ client }: { client?: Client }) => {
  const [updateClientMutation, { loading }] = useUpdateClientMutation({
    refetchQueries: ["Clients", "Client"],
  });

  const updatelient = (client: UpdateClientInput) =>
    updateClientMutation({
      variables: {
        input: {
          id: client.id,
          programmedVisitDate: client.programmedVisitDate,
          billType: client.billType,
          siret: client.siret,
          address: client.address,
          revenue: client.revenue,
          contractStartDate: client.contractStartDate,
          contractEndDate: client.contractEndDate,
        },
      },
    });

  const onSave = async (client: UpdateClientInput) => {
    await updatelient(client);
  };

  const formik = useFormik({
    initialValues: {
      programmedVisitDate: client.programmedVisitDate || "",
      billType: client.billType || "",
      siret: client.siret || "",
      address: client.address || "",
      revenue: client.revenue || "",
      contractStartDate: client.contractStartDate || "",
      contractEndDate: client.contractEndDate || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let updateClientInput: UpdateClientInput = {
        programmedVisitDate: values.programmedVisitDate,
        billType: values.billType,
        siret: values.siret,
        address: values.address,
        revenue: Number(values.revenue),
        contractStartDate: values.contractStartDate,
        contractEndDate: values.contractEndDate,
        id: client.id,
      };
      onSave(updateClientInput);
    },
  });

  return (
    <Paper elevation={0}>
      <form onSubmit={formik.handleSubmit}>
        <Toolbar>
          <Typography variant="h6" component="h2">
            Informations sur l'état:
          </Typography>
        </Toolbar>
        <Divider />
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  id="programmedVisitDate"
                  name="programmedVisitDate"
                  label="Date de visite prévue"
                  type="date"
                  value={formik.values.programmedVisitDate}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.programmedVisitDate &&
                    Boolean(formik.errors.programmedVisitDate)
                  }
                  helperText={
                    formik.touched.programmedVisitDate &&
                    formik.errors.programmedVisitDate
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="billType">
                    Type de facture d’électricité
                  </InputLabel>
                  <Select
                    labelId="billType"
                    id="billType"
                    name="billType"
                    value={formik.values.billType}
                    onChange={formik.handleChange}
                    fullWidth
                    error={
                      formik.touched.billType && Boolean(formik.errors.billType)
                    }
                  >
                    <MenuItem value={"c1"}>C1</MenuItem>
                    <MenuItem value={"c2"}>C2</MenuItem>
                    <MenuItem value={"c3"}>C3</MenuItem>
                    <MenuItem value={"c4"}>C4</MenuItem>
                    <MenuItem value={"c5"}>C5</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  id="siret"
                  name="siret"
                  label="N°Siret boite client"
                  value={formik.values.siret}
                  onChange={formik.handleChange}
                  error={formik.touched.siret && Boolean(formik.errors.siret)}
                  helperText={formik.touched.siret && formik.errors.siret}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Adress Postal"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input
                  fullWidth
                  id="revenue"
                  name="revenue"
                  placeholder="Révenue a fire"
                  value={formik.values.revenue}
                  onChange={formik.handleChange}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  error={
                    formik.touched.revenue && Boolean(formik.errors.revenue)
                  }
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  id="contractStartDate"
                  name="contractStartDate"
                  label="Date initiale du contrat"
                  type="date"
                  value={formik.values.contractStartDate}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contractStartDate &&
                    Boolean(formik.errors.contractStartDate)
                  }
                  helperText={
                    formik.touched.contractStartDate &&
                    formik.errors.contractStartDate
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  id="contractEndDate"
                  name="contractEndDate"
                  label="Date de fin du contrat"
                  type="date"
                  value={formik.values.contractEndDate}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contractEndDate &&
                    Boolean(formik.errors.contractEndDate)
                  }
                  helperText={
                    formik.touched.contractEndDate &&
                    formik.errors.contractEndDate
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Toolbar>
          {!loading && (
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              type="submit"
              disabled={loading}
            >
              Éditer
            </Button>
          )}

          {loading && <CircularProgress size={18} />}
        </Toolbar>
      </form>
    </Paper>
  );
};

export default ClientDisplayDetails;
