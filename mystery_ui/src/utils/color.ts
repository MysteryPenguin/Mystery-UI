export abstract class Color {
    abstract first: number;
    abstract second: number;
    abstract third: number;
    abstract fourth?: number;

    public abstract add(value: number): this;
    public abstract transformToCSS(): string;

    static RGB = class {
        first: number;
        second: number;
        third: number;

        constructor(red: number, green: number, blue: number) {
            this.first = red;
            this.second = green;
            this.third = blue;
        }

        public add(value: number) {
            this.first += value;
            this.second += value;
            this.third += value;

            return this;
        }

        public transformToCSS() {
            return `rgb(${this.first}, ${this.second}, ${this.third})`
        }
    }

    static RGBA = class {
        first: number;
        second: number;
        third: number;
        fourth: number;

        public constructor(red: number, green: number, blue: number, alpha: number) {
            this.first = red;
            this.second = green;
            this.third = blue;
            this.fourth = alpha;
        }

        public add(value: number, alpha: number) {
            this.first += value;
            this.second += value;
            this.third += value;
            this.fourth += alpha;

            return this;
        }

        public transformToCSS() {
            return `rgba(${this.first}, ${this.second}, ${this.third}, ${this.fourth})`
        }
    }

    static white = new this.RGB(255, 255, 255);
    static black = new this.RGB(0, 0, 0);
    static red = new this.RGB(255, 0, 0);
    static green = new this.RGB(0, 255, 0);
    static blue = new this.RGB(0, 0, 255);
}