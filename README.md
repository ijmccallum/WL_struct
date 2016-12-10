 - `npm install`
 - `npm install http-server pug-cli -g` //Static server, html compiler
 - `npm test`
 - `npm start`

---

###Directory directory

`/app`

 - Front-end (client side) Development in here, compiles into `/public/app`
 - `pug` ☛ `HTML`
 - `scss` ☛ `CSS`
 - `es6` ☛ `JS`

`/api`
 
 - Requests are all authenticated.
 - `Node JS` with `Express JS`. This runs as it's own service.

`/public`

 - Static pages & assets are compiled into here. Don't do any work in this folder, it'll be overwritten.
 - `/public/app` compiled front end files for the app.
 - `/public/admin` compiled front end files for the admin.
 - `/public/static` compiled static pages, home / about / marketing / stats.
 - Strict size & performance requirments for these files. (AA? AAA?)

`/propagator`

 - Server side propegation of claim states. 
 - Runs through every claim updating their status. 
 - There's probably a PhD in efficency to be pulled from what will be happening in here. 

`/analysis`

 - Server side analysis - at some point this could probably become a legitimate "big data" thing. More PhD opportunities?
 - Renders public results to `/public/static/...`

`/admin-client`

 - Front-end development for the admin web interface.
 - Compiles to `/public/admin/...` 
 - UI for triggering analysis / propegation.
 - UI for static pages (eg, the home / about / marketing pages).

`/admin-server`

 - Server side handling for the admin.
 - Super strict authentication.

---

###URL directory

ROOT will hopefully be www.wikilogic.org

*ROOT* Index.html! and all the static pages under the public folder

*ROOT/app/* Log in for the main editing and in depth exploration experiance.

*ROOT/api/* endpoints for talking to the api in JSON.

*ROOT/admin/* For very special people (currently, just me ;)  

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
 - 

**Patron**: Anyone who has donated or paid for an analysis.
 - *Looking to run a computationally expensive operation:* logs into the app, clicks run, logs out waiting for the operation to finish. 

**Guru**: anyone who has had a contribution merged to the code.

**Evangelist**: Members of the foundation / marketing / business / etc.
 - *Looking to update the copy on the home page:* logs into an admin UI, chenges copy, clicks `publish`. Their changes are rendered as static files in the `/public/static/...` folder.

**Overseer**: Tech leads for WL.
 - *Looking to check up on system performance:* logs into an admin UI, sees various stats about performance. (This will probably happen through the AWS UI).