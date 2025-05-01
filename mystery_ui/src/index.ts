import { Button } from "./components/button";
import { Input } from "./components/input";
import { Color } from "./utils/color";
import { clone } from "./utils/clone";
import { config } from "./config";

export { Button, Input, Color, clone, config }

/**
 * The namespace where everything of the library is stored
 */
const MysteryUI = {
    /**
     * 
     * A button with a prefabricated design
     * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Button
     * 
     */
    Button,

    /**
     * 
     * A prefabricated input for faster and easier styling
     * 
     */
    Input,

    /**
     * 
     * A class to define colors which still have to be calculated mathematically
     * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Color
     * 
     */
    Color,

    /**
     * 
     * Clones an object
     * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Functions#clone
     * 
     */
    clone,

    /**
     * The global config for the default param values of the components
     */
    config
}

export default MysteryUI;
