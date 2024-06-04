import { Nutrition as TNutrition } from "../api/nutrition/Nutrition";

export const NUTRITION_TITLE_FIELD = "name";

export const NutritionTitle = (record: TNutrition): string => {
  return record.name?.toString() || String(record.id);
};
