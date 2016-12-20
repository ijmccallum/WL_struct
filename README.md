 - `npm install`
 - `npm install http-server mustache rollup -g` //Static server, html compiler, js compiler
 - `npm test`
 - `npm start`

---

###Directory directory

`/public` **Compilation target**

 - Static pages & assets are compiled into here. Don't do any work in this folder, it'll be overwritten.
 - `/public/app/` compiled front end files for the app.
 - `/public/admin/` compiled front end files for the admin.
 - `/public/marketing/` compiled static pages, home / about / marketing / stats.
 - `/public/main.css` the base styles used through every part of WL. Typography etc.
 - Strict size & performance requirments for these files. (AA? AAA?)

`/app` **PWA**

express & node serving the UI. Keeping this as a seporate 'stack' to help with scaling / compartmentalization.

 - Front-end (client side) Development in here, compiles into `/public/app`
 - `mustache` ☛ `HTML` (handlebars templating?)
 - `scss` ☛ `CSS`
 - `es6` ☛ `JS`

`/api` **Node, Express**
 
 - Requests are all authenticated.
 - Getting & setting claims.
 - Get Set users.

`/marketing` **Static file development**

 - Home page, about, stats.
 - compiles to `/public/marketing/...`
 - To run these pages locally run `npm run dev-market` and open [localhost:8080](http://localhost:8080/)

`/sass-base` **SASS - these styles underlie everything**

 - Applies to every page, the app, the admin, the marketing pages.

`/propagator` **System, ?**

 - Server side propegation of claim states. 
 - Runs through every claim updating their status. 
 - There's probably a PhD in efficency to be pulled from what will be happening in here. 

`/analysis` **System, ?**

 - Server side analysis - at some point this could probably become a legitimate "big data" thing. More PhD opportunities?
 - Renders public results to `/public/static/...`

`/admin` **JS, ?**

 - Front-end development for the admin web interface (this can be fancy modern front end).
 - Compiles to `/public/admin/...` 
 - UI for triggering analysis / propegation.
 - UI for static pages (eg, the home / about / marketing pages).
 - Server side handling for the admin.
 - Super strict authentication.

---

###URL directory

ROOT will hopefully be www.wikilogic.org

 - *ROOT* Index.html! and all the static pages under the public folder
    - */app/* Log in for the main editing and in depth exploration experiance.
    - */api/* endpoints for talking to the api in JSON.
    - */admin/* For very special people (currently, just me ;)  

---

###Web App Philosophy / gospel

 - Routing will happen server side. (but services workers can be used to enhance)
 - Testing and performance are our co-religions.
 - Monoliths are not welcome - keep files small & simple(within reason)!
 - Assume your user is on an old iPhone running Opera Mini over a slow connection (Africa) or they're on UC-Browser (China). 

 ---

###User stories

**Anon**: Every human who's online.
 - *Looking to browse some statistics about WL's findings:* Opens the url, views the stats.
 - *Looking to DDOS WL:* opens the stats page... a lot.

**Contributor**: People who have created an account.
 - *Looking to add a claim:* logs into the app, does updates, hits save. Initial load hits the app static files, logging in and updates hit the API. 
 - *Looking to change all their personal details:* 
 - *Looking to donate to WL:* (Becomes a Patron & gains the ability to order paid analysis) 

**Patron**: Anyone who has donated or paid for an analysis.
 - *Looking to run a computationally expensive operation:* logs into the app, clicks run, logs out waiting for the operation to finish. 

**Guru**: anyone who has had a contribution merged to the code.

**Evangelist**: Members of the foundation / marketing / business / etc.
 - *Looking to update the copy on the home page:* logs into an admin UI, chenges copy, clicks `publish`. Their changes are rendered as static files in the `/public/static/...` folder.

**Overseer**: Tech leads for WL.
 - *Looking to check up on system performance:* logs into an admin UI, sees various stats about performance. (This will probably happen through the AWS UI).

###Request routes (some examples to help think out the structure)

 - **Homepage:** static .html file returned.
 - **Stats page:** static .html file returned (rendered periodically by the system).
 - **App (not logged in)** express - compiles template - returns.
 - **Profile page:** express - auth / db - compiles template - returns.
 - **App (logged in)** epress - auth / db - compiles template - returns.