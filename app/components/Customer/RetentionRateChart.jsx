import React from "react";
import { InlineGrid, BlockStack, Text, Button } from "@shopify/polaris";
import { Card, SkeletonBodyText } from "@shopify/polaris";
import {
  PolarisVizProvider,
  LineChart,
  LinePreview,
} from "@shopify/polaris-viz";
import { ClientOnly } from "remix-utils/client-only";

export default function RetentionRateChart() {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="200">
        <InlineGrid columns="1fr auto">
          <Text as="h5" variant="headingLg">
            Retention Rate
          </Text>
          <Button
            variant="plain"
            onClick={() => {}}
            accessibilityLabel="View Report"
          >
            View Report
          </Button>
        </InlineGrid>
        <Chart />
      </BlockStack>
    </Card>
  );
}

const Chart = () => {
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
        { value: 110, key: "Jul" },
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
                  horizontalMargin: 10,
                },
              },
            }}
          >
            <div style={{ height: "350px" }}>
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
                theme="Light"
              ></LineChart>
            </div>
          </PolarisVizProvider>
        );
      }}
    </ClientOnly>
  );
};
