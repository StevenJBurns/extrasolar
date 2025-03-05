import { TemperatureScale } from "./TemperatureScale";

export type Temperature = Readonly<{
  value: number | bigint;  
  scale: Readonly<TemperatureScale>;
}>;
