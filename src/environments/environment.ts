// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.



export const environment = {
  production: false,
  api_url : 'http://api.qa1.nbos.in',
  client_id: 'ede07e17-2e02-42dc-842c-2ae6fdb666ad',
  client_secret: 'wavelabs',
  grant_type: 'client_credentials',
  tenant_id: 'TNT:DIG-b3bbka3c',
  theme: 'mint',        // mint dark blur
};


export const environmentAdv = {
  production: true,
  api_url: 'https://wavelabs-olx-nonenunciatory-sage.au-syd.mybluemix.net',
  client_id: '',
  tenantId: 'TNT:OLX-gz2tq8fy',
};

export const environmentTodo = {
  api_url: 'http://php-todo.labs.nbos.io',
};
