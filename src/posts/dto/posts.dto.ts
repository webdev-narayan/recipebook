import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    @IsString()
    url: string;
    @IsBoolean()
    isCommentEnabled: boolean;
    @IsBoolean()
    show_likes: boolean
}
export class UpdatePostDto extends PartialType(CreatePostDto) {

}