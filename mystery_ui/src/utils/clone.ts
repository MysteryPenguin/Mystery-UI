/**
 * 
 * Clones an object
 * 
 * {@link(https://github.com/MysteryPenguin/Mystery-UI/wiki/Functions#clone) Mystery-UI Docs}
 */
export function clone<T extends object>(value: T): T {
    return Object.create(value);
}