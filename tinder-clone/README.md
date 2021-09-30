 # Tinder_Clone

# `Frontend deploy`

create a project in the firebase console.

```js
// src/firebase.js
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtGG-N43LXv8cZ-MAvIUUlqA2trc7lWeY",
    authDomain: "tinderclone-00.firebaseapp.com",
    projectId: "tinderclone-00",
    storageBucket: "tinderclone-00.appspot.com",
    messagingSenderId: "117048801370",
    appId: "1:117048801370:web:cece5dc990b68de81a4063"
  };

  firebase.initializeApp(firebaseConfig);

```

```sh
$ npm i firebase
$ npm i -g firebase-tools
$ firebase login
$ firebase init
```


* $ firebase init
    1. ? Are you ready to proceed? Yes
    2. >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    3. > Use an existing project
    4. > tinderclone-00 (tinderclone)
    5. ? What do you want to use as your public directory? build
    6. ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    7. ? Set up automatic builds and deploys with GitHub? Yes
    8. ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) haris18896/tinder-frontend-deploy
    9. ? Set up the workflow to run a build script before every deploy? Yes
    10. ? What script should be run before every deploy? (npm ci && npm run build)
    11. ? What script should be run before every deploy? npm run build
    12. ? Set up automatic deployment to your site's live channel when a PR is merged? Yes
    13. ? What is the name of the GitHub branch associated with your site's live channel? master

```sh
$ firebase deploy
$ npm run build
$ firebase deploy --only hosting
```

* IMPORTANT: you need to set proper HTTP caching headers for service-worker.js file in firebase.json file or you will not be able to see changes after first deployment (issue #2440). It should be added inside "hosting" key like next:


```json
{
  "hosting": {
    // ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    // ...
```


```js
// /src/firebase.js
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtGG-N43LXv8cZ-MAvIUUlqA2trc7lWeY",
    authDomain: "tinderclone-00.firebaseapp.com",
    projectId: "tinderclone-00",
    storageBucket: "tinderclone-00.appspot.com",
    messagingSenderId: "117048801370",
    appId: "1:117048801370:web:cece5dc990b68de81a4063"
  };


  firebase.initializeApp(firebaseConfig);
```

```js
// /src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // The URL constructor is available in all browsers that support SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // This is running on localhost. Let's check if a service worker still exists or not.
          checkValidServiceWorker(swUrl, config);
  
          // Add some additional logging to localhost, pointing developers to the
          // service worker/PWA documentation.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service ' +
                'worker. To learn more, visit https://bit.ly/CRA-PWA'
            );
          });
        } else {
          // Is not localhost. Just register service worker
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the updated precached content has been fetched,
                // but the previous service worker will still serve the older
                // content until all client tabs are closed.
                console.log(
                  'New content is available and will be used when all ' +
                    'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                );
  
                // Execute callback
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.');
  
                // Execute callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No service worker found. Probably a different app. Reload the page.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found. Proceed as normal.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
```


```json
// /firebase.json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

```

---
---
---
# `Backend Deploy`

we will be deploying the backend to Heroku.

Create a new Heroku app. fill in the name `bcknd-tinder`.
---
---
One way to do this is to use the Heroku CLI.
If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
```sh
$ heroku login
```
Create a new Git repository
Initialize a git repository in a new or existing directory
```sh
$ cd my-project/
$ git init
$ heroku git:remote -a bknd-tinder
```

Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.
```sh
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

Existing Git repository
For existing repositories, simply add the heroku remote
```sh
$ heroku git:remote -a bknd-tinder
```
---
---

2nd way is to use gitHub.


    Steps:
    1. Create a new Heroku app.
    2. fill in the name `bcknd-tinder`
    3. one way to do this is to use the Heroku CLI.
    4. 2nd way to use gitHub