import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NutritionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Nutritions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="calories" source="calories" />
        <TextField label="carbohydrates" source="carbohydrates" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="fats" source="fats" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="proteins" source="proteins" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
