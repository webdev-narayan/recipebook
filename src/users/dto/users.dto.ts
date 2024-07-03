import { PartialType } from "@nestjs/mapped-types"
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, } from "class-validator";
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsNumber()
    @IsOptional()
    roleId?: number
}

export class UpdateUserDto extends PartialType(CreateUserDto) {

}