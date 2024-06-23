import { Injectable, } from '@nestjs/common';
import { CreateUserDto, } from './dto/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }
    create(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user)
    }
    findAll(role: string) {
        return [role]
    }
    findOne(id: number) {
        return id
    }

}
