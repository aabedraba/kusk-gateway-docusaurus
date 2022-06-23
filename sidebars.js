/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      label: "Intro",
      id: "intro"
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/installation",
        "getting-started/deploy-an-api",
        "getting-started/connect-a-service-to-the-api"
      ],
    },
    {
      type: "category",
      label: "Dashboard",
      items: [
        "dashboard/overview",
        "dashboard/inspecting-apis",
        "dashboard/deploying-apis",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/autodeploy",
        "guides/cert-manager",
        "guides/cors",
        "guides/mocking",
        "guides/observability",
        "guides/routing",
        "guides/timeouts",
        "guides/troubleshooting",
        "guides/validation",
        "guides/working-with-extension",
      ],
    },
    {
      type: "category",
      label: "CLI",
      items: [
        "cli/overview",
        "cli/install-cmd",
        "cli/generate-cmd",
        "cli/dashboard-cmd",
      ],
    },
  ],
};

module.exports = sidebars;