import { Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Head from 'next/head';

export default function SEO() {
  const themeType = useTheme<Theme>().palette.type;

  const title = 'Trivia Quiz!';
  const baseUrl = 'https://trivia-quiz.guswillemann.vercel.app/';
  const imagePath = `${baseUrl}card-img.png`;
  const description = 'Trivia game built with NextJS and MaterialUI, using the questions from Open Trivia Database';
  const cardAlt = 'Trivia Quiz Card Image';

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="black" />
      <link rel="icon" href={`/favicon-${themeType}.svg`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:image:alt" content={cardAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imagePath} />
      <meta property="twitter:image:alt" content={cardAlt} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />
    </Head>
  );
}