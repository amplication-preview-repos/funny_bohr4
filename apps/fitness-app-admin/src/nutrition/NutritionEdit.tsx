import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const NutritionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="calories" source="calories" />
        <NumberInput step={1} label="carbohydrates" source="carbohydrates" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="fats" source="fats" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="proteins" source="proteins" />
      </SimpleForm>
    </Edit>
  );
};
