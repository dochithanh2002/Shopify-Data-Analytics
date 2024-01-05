import React from "react";
import { InlineGrid, Text } from "@shopify/polaris";
import { Card, SkeletonBodyText, Box } from "@shopify/polaris";
import { PolarisVizProvider, LineChart } from "@shopify/polaris-viz";
import { ClientOnly } from "remix-utils/client-only";

export default function SalesSummaryChart() {
  return (
    <Card>
      <InlineGrid columns={{ xs: 1, md: "1fr 2fr" }} gap="400">
        <Box>
          <Text variant="headingLg" as="h5">
            Sale Summary
          </Text>
          <Box paddingBlockStart="500">
            <Text>
              Creating a dashboard in a Shopify app with Remix using the Shopify
              Polaris and Polaris Viz libraries involves setting up several
              components to display analytics data.
            </Text>
          </Box>
        </Box>
        <Box>
          <Chart />
        </Box>
      </InlineGrid>
    </Card>
  );
}

const Chart = ({ height = "auto" }) => {
  const data = [
    {
      name: "Sales Summary over month",
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
                  minHeight: 320,
                  sparkChartMinHeight: 100,
                  borderRadius: "8px",
                  padding: "15px",
                },
              },
              Light: {
                chartContainer: {
                  minHeight: 320,
                  sparkChartMinHeight: 100,
                  borderRadius: "8px",
                  padding: "15px",
                },
                grid: {
                  showHorizontalLines: true,
                  horizontalOverflow: false,
                  verticalOverflow: true,
                },
              },
            }}
          >
            {/* <TrendIndicator accessibilityLabel="Increase of 10%" value="10%" /> */}
            <div style={{ height: height, position: "relative" }}>
              <LineChart
                xAxisOptions={{
                  labelFormatter: (x) => {
                    return `${x}`;
                  },
                }}
                yAxisOptions={{
                  labelFormatter: (y) => {
                    return `${y}`;
                  },
                }}
                data={data}
                type="stacked"
                theme="Light"
              />
            </div>
          </PolarisVizProvider>
        );
      }}
    </ClientOnly>
  );
};
