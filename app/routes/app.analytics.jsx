import React from "react";
import {
  Page,
  InlineGrid,
  BlockStack,
  Card,
  Text,
  Button,
} from "@shopify/polaris";
import BannerComponent from "../components/Media/BannerComponent.jsx";
import CustomerChart from "../components/Customer/CustomerChart.jsx";
import RetentionRateChart from "../components/Customer/RetentionRateChart.jsx";
import styles from "../style/analytics.css";
import LifeTimeValueChart from "../components/Customer/LifeTimeValueChart.jsx";

export default function App() {
  return (
    <Page title="Customer Analytics" fullWidth>
      <BlockStack gap={300}>
        <BannerComponent />
        <InlineGrid gap="300" columns={3}>
          <CustomerChart />
          <RetentionRateChart />
          <LifeTimeValueChart />
        </InlineGrid>
      </BlockStack>
    </Page>
  );
}

const data = [
  { name: "Week 13", FirstTime: 4000, Returning: 2400 },
  { name: "Week 15", FirstTime: 3000, Returning: 1398 },
  { name: "Week 17", FirstTime: 2000, Returning: 9800 },
  { name: "Week 19", FirstTime: 2780, Returning: 3908 },
];

export const links = () => [{ rel: "stylesheet", href: styles }];
