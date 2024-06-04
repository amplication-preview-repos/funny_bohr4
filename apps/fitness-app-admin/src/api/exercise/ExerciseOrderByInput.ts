import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
