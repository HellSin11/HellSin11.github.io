import axios from "axios";

export default class SearchProfileService {
    static async getProfile(username) {
        if (!username) return {}
        const responce = await axios.get('https://api.github.com/users/' + username)
        if(!responce.data) return {}
        const data = responce.data;
        const user = {
            login: data.login, name: data.name, avatar_url: data.avatar_url,
            company: data.company, bio: data.bio, public_repos: data.public_repos,
            email: data.email, twitter_username: data.twitter_username, public_gists: data.public_gists,
            followers: data.followers, following: data.following, created_at: data.created_at,
            updated_at: data.updated_at, location: data.location
        };
        return user;
    }
}
