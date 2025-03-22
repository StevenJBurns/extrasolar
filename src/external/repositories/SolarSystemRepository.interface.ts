import { SolarSystem } from '@domain/entities/SolarSystem/SolarSystem.class.ts';

export interface SolarSystemRepository {
  fetch(id: string): SolarSystem;
  fetchAll(): Array<SolarSystem>;
}
