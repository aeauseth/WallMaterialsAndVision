"use strict";

import { registerSettings } from "./settings.js";

Hooks.once("init", () => {
  try {
    console.log(
      "This code runs once the Foundry VTT software begins its initialization workflow.",
      this
    );

    registerSettings();
  } catch (e) {
    console.error(e);
  }
});

Hooks.on("ready", function () {
  console.log(
    "This code runs once core initialization is ready and game data is available."
  );
});
