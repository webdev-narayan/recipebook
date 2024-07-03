import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';
import { CreatePostDto, UpdatePostDto } from './dto/posts.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>) {
    }
    create(createPostDto: CreatePostDto) {
        try {
            const newPost = this.postRepository.create(createPostDto)
            return this.postRepository.save(newPost)
        } catch (error) {
            if (error instanceof ConflictException) {
                throw new ConflictException('Email already exists');
            }
            throw error;
        }
    }
    findAll() {
        return this.postRepository.find()
    }
    findOne(id: number) {
        return this.postRepository.findOne({ where: { id: id } })
    }
    update(id: number, updatePostDto: UpdatePostDto) {
        return this.postRepository.update({ id }, updatePostDto)
    }
    delete(id: number) {
        return this.postRepository.delete({ id: id })
    }


}
