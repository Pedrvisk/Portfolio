interface GithubRepositoryOwner {
  avatar_url: string;
  login: string;
}

export interface GithubRepository {
  id: string;
  html_url: string;
  language: string;
  description: string;
  owner: GithubRepositoryOwner;
  name: string;
  pushed_at: string;
}

interface GithubRepositoryResponse extends GithubRepository {}

export default defineEventHandler(
  async (event): Promise<{ data: GithubRepository[] | null }> => {
    const res = await $fetch<GithubRepositoryResponse[]>(
      "https://api.github.com/users/Pedrvisk/repos"
    ).catch(() => null);

    if (!res || res.length === 0) {
      return {
        data: null,
      };
    }

    return {
      data: res.map((repository) => ({
        id: repository.id,
        html_url: repository.html_url,
        language: repository.language,
        description: repository.description,
        owner: {
          avatar_url: repository.owner.avatar_url,
          login: repository.owner.login,
        },
        name: repository.name,
        pushed_at: repository.pushed_at,
      })),
    };
  }
);
