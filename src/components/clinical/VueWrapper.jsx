import React, { useEffect, useRef } from "react";
import { createApp, h } from "vue";

const VueWrapper = ({ component, ...props }) => {
  const vueRef = useRef(null);
  const vueApp = useRef(null);

  useEffect(() => {
    if (!vueRef.current) return;

    // Handle async component resolution
    Promise.resolve(component).then((resolvedComponent) => {
      const app = createApp({
        setup() {
          return () => h(resolvedComponent.default || resolvedComponent, props);
        },
      });
      vueApp.current = app;
      app.mount(vueRef.current);
    });

    return () => {
      if (vueApp.current) {
        vueApp.current.unmount();
      }
    };
  }, [component, props]);

  return <div ref={vueRef}></div>;
};

export default VueWrapper;
