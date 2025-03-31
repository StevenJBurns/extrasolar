import { Logger, LogLevel, LogCategory } from '../Logger.types';

export const createLocalLogger = (): Logger => {
  const styles = {
    info: 'color: green; font-weight: bold;',
    warn: 'color: orange; font-weight: bold;',
    error: 'color: red; font-weight: bold;',
  };

  const log = (
    level: LogLevel,
    category: LogCategory,
    message: string,
    context?: Record<string, unknown>,
    error?: unknown,
  ) => {
    const output = {
      level: level.toUpperCase(),
      category,
      message,
      timestamp: new Date().toISOString(),
      context: context || {},
      error: error ? String(error) : undefined,
    };

    const logFn = {
      info: console.info,
      warn: console.warn,
      error: console.error,
    }[level];

    logFn(
      `%c[${output.level}] %c[${output.category}]`,
      styles[level],
      'color: gray; font-style: italic;',
      JSON.stringify(output, null, 2),
    );
  };

  return {
    info: (category, message, context) =>
      log('info', category as LogCategory, message, context, undefined),
    warn: (category, message, context) =>
      log('warn', category as LogCategory, message, context, undefined),
    error: (category, message, error, context) =>
      log('error', category, message, context, error),
  };
};
