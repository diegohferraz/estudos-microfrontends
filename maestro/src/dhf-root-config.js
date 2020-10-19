import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location => location.pathname === '/',
});

registerApplication({
  name: "@dhf/independent-project",
  app: () => System.import("@dhf/independent-project"),
  activeWhen: ["/independent-project"],
});

registerApplication({
  name: "@dhf/navigation",
  app: () => System.import("@dhf/navigation"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@dhf/routing-example",
  app: () => System.import("@dhf/routing-example"),
  activeWhen: ["/routing"],
});

registerApplication({
  name: "@dhf/lazy",
  app: () => System.import("@dhf/lazy"),
  activeWhen: ["/lazy"],
});

registerApplication({
  name: "@dhf/internal-parcel-part",
  app: () => System.import("@dhf/internal-parcel-part"),
  activeWhen: location => location.pathname === '/parcel',
});

start({
  urlRerouteOnly: true,
});
