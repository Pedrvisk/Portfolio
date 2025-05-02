import { JSDOM } from "jsdom";

async function fetchArtistImages(artist: string): Promise<string[]> {
  const url = `http://www.last.fm/fr/music/${artist}/+images`;
  const html = await fetch(url).then((response) => response.text());

  const imgs: string[] = [];
  const dom = new JSDOM(html);
  const elements = dom.window.document.getElementsByTagName("img");

  for (const element of elements) {
    const src = element.getAttribute("src");
    if (src) imgs.push(src);
  }

  return imgs;
}

export default defineEventHandler(async (): Promise<LastFMTrack[] | null> => {
  const res = await $fetch<LastFMTrackResponse>(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=Pedrov1sk&limit=3&api_key=${process.env.LASTFM_API_KEY}&format=json`
  ).catch(() => null);

  if (!res || !res.toptracks || res.toptracks.track.length === 0) return null;

  const tracks = await Promise.all(
    res.toptracks.track.map(async (track) => {
      const artistImages = await fetchArtistImages(track.artist.name);

      return {
        name: track.name,
        artist: {
          url: track.artist.url,
          name: track.artist.name,
        },
        url: track.url,
        rank: track["@attr"].rank,
        playcount: track.playcount,
        image: artistImages[1] || null,
      };
    })
  );

  return tracks;
});
