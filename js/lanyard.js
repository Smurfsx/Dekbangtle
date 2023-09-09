"use strict";const CONSTANTS={API_URL:"https://api.lanyard.rest/v1",WEBSOCKET_URL:"wss://api.lanyard.rest/socket",HEARTBEAT_PERIOD:3e4};async function lanyard(e){if(!e)throw new Error("Specify an options object");if(!e.userId)throw new Error("Specify a user ID");if(e.socket){if(!e.onPresenceUpdate)throw new Error("Specify onPresenceUpdate callback");if(!("WebSocket"in window||"MozWebSocket"in window))throw new Error("Browser doesn't support WebSocket connections.");const r=new WebSocket(CONSTANTS.WEBSOCKET_URL),o="string"==typeof e.userId?"subscribe_to_id":"subscribe_to_ids";let s=null;return r.addEventListener("open",(()=>{r.send(JSON.stringify({op:2,d:{[o]:e.userId}})),s=setInterval((()=>{r.send(JSON.stringify({op:3}))}),CONSTANTS.HEARTBEAT_PERIOD)})),r.addEventListener("message",(({data:r})=>{const{t:o,d:s}=JSON.parse(r);"INIT_STATE"!==o&&"PRESENCE_UPDATE"!==o||e.onPresenceUpdate(s)})),r.onclose=r=>{try{console.log("Socket closed"),clearInterval(s),setTimeout((()=>{console.log("Trying to reconnect"),lanyard(e)}),3e3)}catch(e){console.log("Socket closed")}console.log(r)},r}if("string"==typeof e.userId){const r=await fetch(`${CONSTANTS.API_URL}/users/${e.userId}`),o=await r.json();if(!o.success)throw new Error(o.error?.message||"An invalid error occured");return o.data}{const r=[];for(const o of e.userId){const e=await fetch(`${CONSTANTS.API_URL}/users/${o}`),s=await e.json();if(!s.success)throw new Error(s.error?.message||"An invalid error occured");r.push(s.data)}return r}}