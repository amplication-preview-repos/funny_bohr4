import { SortOrder } from "../../util/SortOrder";

export type NutritionOrderByInput = {
  calories?: SortOrder;
  carbohydrates?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  fats?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  proteins?: SortOrder;
  updatedAt?: SortOrder;
};
