import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";

const CustomTextField = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <>
      <Grid item xs={12} sm={6}>
        {/* <Controller
          as={TextField}
          control={control}
          fullWidth
          name={name}
          label={label}
          required={required}
        /> */}
        {/* <Controller
          control={control}
          name={name}
          render={({ field: { label, name, required } }) => (
            <ReactDatePicker name={name} label={label} required fullwidth />
          )}
        /> */}
      </Grid>
    </>
  );
};

export default CustomTextField;
