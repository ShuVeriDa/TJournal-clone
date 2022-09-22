import React, {FC} from 'react';
import {useFormContext} from "react-hook-form";
import {TextField} from "@material-ui/core";

interface FormFieldPropsType {
   name: string
   label: string
}

export const  FormField: FC< FormFieldPropsType> = ({name, label}) => {
   const {register, formState} = useFormContext()

   return (
      <div>
         <TextField {...register(name)}
                    className="mb-20"
                    size="small"
                    label={label}
                    variant="outlined"
                    name={name}
                    error={!!formState.errors[name]?.message}
                    helperText={formState.errors[name]?.message}
                    fullWidth
         />
      </div>
   );
};
