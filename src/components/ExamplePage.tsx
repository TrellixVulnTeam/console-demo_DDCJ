import {
  Page,
  PageSection,
  Title,
} from "@patternfly/react-core";
import * as React from "react";

export const ExamplePage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Page
      additionalGroupedContent={
        <PageSection variant="light">
          <Title headingLevel="h1">{title}</Title>
        </PageSection>
      }
      groupProps={{ sticky: "top" }}
    >
    </Page>
  );
};

export default ExamplePage;
