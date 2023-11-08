import React from "react";
import { CalloutCard, Card, InlineGrid, Page } from "@shopify/polaris";

export default function App() {
    return (
        <Page 
            backAction={{ content: "Products", url: "/products" }}
            title="Weekly Summary"
            fullWidth
        >
            <CalloutCard
                title="Weekly Summary by Data Assistant"
                illustration="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                primaryAction={{
                    content: "Ask for more information",
                    url: "https://help.shopify.com",
                
                }}
            >
                <p>Creating a dashboard in a Shopify app with Remix using the Shopify Polaris and Polaris Viz libraries involves setting up several components to display analytics data. Below is a template for a "Weekly Summarize" dashboard. It includes placeholders for your data and demonstrates how to use Polaris Viz components for charts.</p>
            </CalloutCard>
            <InlineGrid columns={{ xs: 1, md: "1fr 1fr 1fr 1fr" }} gap="400">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </InlineGrid>
        </Page>
    )
}