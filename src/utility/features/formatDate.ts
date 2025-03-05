import { months } from '@domain/entities/Month/months';

export const addLeadingZero = (n: number): string => (n <= 9 ? '0' : '') + n;

export const formatLastFetch = (lastFetch: string): string => {
  const date: Date = new Date(lastFetch);

  const day = addLeadingZero(date.getDate());
  const month = months[date.getMonth()].short;
  const year = date.getFullYear();
  const hour = addLeadingZero(date.getHours());
  const min = addLeadingZero(date.getMinutes());
  const sec = addLeadingZero(date.getSeconds());

  return `${day}-${month}-${year}\u00A0\u00A0\u00A0\u00A0${hour}:${min}:${sec}`;
};
