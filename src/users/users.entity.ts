import { Role } from "src/roles/roles.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, } from "typeorm"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    is_admin: boolean

    @Column()
    profileUrl: string

    @Column()
    phone: string

    @ManyToOne(() => Role, role => role.users)
    role: Role
}