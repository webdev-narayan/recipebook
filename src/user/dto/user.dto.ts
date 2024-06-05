import { PartialType } from "@nestjs/mapped-types"
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsEnum(["ADMIN", "CUSTOMER"], { message: "valid role is required" })
    role: "ADMIN" | "CUSTOMER"
}

export class UpdateUserDto extends PartialType(CreateUserDto) {

}