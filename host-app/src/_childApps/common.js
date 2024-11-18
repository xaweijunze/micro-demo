function getCurrentEnv() {
  const httpHead = window.location.href.includes("https")
    ? "https://"
    : "http://";
  return httpHead + window.location.host;
}
const currentEnv = getCurrentEnv();

export const childAppsEnums = {
  "micro-app": currentEnv + "/micro-app",
};
