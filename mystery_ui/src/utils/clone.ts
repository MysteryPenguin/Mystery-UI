/**
 * 
 * Clones an object
 * @see https://github.com/MysteryPenguin/Mystery-UI/wiki/Functions#clone
 * 
 */
export function clone<T extends Object>(value: T): T {
    return Object.create(value);
}