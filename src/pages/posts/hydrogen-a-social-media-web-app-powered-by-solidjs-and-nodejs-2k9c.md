---
layout: ../../layouts/PostLayout.astro
title: "Hydrogen - A social media web app powered by SolidJS and NodeJS"
poster: "https://res.cloudinary.com/practicaldev/image/fetch/s--zvKIwhkz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g6rdbt3eqw0esqx5hopw.png"
date: "26 Sep 2022"
tags: "Javascript,Solidjs,Tailwindcss"

---

Hi Developers, I have build a social media web app powered by SolidJS in frontend and NodeJS in backend for [Solidhack2022](https://hack.solidjs.com/).

This was my amazing experience to build something big with solidjs and contribute to open source.

This will be a series where i will discuss how i created this web app using different different features from solidjs and expressjs.

[ LIVE Demo ](https://hydrogen-solid.vercel.app/)
[Video Demo](https://www.youtube.com/watch?v=9ItTT385NJM)

# Libraries and Frameworks used

## Frontend

- solid-js
- tailwindcss
- solid-app-router
- platform
- dayjs
- axios
- socket.io-client
- solid-icons
- js-cookie
- shortid

## Backend

- express
- @prisma/client
- bcrypt
- socket.io
- jsonwebtoken
- express-validator
- dotenv
- cookie
- cookie-parser
- morgan
- nodemon
- prisma

## Features

- Authentication
- Dark and light mode
- Friends
- Posts
- Groups
- Notifications
- Messenger
- Profile
- Settings
- Networking
- Geolocation
- Login History
- much more...

## Solidjs Context

In this project i have used Solidjs Context for global state management. Context helps to pass signal and store reactive data to nested components without relaying on props drilling.

You can easily create context and use in components and pages where needed.

```js
import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

//context for manage state
const MyContextState = createContext();

//context  containing method that will update reactive state data
const MyContextDispatch = createContext();

const initialState = {
  // your reactive data initial values comes here...
};

export default function MyProvider(props) {
  const [store, setStore] = createStore(initialState);

  const myMethod1 = () => {
    // update store value using setStore()
  };

  return (
    <MyContextState.Provider value={store}>
      <MyContextDispatch.Provider
        value={{
          myMethod1,

          // so on...
        }}
      >
        {props.children}
      </MyContextDispatch.Provider>
    </MyContextState.Provider>
  );
}

export const useMyState = () => useContext(MyContextState);
export const useMyDispatch = () => useContext(MyContextDispatch);
```

Inside your components you can import `useMyState` and `useMyDispatch`

> Do not destructure reactive data

Do **NOT** use like this

```js
const {someStoreFields} = useMyState()
...
...
<div>{someStoreFields}</div>
...
...

```

Use like this

```js
const myState = useMyState()
...
...
<div>{myState.someStoreFields}</div>
...
...

```

> Solidjs reactivity are based on ES6 Proxy

I have created 4 context

### Auth context

Auth context keeps reactive data related to authentication, user details and account. It also manage socket instance when someone successfully authenticated.

My Auth context initial state looks like this

```js
const initialState = {
  isAuthenticated: false,
  isLoading: true,
  currentUser: null,
  currentAccount: null,
  socket: null,
  manager: null,
};
```

`socket and manage` keeps socket.io client related data.

onMount i fetch current user data using jwt token . If it success then i update store data otherwise i redirect to login screen.

### Notification context

Notification context track notifications count and data . It use socket.io client to fetch realtime notification from server and update store. After that Notification component at Navbar update notification count and data.

My Notification context initial data looks like this

```js
const initialState = {
  count: 0,
  notifications: [],
};
```

### UI Context

Ui context keeps track of ui related data like snackbars.

### Messenger context

Messenger context keeps track of friends and active chat related data.

> Do not make context global when it is not required

I have only those context in global which is required. For example i added auth , notification and ui context global but messenger context is only needed by my messenger route and hence i only scoped messenger context inside messenger route. In this way we can add less weight on top of page.

In my next post i will write about how i used hooks in my application.

Frontend Github repo
{% embed https://github.com/harshmangalam/hydrogen-solidjs-client %}

Backend Github repo

{% embed https://github.com/harshmangalam/hydrogen-nodejs-server %}
