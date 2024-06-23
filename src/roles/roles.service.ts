import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Role } from "./roles.entity";
import { CreateRoleDto } from "./dto/roles.dto";

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) { }

    create(createRoleDto: CreateRoleDto) {
        const role = this.roleRepository.create(createRoleDto)
        return this.roleRepository.save(role)
    }

    findAll() {
        const roles = this.roleRepository.find();
        return roles
    }
}