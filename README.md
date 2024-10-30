# iEscrow Platform Landing Page

## How to start

```bash
git clone https://github.com/iEscrow/Platform-Landing-Page.git
cd Platform-Landing-Page
npm i
npm run dev
```

### Architecture

```bash
    client/
    │
    ├── src/                                #app folder
    │   ├── assets/                         #images, icons, fonts
    │   ├── components/                     #components
    │   │      ├── features/                #
    │   │      ├── layout/                  #layout components
    │   │      └── ui/                      #recyclable components
    │   │
    │   ├── context/                        #
    │   │      └── Theme context
    │   │
    │   ├── hooks/                          #custom hooks
    │   │      ├── useLocalStorage.jsx
    │   │      └── useScrolled.jsx          #hook for scoll navbar animation
    │   │
    │   ├── locales/                        #translation folder
    │   │      ├── en/
    │   │      ├── es/
    │   │      └── i18n.js                  #i18n config
    │   │
    │   ├── pages/                          #pages folder
    │   │      ├── home/
    │   │      └── index.js                 #pages barrel
    │   │
    │   ├── providers/                      #providers folder
    │   │      ├── AppProviders.jsx         #principal provider
    │   │      └── rest_of_providers...
    │   │
    │   └── routes/                         #routes folder
    │          ├── AppRoutes.jsx            #app routes
    │          └── rest_of_routes/          #private routes
    │
    │
    └── ...configs
```
