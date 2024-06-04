import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WorkoutWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
