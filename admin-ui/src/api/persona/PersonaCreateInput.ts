import { InputJsonValue } from "../../types";

export type PersonaCreateInput = {
  detail?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
};
