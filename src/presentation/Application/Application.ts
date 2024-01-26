export class Application {
  #port: number;

  constructor() {
    console.log('creating new Application...');
    this.#port = +(process.env.PORT ?? 4096);
  }

  start() {
    Application.loadEnvironmentVariables();
  }

  static loadEnvironmentVariables(): Promise<void> {
    console.log('creating new Application...');
    return Promise.resolve();
  }
}