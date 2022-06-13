import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="First Name " source="firstName" />
        <TextInput label="Last Name" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
