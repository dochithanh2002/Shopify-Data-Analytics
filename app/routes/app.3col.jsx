import React from "react";
import { Card, Page, Layout, BlockStack, Text } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import LineChartComponent from "../components/LineChartComponent";
import BarChartComponent from "../components/BarChartComponent";
import DonutChartComponent from "../components/DonutChartComponent";

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
  const donutData = [
    {
      name: "Shopify Payments",
      data: [
        {
          key: "april - march",
          value: 50000,
        },
      ],
    },
    {
      name: "Paypal",
      data: [
        {
          key: "april - march",
          value: 25000,
        },
      ],
    },
    {
      name: "Other",
      data: [
        {
          key: "april - march",
          value: 10000,
        },
      ],
    },
    {
      name: "Amazon Pay",
      data: [
        {
          key: "april - march",
          value: 4000,
        },
      ],
    },
  ];
  return (
    <Page fullWidth>
      <ui-title-bar title="Spark Bar Chart Visualization"></ui-title-bar>
      <Layout>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" color="subdued">
                  Visualization
                </Text>
                <LineChartComponent data={data} />
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" color="subdued">
                  Visualization
                </Text>
                <BarChartComponent data={data} />
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="500">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" color="subdued">
                  Visualization
                </Text>
                <DonutChartComponent data={donutData} />
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default App;
