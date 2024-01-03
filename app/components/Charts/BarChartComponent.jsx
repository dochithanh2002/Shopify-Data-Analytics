import React from "react";
import { Card, SkeletonBodyText } from "@shopify/polaris";
import { PolarisVizProvider, BarChart } from "@shopify/polaris-viz";
import "@shopify/polaris/build/esm/styles.css";
import { ClientOnly } from "remix-utils/client-only";

export default function BarChartComponent({ data }) {
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
                  minHeight: 200,
                  sparkChartMinHeight: 200,
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
              <BarChart data={data} />
            </div>
          </PolarisVizProvider>
        );
      }}
    </ClientOnly>
  );
}
