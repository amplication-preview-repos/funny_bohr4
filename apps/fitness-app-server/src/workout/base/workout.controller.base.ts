/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WorkoutService } from "../workout.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WorkoutCreateInput } from "./WorkoutCreateInput";
import { Workout } from "./Workout";
import { WorkoutFindManyArgs } from "./WorkoutFindManyArgs";
import { WorkoutWhereUniqueInput } from "./WorkoutWhereUniqueInput";
import { WorkoutUpdateInput } from "./WorkoutUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WorkoutControllerBase {
  constructor(
    protected readonly service: WorkoutService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Workout })
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWorkout(
    @common.Body() data: WorkoutCreateInput
  ): Promise<Workout> {
    return await this.service.createWorkout({
      data: data,
      select: {
        createdAt: true,
        date: true,
        description: true,
        duration: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Workout] })
  @ApiNestedQuery(WorkoutFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workouts(@common.Req() request: Request): Promise<Workout[]> {
    const args = plainToClass(WorkoutFindManyArgs, request.query);
    return this.service.workouts({
      ...args,
      select: {
        createdAt: true,
        date: true,
        description: true,
        duration: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Workout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workout(
    @common.Param() params: WorkoutWhereUniqueInput
  ): Promise<Workout | null> {
    const result = await this.service.workout({
      where: params,
      select: {
        createdAt: true,
        date: true,
        description: true,
        duration: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Workout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWorkout(
    @common.Param() params: WorkoutWhereUniqueInput,
    @common.Body() data: WorkoutUpdateInput
  ): Promise<Workout | null> {
    try {
      return await this.service.updateWorkout({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          description: true,
          duration: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Workout })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Workout",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWorkout(
    @common.Param() params: WorkoutWhereUniqueInput
  ): Promise<Workout | null> {
    try {
      return await this.service.deleteWorkout({
        where: params,
        select: {
          createdAt: true,
          date: true,
          description: true,
          duration: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
