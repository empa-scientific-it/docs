// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import icon from "astro-icon";
import mermaid from 'astro-mermaid';

// Check out: https://astro.build/config
// And Starlight official docs: https://starlight.astro.build
export default defineConfig({
  site: "https://empa-scientific-it.netlify.app",
  integrations: [
    icon(),
    mermaid(),
    starlight({
      title: "Empa Scientific IT",
      description: "Scientific IT services at Empa",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/empa-scientific-it",
        gitlab: "https://gitlab.empa.ch/empa-scientific-it",
      },
      pagination: false,
      sidebar: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        {
          label: "Support",
          autogenerate: { directory: "/support" },
        },
        {
          label: "Services",
          autogenerate: { directory: "/services", collapsed: true },
        },
        {
          label: "Documentation",
          autogenerate: { directory: "/documentation", collapsed: true },
        },
      ],
    }),
  ],
});
