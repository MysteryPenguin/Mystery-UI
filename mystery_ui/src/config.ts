import { Color } from "./utils/color";

class Config {
    setSpecific<T extends keyof this>(ident: T, value: typeof this[T]) {
        this[ident] = value;
    }

    set(value: this) {
        return value;
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

export const defaultConfig = new DefaultConfig();