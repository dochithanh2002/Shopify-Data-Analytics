import React from "react";
import { InlineGrid, Text } from "@shopify/polaris";
import { Card, SkeletonBodyText, Box } from "@shopify/polaris";
import { PolarisVizProvider, BarChart } from "@shopify/polaris-viz";
import { ClientOnly } from "remix-utils/client-only";
import { getOrderWeekly } from "../../shopifyapi.server";
import { useLoaderData } from "@remix-run/react";

// export const loader = async ({ request }) => {
//   return getOrderWeekly(request);
// };

export default function SalesRankingChart() {
  const salesData = useLoaderData();

  return (
    <Card>
      <InlineGrid columns={{ xs: 1, md: "1fr 2fr" }} gap="400">
        <Box>
          <Text variant="headingLg" as="h5">
            Sale Ranking
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
  const orderData = useLoaderData();
  const Checkdata = [
    {
      name: "BarChart",
      data: [
        { key: "Item 1", value: 94 },
        { key: "Item 2", value: 87 },
        { key: "Item 3", value: 73 },
        { key: "Item 4", value: 91 },
        { key: "Item 5", value: 80 },
        { key: "Item 6", value: 75 },
        { key: "Item 7", value: 98 },
        { key: "Item 8", value: 79 },
        { key: "Item 9", value: 70 },
        { key: "Item 10", value: 82 },
        { key: "Item 11", value: 84 },
        { key: "Item 12", value: 88 },
        { key: "Item 13", value: 96 },
        { key: "Item 14", value: 77 },
        { key: "Item 15", value: 85 },
        { key: "Item 16", value: 90 },
        { key: "Item 17", value: 92 },
        { key: "Item 18", value: 78 },
        { key: "Item 19", value: 100 },
        { key: "Item 20", value: 81 },
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
            <div style={{ height: height, position: "relative" }}>
              <BarChart
                xAxisOptions={{
                  keyFormatter: (x) => {
                    return `${x} years old`;
                  },
                }}
                yAxisOptions={{
                  keyFormatter: (y) => {
                    return `${y} cm`;
                  },
                }}
                data={Checkdata}
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
