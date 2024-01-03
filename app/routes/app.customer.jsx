import React from "react";
import { Page, Text, Button } from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";
import { getCustomer } from "../shopifyapi.server";

export const loader = async ({ request }) => {
  return getCustomer(request);
};

export default function App() {
  const data = useLoaderData();
  function handleClick() {
    console.log("Check", data);
  }

  console.log("check", data);
  return (
    <Page
      backAction={{ content: "Homepage", url: "/app" }}
      title="Weekly Summary"
      fullWidth
    >
      <Text>Lamo</Text>
      <Button onClick={handleClick}>Click me </Button>
    </Page>
  );
}
