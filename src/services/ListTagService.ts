import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagService {

    async execute() {
        const tagsRespositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRespositories.find();

        return tags;
    }
}

export { ListTagService };