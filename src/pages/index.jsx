import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Spotify from '@/components/Spotify';
import Tools from '@/components/Tools';
import LastFM from '@/components/LastFM';
import Miuky from '@/components/Miuky';

const Home = ({ user, lastFmTracks }) => {
  return (
    <>
      <Spotify user={user} />
      <Tools />
      <LastFM tracks={lastFmTracks} />
      <Miuky />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const getLastfmTopTracks = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=Pedrov1sk&api_key=${process.env.LASTFM_KEY}&format=json`,
    {
      method: 'GET',
    }
  )
    .then(async (res) => await res.json())
    .catch(() => false);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      lastFmTracks: getLastfmTopTracks.toptracks.track
        .filter((track, index) => index < 3)
        .map((track) => {
          return {
            name: track.name,
            artist: {
              url: track.artist.url,
              name: track.artist.name,
            },
            url: track.url,
            '@attr': {
              rank: track['@attr'].rank,
            },
            playcount: track.playcount,
          };
        }),
    },
    revalidate: 10080, // 7 days
  };
}

export default Home;
