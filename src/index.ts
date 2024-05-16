import { integration } from "@prismatic-io/spectral";
import flows from "./flows";
import { configPages } from "./configPages";

export default integration({
  name: "Slack to Salesforce Activity Logger",
  description: "Import Slack messages into Salesforce as Activities",
  category: "CRM",
  labels: ["internal"],
  iconPath: "icon.png",
  flows,
  configPages,
});
