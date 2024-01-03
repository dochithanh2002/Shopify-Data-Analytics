import React from "react";
import {
  BlockStack,
  CalloutCard,
  Card,
  InlineGrid,
  Page,
  Box,
  Text,
} from "@shopify/polaris";
import LineChartComponent from "../components/Charts/LineChartComponent";
import BarChartComponent from "../components/Charts/BarChartComponent";

export default function App() {
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
  const dataRanking = [
    {
      name: "BarChart",
      data: [
        { label: "Item 1", value: 94 },
        { label: "Item 2", value: 87 },
        { label: "Item 3", value: 73 },
        { label: "Item 4", value: 91 },
        { label: "Item 5", value: 80 },
        { label: "Item 6", value: 75 },
        { label: "Item 7", value: 98 },
        { label: "Item 8", value: 79 },
        { label: "Item 9", value: 70 },
        { label: "Item 10", value: 82 },
        { label: "Item 11", value: 84 },
        { label: "Item 12", value: 88 },
        { label: "Item 13", value: 96 },
        { label: "Item 14", value: 77 },
        { label: "Item 15", value: 85 },
        { label: "Item 16", value: 90 },
        { label: "Item 17", value: 92 },
        { label: "Item 18", value: 78 },
        { label: "Item 19", value: 100 },
        { label: "Item 20", value: 81 },
      ],
    },
  ];
  return (
    <Page
      backAction={{ content: "Homepage", url: "/app" }}
      title="Weekly Summary"
      fullWidth
    >
      <BlockStack gap={400}>
        <CalloutCard
          title="Weekly Summary by Data Assistant"
          illustration="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          primaryAction={{
            content: "Ask for more information",
            url: "https://help.shopify.com",
          }}
        >
          <p>
            Creating a dashboard in a Shopify app with Remix using the Shopify
            Polaris and Polaris Viz libraries involves setting up several
            components to display analytics data. Below is a template for a
            "Weekly Summarize" dashboard. It includes placeholders for your data
            and demonstrates how to use Polaris Viz components for charts.
          </p>
        </CalloutCard>
        <InlineGrid columns={{ xs: 1, md: "1fr 1fr 1fr 1fr" }} gap="400">
          <Card>
            <Text>Total Revenue</Text>
          </Card>
          <Card>
            <Text>Orders</Text>
          </Card>
          <Card>
            <Text>Net Profit</Text>
          </Card>
          <Card>
            <Text>Profit Margin</Text>
          </Card>
        </InlineGrid>
        <Card>
          <InlineGrid columns={{ xs: 1, md: "1fr 2fr" }} gap="400">
            <Box>
              <Text variant="headingMd" as="h5" tone="medium">
                Sale Summary
              </Text>
              <Text>
                Creating a dashboard in a Shopify app with Remix using the
                Shopify Polaris and Polaris Viz libraries involves setting up
                several components to display analytics data.
              </Text>
            </Box>
            <Box>
              <LineChartComponent data={data} />
            </Box>
          </InlineGrid>
        </Card>
        <Card>
          <InlineGrid columns={{ xs: 1, md: "1fr 2fr" }} gap="400">
            <Box>
              <Text variant="headingMd" as="h5" tone="medium">
                Sale Ranking
              </Text>
              <Text>
                Creating a dashboard in a Shopify app with Remix using the
                Shopify Polaris and Polaris Viz libraries involves setting up
                several components to display analytics data.
              </Text>
            </Box>
            <Box>
              <BarChartComponent data={dataRanking} />
            </Box>
          </InlineGrid>
        </Card>
      </BlockStack>
    </Page>
  );
}
