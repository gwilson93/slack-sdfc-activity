import { flow } from "@prismatic-io/spectral";
import { createClient } from "./client";
import type { ConfigPages } from "./configPages";

export const flow1 = flow<ConfigPages>({
  name: "Flow 1",
  stableKey: "21d09b8b-5dbc-44da-a9c8-28341e3ac8be",
  description: "This is the first flow",
  onTrigger: async (context, payload, params) => {
    const { logger } = context;

    logger.info(`Trigger context: ${JSON.stringify(context)}`);
    logger.info(`Trigger payload: ${JSON.stringify(payload)}`);
    logger.info(`Trigger params: ${JSON.stringify(params)}`);

    return Promise.resolve({
      payload,
    });
  },
  onExecution: async (context, params) => {
    const { logger, configVars } = context;

    if (!configVars?.connection1) {
      throw new Error("Missing connection1 configuration");
    }

    logger.info(`Action context: ${JSON.stringify(context)}`);
    logger.info(`Action params: ${JSON.stringify(params)}`);

    const client = createClient(configVars.connection1);
    return {
      data: await client.call("Flow 1"),
    };
  },
});

export default [flow1];
