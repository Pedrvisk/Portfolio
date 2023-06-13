const LastFM = ({ tracks }) => {
  return (
    <div className='group p-2 md:p-5 col-span-12 md:col-span-6 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 rounded-md backdrop-blur'>
      <div className='carousel w-full'>
        {tracks
          ? tracks.map((song, index) => <div key={index}>{song.name}</div>)
          : null}
      </div>
    </div>
  );
};

export default LastFM;
