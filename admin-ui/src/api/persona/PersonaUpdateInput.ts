import { InputJsonValue } from "../../types";

export type PersonaUpdateInput = {
  detail?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
};
