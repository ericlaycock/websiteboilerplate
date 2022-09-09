!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return a}),n.d(e,"b",function(){return T}),n.d(e,"c",function(){return b}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return N}),n.d(e,"h",function(){return _}),n.d(e,"i",function(){return A}),n.d(e,"j",function(){return R}),n.d(e,"k",function(){return u}),n.d(e,"l",function(){return l}),n.d(e,"m",function(){return f}),n.d(e,"n",function(){return I}),n.d(e,"o",function(){return p}),n.d(e,"p",function(){return y}),n.d(e,"q",function(){return h}),n.d(e,"r",function(){return d}),n.d(e,"s",function(){return m}),n.d(e,"t",function(){return g}),n.d(e,"u",function(){return V}),n.d(e,"v",function(){return k}),n.d(e,"w",function(){return C}),n.d(e,"x",function(){return v});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=r>>2,h=(3&r)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),i.push(n[u],n[h],n[l],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0,o=++e<t.length?n[t.charAt(e)]:64,a=++e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){return function(t){const e=i(t);return r.encodeByteArray(e,!0)}(t).replace(/\./g,"")},o=function(t){try{return r.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function l(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function d(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function f(){return u().indexOf("Electron/")>=0}function p(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function m(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function y(){return"object"==typeof indexedDB}function v(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=(()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)}),r.onupgradeneeded=(()=>{n=!1}),r.onerror=(()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")})}catch(t){e(t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(E,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new b(i,o,n)}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(S(n)&&S(s)){if(!_(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function S(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function C(t){const e={};return t.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function A(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){const n=new O(t,e);return n.subscribe.bind(n)}class O{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(i.next=D),void 0===i.error&&(i.error=D),void 0===i.complete&&(i.complete=D);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return new Promise((n,i)=>{t.onsuccess=(t=>{n(t.target.result)}),t.onerror=(t=>{var n;i(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)})})}class P{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e="readonly"){return new M(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new x(this._db.createObjectStore(t,e))}close(){this._db.close()}}class M{constructor(t){this._transaction=t,this.complete=new Promise((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=(()=>{e(this._transaction.error)}),this._transaction.onabort=(()=>{e(this._transaction.error)})})}objectStore(t){return new x(this._transaction.objectStore(t))}}class x{constructor(t){this._store=t}index(t){return new U(this._store.index(t))}createIndex(t,e,n){return new U(this._store.createIndex(t,e,n))}get(t){return L(this._store.get(t),"Error reading from IndexedDB")}put(t,e){return L(this._store.put(t,e),"Error writing to IndexedDB")}delete(t){return L(this._store.delete(t),"Error deleting from IndexedDB")}clear(){return L(this._store.clear(),"Error clearing IndexedDB object store")}}class U{constructor(t){this._index=t}get(t){return L(this._index.get(t),"Error reading from IndexedDB")}}function V(t,e,n){return new Promise((i,r)=>{try{const s=indexedDB.open(t,e);s.onsuccess=(t=>{i(new P(t.target.result))}),s.onerror=(t=>{var e;r(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)}),s.onupgradeneeded=(t=>{n(new P(s.result),t.oldVersion,t.newVersion,new M(s.transaction))})}catch(t){r(`Error opening indexedDB: ${t.message}`)}})}}).call(this,n(6))},function(t,e,n){"use strict";n.d(e,"a",function(){return T}),n.d(e,"b",function(){return m}),n.d(e,"c",function(){return g}),n.d(e,"d",function(){return y}),n.d(e,"e",function(){return I}),n.d(e,"f",function(){return E}),n.d(e,"g",function(){return _});var i=n(4),r=n(2),s=n(0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const a="@firebase/app",c="0.7.22",u=new r.b("@firebase/app"),h="[DEFAULT]",l={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,f=new Map;function p(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function g(t){const e=t.name;if(f.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;f.set(e,t);for(const e of d.values())p(e,t);return!0}function m(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function y(t,e,n=h){m(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},w=new s.b("app","Firebase",v);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="9.7.0";function E(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:h,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw w.create("bad-app-name",{appName:String(r)});const o=d.get(r);if(o){if(Object(s.h)(t,o.options)&&Object(s.h)(n,o.config))return o;throw w.create("duplicate-app",{appName:r})}const a=new i.b(r);for(const t of f.values())a.addComponent(t);const c=new b(t,n,a);return d.set(r,c),c}function I(t=h){const e=d.get(t);if(!e)throw w.create("no-app",{appName:t});return e}function _(t,e,n){var r;let s=null!==(r=l[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}g(new i.a(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="firebase-heartbeat-database",k=1,C="firebase-heartbeat-store";let A=null;function N(){return A||(A=Object(s.u)(S,k,(t,e)=>{switch(e){case 0:t.createObjectStore(C)}}).catch(t=>{throw w.create("storage-open",{originalErrorMessage:t.message})})),A}async function O(t,e){try{const n=(await N()).transaction(C,"readwrite"),i=n.objectStore(C);return await i.put(e,D(t)),n.complete}catch(t){throw w.create("storage-set",{originalErrorMessage:t.message})}}function D(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=1024,L=2592e6;class P{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new x(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=M();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some(t=>t.date===e))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=L}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=M(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=R){const n=[];let i=t.slice();for(const r of t){const t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),U(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),U(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Object(s.e)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function M(){return(new Date).toISOString().substring(0,10)}class x{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.p)()&&Object(s.x)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await N()).transaction(C).objectStore(C).get(D(t))}catch(t){throw w.create("storage-get",{originalErrorMessage:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function U(t){return Object(s.e)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t){g(new i.a("platform-logger",t=>new o(t),"PRIVATE")),g(new i.a("heartbeat",t=>new P(t),"PRIVATE")),_(a,c,t),_(a,c,"esm2017"),_("fire-js","")}("")},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return h}),n.d(e,"d",function(){return l});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function h(t){i.forEach(e=>{e.setLogLevel(t)})}function l(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return ni}),n.d(e,"b",function(){return ri}),n.d(e,"c",function(){return ii}),n.d(e,"d",function(){return oi}),n.d(e,"e",function(){return si}),n.d(e,"f",function(){return ai}),n.d(e,"g",function(){return ci}),n.d(e,"h",function(){return ti}),n.d(e,"i",function(){return ei});var i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},s={},o=o||{},a=r||self;function c(){}function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var l="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function v(){this.s=this.s,this.o=this.o}var w={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,l)&&t[l]||(t[l]=++d)}(this);delete w[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function E(t){return Array.prototype.concat.apply([],arguments)}function I(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function _(t){return/^[\s\xa0]*$/.test(t)}var S,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function A(t,e){return t<e?-1:t>e?1:0}t:{var N=a.navigator;if(N){var O=N.userAgent;if(O){S=O;break t}}S=""}function D(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function R(t){const e={};for(const n in t)e[n]=t[n];return e}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e])t[n]=i[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function M(t){return M[" "](t),t}M[" "]=c;var x,U=C(S,"Opera"),V=C(S,"Trident")||C(S,"MSIE"),F=C(S,"Edge"),j=F||V,B=C(S,"Gecko")&&!(C(S.toLowerCase(),"webkit")&&!C(S,"Edge"))&&!(C(S,"Trident")||C(S,"MSIE"))&&!C(S,"Edge"),q=C(S.toLowerCase(),"webkit")&&!C(S,"Edge");function K(){var t=a.document;return t?t.documentMode:void 0}t:{var H="",$=function(){var t=S;return B?/rv:([^\);]+)(\)|;)/.exec(t):F?/Edge\/([\d\.]+)/.exec(t):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):q?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if($&&(H=$?$[1]:""),V){var z=K();if(null!=z&&z>parseFloat(H)){x=String(z);break t}}x=H}var G,W={};function X(){return function(t){var e=W;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}(function(){let t=0;const e=k(String(x)).split("."),n=k("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=A(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||A(0==r[2].length,0==s[2].length)||A(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t})}if(a.document&&V){var Y=K();G=Y||(parseInt(x,10)||void 0)}else G=void 0;var Q=G,J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(t){}return t}();function Z(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function tt(t,e){if(Z.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{M(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.Z.h.call(this)}}Z.prototype.h=function(){this.defaultPrevented=!0},y(tt,Z);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),it=0;function rt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=b(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}st.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=at(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new function(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++it,this.ca=this.fa=!1}(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function ht(t,e,n,i,r){if(i&&i.once)return function t(e,n,i,r,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],i,r,s);return null}i=yt(i);return e&&e[nt]?e.O(n,i,h(r)?!!r.capture:!!r,s):lt(e,n,i,!0,r,s)}(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ht(t,e[s],n,i,r);return null}return n=yt(n),t&&t[nt]?t.N(e,n,h(i)?!!i.capture:!!i,r):lt(t,e,n,!1,i,r)}function lt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=gt(t);if(a||(t[ct]=a=new st(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){var t=pt;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)J||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ft(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function dt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[nt])ot(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ft(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=gt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):rt(t)}}}function ft(t){return t in ut?ut[t]:ut[t]="on"+t}function pt(t,e){if(t.ca)t=!0;else{e=new tt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&dt(t),t=n.call(i,e)}return t}function gt(t){return(t=t[ct])instanceof st?t:null}var mt="__closure_events_fn_"+(1e9*Math.random()>>>0);function yt(t){return"function"==typeof t?t:(t[mt]||(t[mt]=function(e){return t.handleEvent(e)}),t[mt])}function vt(){v.call(this),this.i=new st(this),this.P=this,this.I=null}function wt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Z(e,t);else if(e instanceof Z)e.target=e.target||t;else{var r=e;P(e=new Z(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=bt(o,i,!0,e)&&r}if(r=bt(o=e.g=t,i,!0,e)&&r,r=bt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=bt(o=e.g=n[s],i,!1,e)&&r}function bt(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ot(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}y(vt,v),vt.prototype[nt]=!0,vt.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,r,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],i,r,s);else r=h(r)?!!r.capture:!!r,i=yt(i),e&&e[nt]?(e=e.i,(n=String(n).toString())in e.g&&-1<(i=at(o=e.g[n],i,r,s))&&(rt(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete e.g[n],e.h--))):e&&(e=gt(e))&&(n=e.g[n.toString()],e=-1,n&&(e=at(n,i,r,s)),(i=-1<e?n[e]:null)&&dt(i))}(this,t,e,n,i)},vt.prototype.M=function(){if(vt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rt(n[i]);delete e.g[t],e.h--}}this.I=null},vt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},vt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Tt=a.JSON.stringify;function Et(){var t=At;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var It,_t=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new class{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}},t=>t.reset());function St(t){a.setTimeout(()=>{throw t},0)}function kt(t,e){It||function(){var t=a.Promise.resolve(void 0);It=function(){t.then(Nt)}}(),Ct||(It(),Ct=!0),At.add(t,e)}var Ct=!1,At=new class{constructor(){this.h=this.g=null}add(t,e){const n=_t.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Nt(){for(var t;t=Et();){try{t.h.call(t.g)}catch(t){St(t)}var e=_t;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ct=!1}function Ot(t,e){vt.call(this),this.h=t||1,this.g=e||a,this.j=g(this.kb,this),this.l=Date.now()}function Dt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Rt(t,e,n){if("function"==typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}y(Ot,vt),(i=Ot.prototype).da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),wt(this,"tick"),this.da&&(Dt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Ot.Z.M.call(this),Dt(this),delete this.g};class Lt extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=Rt(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(t){v.call(this),this.h=t,this.g={}}y(Pt,v);var Mt=[];function xt(t,e,n,i){Array.isArray(n)||(n&&(Mt[0]=n.toString()),n=Mt);for(var r=0;r<n.length;r++){var s=ht(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ut(t){D(t.g,function(t,e){this.g.hasOwnProperty(e)&&dt(t)},t),t.g={}}function Vt(){this.g=!0}function Ft(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Tt(n)}catch(t){return e}}(t,n)+(i?" "+i:"")})}Pt.prototype.M=function(){Pt.Z.M.call(this),Ut(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vt.prototype.Aa=function(){this.g=!1},Vt.prototype.info=function(){};var jt={},Bt=null;function qt(){return Bt=Bt||new vt}function Kt(t){Z.call(this,jt.Ma,t)}function Ht(t){const e=qt();wt(e,new Kt(e,t))}function $t(t,e){Z.call(this,jt.STAT_EVENT,t),this.stat=e}function zt(t){const e=qt();wt(e,new $t(e,t))}function Gt(t,e){Z.call(this,jt.Na,t),this.size=e}function Wt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){t()},e)}jt.Ma="serverreachability",y(Kt,Z),jt.STAT_EVENT="statevent",y($t,Z),jt.Na="timingevent",y(Gt,Z);var Xt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Yt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qt(){}function Jt(t){return t.h||(t.h=t.i())}function Zt(){}Qt.prototype.h=null;var te,ee={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ne(){Z.call(this,"d")}function ie(){Z.call(this,"c")}function re(){}function se(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Pt(this),this.P=ae,t=j?125:void 0,this.W=new Ot(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}y(ne,Z),y(ie,Z),y(re,Qt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},te=new re;var ae=45e3,ce={},ue={};function he(t,e,n){t.K=1,t.v=Le(Ce(e)),t.s=n,t.U=!0,le(t,null)}function le(t,e){t.F=Date.now(),ge(t),t.A=Ce(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),ze(n.h,"t",i),t.C=0,n=t.l.H,t.h=new oe,t.g=Gn(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Lt(g(t.Ia,t,t.g),t.O)),xt(t.V,t.g,"readystatechange",t.gb),e=t.H?R(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ht(1),function(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o})}(t.j,t.u,t.A,t.m,t.X,t.s)}function de(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function fe(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if((i=pe(t,n))==ue){4==e&&(t.o=4,zt(14),r=!1),Ft(t.j,t.m,null,"[Incomplete Response]");break}if(i==ce){t.o=4,zt(15),Ft(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Ft(t.j,t.m,i,null),be(t,i)}de(t)&&i!=ue&&i!=ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(e),e.L=!0,zt(11))):(Ft(t.j,t.m,n,"[Invalid Chunked Response]"),we(t),ve(t))}function pe(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ue:(n=Number(e.substring(n,i)),isNaN(n)?ce:(i+=1)+n>e.length?ue:(e=e.substr(i,n),t.C=i+n,e))}function ge(t){t.Y=Date.now()+t.P,me(t,t.P)}function me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Wt(g(t.eb,t),e)}function ye(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ve(t){0==t.l.G||t.I||qn(t.l,t)}function we(t){ye(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Dt(t.W),Ut(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ze(n.i,t)))if(n.I=t.N,!t.J&&Ze(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Bn(n),On(n)}Vn(n),zt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=Wt(g(n.ab,n),6e3));if(1>=Je(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Hn(n,11)}else if((t.J||n.g==t)&&Bn(n),!_(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(C(t,"spdy")||C(t,"quic")||C(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(tn(s,s.h),s.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Re(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=zn(i,i.H?i.la:null,i.W),o.J){en(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(ye(a),ge(a)),i.g=o}else Un(i);0<n.l.length&&Ln(n)}else"stop"!=u[0]&&"close"!=u[0]||Hn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Hn(n,7):Nn(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Ht(4)}catch(t){}}function Te(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"==typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;r=(i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t)).length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Ee(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Ee)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ie(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];_e(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)_e(r,i=t.g[e])||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function _e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=se.prototype).setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==_n(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const l=_n(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ga()||Sn(this.g)))){this.I||4!=l||7==e||Ht(8==e||0>=d?3:2),ye(this);var n=this.g.ba();this.N=n;e:if(de(this)){var i=Sn(this.g);t="";var r=i.length,s=4==_n(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){we(this),ve(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,zt(12),we(this),ve(this);break t}Ft(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,be(this,n)}this.U?(fe(this,l,o),j&&this.i&&3==l&&(xt(this.V,this.W,"tick",this.fb),this.W.start())):(Ft(this.j,this.m,o,null),be(this,o)),4==l&&we(this),this.i&&!this.I&&(4==l?qn(this.l,this):(this.i=!1,ge(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),we(this),ve(this)}}}catch(t){}},i.fb=function(){if(this.g){var t=_n(this.g),e=this.g.ga();this.C<e.length&&(ye(this),fe(this,t,e),this.i&&4!=t&&ge(this))}},i.cancel=function(){this.I=!0,we(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.K&&(Ht(3),zt(17)),we(this),this.o=2,ve(this)):me(this,this.Y-t)},(i=Ee.prototype).R=function(){Ie(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ie(this),this.g.concat()},i.get=function(t,e){return _e(this.h,t)?this.h[t]:e},i.set=function(t,e){_e(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var Se=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ke){this.g=void 0!==e?e:t.g,Ae(this,t.j),this.s=t.s,Ne(this,t.i),Oe(this,t.m),this.l=t.l,e=t.h;var n=new qe;n.i=e.i,e.g&&(n.g=new Ee(e.g),n.h=e.h),De(this,n),this.o=t.o}else t&&(n=String(t).match(Se))?(this.g=!!e,Ae(this,n[1]||"",!0),this.s=Pe(n[2]||""),Ne(this,n[3]||"",!0),Oe(this,n[4]),this.l=Pe(n[5]||"",!0),De(this,n[6]||"",!0),this.o=Pe(n[7]||"")):(this.g=!!e,this.h=new qe(null,this.g))}function Ce(t){return new ke(t)}function Ae(t,e,n){t.j=n?Pe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ne(t,e,n){t.i=n?Pe(e,!0):e}function Oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function De(t,e,n){e instanceof qe?(t.h=e,function(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(He(this,e),ze(this,n,t))},t)),t.j=e}(t.h,t.g)):(n||(e=Me(e,je)),t.h=new qe(e,t.g))}function Re(t,e,n){t.h.set(e,n)}function Le(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Me(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Me(e,Ue,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Me(e,Ue,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Me(n,"/"==n.charAt(0)?Fe:Ve,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Me(n,Be)),t.join("")};var Ue=/[#\/\?@]/g,Ve=/[#\?:]/g,Fe=/[#\?]/g,je=/[#\?@]/g,Be=/#/g;function qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Ee,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function He(t,e){Ke(t),e=Ge(t,e),_e(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,_e((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ie(t)))}function $e(t,e){return Ke(t),e=Ge(t,e),_e(t.g.h,e)}function ze(t,e,n){He(t,e),0<n.length&&(t.i=null,t.g.set(Ge(t,e),I(n)),t.h+=n.length)}function Ge(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=qe.prototype).add=function(t,e){Ke(this),this.i=null,t=Ge(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Ke(this),this.g.forEach(function(n,i){T(n,function(n){t.call(e,n,i,this)},this)},this)},i.T=function(){Ke(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){Ke(this);var e=[];if("string"==typeof t)$e(this,t)&&(e=E(e,this.g.get(Ge(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=E(e,t[n])}return e},i.set=function(t,e){return Ke(this),this.i=null,$e(this,t=Ge(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var We=class{constructor(t,e){this.h=t,this.g=e}};function Xe(t){this.l=t||Ye,a.PerformanceNavigationTiming?t=0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ye=10;function Qe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Je(t){return t.h?1:t.g?t.g.size:0}function Ze(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function tn(t,e){t.g?t.g.add(e):t.h=e}function en(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function nn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function rn(){}function sn(t,e,n){const i=n||"";try{Te(t,function(t,n){let r=t;h(t)&&(r=Tt(t)),e.push(i+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function on(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function an(t){this.l=t.$b||null,this.j=t.ib||!1}function cn(t,e){vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=un,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe.prototype.cancel=function(){if(this.i=nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},rn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},rn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(an,Qt),an.prototype.g=function(){return new cn(this.l,this.j)},an.prototype.i=function(t){return function(){return t}}({}),y(cn,vt);var un=0;function hn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dn(t)}function dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=cn.prototype).open=function(t,e){if(this.readyState!=un)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ln(this)),this.readyState=un},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ln(this):dn(this),3==this.readyState&&hn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,ln(this))},i.Ta=function(t){this.g&&(this.response=t,ln(this))},i.ha=function(){this.g&&ln(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var fn=a.JSON.parse;function pn(t){vt.call(this),this.headers=new Ee,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gn,this.K=this.L=!1}y(pn,vt);var gn="",mn=/^https?$/i,yn=["POST","PUT"];function vn(t){return"content-type"==t.toLowerCase()}function wn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bn(t),En(t)}function bn(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}function Tn(t){if(t.h&&void 0!==o&&(!t.C[1]||4!=_n(t)||2!=t.ba()))if(t.v&&4==_n(t))Rt(t.Fa,0,t);else if(wt(t,"readystatechange"),4==_n(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.H).match(Se)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!mn.test(r?r.toLowerCase():"")}n=i}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var c=2<_n(t)?t.g.statusText:""}catch(t){c=""}t.j=c+" ["+t.ba()+"]",bn(t)}}finally{En(t)}}}function En(t,e){if(t.g){In(t);const n=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function In(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}function Sn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function kn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return D(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Re(t,e,n))}function Cn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function An(t){this.za=0,this.l=[],this.h=new Vt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cn("baseRetryDelayMs",5e3,t),this.$a=Cn("retryDelaySeedMs",1e4,t),this.Ya=Cn("forwardChannelMaxRetries",2,t),this.ra=Cn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Xe(t&&t.concurrentRequestLimit),this.Ca=new function(){this.g=new rn},this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Nn(t){if(Dn(t),3==t.G){var e=t.V++,n=Ce(t.F);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),Mn(t,n),(e=new se(t,t.h,e,void 0)).K=2,e.v=Le(Ce(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Gn(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ge(e)}$n(t)}function On(t){t.g&&(Fn(t),t.g.cancel(),t.g=null)}function Dn(t){On(t),t.u&&(a.clearTimeout(t.u),t.u=null),Bn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&a.clearTimeout(t.m),t.m=null)}function Rn(t,e){t.l.push(new We(t.Za++,e)),3==t.G&&Ln(t)}function Ln(t){Qe(t.i)||t.m||(t.m=!0,kt(t.Ha,t),t.C=0)}function Pn(t,e){var n;n=e?e.m:t.V++;const i=Ce(t.F);Re(i,"SID",t.J),Re(i,"RID",n),Re(i,"AID",t.U),Mn(t,i),t.o&&t.s&&kn(i,t.o,t.s),n=new se(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=xn(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),tn(t.i,n),he(n,i,e)}function Mn(t,e){t.j&&Te({},function(t,n){Re(e,n,t)})}function xn(t,e,n){n=Math.min(t.l.length,n);var i=t.j?g(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(0>(n-=e))e=Math.max(0,r[o].h-100),s=!1;else try{sn(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Un(t){t.g||t.u||(t.Y=1,kt(t.Ga,t),t.A=0)}function Vn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Wt(g(t.Ga,t),Kn(t,t.A)),t.A++,!0)}function Fn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function jn(t){t.g=new se(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ce(t.oa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.N?"0":"1"),Re(e,"AID",t.U),Mn(t,e),Re(e,"TYPE","xmlhttp"),t.o&&t.s&&kn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Le(Ce(e)),n.s=null,n.U=!0,le(n,t)}function Bn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function qn(t,e){var n=null;if(t.g==e){Bn(t),Fn(t),t.g=null;var i=2}else{if(!Ze(t.i,e))return;n=e.D,en(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;wt(i=qt(),new Gt(i,n,e,r)),Ln(t)}else Un(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==i&&function(t,e){return!(Je(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Wt(g(t.Ha,t,e),Kn(t,t.C)),t.C++,0)))}(t,e)||2==i&&Vn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Hn(t,5);break;case 4:Hn(t,10);break;case 3:Hn(t,6);break;default:Hn(t,2)}}function Kn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Hn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=g(t.jb,t);n||(n=new ke("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ae(n,"https"),Le(n)),function(t,e){const n=new Vt;if(a.Image){const i=new Image;i.onload=m(on,n,i,"TestLoadImage: loaded",!0,e),i.onerror=m(on,n,i,"TestLoadImage: error",!1,e),i.onabort=m(on,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=m(on,n,i,"TestLoadImage: timeout",!1,e),a.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(n.toString(),i)}else zt(2);t.G=0,t.j&&t.j.va(e),$n(t),Dn(t)}function $n(t){t.G=0,t.I=-1,t.j&&(0==nn(t.i).length&&0==t.l.length||(t.i.i.length=0,I(t.l),t.l.length=0),t.j.ua())}function zn(t,e,n){let i=function(t){return t instanceof ke?Ce(t):new ke(t,void 0)}(n);if(""!=i.i)e&&Ne(i,e+"."+i.i),Oe(i,i.m);else{const t=a.location;i=function(t,e,n,i){var r=new ke(null,void 0);return t&&Ae(r,t),e&&Ne(r,e),n&&Oe(r,n),i&&(r.l=i),r}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,function(t,e){Re(i,e,t)}),e=t.D,n=t.sa,e&&n&&Re(i,e,n),Re(i,"VER",t.ma),Mn(t,i),i}function Gn(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new pn(new an({ib:!0})):new pn(t.qa)).L=t.H,e}function Wn(){}function Xn(){if(V&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function Yn(t,e){vt.call(this),this.g=new An(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!_(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Zn(this)}function Qn(t){ne.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Jn(){ie.call(this),this.status=1}function Zn(t){this.g=t}(i=pn.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():te.g(),this.C=this.u?Jt(this.u):Jt(te),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void wn(this,t)}t=n||"";const r=new Ee(this.headers);i&&Te(i,function(t,e){r.set(e,t)}),i=function(t){t:{var e=vn;const n=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=a.FormData&&t instanceof a.FormData,!(0<=b(yn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(t,e){this.g.setRequestHeader(e,t)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{In(this),0<this.B&&((this.K=function(t){return V&&X()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Rt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){wn(this,t)}},i.pa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),En(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),pn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Tn(this):this.cb())},i.cb=function(){Tn(this)},i.ba=function(){try{return 2<_n(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),fn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=An.prototype).ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new se(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?P(s=R(s),this.P):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=xn(this,r,e),Re(n=Ce(this.F),"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Mn(this,n),this.o&&s&&kn(n,this.o,s),tn(this.i,r),this.Ra&&Re(n,"TYPE","init"),this.ja?(Re(n,"$req",e),Re(n,"SID","null"),r.$=!0,he(r,n,null)):he(r,n,e),this.G=2}}else 3==this.G&&(t?Pn(this,t):0==this.l.length||Qe(this.i)||Pn(this))},i.Ga=function(){if(this.u=null,jn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Wt(g(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,zt(10),On(this),jn(this))},i.ab=function(){null!=this.v&&(this.v=null,On(this),Vn(this),zt(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),zt(2)):(this.h.info("Failed to ping google.com"),zt(1))},(i=Wn.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Xn.prototype.g=function(t,e){return new Yn(t,e)},y(Yn,vt),Yn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),kt(g(t.hb,t,e))),zt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=zn(t,null,t.W),Ln(t)},Yn.prototype.close=function(){Nn(this.g)},Yn.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Rn(this.g,e)}else this.v?((e={}).__data__=Tt(t),Rn(this.g,e)):Rn(this.g,t)},Yn.prototype.M=function(){this.g.j=null,delete this.j,Nn(this.g),delete this.g,Yn.Z.M.call(this)},y(Qn,ne),y(Jn,ie),y(Zn,Wn),Zn.prototype.xa=function(){wt(this.g,"a")},Zn.prototype.wa=function(t){wt(this.g,new Qn(t))},Zn.prototype.va=function(t){wt(this.g,new Jn(t))},Zn.prototype.ua=function(){wt(this.g,"b")},Xn.prototype.createWebChannel=Xn.prototype.g,Yn.prototype.send=Yn.prototype.u,Yn.prototype.open=Yn.prototype.m,Yn.prototype.close=Yn.prototype.close,Xt.NO_ERROR=0,Xt.TIMEOUT=8,Xt.HTTP_ERROR=6,Yt.COMPLETE="complete",Zt.EventType=ee,ee.OPEN="a",ee.CLOSE="b",ee.ERROR="c",ee.MESSAGE="d",vt.prototype.listen=vt.prototype.N,pn.prototype.listenOnce=pn.prototype.O,pn.prototype.getLastError=pn.prototype.La,pn.prototype.getLastErrorCode=pn.prototype.Da,pn.prototype.getStatus=pn.prototype.ba,pn.prototype.getResponseJson=pn.prototype.Qa,pn.prototype.getResponseText=pn.prototype.ga,pn.prototype.send=pn.prototype.ea;var ti=s.createWebChannelTransport=function(){return new Xn},ei=s.getStatEventTarget=function(){return qt()},ni=s.ErrorCode=Xt,ii=s.EventType=Yt,ri=s.Event=jt,si=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oi=s.FetchXmlHttpFactory=an,ai=s.WebChannel=Zt,ci=s.XhrIo=pn}).call(this,n(6))},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a});var i=n(0);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:function(t){return t===s?void 0:t}(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return ro}),n.d(e,"b",function(){return as}),n.d(e,"c",function(){return io}),n.d(e,"d",function(){return cs}),n.d(e,"e",function(){return ds}),n.d(e,"f",function(){return so}),n.d(e,"g",function(){return Qs}),n.d(e,"h",function(){return Xs}),n.d(e,"i",function(){return co}),n.d(e,"j",function(){return no});var i=n(1),r=n(4),s=n(2),o=n(0),a=n(3);const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new s.b("@firebase/firestore");function d(){return l.logLevel}function f(t,...e){if(l.logLevel<=s.a.DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=s.a.ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=s.a.WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends o.c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class k{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=(t=>this.I(t)),this.T=(t=>e.writeSequenceNumber(t)))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A.A=-1;class O{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=N(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function R(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new L(0,0))}static max(){return new P(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function x(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===V.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof V?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends V{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const j=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends V{construct(t,e,n){return new B(t,e,n)}static isValidIdentifier(t){return j.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new T(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new T(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new T(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new B(e)}static emptyPath(){return new B([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.fields=t,t.sort(B.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return R(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new K(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new K(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const H=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $(t){if(v(!!t),"string"==typeof t){let e=0;const n=H.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function G(t){return"string"==typeof t?K.fromBase64String(t):K.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(t){const e=$(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Q{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Q("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Q&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return null==t}function Z(t){return 0===t&&1/t==-1/0}function tt(t){return"number"==typeof t&&Number.isInteger(t)&&!Z(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.path=t}static fromPath(t){return new et(F.fromString(t))}static fromName(t){return new et(F.fromString(t).popFirst(5))}static empty(){return new et(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new et(new F(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?W(t)?4:pt(t)?9:10:y()}function it(t,e){if(t===e)return!0;const n=nt(t);if(n!==nt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return X(t).isEqual(X(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=$(t.timestampValue),i=$(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return G(t.bytesValue).isEqual(G(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return z(t.geoPointValue.latitude)===z(e.geoPointValue.latitude)&&z(t.geoPointValue.longitude)===z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return z(t.integerValue)===z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=z(t.doubleValue),i=z(e.doubleValue);return n===i?Z(n)===Z(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return R(t.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(M(n)!==M(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!it(n[t],i[t])))return!1;return!0}(t,e);default:return y()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>it(t,e))}function st(t,e){if(t===e)return 0;const n=nt(t),i=nt(e);if(n!==i)return D(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=z(t.integerValue||t.doubleValue),i=z(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return ot(t.timestampValue,e.timestampValue);case 4:return ot(X(t),X(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=G(t),i=G(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=D(n[t],i[t]);if(0!==e)return e}return D(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(z(t.latitude),z(e.latitude));return 0!==n?n:D(z(t.longitude),z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=st(n[t],i[t]);if(e)return e}return D(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=D(i[t],s[t]);if(0!==e)return e;const o=st(n[i[t]],r[s[t]]);if(0!==o)return o}return D(i.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function ot(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=$(t),i=$(e),r=D(n.seconds,i.seconds);return 0!==r?r:D(n.nanos,i.nanos)}function at(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=$(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?G(e.bytesValue).toBase64():"referenceValue"in e?(i=e.referenceValue,et.fromName(i).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(e){let n="[",i=!0;for(const r of e.values||[])i?i=!1:n+=",",n+=t(r);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const s of n)r?r=!1:i+=",",i+=`${s}:${t(e.fields[s])}`;return i+"}"}(e.mapValue):y();var n,i}(t)}function ct(t){return!!t&&"integerValue"in t}function ut(t){return!!t&&"arrayValue"in t}function ht(t){return!!t&&"nullValue"in t}function lt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dt(t){return!!t&&"mapValue"in t}function ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return x(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ft(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ft(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!dt(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ft(e)}setAll(t){let e=B.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=ft(t):i.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());dt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return it(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];dt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){x(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new gt(ft(this.value))}}function mt(t){const e=[];return x(t.fields,(t,n)=>{const i=new B([t]);if(dt(n)){const t=mt(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)}),new q(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yt{constructor(t,e,n,i,r,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=r,this.documentState=s}static newInvalidDocument(t){return new yt(t,0,P.min(),P.min(),gt.empty(),0)}static newFoundDocument(t,e,n){return new yt(t,1,e,P.min(),n,0)}static newNoDocument(t,e){return new yt(t,2,e,P.min(),gt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,P.min(),gt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class vt{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}vt.UNKNOWN_ID=-1;function wt(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=P.fromTimestamp(1e9===i?new L(n+1,0):new L(n,i));return new Tt(r,et.empty(),e)}function bt(t){return new Tt(t.readTime,t.key,-1)}class Tt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Tt(P.min(),et.empty(),-1)}static max(){return new Tt(P.max(),et.empty(),-1)}}function Et(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:0!==(n=et.comparator(t.documentKey,e.documentKey))?n:D(t.largestBatchId,e.largestBatchId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.P=null}}function _t(t,e=null,n=[],i=[],r=null,s=null,o=null){return new It(t,e,n,i,r,s,o)}function St(t){const e=w(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+at(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>(function(t){return t.field.canonicalString()+t.dir})(t)).join(","),J(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>at(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>at(t)).join(",")),e.P=t}return e.P}function kt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ft(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!it(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bt(t.startAt,e.startAt)&&Bt(t.endAt,e.endAt)}function Ct(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class At extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Nt(t,e,n):"array-contains"===e?new Lt(t,n):"in"===e?new Pt(t,n):"not-in"===e?new Mt(t,n):"array-contains-any"===e?new xt(t,n):new At(t,e,n)}static V(t,e,n){return"in"===e?new Ot(t,n):new Dt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(st(e,this.value)):null!==e&&nt(this.value)===nt(e)&&this.v(st(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Nt extends At{constructor(t,e,n){super(t,e,n),this.key=et.fromName(n.referenceValue)}matches(t){const e=et.comparator(t.key,this.key);return this.v(e)}}class Ot extends At{constructor(t,e){super(t,"in",e),this.keys=Rt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dt extends At{constructor(t,e){super(t,"not-in",e),this.keys=Rt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Rt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>et.fromName(t.referenceValue))}class Lt extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ut(e)&&rt(e.arrayValue,this.value)}}class Pt extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class Mt extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class xt extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ut(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class Ut{constructor(t,e){this.position=t,this.inclusive=e}}class Vt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ft(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jt(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?et.comparator(et.fromName(o.referenceValue),n.key):st(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Bt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!it(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Kt(t,e,n,i,r,s,o,a){return new qt(t,e,n,i,r,s,o,a)}function Ht(t){return new qt(t)}function $t(t){return!J(t.limit)&&"F"===t.limitType}function zt(t){return!J(t.limit)&&"L"===t.limitType}function Gt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wt(t){for(const e of t.filters)if(e.S())return e.field;return null}function Xt(t){return null!==t.collectionGroup}function Yt(t){const e=w(t);if(null===e.D){e.D=[];const t=Wt(e),n=Gt(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Vt(t)),e.D.push(new Vt(B.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Vt(B.keyField(),t))}}}return e.D}function Qt(t){const e=w(t);if(!e.C)if("F"===e.limitType)e.C=_t(e.path,e.collectionGroup,Yt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Yt(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Vt(n.field,e))}const n=e.endAt?new Ut(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Ut(e.startAt.position,!e.startAt.inclusive):null;e.C=_t(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.C}function Jt(t,e,n){return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zt(t,e){return kt(Qt(t),Qt(e))&&t.limitType===e.limitType}function te(t){return`${St(Qt(t))}|lt:${t.limitType}`}function ee(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${at(e.value)}`;var e}).join(", ")}]`),J(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>(function(t){return`${t.field.canonicalString()} (${t.dir})`})(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>at(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>at(t)).join(",")),`Target(${e})`}(Qt(t))}; limitType=${t.limitType})`}function ne(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):et.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=jt(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Yt(t),e))&&!(t.endAt&&!function(t,e,n){const i=jt(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Yt(t),e))}(t,e)}function ie(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function re(t){return(e,n)=>{let i=!1;for(const r of Yt(t)){const t=se(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function se(t,e,n){const i=t.field.isKeyField()?et.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?st(i,r):y()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Z(e)?"-0":e}}function ae(t){return{integerValue:""+t}}function ce(t,e){return tt(e)?ae(e):oe(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this._=void 0}}function he(t,e,n){return t instanceof fe?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof pe?ge(t,e):t instanceof me?ye(t,e):function(t,e){const n=de(t,e),i=we(n)+we(t.k);return ct(n)&&ct(t.k)?ae(i):oe(t.M,i)}(t,e)}function le(t,e,n){return t instanceof pe?ge(t,e):t instanceof me?ye(t,e):n}function de(t,e){return t instanceof ve?ct(n=e)||n&&"doubleValue"in n?e:{integerValue:0}:null;var n}class fe extends ue{}class pe extends ue{constructor(t){super(),this.elements=t}}function ge(t,e){const n=be(e);for(const e of t.elements)n.some(t=>it(t,e))||n.push(e);return{arrayValue:{values:n}}}class me extends ue{constructor(t){super(),this.elements=t}}function ye(t,e){let n=be(e);for(const e of t.elements)n=n.filter(t=>!it(t,e));return{arrayValue:{values:n}}}class ve extends ue{constructor(t,e){super(),this.M=t,this.k=e}}function we(t){return z(t.integerValue||t.doubleValue)}function be(t){return ut(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.field=t,this.transform=e}}class Ee{constructor(t,e){this.version=t,this.transformResults=e}}class Ie{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ie}static exists(t){return new Ie(void 0,t)}static updateTime(t){return new Ie(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _e(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Se{}function ke(t,e,n){t instanceof De?function(t,e,n){const i=t.value.clone(),r=Pe(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Re?function(t,e,n){if(!_e(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Pe(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Le(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ce(t,e,n){t instanceof De?function(t,e,n){if(!_e(t.precondition,e))return;const i=t.value.clone(),r=Me(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(Oe(e),i).setHasLocalMutations()}(t,e,n):t instanceof Re?function(t,e,n){if(!_e(t.precondition,e))return;const i=Me(t.fieldTransforms,n,e),r=e.data;r.setAll(Le(t)),r.setAll(i),e.convertToFoundDocument(Oe(e),r).setHasLocalMutations()}(t,e,n):function(t,e){_e(t.precondition,e)&&e.convertToNoDocument(P.min())}(t,e)}function Ae(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=de(i.transform,t||null);null!=r&&(null==n&&(n=gt.empty()),n.set(i.field,r))}return n||null}function Ne(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&R(t,e,(t,e)=>(function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof pe&&e instanceof pe||t instanceof me&&e instanceof me?R(t.elements,e.elements,it):t instanceof ve&&e instanceof ve?it(t.k,e.k):t instanceof fe&&e instanceof fe}(t.transform,e.transform)})(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Oe(t){return t.isFoundDocument()?t.version:P.min()}class De extends Se{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Re extends Se{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Le(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Pe(t,e,n){const i=new Map;v(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,le(o,a,n[r]))}return i}function Me(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,he(t,s,e))}return i}class xe extends Se{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ue extends Se{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,je;function Be(t){switch(t){default:return y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function qe(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case Fe.OK:return b.OK;case Fe.CANCELLED:return b.CANCELLED;case Fe.UNKNOWN:return b.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return b.INTERNAL;case Fe.UNAVAILABLE:return b.UNAVAILABLE;case Fe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Fe.NOT_FOUND:return b.NOT_FOUND;case Fe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Fe.ABORTED:return b.ABORTED;case Fe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Fe.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(je=Fe||(Fe={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){x(this.inner,(e,n)=>{for(const[e,i]of n)t(e,i)})}isEmpty(){return U(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e){this.comparator=t,this.root=e||ze.EMPTY}insert(t,e){return new He(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(t){return new He(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ze.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $e(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $e(this.root,t,this.comparator,!1)}getReverseIterator(){return new $e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $e(this.root,t,this.comparator,!0)}}class $e{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ze{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:ze.RED,this.left=null!=i?i:ze.EMPTY,this.right=null!=r?r:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new ze(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ze.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1,ze.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(t){this.comparator=t,this.data=new He(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new We(this.data.getIterator())}getIteratorFrom(t){return new We(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ge))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ge(this.comparator);return e.data=t,e}}class We{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xe=new He(et.comparator);function Ye(){return Xe}const Qe=new He(et.comparator);function Je(){return Qe}function Ze(){return new Ke(t=>t.toString(),(t,e)=>t.isEqual(e))}const tn=new He(et.comparator),en=new Ge(et.comparator);function nn(...t){let e=en;for(const n of t)e=e.add(n);return e}const rn=new Ge(D);function sn(){return rn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,e)),new on(P.min(),n,sn(),Ye(),nn())}}class an{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new an(K.EMPTY_BYTE_STRING,e,nn(),nn(),nn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,i){this.O=t,this.removedTargetIds=e,this.key=n,this.F=i}}class un{constructor(t,e){this.targetId=t,this.$=e}}class hn{constructor(t,e,n=K.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ln{constructor(){this.B=0,this.L=pn(),this.U=K.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=nn(),e=nn(),n=nn();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:y()}}),new an(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=pn()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class dn{constructor(t){this.nt=t,this.st=new Map,this.it=Ye(),this.rt=fn(),this.ot=new Ge(D)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach((t,n)=>{this.ft(n)&&e(n)})}_t(t){const e=t.targetId,n=t.$.count,i=this.wt(e);if(i){const t=i.target;if(Ct(t))if(0===n){const n=new et(t.path);this.ct(e,n,yt.newNoDocument(n,P.min()))}else v(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach((n,i)=>{const r=this.wt(i);if(r){if(n.current&&Ct(r.target)){const e=new et(r.target.path);null!==this.it.get(e)||this.It(i,e)||this.ct(i,e,yt.newNoDocument(e,t))}n.j&&(e.set(i,n.H()),n.J())}});let n=nn();this.rt.forEach((t,e)=>{let i=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)}),i&&(n=n.add(t))}),this.it.forEach((e,n)=>n.setReadTime(t));const i=new on(t,e,this.ot,this.it,n);return this.it=Ye(),this.rt=fn(),this.ot=new Ge(D),i}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const i=this.lt(t);this.It(t,e)?i.Y(e,1):i.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new ln,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Ge(D),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new ln),this.nt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function fn(){return new He(et.comparator)}function pn(){return new He(et.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={asc:"ASCENDING",desc:"DESCENDING"},mn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class yn{constructor(t,e){this.databaseId=t,this.N=e}}function vn(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wn(t,e){return t.N?e.toBase64():e.toUint8Array()}function bn(t){return v(!!t),P.fromTimestamp(function(t){const e=$(t);return new L(e.seconds,e.nanos)}(t))}function Tn(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function En(t){const e=F.fromString(t);return v(xn(e)),e}function In(t,e){return Tn(t.databaseId,e.path)}function _n(t,e){const n=En(e);if(n.get(1)!==t.databaseId.projectId)throw new T(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new et(An(n))}function Sn(t,e){return Tn(t.databaseId,e)}function kn(t){const e=En(t);return 4===e.length?F.emptyPath():An(e)}function Cn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function An(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Nn(t,e,n){return{name:In(t,e),fields:n.value.mapValue.fields}}function On(t,e){let n;if(e instanceof De)n={update:Nn(t,e.key,e.value)};else if(e instanceof xe)n={delete:In(t,e.key)};else if(e instanceof Re)n={update:Nn(t,e.key,e.data),updateMask:function(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof Ue))return y();n={verify:In(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){const n=e.transform;if(n instanceof fe)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof me)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),increment:n.k};throw y()})(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:function(t,e){return vn(t,e.toTimestamp())}(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Dn(t,e){return{documents:[Sn(t,e.path)]}}function Rn(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Sn(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sn(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>(function(t){if("=="===t.op){if(lt(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NAN"}};if(ht(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(lt(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NAN"}};if(ht(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(t.field),op:function(t){return mn[t]}(t.op),value:t.value}}})(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map(t=>(function(t){return{field:Pn(t.field),direction:function(t){return gn[t]}(t.dir)}})(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.N||J(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ln(t){let e=kn(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){v(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function t(e){return e?void 0!==e.unaryFilter?[function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Mn(t.unaryFilter.field);return At.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Mn(t.unaryFilter.field);return At.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mn(t.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Mn(t.unaryFilter.field);return At.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(e)]:void 0!==e.fieldFilter?[function(t){return At.create(Mn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>t(e)).reduce((t,e)=>t.concat(e)):y():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>(function(t){return new Vt(Mn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))})(t)));let a=null;n.limit&&(a=function(t){let e;return J(e="object"==typeof t?t.value:t)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ut(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ut(n,e)}(n.endAt)),Kt(e,r,o,s,a,"F",c,u)}function Pn(t){return{fieldPath:t.canonicalString()}}function Mn(t){return B.fromServerFormat(t.fieldPath)}function xn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=[...[...[...[...["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments"],"clientMetadata"],"remoteDocumentGlobal"],"collectionParents"],"bundles","namedQueries"],Vn=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Bn((n,i)=>{this.nextCallback=(e=>{this.wrapSuccess(t,e).next(n,i)}),this.catchCallback=(t=>{this.wrapFailure(e,t).next(n,i)})})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Bn?e:Bn.resolve(e)}catch(t){return Bn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Bn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Bn.reject(e)}static resolve(t){return new Bn((e,n)=>{e(t)})}static reject(t){return new Bn((e,n)=>{n(t)})}static waitFor(t){return new Bn((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=Bn.resolve(!1);for(const n of t)e=e.next(t=>t?Bn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&ke(i,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ce(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ce(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),nn())}isEqual(t){return this.batchId===t.batchId&&R(this.mutations,t.mutations,(t,e)=>Ne(t,e))&&R(this.baseMutations,t.baseMutations,(t,e)=>Ne(t,e))}}class Hn{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){v(t.mutations.length===n.length);let i=tn;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new Hn(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,n,i,r=P.min(),s=P.min(),o=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new zn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.Jt=t}}function Wn(t){const e=Ln({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Jt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(z(t.integerValue));else if("doubleValue"in t){const n=z(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Z(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(G(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?pt(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):y()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const t of Object.keys(n))this.re(t,e),this.te(n[t],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const t of n)this.te(t,e)}ae(t,e){this.ne(e,37),et.fromName(t).path.forEach(t=>{this.ne(e,60),this.le(t,e)})}ne(t,e){t.se(e)}oe(t){t.se(2)}}Xn.fe=new Xn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(){this.qe=new Qn}addToCollectionParentIndex(t,e){return this.qe.add(e),Bn.resolve()}getCollectionParents(t,e){return Bn.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Bn.resolve()}deleteFieldIndex(t,e){return Bn.resolve()}getDocumentsMatchingTarget(t,e){return Bn.resolve(null)}getFieldIndex(t,e){return Bn.resolve(null)}getFieldIndexes(t,e){return Bn.resolve([])}getNextCollectionGroupToUpdate(t){return Bn.resolve(null)}updateCollectionGroup(t,e,n){return Bn.resolve()}updateIndexEntries(t,e){return Bn.resolve()}}class Qn{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Ge(F.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Ge(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Jn{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Jn(t,Jn.DEFAULT_COLLECTION_PERCENTILE,Jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn.DEFAULT_COLLECTION_PERCENTILE=10,Jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jn.DEFAULT=new Jn(41943040,Jn.DEFAULT_COLLECTION_PERCENTILE,Jn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jn.DISABLED=new Jn(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Zn(0)}static yn(){return new Zn(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ti(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Fn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(){this.changes=new Ke(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Bn.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Us(t,e,n))}Us(t,e,n){return this.ds.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}qs(t,e){t.forEach((t,n)=>{for(const t of e)t.applyToLocalView(n)})}Ks(t,e){return this.ds.getEntries(t,e).next(e=>this.Gs(t,e).next(()=>e))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.qs(e,t))}Qs(t,e,n){return function(t){return et.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):Xt(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new et(e)).next(t=>{let e=Je();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Ws(t,e,n){const i=e.collectionGroup;let r=Je();return this.indexManager.getCollectionParents(t,i).next(s=>Bn.forEach(s,s=>{const o=function(t,e){return new qt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.zs(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}zs(t,e,n){let i;return this.ds.getAllFromCollection(t,e.path,n).next(n=>(i=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e))).next(t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=yt.newInvalidDocument(n),i=i.insert(n,r)),Ce(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}).next(()=>(i.forEach((t,n)=>{ne(e,n)||(i=i.remove(t))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=i}static Ys(t,e){let n=nn(),i=nn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new ii(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{Xs(t){this.Zs=t}Qs(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(P.min())?this.ti(t,e):this.Zs.Ks(t,i).next(r=>{const o=this.ei(e,r);return($t(e)||zt(e))&&this.ni(e.limitType,o,i,n)?this.ti(t,e):(d()<=s.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ee(e)),this.Zs.Qs(t,e,wt(n,-1)).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}ei(t,e){let n=new Ge(re(t));return e.forEach((e,i)=>{ne(t,i)&&(n=n.add(i))}),n}ni(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ti(t,e){return d()<=s.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",ee(e)),this.Zs.Qs(t,e,Tt.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,i){this.persistence=t,this.si=e,this.M=i,this.ii=new He(D),this.ri=new Ke(t=>St(t),kt),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new ni(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ii))}}function oi(t,e,n,i){return new si(t,e,n,i)}async function ai(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.Bs.getAllMutationBatches(t).next(r=>(i=r,n.ai(e),n.Bs.getAllMutationBatches(t))).next(e=>{const r=[],s=[];let o=nn();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next(t=>({hi:t,removedBatchIds:r,addedBatchIds:s}))})})}function ci(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.fs.getLastRemoteSnapshotVersion(t))}function ui(t,e,n){let i=nn();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=Ye();return n.forEach((n,r)=>{const s=t.get(n);r.isNoDocument()&&r.version.isEqual(P.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)}),i})}function hi(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e)))}function li(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let i;return n.fs.getTargetData(t,e).next(r=>r?(i=r,Bn.resolve(i)):n.fs.allocateTargetId(t).next(r=>(i=new zn(e,r,0,t.currentSequenceNumber),n.fs.addTargetData(t,i).next(()=>i))))}).then(t=>{const i=n.ii.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t})}async function di(t,e,n){const i=w(t),r=i.ii.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,t=>i.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!qn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.ii=i.ii.remove(e),i.ri.delete(r.target)}function fi(t,e,n){const i=w(t);let r=P.min(),s=nn();return i.persistence.runTransaction("Execute query","readonly",t=>(function(t,e,n){const i=w(t),r=i.ri.get(n);return void 0!==r?Bn.resolve(i.ii.get(r)):i.fs.getTargetData(e,n)})(i,t,Qt(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.fs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>i.si.Qs(t,e,n?r:P.min(),n?s:nn())).next(t=>(pi(i,ie(e),t),{documents:t,li:s})))}function pi(t,e,n){let i=P.min();n.forEach((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)}),t.oi.set(e,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return Bn.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:bn(n.createTime)}),Bn.resolve()}getNamedQuery(t,e){return Bn.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:Wn(t.bundledQuery),readTime:bn(t.readTime)}}(e)),Bn.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.overlays=new He(et.comparator),this.gi=new Map}getOverlay(t,e){return Bn.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach((n,i)=>{this.Xt(t,e,i)}),Bn.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.gi.get(n);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.gi.delete(n)),Bn.resolve()}getOverlaysForCollection(t,e,n){const i=Ze(),r=e.length+1,s=new et(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Bn.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new He((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Ze(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ze(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=i)););return Bn.resolve(o)}Xt(t,e,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const t=this.gi.get(i.largestBatchId).delete(n.key);this.gi.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new $n(e,n));let r=this.gi.get(e);void 0===r&&(r=nn(),this.gi.set(e,r)),this.gi.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.yi=new Ge(vi.pi),this.Ii=new Ge(vi.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new vi(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Ai(new vi(t,e))}Ri(t,e){t.forEach(t=>this.removeReference(t,e))}Pi(t){const e=new et(new F([])),n=new vi(e,t),i=new vi(e,t+1),r=[];return this.Ii.forEachInRange([n,i],t=>{this.Ai(t),r.push(t.key)}),r}bi(){this.yi.forEach(t=>this.Ai(t))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new et(new F([])),n=new vi(e,t),i=new vi(e,t+1);let r=nn();return this.Ii.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new vi(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class vi{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return et.comparator(t.key,e.key)||D(t.vi,e.vi)}static Ti(t,e){return D(t.vi,e.vi)||et.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Ge(vi.pi)}checkEmpty(t){return Bn.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,i){const r=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new Kn(r,e,n,i);this.Bs.push(s);for(const e of i)this.Di=this.Di.add(new vi(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Bn.resolve(s)}lookupMutationBatch(t,e){return Bn.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.xi(n),r=i<0?0:i;return Bn.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return Bn.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return Bn.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new vi(e,0),i=new vi(e,Number.POSITIVE_INFINITY),r=[];return this.Di.forEachInRange([n,i],t=>{const e=this.Ci(t.vi);r.push(e)}),Bn.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ge(D);return e.forEach(t=>{const e=new vi(t,0),i=new vi(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,i],t=>{n=n.add(t.vi)})}),Bn.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;et.isDocumentKey(r)||(r=r.child(""));const s=new vi(new et(r),0);let o=new Ge(D);return this.Di.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.vi)),!0)},s),Bn.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach(t=>{const n=this.Ci(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return Bn.forEach(e.mutations,i=>{const r=new vi(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Di=n})}_n(t){}containsKey(t,e){const n=new vi(e,0),i=this.Di.firstAfterOrEqual(n);return Bn.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Bs.length,Bn.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t){this.Mi=t,this.docs=new He(et.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Bn.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=Ye();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():yt.newInvalidDocument(t))}),Bn.resolve(n)}getAllFromCollection(t,e,n){let i=Ye();const r=new et(e.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Et(bt(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return Bn.resolve(i)}getAllFromCollectionGroup(t,e,n,i){y()}Oi(t,e){return Bn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Ti(this)}getSize(t){return Bn.resolve(this.size)}}class Ti extends ei{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(n)}),Bn.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.persistence=t,this.Fi=new Ke(t=>St(t),kt),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.$i=0,this.Bi=new yi,this.targetCount=0,this.Li=Zn.gn()}forEachTarget(t,e){return this.Fi.forEach((t,n)=>e(n)),Bn.resolve()}getLastRemoteSnapshotVersion(t){return Bn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Bn.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),Bn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),Bn.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new Zn(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Bn.resolve()}updateTargetData(t,e){return this.Tn(e),Bn.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,Bn.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Fi.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),Bn.waitFor(r).next(()=>i)}getTargetCount(t){return Bn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return Bn.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),Bn.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),Bn.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),Bn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return Bn.resolve(n)}containsKey(t,e){return Bn.resolve(this.Bi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e){this.Ui={},this.overlays={},this.es=new A(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Ei(this),this.indexManager=new Yn,this.ds=function(t){return new bi(t)}(t=>this.referenceDelegate.qi(t)),this.M=new Gn(e),this._s=new gi(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new wi(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const i=new _i(this.es.next());return this.referenceDelegate.Ki(),n(i).next(t=>this.referenceDelegate.Gi(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Qi(t,e){return Bn.or(Object.values(this.Ui).map(n=>()=>n.containsKey(t,e)))}}class _i extends jn{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.ji=new yi,this.Wi=null}static zi(t){return new Si(t)}get Hi(){if(this.Wi)return this.Wi;throw y()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),Bn.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),Bn.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),Bn.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach(t=>this.Hi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Hi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Bn.forEach(this.Hi,n=>{const i=et.fromPath(n);return this.Ji(t,i).next(t=>{t||e.removeEntry(i,P.min())})}).next(()=>(this.Wi=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ji(t,e).next(t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())})}qi(t){return 0}Ji(t,e){return Bn.or([()=>Bn.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.activeTargetIds=sn()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ci{constructor(){this.$r=new ki,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new ki,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.Ur=(()=>this.qr()),this.Kr=(()=>this.Gr()),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,i,r){const s=this.uo(t,e);f("RestConnection","Sending: ",s,n);const o={};return this.ao(o,i,r),this.co(t,s,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e})}ho(t,e,n,i,r){return this.oo(t,e,n,i,r)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}uo(t,e){const n=Oi[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,i){return new Promise((r,s)=>{const o=new a.g;o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),r(e);break;case a.a.TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new T(b.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);s(new T(e,t.message))}else s(new T(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);o.send(e,"POST",c,n,15)})}lo(t,e,n){const i=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a.h)(),s=Object(a.i)(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a.d({})),this.ao(c.initMessageHeaders,e,n),Object(o.q)()||Object(o.r)()||Object(o.m)()||Object(o.o)()||Object(o.t)()||Object(o.l)()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");f("Connection","Creating WebChannel: "+u,c);const h=r.createWebChannel(u,c);let l=!1,d=!1;const p=new Di({Wr:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),h.open(),l=!0),f("Connection","WebChannel sending:",t),h.send(t))},zr:()=>h.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,a.f.EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(h,a.f.EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.no())}),m(h,a.f.EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),p.no(new T(b.UNAVAILABLE,"The operation could not be completed")))}),m(h,a.f.EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){f("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Fe[t];if(void 0!==e)return qe(e)}(t),n=r.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),d=!0,p.no(new T(e,n)),h.close()}else f("Connection","WebChannel received:",n),p.so(n)}}),m(s,a.b.STAT_EVENT,t=>{t.stat===a.e.PROXY?f("Connection","Detected buffering proxy"):t.stat===a.e.NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.eo()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){return new yn(t,!0)}class Mi{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=i,this.wo=r,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),i=Math.max(0,e-n);i>0&&f("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),t())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,n,i,r,s,o,a){this.Yn=t,this.Ro=n,this.Po=i,this.bo=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Mi(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Vo===e&&this.qo(t,n)},e=>{t(()=>{const t=new T(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)})})}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr(()=>{n(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(t=>{n(()=>this.Ko(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(t){return f("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget(()=>this.Vo===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ui extends xi{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.M=r}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.N?(v(void 0===e||"string"==typeof e),K.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),K.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:qe(t.code);return new T(e,t.message||"")}(o);n=new hn(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=_n(t,i.document.name),s=bn(i.document.updateTime),o=new gt({mapValue:{fields:i.document.fields}}),a=yt.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new cn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=_n(t,i.document),s=i.readTime?bn(i.readTime):P.min(),o=yt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new cn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=_n(t,i.document),s=i.removedTargetIds||[];n=new cn([],s,r,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Ve(i),s=t.targetId;n=new un(s,r)}}return n}(this.M,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?bn(e.readTime):P.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=Cn(this.M),e.addTarget=function(t,e){let n;const i=e.target;return(n=Ct(i)?{documents:Dn(t,i)}:{query:Rn(t,i)}).targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=wn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=vn(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Cn(this.M),e.removeTarget=t,this.Fo(e)}}class Vi extends xi{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.M=r,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=function(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>(function(t,e){let n=t.updateTime?bn(t.updateTime):bn(e);return n.isEqual(P.min())&&(n=bn(e)),new Ee(n,t.transformResults||[])})(t,e))):[]}(t.writeResults,t.commitTime),n=bn(t.commitTime);return this.listener.Yo(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=Cn(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>On(this.M,t))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=i,this.tu=!1}eu(){if(this.tu)throw new T(b.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.oo(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(b.UNKNOWN,t.toString())})}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ho(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(b.UNKNOWN,t.toString())})}terminate(){this.tu=!0}}class ji{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(p(e),this.iu=!1):f("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=r,this._u.Lr(t=>{n.enqueueAndForget(async()=>{Yi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.fu.add(4),await Ki(e),e.wu.set("Unknown"),e.fu.delete(4),await qi(e)}(this))})}),this.wu=new ji(n,i)}}async function qi(t){if(Yi(t))for(const e of t.du)await e(!0)}async function Ki(t){for(const e of t.du)await e(!1)}function Hi(t,e){const n=w(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Xi(n)?Wi(n):ar(n).xo()&&zi(n,e))}function $i(t,e){const n=w(t),i=ar(n);n.lu.delete(e),i.xo()&&Gi(n,e),0===n.lu.size&&(i.xo()?i.Mo():Yi(n)&&n.wu.set("Unknown"))}function zi(t,e){t.mu.Z(e.targetId),ar(t).jo(e)}function Gi(t,e){t.mu.Z(e),ar(t).Wo(e)}function Wi(t){t.mu=new dn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),ar(t).start(),t.wu.ru()}function Xi(t){return Yi(t)&&!ar(t).Co()&&t.lu.size>0}function Yi(t){return 0===w(t).fu.size}function Qi(t){t.mu=void 0}async function Ji(t,e,n){if(!qn(e))throw e;t.fu.add(1),await Ki(t),t.wu.set("Offline"),n||(n=(()=>ci(t.localStore))),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await qi(t)})}function Zi(t,e){return e().catch(n=>Ji(t,n,e))}async function tr(t){const e=w(t),n=cr(e);let i=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;er(e);)try{const r=await hi(e.localStore,i);if(null===r){0===e.hu.length&&n.Mo();break}i=r.batchId,nr(e,r)}catch(t){await Ji(e,t)}ir(e)&&rr(e)}function er(t){return Yi(t)&&t.hu.length<10}function nr(t,e){t.hu.push(e);const n=cr(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function ir(t){return Yi(t)&&!cr(t).Co()&&t.hu.length>0}function rr(t){cr(t).start()}async function sr(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const i=Yi(n);n.fu.add(3),await Ki(n),i&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await qi(n)}async function or(t,e){const n=w(t);e?(n.fu.delete(2),await qi(n)):e||(n.fu.add(2),await Ki(n),n.wu.set("Unknown"))}function ar(t){return t.gu||(t.gu=function(t,e,n){const i=w(t);return i.eu(),new Ui(e,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:async function(t){t.lu.forEach((e,n)=>{zi(t,e)})}.bind(null,t),Yr:async function(t,e){Qi(t),Xi(t)?(t.wu.au(e),Wi(t)):t.wu.set("Unknown")}.bind(null,t),Qo:async function(t,e,n){if(t.wu.set("Online"),e instanceof hn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.lu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.lu.delete(i),t.mu.removeTarget(i))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ji(t,n)}else if(e instanceof cn?t.mu.ut(e):e instanceof un?t.mu._t(e):t.mu.ht(e),!n.isEqual(P.min()))try{const i=await ci(t.localStore);n.compareTo(i)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.lu.get(i);r&&t.lu.set(i,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(K.EMPTY_BYTE_STRING,n.snapshotVersion)),Gi(t,e);const i=new zn(n.target,e,1,n.sequenceNumber);zi(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Ji(t,e)}}.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Xi(t)?Wi(t):t.wu.set("Unknown")):(await t.gu.stop(),Qi(t))})),t.gu}function cr(t){return t.yu||(t.yu=function(t,e,n){const i=w(t);return i.eu(),new Vi(e,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)}(t.datastore,t.asyncQueue,{Hr:async function(t){cr(t).Zo()}.bind(null,t),Yr:async function(t,e){e&&cr(t).Ho&&await async function(t,e){if(Be(n=e.code)&&n!==b.ABORTED){const n=t.hu.shift();cr(t).ko(),await Zi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await tr(t)}var n}(t,e),ir(t)&&rr(t)}.bind(null,t),Xo:async function(t){const e=cr(t);for(const n of t.hu)e.Jo(n.mutations)}.bind(null,t),Yo:async function(t,e,n){const i=t.hu.shift(),r=Hn.from(i,e,n);await Zi(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await tr(t)}.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await tr(t)):(await t.yu.stop(),t.hu.length>0&&(f("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ur{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new ur(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hr(t,e){if(p("AsyncQueue",`${e}: ${t}`),qn(t))return new T(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.comparator=t?(e,n)=>t(e,n)||et.comparator(e.key,n.key):(t,e)=>et.comparator(t.key,e.key),this.keyedMap=Je(),this.sortedSet=new He(this.comparator)}static emptySet(t){return new lr(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof lr))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new lr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.pu=new He(et.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):y():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal((e,n)=>{t.push(n)}),t}}class fr{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new fr(t,e,lr.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.Tu=void 0,this.listeners=[]}}class gr{constructor(){this.queries=new Ke(t=>te(t),Zt),this.onlineState="Unknown",this.Eu=new Set}}async function mr(t,e){const n=w(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new pr),r)try{s.Tu=await n.onListen(i)}catch(t){const n=hr(t,`Initialization of query '${ee(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Au(n.onlineState),s.Tu&&e.Ru(s.Tu)&&vr(n)}async function yr(t,e){const n=w(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function vr(t){t.Eu.forEach(t=>{t.next()})}class wr{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new fr(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Cu&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=fr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(t){this.key=t}}class Tr{constructor(t){this.key=t}}class Er{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=nn(),this.mutatedKeys=nn(),this.Uu=re(t),this.qu=new lr(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new dr,i=e?e.qu:this.qu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=$t(this.query)&&i.size===this.query.limit?i.last():null,c=zt(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((t,e)=>{const u=i.get(t),h=ne(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ju(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Uu(h,a)>0||c&&this.Uu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))}),$t(this.query)||zt(this.query))for(;s.size>this.query.limit;){const t=$t(this.query)?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{qu:s,Qu:n,ni:o,mutatedKeys:r}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const r=t.Qu.Iu();r.sort((t,e)=>(function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(t.type,e.type)||this.Uu(t.doc,e.doc)),this.Wu(n);const s=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==r.length||a?{snapshot:new fr(this.query,t.qu,i,r,t.mutatedKeys,0===o,a,!1),Hu:s}:{Hu:s}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new dr,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach(t=>this.$u=this.$u.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.$u=this.$u.delete(t)),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=nn(),this.qu.forEach(t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))});const e=[];return t.forEach(t=>{this.Lu.has(t)||e.push(new Tr(t))}),this.Lu.forEach(n=>{t.has(n)||e.push(new br(n))}),e}Yu(t){this.$u=t.li,this.Lu=nn();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return fr.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Ir{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _r{constructor(t){this.key=t,this.Zu=!1}}class Sr{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.ta={},this.ea=new Ke(t=>te(t),Zt),this.na=new Map,this.sa=new Set,this.ia=new He(et.comparator),this.ra=new Map,this.oa=new yi,this.ua={},this.aa=new Map,this.ca=Zn.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function kr(t,e,n,i){t.la=((e,n,i)=>(async function(t,e,n,i){let r=e.view.Gu(n);r.ni&&(r=await fi(t.localStore,e.query,!1).then(({documents:t})=>e.view.Gu(t,r)));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Pr(t,e.targetId,o.Hu),o.snapshot})(t,e,n,i));const r=await fi(t.localStore,e,!0),s=new Er(e,r.li),o=s.Gu(r.documents),a=an.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Pr(t,n,c.Hu);const u=new Ir(e,n,s);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),c.snapshot}async function Cr(t,e){const n=w(t);try{const i=await function(t,e){const n=w(t),i=e.snapshotVersion;let r=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.ui.newChangeBuffer({trackRemovals:!0});r=n.ii;const o=[];e.targetChanges.forEach((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.fs.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(K.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.fs.updateTargetData(t,u))});let a=Ye();if(e.documentUpdates.forEach(i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))}),o.push(ui(t,s,e.documentUpdates).next(t=>{a=t})),!i.isEqual(P.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next(e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,i));o.push(e)}return Bn.waitFor(o).next(()=>s.apply(t)).next(()=>n.ci.Gs(t,a)).next(()=>a)}).then(t=>(n.ii=r,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const i=n.ra.get(e);i&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Zu=!0:t.modifiedDocuments.size>0?v(i.Zu):t.removedDocuments.size>0&&(v(i.Zu),i.Zu=!1))}),await Ur(n,i,e)}catch(t){await ti(t)}}function Ar(t,e,n){const i=w(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ea.forEach((n,i)=>{const r=i.view.Au(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let i=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.Au(e)&&(i=!0)}),i&&vr(n)}(i.eventManager,e),t.length&&i.ta.Qo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Nr(t,e){const n=w(t),i=e.batch.batchId;try{const r=await function(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const i=e.batch.keys(),r=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=Bn.resolve();return s.forEach(t=>{o=o.next(()=>i.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))})}),o.next(()=>t.Bs.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.Bs.performConsistencyCheck(t)).next(()=>n.ci.Ks(t,i))})}(n.localStore,e);Dr(n,i,null),Or(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Ur(n,r)}catch(t){await ti(t)}}function Or(t,e){(t.aa.get(e)||[]).forEach(t=>{t.resolve()}),t.aa.delete(e)}function Dr(t,e,n){const i=w(t);let r=i.ua[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.ua[i.currentUser.toKey()]=r}}function Rr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.na.get(e))t.ea.delete(i),n&&t.ta.fa(i,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(e=>{t.oa.containsKey(e)||Lr(t,e)})}function Lr(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&($i(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),xr(t))}function Pr(t,e,n){for(const i of n)i instanceof br?(t.oa.addReference(i.key,e),Mr(t,i)):i instanceof Tr?(f("SyncEngine","Document no longer in limbo: "+i.key),t.oa.removeReference(i.key,e),t.oa.containsKey(i.key)||Lr(t,i.key)):y()}function Mr(t,e){const n=e.key,i=n.path.canonicalString();t.ia.get(n)||t.sa.has(i)||(f("SyncEngine","New document in limbo: "+n),t.sa.add(i),xr(t))}function xr(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new et(F.fromString(e)),i=t.ca.next();t.ra.set(i,new _r(n)),t.ia=t.ia.insert(n,i),Hi(t.remoteStore,new zn(Qt(Ht(n.path)),i,2,A.A))}}async function Ur(t,e,n){const i=w(t),r=[],s=[],o=[];i.ea.isEmpty()||(i.ea.forEach((t,a)=>{o.push(i.la(a,e,n).then(t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=ii.Ys(a.targetId,t);s.push(e)}}))}),await Promise.all(o),i.ta.Qo(r),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Bn.forEach(e,e=>Bn.forEach(e.Hs,i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i)).next(()=>Bn.forEach(e.Js,i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))}catch(t){if(!qn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ii.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ii=n.ii.insert(e,r)}}}(i.localStore,s))}function Vr(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cr.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=function(t,e){const n=w(t),i=n.ra.get(e);if(i&&i.Zu)return nn().add(i.key);{let t=nn();const i=n.na.get(e);if(!i)return t;for(const e of i){const i=n.ea.get(e);t=t.unionWith(i.view.Ku)}return t}}.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=async function(t,e,n){const i=w(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.ra.get(e),s=r&&r.key;if(s){let t=new He(et.comparator);t=t.insert(s,yt.newNoDocument(s,P.min()));const n=nn().add(s),r=new on(P.min(),new Map,new Ge(D),t,n);await Cr(i,r),i.ia=i.ia.remove(s),i.ra.delete(e),xr(i)}else await di(i.localStore,e,!1).then(()=>Rr(i,e,n)).catch(ti)}.bind(null,e),e.ta.Qo=function(t,e){const n=w(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Ru(t)&&(i=!0);r.Tu=t}}i&&vr(n)}.bind(null,e.eventManager),e.ta.fa=function(t,e,n){const i=w(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}.bind(null,e.eventManager),e}function Fr(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nr.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=async function(t,e,n){const i=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let i;return n.Bs.lookupMutationBatch(t,e).next(e=>(v(null!==e),i=e.keys(),n.Bs.removeMutationBatch(t,e))).next(()=>n.Bs.performConsistencyCheck(t)).next(()=>n.ci.Ks(t,i))})}(i.localStore,e);Dr(i,e,n),Or(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Ur(i,t)}catch(n){await ti(n)}}.bind(null,e),e}class jr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Pi(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return oi(this.persistence,new ri,t.initialUser,this.M)}wa(t){return new Ii(Si.zi,this.M)}_a(t){return new Ci}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Br{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=(t=>Ar(this.syncEngine,t,1)),this.remoteStore.remoteSyncer.handleCredentialChange=async function(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await ai(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach(t=>{t.forEach(t=>{t.reject(new T(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.aa.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ur(n,t.hi)}}.bind(null,this.syncEngine),await or(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gr}createDatastore(t){const e=Pi(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Ri(i));var i;return function(t,e,n,i){return new Fi(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=(t=>Ar(this.syncEngine,t,0)),s=Ni.vt()?new Ni:new Ai,new Bi(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Sr(t,e,n,i,r,s);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await Ki(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=O.R(),this.authCredentialListener=(()=>Promise.resolve()),this.appCheckCredentialListener=(()=>Promise.resolve()),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=hr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Hr(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await ai(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $r(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zr(t);f("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>sr(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>sr(e.remoteStore,n)),t.onlineComponents=e}async function zr(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Hr(t,new jr)),t.offlineComponents}async function Gr(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await $r(t,new Br)),t.onlineComponents}function Wr(t){return Gr(t).then(t=>t.syncEngine)}async function Xr(t){const e=await Gr(t),n=e.eventManager;return n.onListen=async function(t,e){const n=Vr(t);let i,r;const s=n.ea.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Xu();else{const t=await li(n.localStore,Qt(e));n.isPrimaryClient&&Hi(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await kr(n,e,i,"current"===s)}return r}.bind(null,e.syncEngine),n.onUnlisten=async function(t,e){const n=w(t),i=n.ea.get(e),r=n.na.get(i.targetId);if(r.length>1)return n.na.set(i.targetId,r.filter(t=>!Zt(t,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await di(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),$i(n.remoteStore,i.targetId),Rr(n,i.targetId)}).catch(ti)):(Rr(n,i.targetId),await di(n.localStore,i.targetId,!0))}.bind(null,e.syncEngine),n}const Yr=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e,n){if(!n)throw new T(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jr(t){if(!et.isDocumentKey(t))throw new T(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zr(t){if(et.isDocumentKey(t))throw new T(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ts(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function es(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ts(t);throw new T(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new T(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ns({}),this._settingsFrozen=!1,t instanceof Q?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Q(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ns(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new _;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new k(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Yr.get(t);e&&(f("ComponentProvider","Removing Datastore"),Yr.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rs(this.firestore,t,this._key)}}class ss{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ss(this.firestore,t,this._query)}}class os extends ss{constructor(t,e,n){super(t,e,Ht(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rs(this.firestore,null,new et(t))}withConverter(t){return new os(this.firestore,t,this._path)}}function as(t,e,...n){if(t=Object(o.j)(t),Qr("collection","path",e),t instanceof is){const i=F.fromString(e,...n);return Zr(i),new os(t,null,i)}{if(!(t instanceof rs||t instanceof os))throw new T(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(F.fromString(e,...n));return Zr(i),new os(t.firestore,null,i)}}function cs(t,e,...n){if(t=Object(o.j)(t),1===arguments.length&&(e=O.R()),Qr("doc","path",e),t instanceof is){const i=F.fromString(e,...n);return Jr(i),new rs(t,null,new et(i))}{if(!(t instanceof rs||t instanceof os))throw new T(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(F.fromString(e,...n));return Jr(i),new rs(t.firestore,t instanceof os?t.converter:null,new et(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Mi(this,"async_queue_retry"),this.qa=(()=>{const t=Li();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()});const t=Li();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=Li();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise(()=>{});const e=new E;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ma.push(t),this.Qa()))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!qn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(t){const e=this.ka.then(()=>(this.Ba=!0,t().catch(t=>{throw this.$a=t,this.Ba=!1,p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.Ba=!1,t))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const i=ur.createAndSchedule(this,t,e,n,t=>this.ja(t));return this.Fa.push(i),i}Ka(){this.$a&&y()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then(()=>{this.Fa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()})}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}function hs(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class ls extends is{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new us,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ps(this),this._firestoreClient.terminate()}}function ds(t=Object(i.e)()){return Object(i.b)(t,"firestore").getImmediate()}function fs(t){return t._firestoreClient||ps(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ps(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Y(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Kr(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ms(K.fromBase64String(t))}catch(t){throw new T(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ms(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=/^__.*__$/;class bs{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Re(t,this.data,this.fieldMask,e,this.fieldTransforms):new De(t,this.data,e,this.fieldTransforms)}}class Ts{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Re(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Es(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Is{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Ya(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new Is(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Za({path:n,ec:!1});return i.nc(t),i}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Za({path:n,ec:!1});return i.Ya(),i}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return Vs(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(Es(this.Xa)&&ws.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class _s{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Pi(t)}ac(t,e,n,i=!1){return new Is({Xa:t,methodName:e,uc:n,path:B.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Ss(t){const e=t._freezeSettings(),n=Pi(t._databaseId);return new _s(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ks(t,e,n,i,r,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,r);Ps("Data must be an object, but it was:",o,i);const a=Rs(i,o);let c,u;if(s.merge)c=new q(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Ms(e,i,n);if(!o.contains(r))throw new T(b.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Fs(t,r)||t.push(r)}c=new q(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new bs(new gt(a),c,u)}class Cs extends ys{_toFieldTransform(t){if(2!==t.Xa)throw 1===t.Xa?t.rc(`${this._methodName}() can only appear at the top level of your update data`):t.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cs}}class As extends ys{_toFieldTransform(t){return new Te(t.path,new fe)}isEqual(t){return t instanceof As}}function Ns(t,e,n,i){const r=t.ac(1,e,n);Ps("Data must be an object, but it was:",r,i);const s=[],a=gt.empty();x(i,(t,i)=>{const c=Us(e,t,n);i=Object(o.j)(i);const u=r.sc(c);if(i instanceof Cs)s.push(c);else{const t=Ds(i,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new q(s);return new Ts(a,c,r.fieldTransforms)}function Os(t,e,n,i,r,s){const a=t.ac(1,e,n),c=[Ms(e,i,n)],u=[r];if(s.length%2!=0)throw new T(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)c.push(Ms(e,s[t])),u.push(s[t+1]);const h=[],l=gt.empty();for(let t=c.length-1;t>=0;--t)if(!Fs(h,c[t])){const e=c[t];let n=u[t];n=Object(o.j)(n);const i=a.sc(e);if(n instanceof Cs)h.push(e);else{const t=Ds(n,i);null!=t&&(h.push(e),l.set(e,t))}}const d=new q(h);return new Ts(l,d,a.fieldTransforms)}function Ds(t,e){if(Ls(t=Object(o.j)(t)))return Ps("Unsupported field value:",e,t),Rs(t,e);if(t instanceof ys)return function(t,e){if(!Es(e.Xa))throw e.rc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.rc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Ds(r,e.ic(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o.j)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ce(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:vn(e.M,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vn(e.M,n)}}if(t instanceof vs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ms)return{bytesValue:wn(e.M,t._byteString)};if(t instanceof rs){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Tn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc(`Unsupported field value: ${ts(t)}`)}(t,e)}function Rs(t,e){const n={};return U(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):x(t,(t,i)=>{const r=Ds(i,e.tc(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function Ls(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof vs||t instanceof ms||t instanceof rs||t instanceof ys)}function Ps(t,e,n){if(!Ls(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=ts(n);throw"an object"===i?e.rc(t+" a custom object"):e.rc(t+" "+i)}}function Ms(t,e,n){if((e=Object(o.j)(e))instanceof gs)return e._internalPath;if("string"==typeof e)return Us(t,e);throw Vs("Field path arguments must be of type string or ",t,!1,void 0,n)}const xs=new RegExp("[~\\*/\\[\\]]");function Us(t,e,n){if(e.search(xs)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gs(...e.split("."))._internalPath}catch(i){throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vs(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new T(b.INVALID_ARGUMENT,a+t+c)}function Fs(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new rs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bs extends js{data(){return super.data()}}function qs(t,e){return"string"==typeof e?Us(t,e):e instanceof gs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hs extends js{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $s extends Hs{data(t={}){return super.data(t)}}class zs{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ks(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $s(this._firestore,this._userDataWriter,n.key,n,new Ks(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new $s(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ks(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new $s(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ks(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(s=(n=n.add(e.doc)).indexOf(e.doc.key)),{type:function(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}(e.type),doc:i,oldIndex:r,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gs(t){if(zt(t)&&0===t.explicitOrderBy.length)throw new T(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ws{}function Xs(t,...e){for(const n of e)t=n._apply(t);return t}class Ys extends Ws{constructor(t,e){super(),this.lc=t,this._c=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Vt(e,n);return function(t,e){if(null===Gt(t)){const n=Wt(t);null!==n&&Js(t,n,e.field)}}(t,i),i}(t._query,this.lc,this._c);return new ss(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new qt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Qs(t,e="asc"){const n=e,i=qs("orderBy",t);return new Ys(i,n)}function Js(t,e,n){if(!n.isEqual(e))throw new T(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{convertValue(t,e="none"){switch(nt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(G(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return x(t.fields,(t,i)=>{n[t]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new vs(z(t.latitude),z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=function t(e){const n=e.mapValue.fields.__previous_value__;return W(n)?t(n):n}(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(X(t));default:return null}}convertTimestamp(t){const e=$(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);v(xn(n));const i=new Q(n.get(1),n.get(3)),r=new et(n.popFirst(5));return i.isEqual(e)||p(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}class eo extends Zs{constructor(t){super(),this.firestore=t}convertBytes(t){return new ms(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rs(this.firestore,null,e)}}function no(t,e,n,...i){const r=es((t=es(t,rs)).firestore,ls),s=Ss(r);let a;return oo(r,[(a="string"==typeof(e=Object(o.j)(e))||e instanceof gs?Os(s,"updateDoc",t._key,e,n,i):Ns(s,"updateDoc",t._key,e)).toMutation(t._key,Ie.exists(!0))])}function io(t){return oo(es(t.firestore,ls),[new xe(t._key,Ie.none())])}function ro(t,e){const n=es(t.firestore,ls),i=cs(t),r=to(t.converter,e);return oo(n,[ks(Ss(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,Ie.exists(!1))]).then(()=>i)}function so(t,...e){var n,i,r;t=Object(o.j)(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||hs(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(hs(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[a+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let u,h,l;if(t instanceof rs)h=es(t.firestore,ls),l=Ht(t._key.path),u={next:n=>{e[a]&&e[a](ao(h,t,n))},error:e[a+1],complete:e[a+2]};else{const n=es(t,ss);h=es(n.firestore,ls),l=n._query;const i=new eo(h);u={next:t=>{e[a]&&e[a](new zs(h,i,n,t))},error:e[a+1],complete:e[a+2]},Gs(t._query)}return function(t,e,n,i){const r=new qr(u),s=new wr(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>mr(await Xr(t),s)),()=>{r.Ia(),t.asyncQueue.enqueueAndForget(async()=>yr(await Xr(t),s))}}(fs(h),l,c)}function oo(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>(async function(t,e,n){const i=Fr(t);try{const r=await function(t,e){const n=w(t),i=L.now(),r=e.reduce((t,e)=>t.add(e.key),nn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.ci.Ks(t,r).next(r=>{s=r;const o=[];for(const t of e){const e=Ae(t,s.get(t.key));null!=e&&o.push(new Re(t.key,e,mt(e.value.mapValue),Ie.exists(!0)))}return n.Bs.addMutationBatch(t,i,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(t,e,n){let i=t.ua[t.currentUser.toKey()];i||(i=new He(D)),i=i.insert(e,n),t.ua[t.currentUser.toKey()]=i}(i,r.batchId,n),await Ur(i,r.changes),await tr(i.remoteStore)}catch(t){const e=hr(t,"Failed to persist write");n.reject(e)}})(await Wr(t),e,n)),n.promise}(fs(t),e)}function ao(t,e,n){const i=n.docs.get(e._key),r=new eo(t);return new Hs(t,r,e._key,i,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){return new As("serverTimestamp")}!function(t,e=!0){!function(t){h=t}(i.a),Object(i.c)(new r.a("firestore",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new ls(i,new class{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new E;this.o=(()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new E,t.enqueueRetryable(()=>i(this.currentUser))});const s=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new E)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}(t.getProvider("auth-internal")),new class{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=(e=>{t.enqueueRetryable(()=>n(e))});const i=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.p=t.token,new C(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r},"PUBLIC")),Object(i.g)(c,"3.4.8",void 0),Object(i.g)(c,"3.4.8","esm2017")}()}).call(this,n(8))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var i=n(1);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(i.g)("firebase","9.7.0","app");var r=n(5),s=n(0);function o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var a=n(2),c=n(4);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=u,l=new s.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new a.b("@firebase/auth");function f(t,...e){d.logLevel<=a.a.ERROR&&d.error(`Auth (${i.a}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw y(t,...e)}function g(t,...e){return y(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},h()),{[e]:n});return new s.b("auth","Firebase",i).create(e,{appName:t.name})}function y(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw y(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map;function E(t){b(t instanceof Function,"Expected a class definition");let e=T.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,T.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function _(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(s.q)()||Object(s.r)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(_()||Object(s.l)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},O=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function R(t,e,n,i,r={}){return L(t,r,async()=>{let r={},o={};i&&("GET"===e?o=i:r={body:JSON.stringify(i)});const a=Object(s.v)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),A.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function L(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),e);try{const e=new x(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(t,a,s);p(t,a)}}catch(e){if(e instanceof s.c)throw e;p(t,"network-request-failed")}}async function P(t,e,n,i,r={}){const s=await R(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?C(t.config,r):`${t.config.apiScheme}://${r}`}class x{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(g(this.auth,"network-request-failed")),O.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=g(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return 1e3*Number(t)}function j(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(s.d)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(t){return f("Caught error parsing JWT payload as JSON",t),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function B(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof s.c&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class q{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t){var e;const n=t.auth,i=await t.getIdToken(),r=await B(t,async function(t,e){return R(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const a=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?function(t){return t.map(t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s.providerUserInfo):[],c=function(t,e){return[...t.filter(t=>!e.some(e=>e.providerId===t.providerId)),...e]}(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null===c||void 0===c?void 0:c.length)),l=!!u&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new K(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v(void 0!==t.idToken,"internal-error"),v(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=j(t);return v(e,"internal-error"),v(void 0!==e.exp,"internal-error"),v(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await async function(t,e){const n=await L(t,{},async()=>{const n=Object(s.v)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=M(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new $;return n&&(v("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(v("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(v("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e){v("string"==typeof t||void 0===t,"internal-error",{appName:e})}class G{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new K(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await B(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Object(s.j)(t),i=await n.getIdToken(e),r=j(i);v(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,a=null===o||void 0===o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:V(F(r.auth_time)),issuedAtTime:V(F(r.iat)),expirationTime:V(F(r.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Object(s.j)(t);await H(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new G(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await B(this,async function(t,e){return R(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,u;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:T,providerData:E,stsTokenManager:I}=e;v(w&&I,t,"internal-error");const _=$.fromJSON(this.name,I);v("string"==typeof w,t,"internal-error"),z(h,t.name),z(l,t.name),v("boolean"==typeof b,t,"internal-error"),v("boolean"==typeof T,t,"internal-error"),z(d,t.name),z(f,t.name),z(p,t.name),z(g,t.name),z(m,t.name),z(y,t.name);const S=new G({uid:w,auth:t,email:l,emailVerified:b,displayName:h,isAnonymous:T,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map(t=>Object.assign({},t))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const i=new $;i.updateFromServerResponse(e);const r=new G({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await H(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}W.type="NONE";const X=W;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){return`firebase:${t}:${e}:${n}`}class Q{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Y(this.userKey,i.apiKey,r),this.fullPersistenceKey=Y("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?G._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Q(E(X),t,n);const i=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let r=i[0]||E(X);const s=Y(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=G._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter(t=>t._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==r)try{await t._remove(s)}catch(t){}})),new Q(r,t,n)):new Q(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rt(e))return"Blackberry";if(st(e))return"Webos";if(tt(e))return"Safari";if((e.includes("chrome/")||et(e))&&!e.includes("edge/"))return"Chrome";if(it(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Z(t=Object(s.k)()){return/firefox\//i.test(t)}function tt(t=Object(s.k)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function et(t=Object(s.k)()){return/crios\//i.test(t)}function nt(t=Object(s.k)()){return/iemobile/i.test(t)}function it(t=Object(s.k)()){return/android/i.test(t)}function rt(t=Object(s.k)()){return/blackberry/i.test(t)}function st(t=Object(s.k)()){return/webos/i.test(t)}function ot(t=Object(s.k)()){return/iphone|ipad|ipod/i.test(t)}function at(t=Object(s.k)()){return ot(t)||it(t)||st(t)||rt(t)||/windows phone/i.test(t)||nt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(t,e=[]){let n;switch(t){case"Browser":n=J(Object(s.k)());break;case"Worker":n=`${J(Object(s.k)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.a}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lt(this),this.idTokenSubscription=new lt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Q.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||null===s||void 0===s||!s.user||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await H(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(s.j)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new s.b("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function ht(t){return Object(s.j)(t)}class lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(s.g)(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(t,e){return R(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends dt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new pt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new pt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return ft(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="http://localhost";class yt extends dt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new yt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=o(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new yt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return gt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,gt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gt(t,e)}buildRequest(){const t={requestUri:mt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Object(s.v)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt extends dt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new wt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new wt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),vt)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new wt({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){var e,n,i,r,o,a;const c=Object(s.w)(Object(s.i)(t)),u=null!==(e=c.apiKey)&&void 0!==e?e:null,h=null!==(n=c.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);v(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(r=c.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(t){const e=function(t){const e=Object(s.w)(Object(s.i)(t)).link,n=e?Object(s.w)(Object(s.i)(e)).deep_link_id:null,i=Object(s.w)(Object(s.i)(t)).deep_link_id;return(i?Object(s.w)(Object(s.i)(i)).link:null)||i||n||e||t}(t);try{return new bt(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(){this.providerId=Tt.PROVIDER_ID}static credential(t,e){return pt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=bt.parseLink(e);return v(n,"argument-error"),pt._fromEmailAndCode(t,n.code,n.tenantId)}}Tt.PROVIDER_ID="password",Tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Et{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends It{constructor(){super("facebook.com")}static credential(t){return yt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!(t&&"oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch(t){return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com",_t.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends It{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return yt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return St.credential(e,n)}catch(t){return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com",St.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends It{constructor(){super("github.com")}static credential(t){return yt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!(t&&"oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch(t){return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends It{constructor(){super("twitter.com")}static credential(t,e){return yt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ct.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(t,e){return P(t,"POST","/v1/accounts:signUp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.TWITTER_SIGN_IN_METHOD="twitter.com",Ct.PROVIDER_ID="twitter.com";class Nt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await G._fromIdTokenResponse(t,n,i),s=Ot(n);return new Nt({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Ot(n);return new Nt({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Ot(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt extends s.c{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Dt.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Dt(t,e,n,i)}}function Rt(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Dt._fromErrorAndOperation(t,n,e,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e,n=!1){const i=await B(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e,n=!1){const{auth:i}=t;try{const r=await B(t,Rt(i,"reauthenticate",e,t),n);v(r.idToken,i,"internal-error");const s=j(r.idToken);v(s,i,"internal-error");const{sub:o}=s;return v(t.uid===o,i,"user-mismatch"),Nt._forOperation(t,"reauthenticate",r)}catch(t){throw"auth/user-not-found"===(null===t||void 0===t?void 0:t.code)&&p(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e,n=!1){const i=await Rt(t,"signIn",e),r=await Nt._fromIdTokenResponse(t,"signIn",i);return n||await t._updateCurrentUser(r.user),r}async function xt(t,e){return Mt(ht(t),e)}new WeakMap;const Ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ut,"1"),this.storage.removeItem(Ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=1e3,jt=10;class Bt extends Vt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=((t,e)=>this.onStorageEvent(t,e)),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Object(s.k)();return tt(t)||ot(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=at(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Object(s.o)()&&10===document.documentMode&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,jt):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Ft)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Bt.type="LOCAL";const qt=Bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Vt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Kt.type="SESSION";const Ht=Kt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new $t(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async t=>t(e.origin,r)),a=await function(t){return Promise.all(t.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.receivers=[];class Gt{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=zt("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(){return void 0!==Wt().WorkerGlobalScope&&"function"==typeof Wt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt="firebaseLocalStorageDb",Qt=1,Jt="firebaseLocalStorage",Zt="fbase_key";class te{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ee(t,e){return t.transaction([Jt],e?"readwrite":"readonly").objectStore(Jt)}function ne(){const t=indexedDB.open(Yt,Qt);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Jt,{keyPath:Zt})}catch(t){n(t)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Jt)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Yt);return new te(t).toPromise()}(),e(await ne()))})})}async function ie(t,e,n){const i=ee(t,!0).put({[Zt]:e,value:n});return new te(i).toPromise()}function re(t,e){const n=ee(t,!0).delete(e);return new te(n).toPromise()}const se=800,oe=3;class ae{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ne(),this.db)}async _withRetries(t){let e=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(t){if(e++>oe)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(Xt()?self:null),this.receiver._subscribe("keyChanged",async(t,e)=>{return{keyProcessed:(await this._poll()).includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Gt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ne();return await ie(t,Ut,"1"),await re(t,Ut),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ie(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>(async function(t,e){const n=ee(t,!1).get(e),i=await new te(n).toPromise();return void 0===i?null:i.value})(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>re(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=ee(t,!1).getAll();return new te(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),se)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ae.type="LOCAL";const ce=ae;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=(t=>{const e=g("internal-error");e.customData=t,n(e)}),i.type="text/javascript",i.charset="UTF-8",
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}().appendChild(i)})}function he(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
he("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const le="recaptcha";async function de(t,e,n){var i;const r=await n.verify();try{let s;if(v("string"==typeof r,t,"argument-error"),v(n.type===le,t,"argument-error"),"session"in(s="string"==typeof e?{phoneNumber:e}:e)){const e=s.session;if("phoneNumber"in s){return v("enroll"===e.type,t,"internal-error"),(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;return v(n,t,"missing-multi-factor-info"),(await function(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return R(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(t){this.providerId=fe.PROVIDER_ID,this.auth=ht(t)}verifyPhoneNumber(t,e){return de(this.auth,t,Object(s.j)(e))}static credential(t,e){return wt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return fe.credentialFromTaggedObject(e)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?wt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(t,e){return e?E(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.PROVIDER_ID="phone",fe.PHONE_SIGN_IN_METHOD="phone";class ge extends dt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function me(t){return Mt(t.auth,new ge(t),t.bypassAuthState)}function ye(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Pt(n,new ge(t),t.bypassAuthState)}async function ve(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Lt(n,new ge(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return me;case"linkViaPopup":case"linkViaRedirect":return ve;case"reauthViaPopup":case"reauthViaRedirect":return ye;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new k(2e3,1e4);class Te extends we{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Te.currentPopupAction&&Te.currentPopupAction.cancel(),Te.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Te.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;null!==(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)&&void 0!==n&&n.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,be.get())};t()}}Te.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee="pendingRedirect",Ie=new Map;class _e extends we{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Ie.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=ke(e),i=Se(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=(()=>Promise.resolve(e))}catch(e){t=(()=>Promise.reject(e))}Ie.set(this.auth._key(),t)}return this.bypassAuthState||Ie.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Se(t){return E(t._redirectPersistence)}function ke(t){return Y(Ee,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e,n=!1){const i=ht(t),r=pe(i,e),s=new _e(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ae=6e5;class Ne{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return De(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?e:(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0),e)}sendToConsumer(t,e){var n;if(t.error&&!De(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ae&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oe(t))}saveEventToCache(t){this.cachedEventUids.add(Oe(t)),this.lastProcessedEventTime=Date.now()}}function Oe(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function De({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Re=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Le=/^https?/;async function Pe(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return R(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Me(t))return}catch(t){}p(t,"unauthorized-domain")}function Me(t){const e=I(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Le.test(n))return!1;if(Re.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new k(3e4,6e4);function Ue(){const t=Wt().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Ve=null;function Fe(t){return Ve=Ve||function(t){return new Promise((e,n)=>{var i,r,s;function o(){Ue(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ue(),n(g(t,"network-request-failed"))},timeout:xe.get()})}if(null===(r=null===(i=Wt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(null===(s=Wt().gapi)||void 0===s||!s.load){const e=he("iframefcb");return Wt()[e]=(()=>{gapi.load?o():n(g(t,"network-request-failed"))}),ue(`https://apis.google.com/js/api.js?onload=${e}`).catch(t=>n(t))}o()}}).catch(t=>{throw Ve=null,t})}(t)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new k(5e3,15e3),Be="__/auth/iframe",qe="emulator/auth/iframe",Ke={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},He=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function $e(t){const e=await Fe(t),n=Wt().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:function(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?C(e,qe):`https://${t.config.authDomain}/${Be}`,r={apiKey:e.apiKey,appName:t.name,v:i.a},o=He.get(t.config.apiHost);o&&(r.eid=o);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Object(s.v)(r).slice(1)}`}(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ke,dontclear:!0},e=>new Promise(async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=g(t,"network-request-failed"),s=Wt().setTimeout(()=>{i(r)},je.get());function o(){Wt().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ge=500,We=600,Xe="_blank",Ye="http://localhost";class Qe{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Je(t,e,n,i=Ge,r=We){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ze),{width:i.toString(),height:r.toString(),top:o,left:a}),h=Object(s.k)().toLowerCase();n&&(c=et(h)?Xe:n),Z(h)&&(e=e||Ye,u.scrollbars="yes");const l=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(function(t=Object(s.k)()){var e;return ot(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(h)&&"_self"!==c)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",c),new Qe(null);const d=window.open(e||"",c,l);v(d,t,"popup-blocked");try{d.focus()}catch(t){}return new Qe(d)}const Ze="__/auth/handler",tn="emulator/auth/handler";function en(t,e,n,r,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:i.a,eventId:o};if(e instanceof Et){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(s.n)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof It){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const t of Object.keys(u))void 0===u[t]&&delete u[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${Ze}`;return C(t,tn)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${Object(s.v)(u).slice(1)}`}const nn="webStorageSupport";const rn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ht,this._completeRedirectFn=Ce}async _openPopup(t,e,n,i){var r;return b(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()"),Je(t,en(t,e,n,I(),i),zt())}async _openRedirect(t,e,n,i){return await this._originValidation(t),function(t){Wt().location.href=t}(en(t,e,n,I(),i)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await $e(t),n=new Ne(t);return e.register("authEvent",e=>(v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event"),{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(nn,{type:nn},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[nn];void 0!==r&&e(!!r),p(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Pe(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return at()||tt()||ot()}};class sn{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class on extends sn{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new on(t)}_finalizeEnroll(t,e,n){return function(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return function(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}(class{constructor(){}static assertion(t){return on._fromCredential(t)}}).FACTOR_ID="phone";var an="@firebase/auth",cn="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t){Object(i.c)(new c.a("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ct(t)},a=new ut(e,i,r);return function(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}(a,n),a})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider("auth-internal").initialize()})),Object(i.c)(new c.a("auth-internal",t=>(t=>new un(t))(ht(t.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i.g)(an,cn,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(t)),Object(i.g)(an,cn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("Browser");Object(i.f)({apiKey:"AIzaSyD9kBpuggn5GYDyZmyFZxCCcDrqf8rHg4c",authDomain:"demoproject-4ca45.firebaseapp.com",projectId:"demoproject-4ca45",storageBucket:"demoproject-4ca45.appspot.com",messagingSenderId:"494337793763",appId:"1:494337793763:web:c83f9c4cc11f56703cafd6",measurementId:"G-Q6RGGVY8DZ"});var hn=Object(r.e)(),ln=function(t=Object(i.e)()){const e=Object(i.b)(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=Object(i.b)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(s.h)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:rn,persistence:[ce,qt,Ht]})}(),dn=Object(r.b)(hn,"recipes"),fn=Object(r.h)(dn,Object(r.g)("createdAt"));Object(r.f)(fn,function(t){var e=[];t.docs.forEach(function(t){return e.push({title:t.data().title,author:t.data().author,id:t.id,createdAt:t.data().createdAt})}),console.log(e)});var pn=document.querySelector(".add");pn.addEventListener("submit",function(t){t.preventDefault(),Object(r.a)(dn,{title:pn.title.value,author:pn.author.value,createdAt:Object(r.i)()}).then(function(){return pn.reset()})});var gn=document.querySelector(".delete");gn.addEventListener("submit",function(t){t.preventDefault();var e=Object(r.d)(hn,"recipes",gn.id.value);Object(r.c)(e).then(function(){gn.reset()})});var mn=Object(r.d)(hn,"recipes","jTiaN9icV9uUPyGGMMFB");Object(r.f)(mn,function(t){return console.log(t.data(),t.id)});var yn=document.querySelector(".update");yn.addEventListener("submit",function(t){t.preventDefault();var e=Object(r.d)(hn,"recipes",yn.id.value);Object(r.j)(e,{title:"updated title"}).then(function(){return yn.reset()})});var vn=document.querySelector(".signup");vn.addEventListener("submit",function(t){t.preventDefault();var e=vn.email.value,n=vn.password.value;(async function(t,e,n){const i=ht(t),r=await At(i,{returnSecureToken:!0,email:e,password:n}),s=await Nt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s})(ln,e,n).then(function(t){console.log("user created:",t.user),vn.reset()}).catch(function(t){return alert(t.message)})});var wn=document.querySelector(".login");wn.addEventListener("submit",function(t){t.preventDefault();var e=wn.email.value,n=wn.password.value;(function(t,e,n){return xt(Object(s.j)(t),Tt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(ln,e,n).then(function(){return console.log("signedin")}).catch(function(t){return alert(t.message)})}),document.querySelector(".logout").addEventListener("click",function(){(function(t){return Object(s.j)(t).signOut()})(ln).then(function(){return console.log("signed out")})})},function(t,e){var n,i,r=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!h){var t=a(d);h=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,h=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]);