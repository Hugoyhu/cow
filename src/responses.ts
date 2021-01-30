function randomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}
export default {
  greeting: (user: string, channel: string) => {
    return randomResponse([
      `Hi there <@${user}>!`,
      "MOOOO!!! Hey there! :cow:",
      `What's up <@${user}>?`,
      "Hiiiii!!! :wave:",
    ]);
  },
  evil: (user: string, channel: string) => {
    return randomResponse([
      "Well _that_ wasn't nice :(",
      "I have feelings, you know :pensivecowboy:",
      "I'm crying inside :sob:",
    ]);
  },
  feelings_request: (user: string, channel: string) => {
    return randomResponse([
      "I'm doing great! :cow2: (or MOOing great hehe)",
      "It's going awesome, thanks for asking!",
      "Not bad, for a talking cow :cow2:",
    ]);
  },
  identity_request: (user: string, channel: string) => {
    return randomResponse([
      "I'm the Hack Club Cow, your friendly neighborhood cow! MOOOOO :cow:",
      "I'm just a traveling cow, passing through the lands of Hack Club!",
      "MOOOOOO :cow2:",
    ]);
  },
  projects_request: (user: string, channel: string) => {
    return randomResponse([
      "Hmm... right now I'm inventing a new grass planter!",
      "I'm building the latest and greatest barn!",
      "I'm working on the Pro Tractor™! :tractor:",
    ]);
  },
} as {
  [key: string]: (user: string, channel: string) => string;
};