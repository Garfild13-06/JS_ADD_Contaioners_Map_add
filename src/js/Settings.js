class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.customSettings = new Map();
  }

  setSetting(name, value) {
    this.customSettings.set(name, value);
  }

  get settings() {
    const settings = new Map(this.defaultSettings);
    for (const [key, value] of this.customSettings) {
      settings.set(key, value);
    }
    return settings;
  }
}

export default Settings;
