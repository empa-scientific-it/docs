// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://empa-scientific-it.github.io",
  base: "/docs",
  integrations: [
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
        { label: "Support", link: "/support" },
        {
          label: "Compute",
          items: [
            { label: "CSCS", autogenerate: { directory: "compute/CSCS" } },
            {
              label: "Recipes",
              items: [
                "compute/recipes/build_docker_image",
                "compute/recipes/build_uenv_locally",
              ],
            },
          ],
        },
        { label: "Data Science", link: "/data_science" },
        {
          label: "Research Data Management",
          autogenerate: { directory: "rdm" },
        },
        {
          label: "Software Engineering",
          items: [
            {
              label: "Development",
              link: "software_engineering/development",
            },
            {
              label: "Deployment",
              link: "software_engineering/deployment",
            },
            {
              label: "Training",
              link: "software_engineering/training",
            },
          ],
        },
      ],
    }),
  ],
});
