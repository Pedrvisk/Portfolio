export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export default defineEventHandler(
  async (event): Promise<{ data: GithubProfile | null }> => {
    const profile = await $fetch<GithubProfile>(
      "https://api.github.com/users/Pedrvisk"
    ).catch(() => null);

    if (!profile) {
      return {
        data: null,
      };
    }

    return {
      data: {
        login: profile.login,
        avatar_url: profile.avatar_url,
        html_url: profile.html_url,
        bio: profile.bio,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
      },
    };
  }
);
