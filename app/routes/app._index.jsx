import { Card, Button, CalloutCard, InlineGrid, Layout, Page, Text, BlockStack } from "@shopify/polaris";
import {
  WandMajor
} from '@shopify/polaris-icons';
import React from "react"; 
import { useNavigate } from "@remix-run/react";

export default function App() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Text variant="heading2xl" as="h3" fontWeight="medium">
            Welcome to the app!
          </Text>
          <Text variant="bodyLg" as="p" fontWeight="regular">
            Take control of every data on your store with our Data Assistant!
          </Text>
        </Layout.Section> 
        <Layout.Section>
          <CalloutCard
            title="Customize the style of your checkout"
            illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
            primaryAction={{
              content: 'Customize checkout',
              url: '#',
            }}
            secondaryAction={{
              content: 'Learn more',
              url: '#',
            }}
          >
            <p>Upload your store’s logo, change colors and fonts, and more.</p>
          </CalloutCard>
        </Layout.Section>
        <Layout.Section>
          <Text variant="headingXl" as="h5" fontWeight="medium">
            Explore our options!
          </Text>
          <Text variant="bodySm" as="p" fontWeight="regular">
            We have a lot of options to get started!
          </Text>
        </Layout.Section>
        <Layout.Section>
            <InlineGrid gap="400" columns={3}>
              <Card>
                <Button icon={WandMajor} onClick={() => navigate("/weekly")}>Weekly Summary</Button>
              </Card>
              <Card>
                <Button icon={WandMajor}>Customer Segment</Button>
              </Card>
              <Card>
                <Button icon={WandMajor}>Product Analysis</Button>
              </Card>
            </InlineGrid>
      </Layout.Section>
      </Layout>
    </Page>
  );
}