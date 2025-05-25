/**
 * 
 * Clones an object
 * 
 * {@linkhttps://github.com/MysteryPenguin/Mystery-UI/wiki/Functions#clone|Mystery-UI Docs}
 */
export function clone<T extends Object>(value: T): T {
    return Object.create(value);
}