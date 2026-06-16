import { Helmet } from "react-helmet-async";

const SITE_URL = "https://libertylegalnepal.com";
const OG_IMAGE = `${SITE_URL}/logo-og.svg`;

const SEO = ({ title, description, canonical }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Liberty Legal Service &amp; Research Center" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />



      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
