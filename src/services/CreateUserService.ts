import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from 'bcryptjs';

interface iUserRequest {
    name: string;
    password: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, password, email, admin = false }: iUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error('Invalid e-mail');
        }
        
        const userAlreadyExists = await usersRepository.findOne({ 
            email
        });

        if(userAlreadyExists) {
            throw new Error('User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            password: passwordHash,
            email,
            admin, 
        });

        await usersRepository.save(user);
        return user;

    }
}

export { CreateUserService };