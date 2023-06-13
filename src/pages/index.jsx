import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Spotify from '@/components/Spotify';
import Tools from '@/components/Tools';
import LastFM from '@/components/LastFM';
import Miuky from '@/components/Miuky';

const Home = ({ user, songsWeekly }) => {
  return (
    <>
      <Spotify user={user} />
      <Tools />
      <LastFM tracks={songsWeekly} />
      <Miuky />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const getLastfmWeeklyTracks = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=Pedrov1sk&api_key=${process.env.LASTFM_KEY}&format=json`,
    {
      method: 'GET',
    }
  )
    .then(async (res) => await res.json())
    .catch(() => false);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      songsWeekly: getLastfmWeeklyTracks.weeklytrackchart.track.filter(
        (track, index) => index < 10
      ),
    },
    revalidate: 4320, // 3 days
  };
}

export default Home;
