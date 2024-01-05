export function transformCustomerData() {
  const data = require("./data2.json"); // Make sure to have the correct path to your orderData.json
  return data.map((customer) => {
    return [
      customer.name || "Unknown", // Assuming "name" is a field, use "Unknown" or any default if name is missing
      customer.orders_count.toString(), // Convert numbers to strings for uniform array of strings
      customer.total_spent.toString(),
      customer.last_order_name || "None", // Provide a default value if last order name is missing
      customer.currency,
    ];
  });
}
