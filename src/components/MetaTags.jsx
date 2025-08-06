import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

/**
 * @param {{ titleKey: string, descriptionKey: string }} props
*/

function MetaTags({ titleKey, descriptionKey }) {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{titleKey}</title>
      <meta name="description" content={t(descriptionKey)} />
      <meta property="og:title" content={titleKey} />
      <meta property="og:description" content={t(descriptionKey)} />
      <meta property="og:type" content="article" />
      {/* <link rel="canonical" href={`https://myblog.com/posts/${post.id}`} /> */}
    </Helmet>
  );
}

MetaTags.propTypes = {
  titleKey: PropTypes.string.isRequired,
  descriptionKey: PropTypes.string.isRequired,
};

export default MetaTags;
