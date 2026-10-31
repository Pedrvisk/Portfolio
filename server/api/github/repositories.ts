export default defineCachedEventHandler(
  async (): Promise<GithubRepository[] | null> => {
    const res = await $fetch<GithubRepository[]>(
      "https://api.github.com/users/Pedrvisk/repos",
    ).catch(() => null);

    if (!res || res.length === 0) return null;

    const excludedNames = new Set(["pedrvisk", "oci-ajd-mongo-tf"]);
    const repositories = res.filter((repository) => {
      const name = repository.name.toLowerCase();

      return (
        !excludedNames.has(name) && !name.startsWith("ignite-") && !name.startsWith("explorer-")
      );
    });

    if (repositories.length === 0) return null;

    return repositories.map((repository) => ({
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
    }));
  },
  { maxAge: 60 * 60 * 24, swr: false },
);
