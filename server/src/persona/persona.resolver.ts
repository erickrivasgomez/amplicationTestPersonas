import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PersonaResolverBase } from "./base/persona.resolver.base";
import { Persona } from "./base/Persona";
import { PersonaService } from "./persona.service";

@graphql.Resolver(() => Persona)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PersonaResolver extends PersonaResolverBase {
  constructor(
    protected readonly service: PersonaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
