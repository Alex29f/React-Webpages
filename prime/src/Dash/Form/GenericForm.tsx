import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';
import {FormFieldModel} from "../../Models/Models";

interface GenericFormProps {
    fields: FormFieldModel[];
    onSubmit: (data: any) => void;
}

const GenericForm: React.FC<GenericFormProps> = ({ fields, onSubmit }) => {
    const { register, handleSubmit } = useForm();

    const renderField = (field: FormFieldModel) => {
        switch (field.type) {
            case 'text':
            case 'number':
            case 'email':
            case 'password':
                return (
                    <TextField
                        fullWidth
                        label={field.label}
                        variant="outlined"
                        type={field.type}
                        {...register(field.name, field.validation)}
                    />
                );
            // Add cases for other types of inputs (e.g., select, checkbox) as needed
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                {fields.map((field) => (
                    <Grid item xs={12} key={field.name}>
                        {renderField(field)}
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default GenericForm;
