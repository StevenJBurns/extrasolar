export const NonEmptyStringError = (message = "String must not be empty") => ({
  name: "NonEmptyStringError",
  message,
});

// export class NonEmptyStringError extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = 'NonEmptyStringError';
//     Object.setPrototypeOf(this, NonEmptyStringError.prototype);
//   }
// }
