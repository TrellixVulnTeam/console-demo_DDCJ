import * as React from 'react';
import * as _ from 'lodash';

const PageHeading: React.FC = (props) => {
  return (
      <h1 className="co-m-pane__heading">
        <div className="co-m-pane__name co-resource-item">
          <span className="co-m-pane__heading-badge"> OpenShift Data Foundation </span>
        </div>
      </h1>
  );
};

export default PageHeading;
