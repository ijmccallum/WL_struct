 - `npm install`
 - `npm install http-server pug-cli -g` //Static server, html compiler
 - `npm test`
 - `npm start`

---

###Directory directory

*/public*

 - Static pages & assets (CSS / JS). (*/app* builds to here?)
 - Public / anonymous exploration should always work. 
 - (AA? AAA?) Strict size & performance requirments for these files, no big JS work. 
 - Stats may be rendered to these pages but not dynamically, part of */analysis*
 - There will probably be some marketing pages in here, need some kind of easy system for non tech people to update... use the foundation WP! Somehow.
    - Static page content managed in WP
    - Some kind of button, probably in */admin*, will pull content from WP and generate the static pages
    - newly generated static pages are checked then pushed to the live static server (*/public*)
    - means that we can be fairly open with who updates static page content, but any live updates need an admin. 

*/app*

 - Client side app, the heavy JS work here. 
 - Requires users to be logged in. 
 - Editing / in depth exploration.

*/api*

 - Server side handling of *app* requests. 
 - Requires users to be logged in.
 - `Node JS` with `Express JS`. This is it's own thing.

*/propagator*

 - Server side propegation of claim states. 
 - Runs through every claim updating their status. 
 - There's probably a PhD in efficency to be pulled from what will be happening in here. 

*/analysis*

 - Server side analysis - at some point this could probably become a legitimate "big data" thing. More PhD opportunities?

*/admin*

 - Todo - live updates for managing the system! 
 - Super strict logging in.
 - Web interface for triggering analysis / propegation.

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