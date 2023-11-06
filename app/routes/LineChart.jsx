// LineChart.jsx
import React from 'react';
import { LineChart, PolarisVizProvider } from '@shopify/polaris-viz';
import { Card, SkeletonBodyText } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import { ClientOnly } from "remix-utils/client-only";

function LineChartComponent() {
  const data = [
    {
      name: 'LineChart',
      data: [
        { value: Math.random() * 100, key: 'Jan' },
        { value: Math.random() * 100, key: 'Feb' },
        { value: Math.random() * 100, key: 'Mar' },
        { value: Math.random() * 100, key: 'Apr' },
        { value: Math.random() * 100, key: 'May' },
        { value: Math.random() * 100, key: 'Jun' },
        { value: Math.random() * 100, key: 'Jul' },
      ],
    },
  ];

   <ClientOnly fallback={<Card><SkeletonBodyText /></Card>}>
  {() => {
         return<PolarisVizProvider>
            <LineChart data={data} />
       </PolarisVizProvider> ;
    }}
  </ClientOnly>   
}

export default LineChartComponent;
