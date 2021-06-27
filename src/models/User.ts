import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = v4();
        }
    }

}

export { User }