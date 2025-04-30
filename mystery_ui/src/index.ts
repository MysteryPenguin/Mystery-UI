export { Button } from "./components/button";
export { Input } from "./components/input";
export { Color } from "./utils/color";
export { clone } from "./utils/clone";
export { defaultConfig } from "./config";

// Also export the namespace
import * as ButtonMod from "./components/button";
import * as InputMod from "./components/input";
import * as ColorMod from "./utils/color";
import * as CloneMod from "./utils/clone";
import * as ConfigMod from "./config";

namespace MysteryUI {
    export import Button = ButtonMod.Button;
    export import Input = InputMod.Input;
    export import Color = ColorMod.Color;
    export import clone = CloneMod.clone;
    export import defaultConfig = ConfigMod.defaultConfig;
}

export default MysteryUI;