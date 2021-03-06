Package.describe({
  name: 'app-base',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'templating',
    'momentjs:moment',
    'iron:router',
    'reactive-var',
    'reactive-dict'
  ]);

  api.addFiles('namespace.js');
  api.addFiles('route_config.js');
  api.addFiles('client_utils.js', 'client');
  api.addFiles('base_controller.js');
  api.addFiles('client_store.js', 'client');
  api.export('App');
});
