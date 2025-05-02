export default defineEventHandler(async (): Promise<GithubProfile | null> => {
  const res = await $fetch<GithubProfile>("https://api.github.com/users/Pedrvisk").catch(
    () => null
  );

  if (!res) return null;

  return {
    login: res.login,
    avatar_url: res.avatar_url,
    html_url: res.html_url,
    bio: res.bio,
    public_repos: res.public_repos,
    followers: res.followers,
    following: res.following,
  };
});
