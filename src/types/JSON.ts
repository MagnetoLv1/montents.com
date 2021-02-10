interface JSON extends Record<string, unknown> {}

export const isJSON = (item: unknown): item is JSON =>
    typeof item === 'object' && item !== null;

export default JSON;
