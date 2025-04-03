// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import icon from "astro-icon";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://empa-scientific-it.github.io",
  base: "/docs",
  integrations: [
    icon(),
    starlight({
      title: "Empa Scientific IT",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/empa-scientific-it",
        gitlab: "https://gitlab.empa.ch/empa-scientific-it/docs",
      },
      pagination: false,
      sidebar: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        {
          label: "Support",
          items: [
            { label: "How to get support", link: "/support" },
            { label: "Guidelines", link: "/support/guidelines" },
          ],
        },
        {
          label: "Compute",
          items: [
            {
              label: "Access compute resources",
              link: "/compute",
            },
            { label: "CSCS", autogenerate: { directory: "compute/CSCS" } },
          ],
        },
        { label: "Data Science", link: "/data_science" },
        {
          label: "Research Data Management",
          autogenerate: { directory: "rdm" },
        },
        {
          label: "Software Engineering",
          autogenerate: { directory: "software_engineering" },
        },
      ],
    }),
  ],
});
