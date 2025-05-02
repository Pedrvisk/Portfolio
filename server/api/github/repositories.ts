export default defineEventHandler(async (): Promise<GithubRepository[] | null> => {
  const res = await $fetch<GithubRepository[]>("https://api.github.com/users/Pedrvisk/repos").catch(
    () => null
  );

  if (!res || res.length === 0) return null;

  return res.map((repository) => ({
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
});
