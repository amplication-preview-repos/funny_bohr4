import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExerciseWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
