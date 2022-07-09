import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Controller
        render={({ field }) => (
          <TextField label={label} fullWidth required={required} />
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
};

export default FormInput;
