import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';
import { ValidationPipe } from "@nestjs/common"
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) { };

    @Get() // users/ to list all the users
    async findAll() {
        return this.usersService.findAll();
    };
    @Get(":id") // users/ to list all the users
    async findOne(@Query("id") id: number) {
        return this.usersService.findOne(id)
    };

    @Post()// inside @Body(applide validattor which will validate createUserDto)
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    }
}
