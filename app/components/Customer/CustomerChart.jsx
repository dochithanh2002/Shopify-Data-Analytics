import React from "react";
import { InlineGrid, BlockStack, Text, Button } from "@shopify/polaris";
import { Card, SkeletonBodyText } from "@shopify/polaris";
import {
  PolarisVizProvider,
  BarChart,
  TrendIndicator,
} from "@shopify/polaris-viz";
import { ClientOnly } from "remix-utils/client-only";

export default function CustomerChart() {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="200">
        <InlineGrid columns="1fr auto">
          <Text as="h5" variant="headingLg">
            Customer
          </Text>
          <Button
            variant="plain"
            onClick={() => {}}
            accessibilityLabel="View Report"
          >
            View Report
          </Button>
        </InlineGrid>
        <Chart height="350px" />
      </BlockStack>
    </Card>
  );
}

const Chart = ({ height = "auto" }) => {
  const SHARK_SPECIES_GROWTH = [
    {
      name: "Mako",
      data: [
        {
          key: "0",
          value: 80,
        },
        {
          key: "5",
          value: 170,
        },
        {
          key: "10",
          value: 210,
        },
        {
          key: "15",
          value: 240,
        },
      ],
    },
    {
      name: "Great White",
      data: [
        {
          key: "0",
          value: 80,
        },
        {
          key: "5",
          value: 180,
        },
        {
          key: "10",
          value: 250,
        },
        {
          key: "15",
          value: 350,
        },
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
              <BarChart
                xAxisOptions={{
                  labelFormatter: (x) => {
                    return `${x} years old`;
                  },
                }}
                yAxisOptions={{
                  labelFormatter: (y) => {
                    return `${y} cm`;
                  },
                }}
                data={SHARK_SPECIES_GROWTH}
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
