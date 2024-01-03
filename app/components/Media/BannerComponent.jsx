import { Banner } from "@shopify/polaris";
import React from "react";

export default function BannerComponent() {
  return (
    <Banner
      title="Preview mode"
      action={{ content: "Change mode", url: "" }}
      tone="info"
      onDismiss={() => {}}
    >
      <p>
        Proper functioning of analytics requires sufficient data. A preview mode
        gives you a better idea of what the analytics will look like. You can
        activate or deactivate the preview mode at any time.
      </p>
    </Banner>
  );
}
