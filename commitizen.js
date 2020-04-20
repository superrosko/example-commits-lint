'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:      A new feature',
    },
    {
      value: 'fix',
      name: 'fix:       A bug fix',
    },
    {
      value: 'build',
      name: 'build:     Build changes',
    },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: 'METADATA:',
  subjectLimit: 72,
};
