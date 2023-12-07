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
  const response = client.get({
    session: session,
    status: "any",
  });
  const client = new shopify.clients.Rest({ session });
  const product = await client.get({
    path: `products/${productId}`,
    query: { id: 1, title: "title" },
  });
  //   const orders = await response.json();
  return json({ product });
};

export default function App() {
  const { product } = useLoaderData();
  console.log("check", product);
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
