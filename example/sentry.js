const { init } = require('@sentry/electron');

init({
  // TODO: Replace with your project's DSN
  dsn: '__SENTRY_DSN__',
});
