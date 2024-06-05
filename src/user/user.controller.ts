import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { ValidationPipe } from "@nestjs/common"
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UserService) { };

    @Get() // users/ to list all the users
    async findAll(@Query("role") role?: "Admin" | "Customer") {
        return this.usersService.findAll(role)
    };

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }
}
