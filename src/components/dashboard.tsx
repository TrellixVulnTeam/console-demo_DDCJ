import * as React from 'react';
import { HorizontalNav } from '@openshift-console/dynamic-plugin-sdk';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@patternfly/react-core';
import { StatusCard } from './status-card';
import { RouteComponentProps } from 'react-router';

type ODFDashboardPageProps = {
    history: RouteComponentProps['history'];
  };

  
const UpperSection: React.FC = () => (
  <Grid hasGutter>
    <GridItem md={8} sm={12}>
      <StatusCard/>
    </GridItem>
  </Grid>
);

export const ODFDashboard: React.FC = () => {
  return (
    <>
      <div className="co-dashboard-body">
        <UpperSection />
      </div>
    </>
  );
};

const ODFDashboardPage: React.FC<ODFDashboardPageProps> = (props) => {
  const { t } = useTranslation('plugin__console-demo');
  const pages = [
    {
      href: '',
      name: t('Overview'),
      component: ODFDashboard,
    },
  ];

  return (
    <>
      <HorizontalNav
        pages={pages}
      />
    </>
  );
};

export default ODFDashboardPage;
