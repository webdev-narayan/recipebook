import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/roles.dto";

@Controller("roles")
export class RolesController {
    constructor(private readonly rolesService: RolesService) { }
    @Post("/")
    async create(@Body(ValidationPipe) createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto)
    }
}