export const Right = <R>(value: R) => Object.freeze({ type: 'Right', value } as const);
