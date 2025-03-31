import { semanticReleaseAppConfig } from '@internal/config/src/index.js';

export default {
  // defaults to not release to NPM
  ...semanticReleaseAppConfig,
  extends: 'semantic-release-monorepo',
};
