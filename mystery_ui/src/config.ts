import { Color } from "./utils/color";

class Config {
    /**
     * Sets a specific property of the config
     * 
     * @param property The name of the property
     * @param value The value you want to set the property on
     */
    setSpecific<T extends keyof this>(property: T, value: typeof this[T]): void {
        this[property] = value;
    }

    /**
     * Sets every property of the class
     * 
     * @param values Every property of the class
     */
    set(object: this): void {
        for (const property in object) {
            this[property] = object[property]
        }
    }
}

class ButtonConfig extends Config {
    backgroundColor: Color = new Color.RGB(24, 215, 54);
    color = "white";
    borderRadius = "16px";
    font = "'Comic Neue', cursive";
}

class InputConfig extends Config {
    borderColor = "white";
}

class DefaultConfig extends Config {
    button = new ButtonConfig();
    input = new InputConfig();
}


/**
 * The global config for the default param values of the components
 */
export const config = new DefaultConfig();