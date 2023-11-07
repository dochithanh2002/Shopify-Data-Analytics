import React from "react";
import {
  Card,
  SkeletonBodyText,
  Page,
  Layout,
  BlockStack,
  Text,
  List,
  Link,
} from "@shopify/polaris";
import {
  PolarisVizProvider,
  LineChart,
  TooltipContent,
} from "@shopify/polaris-viz";
import "@shopify/polaris/build/esm/styles.css";
import { ClientOnly } from "remix-utils/client-only";

function App() {
  const data = [
    {
      name: "LineChart",
      data: [
        { value: 80, key: "Jan" },
        { value: 50, key: "Feb" },
        { value: 80, key: "Mar" },
        { value: 70, key: "Apr" },
        { value: 20, key: "May" },
        { value: 10, key: "Jun" },
        { value: 100, key: "Jul" },
      ],
    },
  ];
  return (
    <Page>
      <ui-title-bar title="Spark Bar Chart Visualization"></ui-title-bar>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" color="subdued">
                  Visualization
                </Text>
                <ClientOnly
                  fallback={
                    <Card>
                      <SkeletonBodyText />
                    </Card>
                  }
                >
                  {() => {
                    return (
                      <PolarisVizProvider
                        themes={{
                          Default: {
                            chartContainer: {
                              minHeight: 300,
                              sparkChartMinHeight: 300,
                              borderRadius: "8px",
                              padding: "55px 15px 15px 15px",
                            },
                          },
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <p
                            style={{
                              position: "absolute",
                              top: 12,
                              left: 12,
                              zIndex: 1,
                            }}
                          >
                            2020-2023
                          </p>
                          <LineChart data={data} />
                        </div>
                      </PolarisVizProvider>
                    );
                  }}
                </ClientOnly>
              </BlockStack>
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
