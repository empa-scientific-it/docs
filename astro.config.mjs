// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://empa-scientific-it.github.io",
  /*
    Setting "base" is needed if you want to deploy your site to a subdirectory
    CAUTION: If set, it requires to prepend all the relative links with the base path.
  */
  // base: "/docs",
  integrations: [
    starlight({
      title: "Empa Scientific IT",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/empa-scientific-it",
        gitlab: "https://gitlab.empa.ch/empa-scientific-it/docs",
      },
      sidebar: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Support", link: "/support" },
        { label: "Compute", autogenerate: { directory: "compute" } },
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
