/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NutritionWhereInput } from "./NutritionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NutritionOrderByInput } from "./NutritionOrderByInput";

@ArgsType()
class NutritionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NutritionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NutritionWhereInput, { nullable: true })
  @Type(() => NutritionWhereInput)
  where?: NutritionWhereInput;

  @ApiProperty({
    required: false,
    type: [NutritionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NutritionOrderByInput], { nullable: true })
  @Type(() => NutritionOrderByInput)
  orderBy?: Array<NutritionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NutritionFindManyArgs as NutritionFindManyArgs };
