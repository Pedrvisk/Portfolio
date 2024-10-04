export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GithubProfileResponse extends GithubProfile {}

export default defineEventHandler(
  async (event): Promise<{ data: GithubProfile | null }> => {
    const res = await $fetch<GithubProfileResponse>(
      "https://api.github.com/users/Pedrvisk"
    ).catch(() => null);

    if (!res) {
      return {
        data: null,
      };
    }

    return {
      data: {
        login: res.login,
        avatar_url: res.avatar_url,
        html_url: res.html_url,
        bio: res.bio,
        public_repos: res.public_repos,
        followers: res.followers,
        following: res.following,
      },
    };
  }
);
