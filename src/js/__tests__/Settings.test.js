import Settings from '../Settings';

test('should return default settings', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.settings).toEqual(expected);
});

test('should override default settings with custom settings', () => {
  const settings = new Settings();
  settings.setSetting('theme', 'light');
  settings.setSetting('music', 'rock');

  const expected = new Map([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.settings).toEqual(expected);
});

test('should return default setting if custom setting is not provided', () => {
  const settings = new Settings();
  settings.setSetting('music', 'pop');

  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'pop'],
    ['difficulty', 'easy'],
  ]);
  expect(settings.settings).toEqual(expected);
});
