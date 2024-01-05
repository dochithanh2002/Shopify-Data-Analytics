import { Page, Card, DataTable } from "@shopify/polaris";
import React from "react";
import { useLoaderData } from "@remix-run/react";
import { transformCustomerData } from "../../data/customer";

export const loader = async ({ request }) => {
  return transformCustomerData(request);
};

export default function CustomerTable({ data }) {
  const customerData = useLoaderData();
  const rows = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
      "Navy Merino Wool Blazer with khaki chinos and yellow belt",
      "$445.00",
      124518,
      32,
      "$14,240.00",
    ],
  ];

  return (
    <Card>
      <DataTable
        columnContentTypes={[
          "text",
          "numeric",
          "numeric",
          "numeric",
          "numeric",
        ]}
        headings={[
          "Name",
          "Total Order",
          "Total Spent",
          "Last Order",
          "Last Order Spent",
        ]}
        rows={rows}
        pagination={{
          hasNext: true,
          onNext: () => {},
        }}
        hasZebraStripingOnData
      />
    </Card>
  );
}
