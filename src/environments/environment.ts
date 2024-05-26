/// This file can be replaced during build by using the `fileReplacements` array.url99-+++
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * @ignore
 */
export const environment = {
  production: false,
  api_url: "https://silvifrid-gateway.vercel.app",
  avatars_main_route: "./../../../../../assets/img/avatars/",
  max_avatar_number_images: 13,
  payment_redirect_url: "https://silvifrid-frontend.vercel.app"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
