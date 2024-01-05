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
import styles from "@shopify/polaris-viz/build/esm/styles.css";
import SalesSummaryChart from "../components/Weekly/SalesSummaryChart";
import SalesRankingChart from "../components/Weekly/SalesRankingChart";
import { useLoaderData } from "@remix-run/react";
import { getOrder } from "../shopifyapi.server";

export const loader = async ({ request }) => {
  return getOrder(request);
};

export default function App() {
  const overallData = useLoaderData();
  function handleClick() {
    console.log("Data retrieved!", overallData);
  }
  return (
    <Page
      backAction={{ content: "Homepage", url: "/app" }}
      title="Weekly Summary"
      fullWidth
      primaryAction={{
        content: "Sync Data",
        onAction: handleClick,
      }}
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
        <InlineGrid columns={{ xs: 1, md: "1fr 1fr 1fr 1fr 1fr" }} gap="400">
          <Card>
            <Text as="h6" variant="headingLg">
              Total Revenue
            </Text>
            <Box paddingBlockStart="500">
              <Text as="h5" variant="headingXl" fontWeight="regular">
                {"$" + overallData?.totalRevenue || "$--"}
              </Text>
            </Box>
            <Box paddingBlockStart="500">
              <Text variant="bodyMd" as="p">
                <span style={{ color: "green" }}>+0.00%</span> from last week
              </Text>
            </Box>
          </Card>
          <Card>
            <Text as="h5" variant="headingLg">
              Orders
            </Text>
            <Box paddingBlockStart="500">
              <Text as="h5" variant="headingXl" fontWeight="regular">
                {overallData?.totalOrders || "--"}
              </Text>
            </Box>
            <Box paddingBlockStart="500">
              <Text variant="bodyMd" as="p">
                <span style={{ color: "green" }}>+0.00%</span> from last week
              </Text>
            </Box>
          </Card>
          <Card>
            <Text as="h5" variant="headingLg">
              Customer
            </Text>
            <Box paddingBlockStart="500">
              <Text as="h5" variant="headingXl" fontWeight="regular">
                $0.00
              </Text>
            </Box>
            <Box paddingBlockStart="500">
              <Text variant="bodyMd" as="p">
                <span style={{ color: "green" }}>+0.00%</span> from last week
              </Text>
            </Box>
          </Card>
          <Card>
            <Text as="h5" variant="headingLg">
              Product Sold
            </Text>
            <Box paddingBlockStart="500">
              <Text as="h5" variant="headingXl" fontWeight="regular">
                {overallData?.totalProducts || "--"}
              </Text>
            </Box>
            <Box paddingBlockStart="500">
              <Text variant="bodyMd" as="p">
                <span style={{ color: "green" }}>+0.00%</span> from last week
              </Text>
            </Box>
          </Card>
          <Card>
            <Text as="h5" variant="headingLg">
              AOV
            </Text>
            <Box paddingBlockStart="500">
              <Text as="h5" variant="headingXl" fontWeight="regular">
                {"$" + overallData?.averageOrderValue || "$--"}
              </Text>
            </Box>
            <Box paddingBlockStart="500">
              <Text variant="bodyMd" as="p">
                <span style={{ color: "green" }}>+0.00%</span> from last week
              </Text>
            </Box>
          </Card>
        </InlineGrid>
        <SalesSummaryChart />
        <SalesRankingChart />
      </BlockStack>
    </Page>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
