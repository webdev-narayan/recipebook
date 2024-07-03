import { Body, Controller, Get, Post, Put, Query, UseFilters, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';
import { HttpExceptionFilter } from 'src/common/error.filter';

@Controller('posts')
@UseFilters(new HttpExceptionFilter())
export class PostsController {
    constructor(private readonly postsService: PostsService) {
    }
    @Post()
    async create(@Body(ValidationPipe) createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto)
    }
    @Get()
    async findAll() {
        return this.postsService.findAll()
    }
    @Get(":id")
    async findOne(@Query("id") id: number) {
        return this.postsService.findOne(id)
    }
    @Put(":id")
    async update(@Query("id") id: number, @Body(ValidationPipe) updatePostDto: UpdatePostDto) {
        return this.postsService.update(id, updatePostDto)
    }
}
