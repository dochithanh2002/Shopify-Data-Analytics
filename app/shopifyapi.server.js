import shopify from "./shopify.server";
import writeJsonToTxtFile from "./data/csvConverter";
import { calculate } from "./data/calculate";
import { calculateOrderNumberOvertime } from "./data/calculate";

export async function getCustomer(request) {
  const { admin, session } = await shopify.authenticate.admin(request);
  const customerData = await admin.rest.resources.Customer.all({
    session: session,
    limit: 250,
  });
  return customerData;
}

export async function getOrder(request) {
  const { admin, session } = await shopify.authenticate.admin(request);
  const orderData = await admin.rest.resources.Order.all({
    session: session,
    limit: 250,
  });
  const calData = calculate(orderData);
  return calData;
}

export async function getOrderWeekly(request) {
  const { admin, session } = await shopify.authenticate.admin(request);
  const orderData = await admin.rest.resources.Order.all({
    session: session,
    limit: 250,
  });
  // const calData = calculate(orderData);
  const calData = calculateOrderNumberOvertime(orderData.data);
  return calData;
}
