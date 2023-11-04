import { LineChart, PolarisVizProvider } from "@shopify/polaris-viz";
import "@shopify/polaris-viz/build/esm/styles.css";

export const PolarisVizLineChart = ({ data }) => {
  return (
    <PolarisVizProvider
      themes={{
        Light: {
          legend: {
            backgroundColor: "white"
          }
        }
      }}
    >
      <div
        style={{
          height: 400
        }}
      >
        <LineChart data={data} theme="Light" />
      </div>
    </PolarisVizProvider>
  );
};
