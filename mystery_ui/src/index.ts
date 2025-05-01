export { Button } from "./components/button";
export { Input } from "./components/input";
export { Color } from "./utils/color";
export { clone } from "./utils/clone";
export { config } from "./config";

// Error: namespace child (hoisting) not supported yet. You have to add it manually into dist/index.d.ts
import * as ButtonMod from "./components/button";
import * as InputMod from "./components/input";
import * as ColorMod from "./utils/color";
import * as CloneMod from "./utils/clone";
import * as ConfigMod from "./config";

/**
 * The namespace where everything of the library is stored
 */
namespace MysteryUI {
    export import Button = ButtonMod.Button;
    export import Input = InputMod.Input;
    export import Color = ColorMod.Color;
    export import clone = CloneMod.clone;
    export import config = ConfigMod.config;
}

export default MysteryUI;
