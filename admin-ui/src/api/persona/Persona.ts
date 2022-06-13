import { JsonValue } from "type-fest";

export type Persona = {
  createdAt: Date;
  detail: JsonValue;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
