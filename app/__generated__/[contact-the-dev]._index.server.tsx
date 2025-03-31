/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Contact the developer of vaiiya.ca!",
    description: "contact the developer of vaiiya.ca for reporting bugs, or general contact!",
    excludePageFromSearch: true,
    language: "",
    socialImageAssetName: undefined,
    socialImageUrl: "",
    status: 200,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const projectId = "194e2b25-97be-443f-8441-f7922f347c91";

      export const contactEmail = "chaircomputeroverdrive@gmail.com";
    