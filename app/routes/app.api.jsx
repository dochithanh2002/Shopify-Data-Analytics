import React from "react";
import {
  BlockStack,
  CalloutCard,
  Card,
  InlineGrid,
  Page,
  Box,
  Text,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
export const loader = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  const response = await admin.rest.get({ path: "/customers/count.json" });
  const customers = await response.json();
  return json({ customers });
};

export default function App() {
  const { customers } = useLoaderData();
  console.log("check", customers);
  return (
    <Page
      backAction={{ content: "Homepage", url: "/app" }}
      title="Weekly Summary"
      fullWidth
    >
      <Text>Lamo</Text>
    </Page>
  );
}
