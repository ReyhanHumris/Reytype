export default function SettingsView({ settings, onSettingsChange }) {
  return (
    <div className="max-w-container-max w-full bg-surface-container rounded-xl p-8 border border-outline-variant/20">
      <h2 className="font-headline-lg text-primary text-3xl mb-8">Settings</h2>
      
      <div className="flex flex-col gap-8">
        {/* Language */}
        <div className="flex flex-col gap-2">
          <label className="font-metric-label text-on-tertiary-container uppercase tracking-wider">
            Language
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => onSettingsChange({ ...settings, language: 'id' })}
              className={`px-6 py-3 rounded-lg font-body-lg transition-colors border ${
                settings.language === 'id'
                  ? 'bg-primary-fixed text-on-primary-fixed border-primary-fixed'
                  : 'bg-surface-variant text-on-surface border-outline-variant hover:border-primary'
              }`}
            >
              🇮🇩 Indonesian
            </button>
            <button
              onClick={() => onSettingsChange({ ...settings, language: 'en' })}
              className={`px-6 py-3 rounded-lg font-body-lg transition-colors border ${
                settings.language === 'en'
                  ? 'bg-primary-fixed text-on-primary-fixed border-primary-fixed'
                  : 'bg-surface-variant text-on-surface border-outline-variant hover:border-primary'
              }`}
            >
              🇺🇸 English
            </button>
        {/* Note */}
        <div className="mt-4 p-4 bg-surface-variant rounded-lg border border-outline-variant/30">
          <p className="font-body-sm text-on-surface-variant">
            Note: Changing the language will take effect on your next practice session.
          </p>
        </div>
      </div>
    </div>
  );
}
