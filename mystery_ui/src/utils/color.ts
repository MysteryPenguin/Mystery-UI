/**
 * 
 * A class to define colors which still have to be calculated mathematically
 * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Color
 * 
 */
export abstract class Color {
    abstract first: number;
    abstract second: number;
    abstract third: number;
    abstract fourth?: number;

    /**
     * 
     * Adds something to the Color.
     * @param a An extra param if tranparency is used
     * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Color#methods
     * 
     */
    public add(value: number, a: number = 0): this {
        this.first += value;
        this.second += value;
        this.third += value;

        if (this.fourth) this.fourth += a;

        return this;
    }

    /**
     * Transforms the Object Color to a color CSS is able read
     * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Color#methods
     */
    public abstract transformToCSS(): string;

    /**
     * Defines a color saved in rgb-format
     * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Color#rgb
     */
    public static RGB = class RGB extends Color {
        fourth?: number;
        first: number;
        second: number;
        third: number;

        public constructor(red: number, green: number, blue: number) {
            super();
            this.first = red;
            this.second = green;
            this.third = blue;
        }

        public transformToCSS() {
            return `rgb(${this.first}, ${this.second}, ${this.third})`
        }
    }

    /**
     * Defines a color saved in rgba-format
     * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Color#rgba
     */
    public static RGBA = class RGBA extends Color {
        first: number;
        second: number;
        third: number;
        fourth: number;

        public constructor(red: number, green: number, blue: number, alpha: number) {
            super();
            this.first = red;
            this.second = green;
            this.third = blue;
            this.fourth = alpha;
        }

        public transformToCSS() {
            return `rgba(${this.first}, ${this.second}, ${this.third}, ${this.fourth})`
        }
    }

    public static WHITE = new this.RGB(255, 255, 255);
    public static BLACK = new this.RGB(0, 0, 0);

    public static RED = new this.RGB(255, 0, 0);
    public static ORANGE = new this.RGB(255, 127, 0);
    public static YELLOW = new this.RGB(255, 255, 0);
    public static LIME = new this.RGB(127, 255, 0);
    public static GREEN = new this.RGB(0, 255, 0);
    public static AQUAMARINE = new this.RGB(0, 255, 127);
    public static CYAN = new this.RGB(0, 255, 255);
    public static SKY_BLUE = new this.RGB(0, 127, 255);
    public static BLUE = new this.RGB(0, 0, 255);
    public static PURPLE = new this.RGB(127, 0, 255)
    public static VIOLET = new this.RGB(255, 0, 255);
    public static PINK = new this.RGB(255, 0, 127);
}