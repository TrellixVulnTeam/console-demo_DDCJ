import * as React from 'react';
import { useTranslation } from 'react-i18next';

export type HumanizeResult = {
    value: number;
    unit: string;
    string: string;
};

export const DataUnavailableError: React.FC = () => {
    const { t } = useTranslation('plugin__console-demo');
    return (
      <div className="centerComponent">
        <div className="text-muted">{t('No data available')}</div>
      </div>
    );
  };

