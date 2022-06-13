import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PersonaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="First Name " source="firstName" />
        <TextInput label="Last Name" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
