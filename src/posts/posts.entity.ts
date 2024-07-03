import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
@Entity()
@Unique(["url"])
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    url: string;

    @Column({ default: true })
    isCommentEnabled: boolean;
    @Column({ default: true })
    show_likes: boolean;
}