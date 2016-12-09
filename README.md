 - `npm install`
 - `npm test`
 - `npm start`

---

*/public*

Static pages & assets (CSS / JS). Public / anonymous exploration should always work. (AA? AAA?) Strict size & performance requirments for these files, no big JS work. Stats may be rendered to these pages but not dynamically.

*/app*

Client side app, the heavy JS work here. Requires users to be logged in. Editing / in depth exploration.

*/api*

Server side handling of *app* requests. Requires users to be logged in.

*/propagator*

Server side propegation of claim states. Runs through every claim updating their status. There's probably a PhD in efficency to be pulled from what will be happening in here. 

*/analysis*

Server side analysis - at some point this could probably become a legitimate "big data" thing. More PhD opportunities?

*/admin*

Todo - managing the system! Super strict logging in.