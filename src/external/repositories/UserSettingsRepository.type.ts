type UserSettings = {
  darkMode: boolean;
  audioVolume: number;
};

export type UserSettingsRepository = {
  save(): void;
  fetch(): UserSettings;
};
