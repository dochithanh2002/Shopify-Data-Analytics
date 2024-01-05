import React from "react";
import { Page, InlineGrid, BlockStack } from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";
import { getCustomer, getOrder } from "../shopifyapi.server";
import BannerComponent from "../components/Media/BannerComponent.jsx";
import CustomerChart from "../components/Customer/CustomerChart.jsx";
import RetentionRateChart from "../components/Customer/RetentionRateChart.jsx";
import styles from "@shopify/polaris-viz/build/esm/styles.css";
import LifeTimeValueChart from "../components/Customer/LifeTimeValueChart.jsx";
import CustomerTable from "../components/Customer/CustomerTable.jsx";

export const loader = async ({ request }) => {
  return getCustomer(request);
};

export default function App() {
  const customerData = useLoaderData();
  function handleClick() {
    console.log("Data retrieved!", customerData);
  }
  return (
    <Page
      title="Customer Analytics"
      fullWidth
      primaryAction={{
        content: "Sync Data",
        onAction: handleClick,
      }}
      secondaryActions={[
        {
          content: "Export",
          disabled: true,
          helpText: "You need permission to import products.",
        },
      ]}
    >
      <BlockStack gap={300}>
        <BannerComponent />
        <InlineGrid gap="300" columns={3}>
          <CustomerChart />
          <RetentionRateChart />
          <LifeTimeValueChart />
        </InlineGrid>
        <CustomerTable data={customerData} />
        {/* <InlineGrid gap="300" columns={3}>
          <CustomerChart />
          <CustomerChart />
          <CustomerChart />
        </InlineGrid> */}
      </BlockStack>
    </Page>
  );
}

export const links = () => [{ rel: "stylesheet", href: styles }];
