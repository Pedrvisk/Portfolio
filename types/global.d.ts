export {};

declare global {
  interface GithubRepositoryOwner {
    avatar_url: string;
    login: string;
  }

  interface GithubRepository {
    id: string;
    html_url: string;
    language: string;
    description: string;
    owner: GithubRepositoryOwner;
    name: string;
    pushed_at: string;
  }

  interface GithubProfile {
    login: string;
    avatar_url: string;
    html_url: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
  }

  interface LastFMTrackArtist {
    url: string;
    name: string;
  }

  interface LastFMTrackImage {
    "#text": string;
    size: string;
  }

  interface LastFMTrack {
    name: string;
    artist: LastFMTrackArtist;
    url: string;
    rank: number;
    playcount: number;
    image: string | null;
  }

  interface LastFMTrackResponse {
    toptracks: {
      track: (LastFMTrack & {
        "@attr": { rank: number };
        image: LastFMTrackImage[];
      })[];
    };
  }

  interface Weather {
    temperature: string | null;
    humidity: string | null;
    last_updated: string | null;
  }

  interface Social {
    icon: string;
    href: string;
    tooltip: string;
    color: string;
  }

  interface Tool {
    icon: string;
    tooltip: string;
    href: string;
  }
}
