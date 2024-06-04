import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NutritionWhereInput = {
  calories?: IntNullableFilter;
  carbohydrates?: IntNullableFilter;
  description?: StringNullableFilter;
  fats?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  proteins?: IntNullableFilter;
};
