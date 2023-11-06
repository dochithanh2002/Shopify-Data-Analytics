import React from 'react';
import { Card, SkeletonBodyText, Page, Layout, BlockStack, Text, List, Link } from '@shopify/polaris';
import { PolarisVizProvider, LineChart } from '@shopify/polaris-viz';
import '@shopify/polaris/build/esm/styles.css';
import { ClientOnly } from "remix-utils/client-only";

function App() {
  const data = [
    {
      name: 'LineChart',
      data: [
        { value: Math.random() * 100, key: 'Jan' },
        { value: Math.random() * 100, key: 'Feb' },
        { value: Math.random() * 100, key: 'Mar' },
        { value: Math.random() * 100, key: 'Apr' },
        { value: Math.random() * 100, key: 'May' },
        { value: Math.random() * 100, key: 'Jun' },
        { value: Math.random() * 100, key: 'Jul' },
      ],
    },
  ];
  return (
    <Page>
      <ui-title-bar title='Spark Bar Chart Visualization'></ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text>
                Hello
              </Text>
              <PolarisVizProvider themes={{
                Default: {
                  chartContainer: {
                    minHeight: 200,
                    sparkChartMinHeight: 200,
                    borderRadius: "8px",
                    padding: "55px 15px 15px 15px"
                  }
                } 
              }}>
                <ClientOnly fallback={<Card><SkeletonBodyText /></Card>}>
                {() => {
                      return<LineChart data={data} />
                }}
                </ClientOnly>
              </PolarisVizProvider>
              </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Resources
              </Text>
              <List>
                <List.Item>
                  <Link
                    url="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                    target="_blank"
                    removeUnderline
                  >
                    App nav best practices
                  </Link>
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
        </Layout>
    </Page>
  );
}

export default App;
