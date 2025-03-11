type UserSettings = {
  darkMode: boolean,
  audioVolume: number,
};

export interface UserSettingsRepository {
  save(): void;
  fetch(): UserSettings;
};
