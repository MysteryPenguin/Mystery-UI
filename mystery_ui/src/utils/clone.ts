export function clone<T extends Object>(value: T): T {
    return Object.create(value);
}