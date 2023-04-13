import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

export const repositoryName = prismic.getRepositoryName("https://sujeitoprojet.cdn.prismic.io/api/v2");

const routes = [
  {
    type: "home",
    path: "/",
  },
  {
    type: "post",
    path: "/:uid",
  },
];
export interface PrismicClientConfig extends prismic.ClientConfig {
  previewData?: object;
  req?: object;
}

export const createClient = (config: PrismicClientConfig = {}) => {
  const client = prismic.createClient("https://sujeitoprojet.cdn.prismic.io/api/v2", {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
