import axios from "axios";

export default class SearchLastRepositoriesService {
    static async getRepos(username) {
        if (!username) return {}
        const responce = await axios.get(
            `https://api.github.com/users/${username}/repos`);
        if (!responce.data) return {}
        const repos = responce.data;
        return repos;

    }
}
