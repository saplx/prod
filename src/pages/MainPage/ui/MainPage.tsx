import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Input
                // eslint-disable-next-line i18next/no-literal-string
                placeholder="Введите текст"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
