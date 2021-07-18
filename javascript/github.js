class gitHub {

    constructor() {
        this.client_id = 'ae8fd4e5d3feffa0561c';
        this.client_secret = 'b5af4dc443d3a1771efcbacfb00a15693bdbcd5d';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // profile details
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // repos
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile : profile,
            repos : repos
        }
    }
}