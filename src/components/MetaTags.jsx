import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function MetaTags({ titleKey, descriptionKey }) {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />
    </Helmet>
  );
}

MetaTags.propTypes = {
  titleKey: PropTypes.string.isRequired,
  descriptionKey: PropTypes.string.isRequired,
};

export default MetaTags;
