export const Left = <L>(value: L) => Object.freeze({ type: 'Left', value } as const);
