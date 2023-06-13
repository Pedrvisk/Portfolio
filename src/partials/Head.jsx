import NextHead from 'next/head';

export const Head = () => {
  return (
    <NextHead>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/assets/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/assets/favicon-16x16.png'
      />
      <link
        rel='manifest'
        href='/assets/site.webmanifest'
      />
      <link
        rel='mask-icon'
        href='/assets/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <meta
        name='msapplication-TileColor'
        content='#000000'
      />
      <meta
        name='theme-color'
        content='#000000'
      />

      <meta
        name='description'
        content='This website was created with the intention of publicizing my projects, my skills and putting my programming skills into practice.'
      />
      <meta
        name='author'
        content='Pedrovisk'
      />
      <meta
        name='publisher'
        content='Pedrovisk'
      />
      <meta
        name='robots'
        content='index, follow'
      />
      <meta
        name='keywords'
        content='Discord, Bot, DiscordBot, Discord Bot, Miuky, miuky, portfolio, web, web developer, dev, developer'
      />
      <title>Pedrovisk</title>
    </NextHead>
  );
};
