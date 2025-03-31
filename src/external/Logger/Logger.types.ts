export type LogLevel = 'info' | 'warn' | 'error';

export type LogCategory = 'Bootstrap' | 'Domain' | 'Presentation' | 'Unknown';

export type Logger = {
  info: (category: string, message: string, context?: Record<string, unknown>) => void;
  warn: (category: string, message: string, context?: Record<string, unknown>) => void;
  error: (
    category: LogCategory,
    message: string,
    error?: unknown,
    context?: Record<string, unknown>,
  ) => void;
};
