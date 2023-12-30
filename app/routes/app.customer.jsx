import React from "react";
import {
  BlockStack,
  CalloutCard,
  Card,
  InlineGrid,
  Page,
  Box,
  Text,
  Button,
} from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";
import shopify from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin, session } = await shopify.authenticate.admin(request);
  const response = await admin.rest.resources.Customer.all({
    session: session,
  });
  return response;
};

export default function App() {
  const data = useLoaderData();
  console.log("check", data);
  return (
    <Page
      backAction={{ content: "Homepage", url: "/app" }}
      title="Weekly Summary"
      fullWidth
    >
      <Text>Lamo</Text>
      <Button onClick={() => alert("Clicked!")}>Click me </Button>
    </Page>
  );
}
