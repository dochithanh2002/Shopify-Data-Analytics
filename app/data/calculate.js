import { write } from "fs";
import writeJsonToTxtFile from "./csvConverter";

// Function to calculate total number of products sold
function calculateTotalProductsSold(orders) {
  let totalProductsSold = 0;

  orders.forEach((order) => {
    order.line_items.forEach((item) => {
      totalProductsSold += item.quantity;
    });
  });

  return totalProductsSold;
}

// Function to calculate Average Order Value (AOV)
function calculateAOV(totalRevenue, totalOrders) {
  // Avoid division by zero error
  if (totalOrders === 0) return 0;
  return totalRevenue / totalOrders;
}

// Utilize previous functions for total orders and revenue
function calculateOrderSummary(orders) {
  let totalOrders = 0;
  let totalRevenue = 0;

  orders.forEach((order) => {
    totalOrders += 1;
    totalRevenue += parseFloat(order.total_price);
  });

  return {
    totalOrders: totalOrders,
    totalRevenue: totalRevenue,
  };
}

export function calculate(orderData) {
  const orderSummary = calculateOrderSummary(orderData.data);
  const totalProductsSold = calculateTotalProductsSold(orderData.data);
  const aov = calculateAOV(orderSummary.totalRevenue, orderSummary.totalOrders);

  const summary = {
    totalOrders: orderSummary.totalOrders,
    totalRevenue: orderSummary.totalRevenue,
    totalProductsSold: totalProductsSold,
    averageOrderValue: aov,
  };
  return summary;
}

function formatDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function getWeekNumber(d) {
  d = new Date(d);
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}

export function calculateOrderNumberOvertime(orders) {
  let ordersCountByWeek = {};

  orders.forEach((order) => {
    const date = new Date(order.created_at);
    const weekNumber = `Week ${getWeekNumber(date)}`;

    if (ordersCountByWeek[weekNumber]) {
      ordersCountByWeek[weekNumber]++;
    } else {
      ordersCountByWeek[weekNumber] = 1;
    }
  });

  const formattedData = Object.keys(ordersCountByWeek).map((key) => ({
    key: key,
    value: ordersCountByWeek[key],
  }));
  writeJsonToTxtFile(formattedData, "ordersCountByWeek");

  return {
    name: "BarChart",
    data: formattedData,
  };
}
