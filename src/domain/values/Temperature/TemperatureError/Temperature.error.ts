export function TemperatureError(message: string): Error {
  const error = new Error(message);
  error.name = "TemperatureError";
  Object.setPrototypeOf(error, TemperatureError.prototype);
  return error;
}

// export class TemperatureError extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = 'TemperatureError';
//     Object.setPrototypeOf(this, TemperatureError.prototype);
//   }
// }
