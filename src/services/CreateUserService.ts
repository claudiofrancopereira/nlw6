import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface iUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: iUserRequest) {
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

        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        await usersRepository.save(user);

        return user;

    }
}

export { CreateUserService };