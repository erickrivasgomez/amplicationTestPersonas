import { SortOrder } from "../../util/SortOrder";

export type PersonaOrderByInput = {
  createdAt?: SortOrder;
  detail?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
