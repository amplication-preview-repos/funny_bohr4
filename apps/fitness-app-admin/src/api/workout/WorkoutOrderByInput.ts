import { SortOrder } from "../../util/SortOrder";

export type WorkoutOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
