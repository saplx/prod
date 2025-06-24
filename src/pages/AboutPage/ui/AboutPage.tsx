import { useTranslation } from 'react-i18next';
import { PageError } from 'widgets/PageError';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
