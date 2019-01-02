// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCD51c_orNLOuf5UhbaK2mqBAHTc9O_P1w",
    authDomain: "firechat-e9b56.firebaseapp.com",
    databaseURL: "https://firechat-e9b56.firebaseio.com",
    projectId: "firechat-e9b56",
    storageBucket: "firechat-e9b56.appspot.com",
    messagingSenderId: "673092969435"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
