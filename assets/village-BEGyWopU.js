(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="186",Lh=0,nc=1,Dh=2,ls=1,Ih=2,rs=3,Ni=0,dn=1,Wn=2,fi=0,cs=1,fa=2,ic=3,rc=4,Uh=5,Rr=100,Nh=101,Fh=102,Oh=103,Bh=104,zh=200,kh=201,Gh=202,Hh=203,Iu=204,Uu=205,Vh=206,Wh=207,Xh=208,qh=209,Yh=210,Zh=211,$h=212,Kh=213,Jh=214,To=0,Ao=1,Ro=2,ms=3,Co=4,Po=5,Lo=6,Do=7,Nu=0,Qh=1,jh=2,Yn=0,Fu=1,Ou=2,Bu=3,zu=4,ku=5,Gu=6,El=7,Hu=300,Qi=301,Fr=302,Da=303,Ia=304,Aa=306,Io=1e3,ci=1001,Uo=1002,$e=1003,tf=1004,Ps=1005,je=1006,Ua=1007,$i=1008,Mn=1009,Vu=1010,Wu=1011,gs=1012,wl=1013,$n=1014,Un=1015,Kn=1016,Tl=1017,Al=1018,_s=1020,Xu=35902,qu=35899,Yu=1021,Zu=1022,Nn=1023,pi=1026,Ki=1027,Ra=1028,Rl=1029,ji=1030,Cl=1031,Pl=1033,oa=33776,la=33777,ca=33778,ua=33779,No=35840,Fo=35841,Oo=35842,Bo=35843,zo=36196,ko=37492,Go=37496,Ho=37488,Vo=37489,da=37490,Wo=37491,Xo=37808,qo=37809,Yo=37810,Zo=37811,$o=37812,Ko=37813,Jo=37814,Qo=37815,jo=37816,tl=37817,el=37818,nl=37819,il=37820,rl=37821,sl=36492,al=36494,ol=36495,ll=36283,cl=36284,pa=36285,ul=36286,ef=3200,ma=0,nf=1,Ui="",Ve="srgb",ga="srgb-linear",_a="linear",we="srgb",Na=7680,rf=519,sf=512,af=513,of=514,Ll=515,lf=516,cf=517,Dl=518,uf=519,$u=35044,sc="300 es",qn=2e3,xs=2001;function hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){const i=xa("canvas");return i.style.display="block",i}const ac={};function va(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ku(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=Ku(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function xe(...i){i=Ku(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ir(...i){const t=i.join(" ");t in ac||(ac[t]=!0,ie(...i))}function df(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const pf={[To]:Ao,[Ro]:Lo,[Co]:Do,[ms]:Po,[Ao]:To,[Lo]:Ro,[Do]:Co,[Po]:ms};class er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oc=1234567;const us=Math.PI/180,vs=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Il(i,t){return(i%t+t)%t}function mf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function gf(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function _f(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function xf(i,t=1){return t-Math.abs(Il(i,t*2)-t)}function vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yf(i,t){return i+Math.random()*(t-i)}function bf(i){return i*(.5-Math.random())}function Ef(i){i!==void 0&&(oc=i);let t=oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wf(i){return i*us}function Tf(i){return i*vs}function Af(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pf(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),f=s((n-t)/2),m=a((n-t)/2);switch(r){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ma={DEG2RAD:us,RAD2DEG:vs,generateUUID:Zn,clamp:me,euclideanModulo:Il,mapLinear:mf,inverseLerp:gf,lerp:hs,damp:_f,pingpong:xf,smoothstep:vf,smootherstep:Mf,randInt:Sf,randFloat:yf,randFloatSpread:bf,seededRandom:Ef,degToRad:wf,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Rf,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:Pf,normalize:Te,denormalize:In},Kl=class Kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kl.prototype.isVector2=!0;let wt=Kl;class kr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],f=s[a+1],m=s[a+2],S=s[a+3];if(d!==S||c!==u||l!==f||h!==m){let g=c*u+l*f+h*m+d*S;g<0&&(u=-u,f=-f,m=-m,S=-S,g=-g);let p=1-o;if(g<.9995){const R=Math.acos(g),P=Math.sin(R);p=Math.sin(p*R)/P,o=Math.sin(o*R)/P,c=c*p+u*o,l=l*p+f*o,h=h*p+m*o,d=d*p+S*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+m*o,d=d*p+S*o;const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return t[e]=o*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-o*f,t[e+2]=l*m+h*f+o*u-c*d,t[e+3]=h*m-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),u=c(n/2),f=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jl=class Jl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jl.prototype.isVector3=!0;let W=Jl;const Fa=new W,lc=new kr,Ql=class Ql{constructor(t,e,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],S=r[0],g=r[3],p=r[6],R=r[1],P=r[4],M=r[7],C=r[2],L=r[5],F=r[8];return s[0]=a*S+o*R+c*C,s[3]=a*g+o*P+c*L,s[6]=a*p+o*M+c*F,s[1]=l*S+h*R+d*C,s[4]=l*g+h*P+d*L,s[7]=l*p+h*M+d*F,s[2]=u*S+f*R+m*C,s[5]=u*g+f*P+m*L,s[8]=u*p+f*M+m*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,f=l*s-a*c,m=e*d+n*u+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/m;return t[0]=d*S,t[1]=(r*l-h*n)*S,t[2]=(o*n-r*a)*S,t[3]=u*S,t[4]=(h*e-r*c)*S,t[5]=(r*s-o*e)*S,t[6]=f*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ql.prototype.isMatrix3=!0;let se=Ql;const Oa=new se,cc=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lf(){const i={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===we&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?_a:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ga]:{primaries:t,whitePoint:n,transfer:_a,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:we,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const ve=Lf();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let lr;class Df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{lr===void 0&&(lr=xa("canvas")),lr.width=t.width,lr.height=t.height;const r=lr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=lr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class Ul{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ba(r[a].image)):s.push(Ba(r[a]))}else s=Ba(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let Uf=0;const za=new W;class an extends er{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=ci,r=ci,s=je,a=$i,o=Nn,c=Mn,l=an.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Zn(),this.name="",this.source=new Ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Io:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Io:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Hu;an.DEFAULT_ANISOTROPY=1;const jl=class jl{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],S=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(l+1)/2,M=(f+1)/2,C=(p+1)/2,L=(h+u)/4,F=(d+S)/4,x=(m+g)/4;return P>M&&P>C?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=L/n,s=F/n):M>C?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=L/r,s=x/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=F/s,r=x/s),this.set(n,r,s,e),this}let R=Math.sqrt((g-m)*(g-m)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(R)<.001&&(R=1),this.x=(g-m)/R,this.y=(d-S)/R,this.z=(u-h)/R,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jl.prototype.isVector4=!0;let Fe=jl;class Nf extends er{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new an(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ul(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Nf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ju extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ff extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ta=class Ta{constructor(t,e,n,r,s,a,o,c,l,h,d,u,f,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,d,u,f,m,S,g)}set(t,e,n,r,s,a,o,c,l,h,d,u,f,m,S,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/cr.setFromMatrixColumn(t,0).length(),s=1/cr.setFromMatrixColumn(t,1).length(),a=1/cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,f=a*d,m=o*h,S=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-S*l,e[9]=-o*c,e[2]=S-u*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,m=l*h,S=l*d;e[0]=u+S*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=S+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,m=l*h,S=l*d;e[0]=u-S*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,m=o*h,S=o*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+S,e[1]=c*d,e[5]=S*l+u,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,m=o*c,S=o*l;e[0]=c*h,e[4]=S-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-S*d}else if(t.order==="XZY"){const u=a*c,f=a*l,m=o*c,S=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+S,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=S*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,e,n){const r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),bi.crossVectors(n,mn),bi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),bi.crossVectors(n,mn)),bi.normalize(),Ls.crossVectors(mn,bi),r[0]=bi.x,r[4]=Ls.x,r[8]=mn.x,r[1]=bi.y,r[5]=Ls.y,r[9]=mn.y,r[2]=bi.z,r[6]=Ls.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],S=n[6],g=n[10],p=n[14],R=n[3],P=n[7],M=n[11],C=n[15],L=r[0],F=r[4],x=r[8],T=r[12],k=r[1],V=r[5],Z=r[9],K=r[13],X=r[2],Y=r[6],ct=r[10],rt=r[14],gt=r[3],st=r[7],et=r[11],nt=r[15];return s[0]=a*L+o*k+c*X+l*gt,s[4]=a*F+o*V+c*Y+l*st,s[8]=a*x+o*Z+c*ct+l*et,s[12]=a*T+o*K+c*rt+l*nt,s[1]=h*L+d*k+u*X+f*gt,s[5]=h*F+d*V+u*Y+f*st,s[9]=h*x+d*Z+u*ct+f*et,s[13]=h*T+d*K+u*rt+f*nt,s[2]=m*L+S*k+g*X+p*gt,s[6]=m*F+S*V+g*Y+p*st,s[10]=m*x+S*Z+g*ct+p*et,s[14]=m*T+S*K+g*rt+p*nt,s[3]=R*L+P*k+M*X+C*gt,s[7]=R*F+P*V+M*Y+C*st,s[11]=R*x+P*Z+M*ct+C*et,s[15]=R*T+P*K+M*rt+C*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],S=t[7],g=t[11],p=t[15],R=c*f-l*u,P=o*f-l*d,M=o*u-c*d,C=a*f-l*h,L=a*u-c*h,F=a*d-o*h;return e*(S*R-g*P+p*M)-n*(m*R-g*C+p*L)+r*(m*P-S*C+p*F)-s*(m*M-S*L+g*F)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(s*h-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],S=t[13],g=t[14],p=t[15],R=e*o-n*a,P=e*c-r*a,M=e*l-s*a,C=n*c-r*o,L=n*l-s*o,F=r*l-s*c,x=h*S-d*m,T=h*g-u*m,k=h*p-f*m,V=d*g-u*S,Z=d*p-f*S,K=u*p-f*g,X=R*K-P*Z+M*V+C*k-L*T+F*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/X;return t[0]=(o*K-c*Z+l*V)*Y,t[1]=(r*Z-n*K-s*V)*Y,t[2]=(S*F-g*L+p*C)*Y,t[3]=(u*L-d*F-f*C)*Y,t[4]=(c*k-a*K-l*T)*Y,t[5]=(e*K-r*k+s*T)*Y,t[6]=(g*M-m*F-p*P)*Y,t[7]=(h*F-u*M+f*P)*Y,t[8]=(a*Z-o*k+l*x)*Y,t[9]=(n*k-e*Z-s*x)*Y,t[10]=(m*L-S*M+p*R)*Y,t[11]=(d*M-h*L-f*R)*Y,t[12]=(o*T-a*V-c*x)*Y,t[13]=(e*V-n*T+r*x)*Y,t[14]=(S*P-m*C-g*R)*Y,t[15]=(h*C-d*P+u*R)*Y,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,f=s*h,m=s*d,S=a*h,g=a*d,p=o*d,R=c*l,P=c*h,M=c*d,C=n.x,L=n.y,F=n.z;return r[0]=(1-(S+p))*C,r[1]=(f+M)*C,r[2]=(m-P)*C,r[3]=0,r[4]=(f-M)*L,r[5]=(1-(u+p))*L,r[6]=(g+R)*L,r[7]=0,r[8]=(m+P)*F,r[9]=(g-R)*F,r[10]=(1-(u+S))*F,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=cr.set(r[0],r[1],r[2]).length();const o=cr.set(r[4],r[5],r[6]).length(),c=cr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),An.copy(this);const l=1/a,h=1/o,d=1/c;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=qn,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r);let m,S;if(c)m=s/(a-s),S=a*s/(a-s);else if(o===qn)m=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===xs)m=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=qn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-r),u=-(e+t)/(e-t),f=-(n+r)/(n-r);let m,S;if(c)m=1/(a-s),S=a/(a-s);else if(o===qn)m=-2/(a-s),S=-(a+s)/(a-s);else if(o===xs)m=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ta.prototype.isMatrix4=!0;let Ee=Ta;const cr=new W,An=new Ee,Of=new W(0,0,0),Bf=new W(1,1,1),bi=new W,Ls=new W,mn=new W,hc=new Ee,fc=new kr;class Fi{constructor(t=0,e=0,n=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const dc=new W,ur=new kr,ei=new Ee,Ds=new W,Xr=new W,kf=new W,Gf=new kr,pc=new W(1,0,0),mc=new W(0,1,0),gc=new W(0,0,1),_c={type:"added"},Hf={type:"removed"},hr={type:"childadded",child:null},ka={type:"childremoved",child:null};class Xe extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new W,e=new Fi,n=new kr,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new se}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(pc,t)}rotateY(t){return this.rotateOnAxis(mc,t)}rotateZ(t){return this.rotateOnAxis(gc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pc,t)}translateY(t){return this.translateOnAxis(mc,t)}translateZ(t){return this.translateOnAxis(gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Xr,Ds,this.up):ei.lookAt(Ds,Xr,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(ei),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_c),hr.child=t,this.dispatchEvent(hr),hr.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_c),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xe.DEFAULT_UP=new W(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fe extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vf={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const g=e.getJointPose(S,n),p=this._getHandJoint(l,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ve.workingColorSpace){if(t=Il(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ha(a,s,t+1/3),this.g=Ha(a,s,t),this.b=Ha(a,s,t-1/3)}return ve.colorSpaceToWorking(this,r),this}setStyle(t,e=Ve){function n(s){s!==void 0&&parseFloat(s)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ve.workingToColorSpace(nn.copy(this),t),Math.round(me(nn.r*255,0,255))*65536+Math.round(me(nn.g*255,0,255))*256+Math.round(me(nn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(nn.copy(this),e);const n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ve){ve.workingToColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,r=nn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Is);const n=hs(Ei.h,Is.h,e),r=hs(Ei.s,Is.s,e),s=hs(Ei.l,Is.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Wt;Wt.NAMES=Qu;class Fl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new Fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wf extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Rn=new W,ni=new W,Va=new W,ii=new W,fr=new W,dr=new W,xc=new W,Wa=new W,Xa=new W,qa=new W,Ya=new Fe,Za=new Fe,$a=new Fe;class Tn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ni.subVectors(n,e),Va.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(ni),c=Rn.dot(Va),l=ni.dot(ni),h=ni.dot(Va),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,m=(a*h-o*c)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ya.setScalar(0),Za.setScalar(0),$a.setScalar(0),Ya.fromBufferAttribute(t,e),Za.fromBufferAttribute(t,n),$a.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ya,s.x),a.addScaledVector(Za,s.y),a.addScaledVector($a,s.z),a}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ni.subVectors(t,e),Rn.cross(ni).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;fr.subVectors(r,n),dr.subVectors(s,n),Wa.subVectors(t,n);const c=fr.dot(Wa),l=dr.dot(Wa);if(c<=0&&l<=0)return e.copy(n);Xa.subVectors(t,r);const h=fr.dot(Xa),d=dr.dot(Xa);if(h>=0&&d<=h)return e.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(fr,a);qa.subVectors(t,s);const f=fr.dot(qa),m=dr.dot(qa);if(m>=0&&f<=m)return e.copy(s);const S=f*l-c*m;if(S<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(dr,o);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return xc.subVectors(s,r),o=(d-h)/(d-h+(f-m)),e.copy(r).addScaledVector(xc,o);const p=1/(g+S+u);return a=S*p,o=u*p,e.copy(n).addScaledVector(fr,a).addScaledVector(dr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class nr{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Ns.subVectors(this.max,qr),pr.subVectors(t.a,qr),mr.subVectors(t.b,qr),gr.subVectors(t.c,qr),wi.subVectors(mr,pr),Ti.subVectors(gr,mr),zi.subVectors(pr,gr);let e=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-zi.z,zi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,zi.z,0,-zi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-zi.y,zi.x,0];return!Ka(e,pr,mr,gr,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,pr,mr,gr,Ns))?!1:(Fs.crossVectors(wi,Ti),e=[Fs.x,Fs.y,Fs.z],Ka(e,pr,mr,gr,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ri=[new W,new W,new W,new W,new W,new W,new W,new W],Cn=new W,Us=new nr,pr=new W,mr=new W,gr=new W,wi=new W,Ti=new W,zi=new W,qr=new W,Ns=new W,Fs=new W,ki=new W;function Ka(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ki.fromArray(i,s);const o=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ke=new W,Os=new wt;let Xf=0;class Ke extends er{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ju extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class th extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}const qf=new nr,Yr=new W,Ja=new W;class ws{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Yr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(Ja)),this.expandByPoint(Yr.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Yf=0;const yn=new Ee,Qa=new Xe,_r=new W,gn=new nr,Zr=new nr,Ze=new W;class We extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hf(t)?th:ju)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new se().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(gn.min,Zr.min),gn.expandByPoint(Ze),Ze.addVectors(gn.max,Zr.max),gn.expandByPoint(Ze)):(gn.expandByPoint(Zr.min),gn.expandByPoint(Zr.max))}gn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ze));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ze.fromBufferAttribute(o,l),c&&(_r.fromBufferAttribute(t,l),Ze.add(_r)),r=Math.max(r,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new W,c[x]=new W;const l=new W,h=new W,d=new W,u=new wt,f=new wt,m=new wt,S=new W,g=new W;function p(x,T,k){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,k),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,k),h.sub(l),d.sub(l),f.sub(u),m.sub(u);const V=1/(f.x*m.y-m.x*f.y);isFinite(V)&&(S.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(V),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(V),o[x].add(S),o[T].add(S),o[k].add(S),c[x].add(g),c[T].add(g),c[k].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let x=0,T=R.length;x<T;++x){const k=R[x],V=k.start,Z=k.count;for(let K=V,X=V+Z;K<X;K+=3)p(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const P=new W,M=new W,C=new W,L=new W;function F(x){C.fromBufferAttribute(r,x),L.copy(C);const T=o[x];P.copy(T),P.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(L,T);const V=M.dot(c[x])<0?-1:1;a.setXYZW(x,P.x,P.y,P.z,V)}for(let x=0,T=R.length;x<T;++x){const k=R[x],V=k.start,Z=k.count;for(let K=V,X=V+Z;K<X;K+=3)F(t.getX(K+0)),F(t.getX(K+1)),F(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,l=new W,h=new W,d=new W;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),S=t.getX(u+1),g=t.getX(u+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,m=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new Ke(u,h,d)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$u,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const ln=new W;class Sa{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ja=new W,$f=new W,Kf=new se;class li{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ja.subVectors(n,e).cross($f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(ja),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kf.getNormalMatrix(t),r=this.coplanarPoint(ja).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Jf=0;class ir extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=cs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Uu,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class eh extends ir{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xr;const $r=new W,vr=new W,Mr=new W,Sr=new wt,Kr=new wt,nh=new Ee,Bs=new W,Jr=new W,zs=new W,vc=new wt,to=new wt,Mc=new wt;class Qf extends Xe{constructor(t=new eh){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zf(e,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Sa(n,3,0,!1)),xr.setAttribute("uv",new Sa(n,2,3,!1))}this.geometry=xr,this.material=t,this.center=new wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-Mr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;ks(Bs.set(-.5,-.5,0),Mr,a,vr,r,s),ks(Jr.set(.5,-.5,0),Mr,a,vr,r,s),ks(zs.set(.5,.5,0),Mr,a,vr,r,s),vc.set(0,0),to.set(1,0),Mc.set(1,1);let o=t.ray.intersectTriangle(Bs,Jr,zs,!1,$r);if(o===null&&(ks(Jr.set(-.5,.5,0),Mr,a,vr,r,s),to.set(0,1),o=t.ray.intersectTriangle(Bs,zs,Jr,!1,$r),o===null))return;const c=t.ray.origin.distanceTo($r);c<t.near||c>t.far||e.push({distance:c,point:$r.clone(),uv:Tn.getInterpolation($r,Bs,Jr,zs,vc,to,Mc,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ks(i,t,e,n,r,s){Sr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Kr.x=s*Sr.x-r*Sr.y,Kr.y=r*Sr.x+s*Sr.y):Kr.copy(Sr),i.copy(t),i.x+=Kr.x,i.y+=Kr.y,i.applyMatrix4(nh)}const si=new W,eo=new W,Gs=new W,Hs=new W;class ih{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){eo.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Hs.copy(this.origin).sub(eo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=Hs.dot(this.direction),c=-Hs.dot(Gs),l=Hs.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*c-o,u=a*o-c,m=s*h,d>=0)if(u>=-m)if(u<=m){const S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(eo).addScaledVector(Gs,u),f}intersectSphere(t,e){if(t.radius<0)return null;si.subVectors(t.center,this.origin);const n=si.dot(this.direction),r=si.dot(si)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,S=e.y-a.y,g=e.z-a.z,p=n.x-a.x,R=n.y-a.y,P=n.z-a.z,M=Math.abs(c),C=Math.abs(l),L=Math.abs(h);let F,x,T,k,V,Z,K,X,Y,ct,rt,gt;if(M>=C&&M>=L?(T=c,Z=d,Y=m,gt=p,c>=0?(F=l,x=h,k=u,V=f,K=S,X=g,ct=R,rt=P):(F=h,x=l,k=f,V=u,K=g,X=S,ct=P,rt=R)):C>=L?(T=l,Z=u,Y=S,gt=R,l>=0?(F=h,x=c,k=f,V=d,K=g,X=m,ct=P,rt=p):(F=c,x=h,k=d,V=f,K=m,X=g,ct=p,rt=P)):(T=h,Z=f,Y=g,gt=P,h>=0?(F=c,x=l,k=d,V=u,K=m,X=S,ct=p,rt=R):(F=l,x=c,k=u,V=d,K=S,X=m,ct=R,rt=p)),T===0)return null;const st=F/T,et=x/T,nt=1/T,St=k-st*Z,yt=V-et*Z,qt=K-st*Y,$t=X-et*Y,Nt=ct-st*gt,pt=rt-et*gt,_t=Nt*$t-pt*qt,Ct=St*pt-yt*Nt,Kt=qt*yt-$t*St;if(r){if(_t<0||Ct<0||Kt<0)return null}else if((_t<0||Ct<0||Kt<0)&&(_t>0||Ct>0||Kt>0))return null;const Dt=_t+Ct+Kt;if(Dt===0)return null;const te=nt*(_t*Z+Ct*Y+Kt*gt);return(Dt>0?te<0:te>0)?null:this.at(te/Dt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En extends ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Sc=new Ee,Gi=new ih,Vs=new ws,yc=new W,Ws=new W,Xs=new W,qs=new W,no=new W,Ys=new W,bc=new W,Zs=new W;class ye extends Xe{constructor(t=new We,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ys.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(no.fromBufferAttribute(d,t),a?Ys.addScaledVector(no,h):Ys.addScaledVector(no.sub(e),h))}e.add(Ys)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Gi.copy(t.ray).recast(t.near),!(Vs.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Vs,yc)===null||Gi.origin.distanceToSquared(yc)>(t.far-t.near)**2))&&(Sc.copy(s).invert(),Gi.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,S=u.length;m<S;m++){const g=u[m],p=a[g.materialIndex],R=Math.max(g.start,f.start),P=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=R,C=P;M<C;M+=3){const L=o.getX(M),F=o.getX(M+1),x=o.getX(M+2);r=$s(this,p,t,n,l,h,d,L,F,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let g=m,p=S;g<p;g+=3){const R=o.getX(g),P=o.getX(g+1),M=o.getX(g+2);r=$s(this,a,t,n,l,h,d,R,P,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,S=u.length;m<S;m++){const g=u[m],p=a[g.materialIndex],R=Math.max(g.start,f.start),P=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=R,C=P;M<C;M+=3){const L=M,F=M+1,x=M+2;r=$s(this,p,t,n,l,h,d,L,F,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let g=m,p=S;g<p;g+=3){const R=g,P=g+1,M=g+2;r=$s(this,a,t,n,l,h,d,R,P,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function jf(i,t,e,n,r,s,a,o){let c;if(t.side===dn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Ni,o),c===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Zs);return l<e.near||l>e.far?null:{distance:l,point:Zs.clone(),object:i}}function $s(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Ws),i.getVertexPosition(c,Xs),i.getVertexPosition(l,qs);const h=jf(i,t,e,n,Ws,Xs,qs,bc);if(h){const d=new W;Tn.getBarycoord(bc,Ws,Xs,qs,d),r&&(h.uv=Tn.getInterpolatedAttribute(r,o,c,l,d,new wt)),s&&(h.uv1=Tn.getInterpolatedAttribute(s,o,c,l,d,new wt)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,c,l,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new W,materialIndex:0};Tn.getNormal(Ws,Xs,qs,u.normal),h.face=u,h.barycoord=d}return h}class Ol extends an{constructor(t=null,e=1,n=1,r,s,a,o,c,l=$e,h=$e,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ec extends Ke{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yr=new Ee,wc=new Ee,Ks=[],Tc=new nr,td=new Ee,Qr=new ye,jr=new ws;class Pn extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,td)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),Tc.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(Tc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),jr.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),t.ray.intersectsSphere(jr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yr),wc.multiplyMatrices(n,yr),Qr.matrixWorld=wc,Qr.raycast(t,Ks);for(let a=0,o=Ks.length;a<o;a++){const c=Ks[a];c.instanceId=s,c.object=this,e.push(c)}Ks.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ol(new Float32Array(r*this.count),r,this.count,Ra,Un));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hi=new ws,ed=new wt(.5,.5),Js=new W;class Bl{constructor(t=new li,e=new li,n=new li,r=new li,s=new li,a=new li){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],S=s[9],g=s[10],p=s[11],R=s[12],P=s[13],M=s[14],C=s[15];if(r[0].setComponents(l-a,f-h,p-m,C-R).normalize(),r[1].setComponents(l+a,f+h,p+m,C+R).normalize(),r[2].setComponents(l+o,f+d,p+S,C+P).normalize(),r[3].setComponents(l-o,f-d,p-S,C-P).normalize(),n)r[4].setComponents(c,u,g,M).normalize(),r[5].setComponents(l-c,f-u,p-g,C-M).normalize();else if(r[4].setComponents(l-c,f-u,p-g,C-M).normalize(),e===qn)r[5].setComponents(l+c,f+u,p+g,C+M).normalize();else if(e===xs)r[5].setComponents(c,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);const e=ed.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Js.x=r.normal.x>0?t.max.x:t.min.x,Js.y=r.normal.y>0?t.max.y:t.min.y,Js.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rh extends an{constructor(t=[],e=Qi,n,r,s,a,o,c,l,h){super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zi extends an{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends an{constructor(t,e,n=$n,r,s,a,o=$e,c=$e,l,h=pi,d=1){if(h!==pi&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ul(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class nd extends Ms{constructor(t,e=$n,n=Qi,r,s,a=$e,o=$e,c,l=pi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sh extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Oi extends We{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,r,a,2),m("x","z","y",1,-1,t,n,-e,r,a,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function m(S,g,p,R,P,M,C,L,F,x,T){const k=M/F,V=C/x,Z=M/2,K=C/2,X=L/2,Y=F+1,ct=x+1;let rt=0,gt=0;const st=new W;for(let et=0;et<ct;et++){const nt=et*V-K;for(let St=0;St<Y;St++){const yt=St*k-Z;st[S]=yt*R,st[g]=nt*P,st[p]=X,l.push(st.x,st.y,st.z),st[S]=0,st[g]=0,st[p]=L>0?1:-1,h.push(st.x,st.y,st.z),d.push(St/F),d.push(1-et/x),rt+=1}}for(let et=0;et<x;et++)for(let nt=0;nt<F;nt++){const St=u+nt+Y*et,yt=u+nt+Y*(et+1),qt=u+(nt+1)+Y*(et+1),$t=u+(nt+1)+Y*et;c.push(St,yt,$t),c.push(yt,qt,$t),gt+=6}o.addGroup(f,gt,T),f+=gt,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ts extends We{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new W,h=new wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*r;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ca extends We{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const S=[],g=n/2;let p=0;R(),a===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function R(){const M=new W,C=new W;let L=0;const F=(e-t)/n;for(let x=0;x<=s;x++){const T=[],k=x/s,V=k*(e-t)+t;for(let Z=0;Z<=r;Z++){const K=Z/r,X=K*c+o,Y=Math.sin(X),ct=Math.cos(X);C.x=V*Y,C.y=-k*n+g,C.z=V*ct,d.push(C.x,C.y,C.z),M.set(Y,F,ct).normalize(),u.push(M.x,M.y,M.z),f.push(K,1-k),T.push(m++)}S.push(T)}for(let x=0;x<r;x++)for(let T=0;T<s;T++){const k=S[T][x],V=S[T+1][x],Z=S[T+1][x+1],K=S[T][x+1];(t>0||T!==0)&&(h.push(k,V,K),L+=3),(e>0||T!==s-1)&&(h.push(V,Z,K),L+=3)}l.addGroup(p,L,0),p+=L}function P(M){const C=m,L=new wt,F=new W;let x=0;const T=M===!0?t:e,k=M===!0?1:-1;for(let Z=1;Z<=r;Z++)d.push(0,g*k,0),u.push(0,k,0),f.push(.5,.5),m++;const V=m;for(let Z=0;Z<=r;Z++){const X=Z/r*c+o,Y=Math.cos(X),ct=Math.sin(X);F.x=T*ct,F.y=g*k,F.z=T*Y,d.push(F.x,F.y,F.z),u.push(0,k,0),L.x=Y*.5+.5,L.y=ct*.5*k+.5,f.push(L.x,L.y),m++}for(let Z=0;Z<r;Z++){const K=C+Z,X=V+Z;M===!0?h.push(X,X+1,K):h.push(X+1,X,K),x+=3}l.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zl extends Ca{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new zl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kl extends We{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),h(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(R){const P=new W,M=new W,C=new W;for(let L=0;L<e.length;L+=3)f(e[L+0],P),f(e[L+1],M),f(e[L+2],C),c(P,M,C,R)}function c(R,P,M,C){const L=C+1,F=[];for(let x=0;x<=L;x++){F[x]=[];const T=R.clone().lerp(M,x/L),k=P.clone().lerp(M,x/L),V=L-x;for(let Z=0;Z<=V;Z++)Z===0&&x===L?F[x][Z]=T:F[x][Z]=T.clone().lerp(k,Z/V)}for(let x=0;x<L;x++)for(let T=0;T<2*(L-x)-1;T++){const k=Math.floor(T/2);T%2===0?(u(F[x][k+1]),u(F[x+1][k]),u(F[x][k])):(u(F[x][k+1]),u(F[x+1][k+1]),u(F[x+1][k]))}}function l(R){const P=new W;for(let M=0;M<s.length;M+=3)P.x=s[M+0],P.y=s[M+1],P.z=s[M+2],P.normalize().multiplyScalar(R),s[M+0]=P.x,s[M+1]=P.y,s[M+2]=P.z}function h(){const R=new W;for(let P=0;P<s.length;P+=3){R.x=s[P+0],R.y=s[P+1],R.z=s[P+2];const M=g(R)/2/Math.PI+.5,C=p(R)/Math.PI+.5;a.push(M,1-C)}m(),d()}function d(){for(let R=0;R<a.length;R+=6){const P=a[R+0],M=a[R+2],C=a[R+4],L=Math.max(P,M,C),F=Math.min(P,M,C);L>.9&&F<.1&&(P<.2&&(a[R+0]+=1),M<.2&&(a[R+2]+=1),C<.2&&(a[R+4]+=1))}}function u(R){s.push(R.x,R.y,R.z)}function f(R,P){const M=R*3;P.x=t[M+0],P.y=t[M+1],P.z=t[M+2]}function m(){const R=new W,P=new W,M=new W,C=new W,L=new wt,F=new wt,x=new wt;for(let T=0,k=0;T<s.length;T+=9,k+=6){R.set(s[T+0],s[T+1],s[T+2]),P.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),L.set(a[k+0],a[k+1]),F.set(a[k+2],a[k+3]),x.set(a[k+4],a[k+5]),C.copy(R).add(P).add(M).divideScalar(3);const V=g(C);S(L,k+0,R,V),S(F,k+2,P,V),S(x,k+4,M,V)}}function S(R,P,M,C){C<0&&R.x===1&&(a[P]=R.x-1),M.x===0&&M.z===0&&(a[P]=C/2/Math.PI+.5)}function g(R){return Math.atan2(R.z,-R.x)}function p(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.vertices,t.indices,t.radius,t.detail)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,f=(a-h)/u;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new wt:new W);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new W,r=[],s=[],a=[],o=new W,c=new Ee;for(let f=0;f<=t;f++){const m=f/t;r[f]=this.getTangentAt(m,new W)}s[0]=new W,a[0]=new W;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(me(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(me(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],f*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gl extends Qn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new wt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class id extends Gl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hl(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,r(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Ac=new W,Rc=new W,io=new Hl,ro=new Hl,so=new Hl;class rd extends Qn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new W){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Rc.subVectors(r[0],r[1]).add(r[0]),l=Rc);const d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Ac.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),m<1e-4&&(m=S),g<1e-4&&(g=S),io.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,S,g),ro.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,S,g),so.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,S,g)}else this.curveType==="catmullrom"&&(io.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ro.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),so.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(io.calc(c),ro.calc(c),so.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new W().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function sd(i,t){const e=1-i;return e*e*t}function ad(i,t){return 2*(1-i)*i*t}function od(i,t){return i*i*t}function fs(i,t,e,n){return sd(i,t)+ad(i,e)+od(i,n)}function ld(i,t){const e=1-i;return e*e*e*t}function cd(i,t){const e=1-i;return 3*e*e*i*t}function ud(i,t){return 3*(1-i)*i*i*t}function hd(i,t){return i*i*i*t}function ds(i,t,e,n,r){return ld(i,t)+cd(i,e)+ud(i,n)+hd(i,r)}class ah extends Qn{constructor(t=new wt,e=new wt,n=new wt,r=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new wt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,r.x,s.x,a.x,o.x),ds(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fd extends Qn{constructor(t=new W,e=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new W){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ds(t,r.x,s.x,a.x,o.x),ds(t,r.y,s.y,a.y,o.y),ds(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class oh extends Qn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dd extends Qn{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lh extends Qn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(fs(t,r.x,s.x,a.x),fs(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pd extends Qn{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(fs(t,r.x,s.x,a.x),fs(t,r.y,s.y,a.y),fs(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Cc(o,c.x,l.x,h.x,d.x),Cc(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new wt().fromArray(r))}return this}}var hl=Object.freeze({__proto__:null,ArcCurve:id,CatmullRomCurve3:rd,CubicBezierCurve:ah,CubicBezierCurve3:fd,EllipseCurve:Gl,LineCurve:oh,LineCurve3:dd,QuadraticBezierCurve:lh,QuadraticBezierCurve3:pd,SplineCurve:ch});class md extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new hl[r.type]().fromJSON(r))}return this}}class Pc extends md{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new oh(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new lh(this.currentPoint.clone(),new wt(t,e),new wt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new ah(this.currentPoint.clone(),new wt(t,e),new wt(n,r),new wt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new Gl(t,e,n,r,s,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uh extends Pc{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Pc().fromJSON(r))}return this}}function gd(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=hh(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=Sd(i,t,s,e)),i.length>80*e){o=i[0],c=i[1];let h=o,d=c;for(let u=e;u<r;u+=e){const f=i[u],m=i[u+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>d&&(d=m)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Ss(s,a,e,o,c,l,0),a}function hh(i,t,e,n,r){let s;if(r===Dd(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=Lc(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Lc(a/n|0,i[a],i[a+1],s);return s&&Or(s,s.next)&&(bs(s),s=s.next),s}function tr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Or(e,e.next)||Oe(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Td(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?xd(i,n,r,s):_d(i)){t.push(c.i,i.i,l.i),bs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=vd(tr(i),t),Ss(i,t,e,n,r,s,2)):a===2&&Md(i,t,e,n,r,s):Ss(tr(i),t,e,n,r,s,1);break}}}function _d(i){const t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(r,s,a),d=Math.min(o,c,l),u=Math.max(r,s,a),f=Math.max(o,c,l);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&ss(r,o,s,c,a,l,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xd(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Oe(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,h=r.y,d=s.y,u=a.y,f=Math.min(o,c,l),m=Math.min(h,d,u),S=Math.max(o,c,l),g=Math.max(h,d,u),p=fl(f,m,t,e,n),R=fl(S,g,t,e,n);let P=i.prevZ,M=i.nextZ;for(;P&&P.z>=p&&M&&M.z<=R;){if(P.x>=f&&P.x<=S&&P.y>=m&&P.y<=g&&P!==r&&P!==a&&ss(o,h,c,d,l,u,P.x,P.y)&&Oe(P.prev,P,P.next)>=0||(P=P.prevZ,M.x>=f&&M.x<=S&&M.y>=m&&M.y<=g&&M!==r&&M!==a&&ss(o,h,c,d,l,u,M.x,M.y)&&Oe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;P&&P.z>=p;){if(P.x>=f&&P.x<=S&&P.y>=m&&P.y<=g&&P!==r&&P!==a&&ss(o,h,c,d,l,u,P.x,P.y)&&Oe(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;M&&M.z<=R;){if(M.x>=f&&M.x<=S&&M.y>=m&&M.y<=g&&M!==r&&M!==a&&ss(o,h,c,d,l,u,M.x,M.y)&&Oe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vd(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Or(n,r)&&dh(n,e,e.next,r)&&ys(n,r)&&ys(r,n)&&(t.push(n.i,e.i,r.i),bs(e),bs(e.next),e=i=r),e=e.next}while(e!==i);return tr(e)}function Md(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cd(a,o)){let c=ph(a,o);a=tr(a,a.next),c=tr(c,c.next),Ss(a,t,e,n,r,s,0),Ss(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Sd(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=hh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Rd(l))}r.sort(yd);for(let s=0;s<r.length;s++)e=bd(r[s],e);return e}function yd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function bd(i,t){const e=Ed(i,t);if(!e)return t;const n=ph(e,i);return tr(n,n.next),tr(e,e.next)}function Ed(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(Or(i,e))return e;do{if(Or(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&fh(r<l?n:s,r,c,l,r<l?s:n,r,e.x,e.y)){const d=Math.abs(r-e.y)/(n-e.x);ys(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&wd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function wd(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function Td(i,t,e,n){let r=i;do r.z===0&&(r.z=fl(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ad(r)}function Ad(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function fl(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fh(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function ss(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&fh(i,t,e,n,r,s,a,o)}function Cd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pd(i,t)&&(ys(i,t)&&ys(t,i)&&Ld(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||Or(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Or(i,t){return i.x===t.x&&i.y===t.y}function dh(i,t,e,n){const r=js(Oe(i,t,e)),s=js(Oe(i,t,n)),a=js(Oe(e,n,i)),o=js(Oe(e,n,t));return!!(r!==s&&a!==o||r===0&&Qs(i,e,t)||s===0&&Qs(i,n,t)||a===0&&Qs(e,i,n)||o===0&&Qs(e,t,n))}function Qs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function js(i){return i>0?1:i<0?-1:0}function Pd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ys(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function Ld(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ph(i,t){const e=dl(i.i,i.x,i.y),n=dl(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Lc(i,t,e,n){const r=dl(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dd(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Id{static triangulate(t,e,n=2){return gd(t,e,n)}}class Cr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Cr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Dc(t),Ic(n,t);let a=t.length;e.forEach(Dc);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,Ic(n,e[c]);const o=Id.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Dc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ic(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vl extends We{constructor(t=new uh([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Ie(r,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Ud;let P,M=!1,C,L,F,x;if(p){P=p.getSpacedPoints(h),M=!0,u=!1;const it=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(h,it),L=new W,F=new W,x=new W}u||(g=0,f=0,m=0,S=0);const T=o.extractPoints(l);let k=T.shape;const V=T.holes;if(!Cr.isClockWise(k)){k=k.reverse();for(let it=0,vt=V.length;it<vt;it++){const bt=V[it];Cr.isClockWise(bt)&&(V[it]=bt.reverse())}}function K(it){const bt=10000000000000001e-36;let Et=it[0];for(let Tt=1;Tt<=it.length;Tt++){const Xt=Tt%it.length,zt=it[Xt],Jt=zt.x-Et.x,ee=zt.y-Et.y,q=Jt*Jt+ee*ee,Me=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(Et.x),Math.abs(Et.y)),re=bt*Me*Me;if(q<=re){it.splice(Xt,1),Tt--;continue}Et=zt}}K(k),V.forEach(K);const X=V.length,Y=k;for(let it=0;it<X;it++){const vt=V[it];k=k.concat(vt)}function ct(it,vt,bt){return vt||xe("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(vt,bt)}const rt=k.length;function gt(it,vt,bt){let Et,Tt,Xt;const zt=it.x-vt.x,Jt=it.y-vt.y,ee=bt.x-it.x,q=bt.y-it.y,Me=zt*zt+Jt*Jt,re=zt*q-Jt*ee;if(Math.abs(re)>Number.EPSILON){const O=Math.sqrt(Me),v=Math.sqrt(ee*ee+q*q),tt=vt.x-Jt/O,at=vt.y+zt/O,ht=bt.x-q/v,Mt=bt.y+ee/v,At=((ht-tt)*q-(Mt-at)*ee)/(zt*q-Jt*ee);Et=tt+zt*At-it.x,Tt=at+Jt*At-it.y;const dt=Et*Et+Tt*Tt;if(dt<=2)return new wt(Et,Tt);Xt=Math.sqrt(dt/2)}else{let O=!1;zt>Number.EPSILON?ee>Number.EPSILON&&(O=!0):zt<-Number.EPSILON?ee<-Number.EPSILON&&(O=!0):Math.sign(Jt)===Math.sign(q)&&(O=!0),O?(Et=-Jt,Tt=zt,Xt=Math.sqrt(Me)):(Et=zt,Tt=Jt,Xt=Math.sqrt(Me/2))}return new wt(Et/Xt,Tt/Xt)}const st=[];for(let it=0,vt=Y.length,bt=vt-1,Et=it+1;it<vt;it++,bt++,Et++)bt===vt&&(bt=0),Et===vt&&(Et=0),st[it]=gt(Y[it],Y[bt],Y[Et]);const et=[];let nt,St=st.concat();for(let it=0,vt=X;it<vt;it++){const bt=V[it];nt=[];for(let Et=0,Tt=bt.length,Xt=Tt-1,zt=Et+1;Et<Tt;Et++,Xt++,zt++)Xt===Tt&&(Xt=0),zt===Tt&&(zt=0),nt[Et]=gt(bt[Et],bt[Xt],bt[zt]);et.push(nt),St=St.concat(nt)}let yt;if(g===0)yt=Cr.triangulateShape(Y,V);else{const it=[],vt=[];for(let bt=0;bt<g;bt++){const Et=bt/g,Tt=f*Math.cos(Et*Math.PI/2),Xt=m*Math.sin(Et*Math.PI/2)+S;for(let zt=0,Jt=Y.length;zt<Jt;zt++){const ee=ct(Y[zt],st[zt],Xt);Ct(ee.x,ee.y,-Tt),Et===0&&it.push(ee)}for(let zt=0,Jt=X;zt<Jt;zt++){const ee=V[zt];nt=et[zt];const q=[];for(let Me=0,re=ee.length;Me<re;Me++){const O=ct(ee[Me],nt[Me],Xt);Ct(O.x,O.y,-Tt),Et===0&&q.push(O)}Et===0&&vt.push(q)}}yt=Cr.triangulateShape(it,vt)}const qt=yt.length,$t=m+S;for(let it=0;it<rt;it++){const vt=u?ct(k[it],St[it],$t):k[it];M?(F.copy(C.normals[0]).multiplyScalar(vt.x),L.copy(C.binormals[0]).multiplyScalar(vt.y),x.copy(P[0]).add(F).add(L),Ct(x.x,x.y,x.z)):Ct(vt.x,vt.y,0)}for(let it=1;it<=h;it++)for(let vt=0;vt<rt;vt++){const bt=u?ct(k[vt],St[vt],$t):k[vt];M?(F.copy(C.normals[it]).multiplyScalar(bt.x),L.copy(C.binormals[it]).multiplyScalar(bt.y),x.copy(P[it]).add(F).add(L),Ct(x.x,x.y,x.z)):Ct(bt.x,bt.y,d/h*it)}for(let it=g-1;it>=0;it--){const vt=it/g,bt=f*Math.cos(vt*Math.PI/2),Et=m*Math.sin(vt*Math.PI/2)+S;for(let Tt=0,Xt=Y.length;Tt<Xt;Tt++){const zt=ct(Y[Tt],st[Tt],Et);Ct(zt.x,zt.y,d+bt)}for(let Tt=0,Xt=V.length;Tt<Xt;Tt++){const zt=V[Tt];nt=et[Tt];for(let Jt=0,ee=zt.length;Jt<ee;Jt++){const q=ct(zt[Jt],nt[Jt],Et);M?Ct(q.x,q.y+P[h-1].y,P[h-1].x+bt):Ct(q.x,q.y,d+bt)}}}Nt(),pt();function Nt(){const it=r.length/3;if(u){let vt=0,bt=rt*vt;for(let Et=0;Et<qt;Et++){const Tt=yt[Et];Kt(Tt[2]+bt,Tt[1]+bt,Tt[0]+bt)}vt=h+g*2,bt=rt*vt;for(let Et=0;Et<qt;Et++){const Tt=yt[Et];Kt(Tt[0]+bt,Tt[1]+bt,Tt[2]+bt)}}else{for(let vt=0;vt<qt;vt++){const bt=yt[vt];Kt(bt[2],bt[1],bt[0])}for(let vt=0;vt<qt;vt++){const bt=yt[vt];Kt(bt[0]+rt*h,bt[1]+rt*h,bt[2]+rt*h)}}n.addGroup(it,r.length/3-it,0)}function pt(){const it=r.length/3;let vt=0;_t(Y,vt),vt+=Y.length;for(let bt=0,Et=V.length;bt<Et;bt++){const Tt=V[bt];_t(Tt,vt),vt+=Tt.length}n.addGroup(it,r.length/3-it,1)}function _t(it,vt){let bt=it.length;for(;--bt>=0;){const Et=bt;let Tt=bt-1;Tt<0&&(Tt=it.length-1);for(let Xt=0,zt=h+g*2;Xt<zt;Xt++){const Jt=rt*Xt,ee=rt*(Xt+1),q=vt+Et+Jt,Me=vt+Tt+Jt,re=vt+Tt+ee,O=vt+Et+ee;Dt(q,Me,re,O)}}}function Ct(it,vt,bt){c.push(it),c.push(vt),c.push(bt)}function Kt(it,vt,bt){te(it),te(vt),te(bt);const Et=r.length/3,Tt=R.generateTopUV(n,r,Et-3,Et-2,Et-1);ce(Tt[0]),ce(Tt[1]),ce(Tt[2])}function Dt(it,vt,bt,Et){te(it),te(vt),te(Et),te(vt),te(bt),te(Et);const Tt=r.length/3,Xt=R.generateSideWallUV(n,r,Tt-6,Tt-3,Tt-2,Tt-1);ce(Xt[0]),ce(Xt[1]),ce(Xt[3]),ce(Xt[1]),ce(Xt[2]),ce(Xt[3])}function te(it){r.push(c[it*3+0]),r.push(c[it*3+1]),r.push(c[it*3+2])}function ce(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nd(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new hl[r.type]().fromJSON(r)),new Vl(n,t.options)}}const Ud={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new wt(s,a),new wt(o,c),new wt(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[r*3],f=t[r*3+1],m=t[r*3+2],S=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new wt(a,1-c),new wt(l,1-d),new wt(u,1-m),new wt(S,1-p)]:[new wt(o,1-c),new wt(h,1-d),new wt(f,1-m),new wt(g,1-p)]}};function Nd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ji extends kl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ji(t.radius,t.detail)}}class mi extends We{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=t/o,u=e/c,f=[],m=[],S=[],g=[];for(let p=0;p<h;p++){const R=p*u-a;for(let P=0;P<l;P++){const M=P*d-s;m.push(M,-R,0),S.push(0,0,1),g.push(P/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<o;R++){const P=R+l*p,M=R+l*(p+1),C=R+1+l*(p+1),L=R+1+l*p;f.push(P,M,L),f.push(M,C,L)}this.setIndex(f),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(S,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ya extends We{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],h=[],d=[],u=new W,f=new W,m=new W;for(let S=0;S<=n;S++){const g=a+S/n*o;for(let p=0;p<=r;p++){const R=p/r*s;f.x=(t+e*Math.cos(g))*Math.cos(R),f.y=(t+e*Math.cos(g))*Math.sin(R),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),u.x=t*Math.cos(R),u.y=t*Math.sin(R),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/r),d.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=r;g++){const p=(r+1)*S+g-1,R=(r+1)*(S-1)+g-1,P=(r+1)*(S-1)+g,M=(r+1)*S+g;c.push(p,R,M),c.push(R,P,M)}this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Br(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(Uc(r))r.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Uc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function un(i){const t={};for(let e=0;e<i.length;e++){const n=Br(i[e]);for(const r in n)t[r]=n[r]}return t}function Uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const Od={clone:Br,merge:un};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(r.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(r.value);break;case"m3":this.uniforms[n].value=new se().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class kd extends Jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gd extends ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hd extends ir{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Vd extends ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wd extends ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gh extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Xd extends gh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ao=new Ee,Nc=new W,Fc=new W;class qd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ao,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===xs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ta=new W,ea=new kr,Bn=new W;class _h extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ta,ea,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new W,Oc=new wt,Bc=new wt;class wn extends _h{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Bc),e.subVectors(Bc,Oc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wl extends _h{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yd extends qd{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zd extends gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Yd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const br=-90,Er=1;class $d extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(br,Er,t,e);r.layers=this.layers,this.add(r);const s=new wn(br,Er,t,e);s.layers=this.layers,this.add(s);const a=new wn(br,Er,t,e);a.layers=this.layers,this.add(a);const o=new wn(br,Er,t,e);o.layers=this.layers,this.add(o);const c=new wn(br,Er,t,e);c.layers=this.layers,this.add(c);const l=new wn(br,Er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kd extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Qd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Qd(){this._document.hidden===!1&&this.reset()}const zc=new Ee;class jd{constructor(t,e,n=0,r=1/0){this.ray=new ih(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):xe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(t,e=!0,n=[]){return pl(t,this,n,e),n.sort(kc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)pl(t[r],this,n,e);return n.sort(kc),n}}function kc(i,t){return i.distance-t.distance}function pl(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)pl(s[a],t,e,!0)}}const tc=class tc{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};tc.prototype.isMatrix2=!0;let Gc=tc;function Hc(i,t,e,n){const r=tp(n);switch(e){case Yu:return i*t;case Ra:return i*t/r.components*r.byteLength;case Rl:return i*t/r.components*r.byteLength;case ji:return i*t*2/r.components*r.byteLength;case Cl:return i*t*2/r.components*r.byteLength;case Zu:return i*t*3/r.components*r.byteLength;case Nn:return i*t*4/r.components*r.byteLength;case Pl:return i*t*4/r.components*r.byteLength;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Bo:return Math.max(i,16)*Math.max(t,8)/4;case No:case Oo:return Math.max(i,8)*Math.max(t,8)/2;case zo:case ko:case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:case da:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sl:case al:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pa:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(i){switch(i){case Mn:case Vu:return{byteLength:1,components:1};case gs:case Wu:case Kn:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case $n:case wl:case Un:return{byteLength:4,components:1};case Xu:case qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xh(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ep(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],S=d[f];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const S=d[f];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ap=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:rp,alphamap_pars_fragment:sp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:up,batching_vertex:hp,begin_vertex:fp,beginnormal_vertex:dp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:yp,color_pars_vertex:bp,color_vertex:Ep,common:wp,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Ip,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Zp,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:kp,fog_fragment:Gp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:qp,lights_pars_begin:Yp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:jp,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:r0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:u0,map_particle_fragment:h0,map_particle_pars_fragment:f0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:_0,morphtarget_pars_vertex:x0,morphtarget_vertex:v0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:y0,normal_pars_vertex:b0,normal_vertex:E0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:P0,packing:L0,premultiplied_alpha_fragment:D0,project_vertex:I0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:z0,shadowmap_vertex:k0,shadowmask_pars_fragment:G0,skinbase_vertex:H0,skinning_pars_vertex:V0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:Z0,tonemapping_pars_fragment:$0,transmission_fragment:K0,transmission_pars_fragment:J0,uv_pars_fragment:Q0,uv_pars_vertex:j0,uv_vertex:tm,worldpos_vertex:em,background_vert:nm,background_frag:im,backgroundCube_vert:rm,backgroundCube_frag:sm,cube_vert:am,cube_frag:om,depth_vert:lm,depth_frag:cm,distance_vert:um,distance_frag:hm,equirect_vert:fm,equirect_frag:dm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:vm,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:ym,meshnormal_frag:bm,meshphong_vert:Em,meshphong_frag:wm,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Pm,points_frag:Lm,shadow_vert:Dm,shadow_frag:Im,sprite_vert:Um,sprite_frag:Nm},Lt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Vn={basic:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:un([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:un([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:un([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:un([Lt.common,Lt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:un([Lt.lights,Lt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Vn.physical={uniforms:un([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const na={r:0,b:0,g:0},Fm=new Ee,vh=new se;vh.set(-1,0,0,0,1,0,0,0,1);function Om(i,t,e,n,r,s){const a=new Wt(0);let o=r===!0?0:1,c,l,h=null,d=0,u=null;function f(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){const M=R.backgroundBlurriness>0;P=t.get(P,M)}return P}function m(R){let P=!1;const M=f(R);M===null?g(a,o):M&&M.isColor&&(g(M,1),P=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(R,P){const M=f(P);M&&(M.isCubeTexture||M.mapping===Aa)?(l===void 0&&(l=new ye(new Oi(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Br(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vh),l.material.toneMapped=ve.getTransfer(M.colorSpace)!==we,(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ye(new mi(2,2),new Jn({name:"BackgroundMaterial",uniforms:Br(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=ve.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function g(R,P){R.getRGB(na,mh(i)),e.buffers.color.setClear(na.r,na.g,na.b,P,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,P=1){a.set(R),o=P,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,g(a,o)},render:m,addToRenderList:S,dispose:p}}function Bm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(V,Z,K,X,Y){let ct=!1;const rt=d(V,X,K,Z);s!==rt&&(s=rt,l(s.object)),ct=f(V,X,K,Y),ct&&m(V,X,K,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,M(V,Z,K,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(V){return i.bindVertexArray(V)}function h(V){return i.deleteVertexArray(V)}function d(V,Z,K,X){const Y=X.wireframe===!0;let ct=n[Z.id];ct===void 0&&(ct={},n[Z.id]=ct);const rt=V.isInstancedMesh===!0?V.id:0;let gt=ct[rt];gt===void 0&&(gt={},ct[rt]=gt);let st=gt[K.id];st===void 0&&(st={},gt[K.id]=st);let et=st[Y];return et===void 0&&(et=u(c()),st[Y]=et),et}function u(V){const Z=[],K=[],X=[];for(let Y=0;Y<e;Y++)Z[Y]=0,K[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:K,attributeDivisors:X,object:V,attributes:{},index:null}}function f(V,Z,K,X){const Y=s.attributes,ct=Z.attributes;let rt=0;const gt=K.getAttributes();for(const st in gt)if(gt[st].location>=0){const nt=Y[st];let St=ct[st];if(St===void 0&&(st==="instanceMatrix"&&V.instanceMatrix&&(St=V.instanceMatrix),st==="instanceColor"&&V.instanceColor&&(St=V.instanceColor)),nt===void 0||nt.attribute!==St||St&&nt.data!==St.data)return!0;rt++}return s.attributesNum!==rt||s.index!==X}function m(V,Z,K,X){const Y={},ct=Z.attributes;let rt=0;const gt=K.getAttributes();for(const st in gt)if(gt[st].location>=0){let nt=ct[st];nt===void 0&&(st==="instanceMatrix"&&V.instanceMatrix&&(nt=V.instanceMatrix),st==="instanceColor"&&V.instanceColor&&(nt=V.instanceColor));const St={};St.attribute=nt,nt&&nt.data&&(St.data=nt.data),Y[st]=St,rt++}s.attributes=Y,s.attributesNum=rt,s.index=X}function S(){const V=s.newAttributes;for(let Z=0,K=V.length;Z<K;Z++)V[Z]=0}function g(V){p(V,0)}function p(V,Z){const K=s.newAttributes,X=s.enabledAttributes,Y=s.attributeDivisors;K[V]=1,X[V]===0&&(i.enableVertexAttribArray(V),X[V]=1),Y[V]!==Z&&(i.vertexAttribDivisor(V,Z),Y[V]=Z)}function R(){const V=s.newAttributes,Z=s.enabledAttributes;for(let K=0,X=Z.length;K<X;K++)Z[K]!==V[K]&&(i.disableVertexAttribArray(K),Z[K]=0)}function P(V,Z,K,X,Y,ct,rt){rt===!0?i.vertexAttribIPointer(V,Z,K,Y,ct):i.vertexAttribPointer(V,Z,K,X,Y,ct)}function M(V,Z,K,X){S();const Y=X.attributes,ct=K.getAttributes(),rt=Z.defaultAttributeValues;for(const gt in ct){const st=ct[gt];if(st.location>=0){let et=Y[gt];if(et===void 0&&(gt==="instanceMatrix"&&V.instanceMatrix&&(et=V.instanceMatrix),gt==="instanceColor"&&V.instanceColor&&(et=V.instanceColor)),et!==void 0){const nt=et.normalized,St=et.itemSize,yt=t.get(et);if(yt===void 0)continue;const qt=yt.buffer,$t=yt.type,Nt=yt.bytesPerElement,pt=$t===i.INT||$t===i.UNSIGNED_INT||et.gpuType===wl;if(et.isInterleavedBufferAttribute){const _t=et.data,Ct=_t.stride,Kt=et.offset;if(_t.isInstancedInterleavedBuffer){for(let Dt=0;Dt<st.locationSize;Dt++)p(st.location+Dt,_t.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Dt=0;Dt<st.locationSize;Dt++)g(st.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Dt=0;Dt<st.locationSize;Dt++)P(st.location+Dt,St/st.locationSize,$t,nt,Ct*Nt,(Kt+St/st.locationSize*Dt)*Nt,pt)}else{if(et.isInstancedBufferAttribute){for(let _t=0;_t<st.locationSize;_t++)p(st.location+_t,et.meshPerAttribute);V.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let _t=0;_t<st.locationSize;_t++)g(st.location+_t);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let _t=0;_t<st.locationSize;_t++)P(st.location+_t,St/st.locationSize,$t,nt,St*Nt,St/st.locationSize*_t*Nt,pt)}}else if(rt!==void 0){const nt=rt[gt];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(st.location,nt);break;case 3:i.vertexAttrib3fv(st.location,nt);break;case 4:i.vertexAttrib4fv(st.location,nt);break;default:i.vertexAttrib1fv(st.location,nt)}}}}R()}function C(){T();for(const V in n){const Z=n[V];for(const K in Z){const X=Z[K];for(const Y in X){const ct=X[Y];for(const rt in ct)h(ct[rt].object),delete ct[rt];delete X[Y]}}delete n[V]}}function L(V){if(n[V.id]===void 0)return;const Z=n[V.id];for(const K in Z){const X=Z[K];for(const Y in X){const ct=X[Y];for(const rt in ct)h(ct[rt].object),delete ct[rt];delete X[Y]}}delete n[V.id]}function F(V){for(const Z in n){const K=n[Z];for(const X in K){const Y=K[X];if(Y[V.id]===void 0)continue;const ct=Y[V.id];for(const rt in ct)h(ct[rt].object),delete ct[rt];delete Y[V.id]}}}function x(V){for(const Z in n){const K=n[Z],X=V.isInstancedMesh===!0?V.id:0,Y=K[X];if(Y!==void 0){for(const ct in Y){const rt=Y[ct];for(const gt in rt)h(rt[gt].object),delete rt[gt];delete Y[ct]}delete K[X],Object.keys(K).length===0&&delete n[Z]}}}function T(){k(),a=!0,s!==r&&(s=r,l(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfObject:x,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:g,disableUnusedAttributes:R}}function zm(i,t,e){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function km(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==Nn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const x=F===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Mn&&F!==Un&&!x&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:M,maxSamples:C,samples:L}}function Gm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new li,o=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!r||m===null||m.length===0||s&&!g)s?h(null):l();else{const R=s?0:n,P=R*4;let M=p.clippingState||null;c.value=M,M=h(m,u,P,f);for(let C=0;C!==P;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=c.value,m!==!0||g===null){const p=f+S*4,R=u.matrixWorldInverse;o.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let P=0,M=f;P!==S;++P,M+=4)a.copy(d[P]).applyMatrix4(R,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}const Pr=4,Hm=6,Vm=20,Wm=256,ts=new Wl,Vc=new Wt;let oo=null,lo=0,co=0,uo=!1;const Xm=new W,Vi=new W;class Wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Xm}=s;oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,lo,co),this._renderer.xr.enabled=uo,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Kn,format:Nn,colorSpace:ga,depthBuffer:!1},r=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qm(s)),this._blurMaterial=Zm(s,t,e),this._ggxMaterial=Ym(s,t,e)}return r}_compileMaterial(t){const e=new ye(new We,t);this._renderer.compile(e,ts)}_sceneToCubeUV(t,e,n,r,s){const c=new wn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Vc),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new Oi,new En({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let p=!1;const R=t.background;R?R.isColor&&(g.color.copy(R),t.background=null,p=!0):(g.color.copy(Vc),p=!0);for(let P=0;P<6;P++){const M=P%3;M===0?(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[P],s.y,s.z)):M===1?(c.up.set(0,0,l[P]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[P],s.z)):(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[P]));const C=this._cubeSize;wr(r,M*C,P>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(S,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Qi||t.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ts)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:m}=this,S=this._sizeLods[n],g=3*S*(n>m-Pr?n-m+Pr:0),p=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,wr(s,g,p,3*S,2*S),r.setRenderTarget(s),r.render(o,ts),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,wr(t,g,p,3*S,2*S),r.setRenderTarget(t),r.render(o,ts)}_blur(t,e,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[r],d=3*h*(r>this._lodMax-Pr?r-this._lodMax+Pr:0),u=4*(this._cubeSize-h);wr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,ts)}}function qm(i){const t=[],e=[];let n=i;const r=i-Pr+1+Hm;for(let s=0;s<r;s++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,m=new Float32Array(f*u*d),S=new Float32Array(f*u*d);for(let p=0;p<d;p++){const R=p%3*2/3-1,P=p>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];m.set(M,f*u*p);for(let C=0;C<u;C++){const L=h[C*2]*2-1,F=h[C*2+1]*2-1;p===0?Vi.set(1,F,L):p===1?Vi.set(-L,1,-F):p===2?Vi.set(-L,F,1):p===3?Vi.set(-1,F,-L):p===4?Vi.set(-L,-1,F):Vi.set(L,F,-1),Vi.toArray(S,(p*u+C)*f)}}const g=new We;g.setAttribute("position",new Ke(m,f)),g.setAttribute("outputDirection",new Ke(S,f)),e.push(new ye(g,null)),n>Pr&&n--}return{lodMeshes:e,sizeLods:t}}function Xc(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ym(i,t,e){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Zm(i,t,e){return new Jn({name:"SphericalGaussianBlur",defines:{SAMPLES:Vm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function qc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Yc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mh extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new rh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oi(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:fi});s.uniforms.tEquirect.value=e;const a=new ye(r,s),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=je),new $d(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function $m(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Da||f===Ia)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const S=new Mh(m.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,m=f===Da||f===Ia,S=f===Qi||f===Fr;if(m||S){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Wc(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const R=u.image;return m&&R&&R.height>0||S&&R&&c(R)?(n===null&&(n=new Wc(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Da?u.mapping=Qi:f===Ia&&(u.mapping=Fr),u}function c(u){let f=0;const m=6;for(let S=0;S<m;S++)u[S]!==void 0&&f++;return f===m}function l(u){const f=u.target;f.removeEventListener("dispose",l);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ir("WebGLRenderer: "+n+" extension not supported."),r}}}function Jm(i,t,e,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,m=d.attributes.position;let S=0;if(m===void 0)return;if(f!==null){const R=f.array;S=f.version;for(let P=0,M=R.length;P<M;P+=3){const C=R[P+0],L=R[P+1],F=R[P+2];u.push(C,L,L,F,F,C)}}else{const R=m.array;S=m.version;for(let P=0,M=R.length/3-1;P<M;P+=3){const C=P+0,L=P+1,F=P+2;u.push(C,L,L,F,F,C)}}const g=new(m.count>=65535?th:ju)(u,1);g.version=S;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Qm(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,s,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let S=0;for(let g=0;g<f;g++)S+=u[g];e.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function jm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function tg(i,t,e){const n=new WeakMap,r=new Fe;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let k=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",k)};var f=k;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let C=o.attributes.position.count*M,L=1;C>t.maxTextureSize&&(L=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const F=new Float32Array(C*L*4*d),x=new Ju(F,C,L,d);x.type=Un,x.needsUpdate=!0;const T=M*4;for(let V=0;V<d;V++){const Z=p[V],K=R[V],X=P[V],Y=C*L*4*V;for(let ct=0;ct<Z.count;ct++){const rt=ct*T;m===!0&&(r.fromBufferAttribute(Z,ct),F[Y+rt+0]=r.x,F[Y+rt+1]=r.y,F[Y+rt+2]=r.z,F[Y+rt+3]=0),S===!0&&(r.fromBufferAttribute(K,ct),F[Y+rt+4]=r.x,F[Y+rt+5]=r.y,F[Y+rt+6]=r.z,F[Y+rt+7]=0),g===!0&&(r.fromBufferAttribute(X,ct),F[Y+rt+8]=r.x,F[Y+rt+9]=r.y,F[Y+rt+10]=r.z,F[Y+rt+11]=X.itemSize===4?r.w:1)}}u={count:d,texture:x,size:new wt(C,L)},n.set(o,u),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const S=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function eg(i,t,e,n,r){let s=new WeakMap;function a(l){const h=r.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const ng={[Fu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function ig(i,t,e,n,r,s){const a=new Fn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new We;l.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ie([0,2,0,0,2,0],2));const h=new kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ye(l,h),u=new Wl(-1,1,1,-1,0,1);let f=null,m=null,S=!1,g,p=null,R=[],P=!1;this.setSize=function(M,C){a.setSize(M,C),o!==null&&o.setSize(M,C),c!==null&&c.setSize(M,C);for(let L=0;L<R.length;L++){const F=R[L];F.setSize&&F.setSize(M,C)}},this.setEffects=function(M){R=M,P=R.length>0&&R[0].isRenderPass===!0;const C=a.width,L=a.height;R.length>0&&o===null&&(o=new Fn(C,L,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new Fn(C,L,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<R.length;F++){const x=R[F];x.setSize&&x.setSize(C,L)}},this.begin=function(M,C){if(S||M.toneMapping===Yn&&R.length===0)return!1;if(p=C,C!==null){const L=C.width,F=C.height;(a.width!==L||a.height!==F)&&this.setSize(L,F)}return P===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Yn,!0},this.hasRenderPass=function(){return P},this.end=function(M,C){M.toneMapping=g,S=!0;let L=a,F=o;for(let x=0;x<R.length;x++){const T=R[x];T.enabled!==!1&&(T.render(M,F,L,C),T.needsSwap!==!1&&(L=F,F=F===o?c:o))}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,h.defines={},ve.getTransfer(f)===we&&(h.defines.SRGB_TRANSFER="");const x=ng[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,M.setRenderTarget(p),M.render(d,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Sh=new an,ml=new Ms(1,1),yh=new Ju,bh=new Ff,Eh=new rh,Zc=[],$c=[],Kc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function Gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function La(i,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),Ye(e,n)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),Ye(e,n)}}function ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),Ye(e,n)}}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function vg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ml.compareFunction=e.isReversedDepthBuffer()?Dl:Ll,s=ml):s=Sh,e.setTexture2D(t||s,r)}function Mg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||bh,r)}function Sg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Eh,r)}function yg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||yh,r)}function bg(i){switch(i){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return yg}}function Eg(i,t){i.uniform1fv(this.addr,t)}function wg(i,t){const e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Tg(i,t){const e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){const e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Rg(i,t){const e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){const e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){const e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lg(i,t){i.uniform1iv(this.addr,t)}function Dg(i,t){i.uniform2iv(this.addr,t)}function Ig(i,t){i.uniform3iv(this.addr,t)}function Ug(i,t){i.uniform4iv(this.addr,t)}function Ng(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){const n=this.cache,r=t.length,s=La(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ml:a=Sh;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function kg(i,t,e){const n=this.cache,r=t.length,s=La(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||bh,s[a])}function Gg(i,t,e){const n=this.cache,r=t.length,s=La(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Eh,s[a])}function Hg(i,t,e){const n=this.cache,r=t.length,s=La(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||yh,s[a])}function Vg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ig;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Hg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bg(e.type)}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}}class qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function jc(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){const n=i.name,r=n.length;for(ho.lastIndex=0;;){const s=ho.exec(n),a=ho.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){jc(e,l===void 0?new Wg(o,i,t):new Xg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new qg(o),jc(e,d)),e=d}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Yg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function tu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zg=37297;let $g=0;function Kg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const eu=new se;function Jg(i){ve._getMatrix(eu,ve.workingColorSpace,i);const t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case _a:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Kg(i.getShaderSource(t),o)}else return s}function Qg(i,t){const e=Jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const jg={[Fu]:"Linear",[Ou]:"Reinhard",[Bu]:"Cineon",[zu]:"ACESFilmic",[Gu]:"AgX",[El]:"Neutral",[ku]:"Custom"};function t_(i,t){const e=jg[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new W;function e_(){ve.getLuminanceCoefficients(ia);const i=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function i_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function as(i){return i!==""}function iu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(s_,o_)}const a_=new Map;function o_(i,t){let e=he[t];if(e===void 0){const n=a_.get(t);if(n!==void 0)e=he[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gl(e)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(l_,c_)}function c_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function au(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const u_={[ls]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function h_(i){return u_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f_={[Qi]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function d_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":f_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const p_={[Fr]:"ENVMAP_MODE_REFRACTION"};function m_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":p_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g_={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[Qh]:"ENVMAP_BLENDING_MIX",[jh]:"ENVMAP_BLENDING_ADD"};function __(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":g_[i.combine]||"ENVMAP_BLENDING_NONE"}function x_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=h_(e),l=d_(e),h=m_(e),d=__(e),u=x_(e),f=n_(e),m=i_(s),S=r.createProgram();let g,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(as).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(as).join(`
`),p.length>0&&(p+=`
`)):(g=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?he.tonemapping_pars_fragment:"",e.toneMapping!==Yn?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),a=gl(a),a=iu(a,e),a=ru(a,e),o=gl(o),o=iu(o,e),o=ru(o,e),a=su(a),o=su(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=R+g+a,M=R+p+o,C=tu(r,r.VERTEX_SHADER,P),L=tu(r,r.FRAGMENT_SHADER,M);r.attachShader(S,C),r.attachShader(S,L),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function F(V){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(S)||"",K=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(L)||"",Y=Z.trim(),ct=K.trim(),rt=X.trim();let gt=!0,st=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,C,L);else{const et=nu(r,C,"vertex"),nt=nu(r,L,"fragment");xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Y+`
`+et+`
`+nt)}else Y!==""?ie("WebGLProgram: Program Info Log:",Y):(ct===""||rt==="")&&(st=!1);st&&(V.diagnostics={runnable:gt,programLog:Y,vertexShader:{log:ct,prefix:g},fragmentShader:{log:rt,prefix:p}})}r.deleteShader(C),r.deleteShader(L),x=new ha(r,S),T=r_(r,S)}let x;this.getUniforms=function(){return x===void 0&&F(this),x};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(S,Zg)),k},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=L,this}let M_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new y_(t),e.set(t,n)),n}}class y_{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}}function b_(i){return i===ji||i===da||i===pa}function E_(i,t,e,n,r,s){const a=new Nl,o=new S_,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,T,k,V,Z,K){const X=V.fog,Y=Z.geometry,ct=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?V.environment:null,rt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,gt=t.get(x.envMap||ct,rt),st=gt&&gt.mapping===Aa?gt.image.height:null,et=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ie("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const nt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=nt!==void 0?nt.length:0;let yt=0;Y.morphAttributes.position!==void 0&&(yt=1),Y.morphAttributes.normal!==void 0&&(yt=2),Y.morphAttributes.color!==void 0&&(yt=3);let qt,$t,Nt,pt;if(et){const mt=Vn[et];qt=mt.vertexShader,$t=mt.fragmentShader}else{qt=x.vertexShader,$t=x.fragmentShader;const mt=o.getVertexShaderStage(x),Rt=o.getFragmentShaderStage(x);o.update(x,mt,Rt),Nt=mt.id,pt=Rt.id}const _t=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Kt=Z.isInstancedMesh===!0,Dt=Z.isBatchedMesh===!0,te=!!x.map,ce=!!x.matcap,it=!!gt,vt=!!x.aoMap,bt=!!x.lightMap,Et=!!x.bumpMap&&x.wireframe===!1,Tt=!!x.normalMap,Xt=!!x.displacementMap,zt=!!x.emissiveMap,Jt=!!x.metalnessMap,ee=!!x.roughnessMap,q=x.anisotropy>0,Me=x.clearcoat>0,re=x.dispersion>0,O=x.retroreflectivity>0,v=x.iridescence>0,tt=x.sheen>0,at=x.transmission>0,ht=q&&!!x.anisotropyMap,Mt=Me&&!!x.clearcoatMap,At=Me&&!!x.clearcoatNormalMap,dt=Me&&!!x.clearcoatRoughnessMap,xt=v&&!!x.iridescenceMap,Pt=v&&!!x.iridescenceThicknessMap,D=tt&&!!x.sheenColorMap,y=tt&&!!x.sheenRoughnessMap,_=!!x.specularMap,U=!!x.specularColorMap,G=!!x.specularIntensityMap,z=at&&!!x.transmissionMap,A=at&&!!x.thicknessMap,H=!!x.gradientMap,N=!!x.alphaMap,J=x.alphaTest>0,E=!!x.alphaHash,B=!!x.extensions;let Q=Yn;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Q=i.toneMapping);const ut={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:$t,defines:x.defines,customVertexShaderID:Nt,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&Z._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&Z.instanceColor!==null,instancingMorph:Kt&&Z.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:te,matcap:ce,envMap:it,envMapMode:it&&gt.mapping,envMapCubeUVHeight:st,aoMap:vt,lightMap:bt,bumpMap:Et,normalMap:Tt,displacementMap:Xt,emissiveMap:zt,normalMapObjectSpace:Tt&&x.normalMapType===nf,normalMapTangentSpace:Tt&&x.normalMapType===ma,packedNormalMap:Tt&&x.normalMapType===ma&&b_(x.normalMap.format),metalnessMap:Jt,roughnessMap:ee,anisotropy:q,anisotropyMap:ht,clearcoat:Me,clearcoatMap:Mt,clearcoatNormalMap:At,clearcoatRoughnessMap:dt,dispersion:re,retroreflection:O,iridescence:v,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:tt,sheenColorMap:D,sheenRoughnessMap:y,specularMap:_,specularColorMap:U,specularIntensityMap:G,transmission:at,transmissionMap:z,thicknessMap:A,gradientMap:H,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:J,alphaHash:E,combine:x.combine,mapUv:te&&m(x.map.channel),aoMapUv:vt&&m(x.aoMap.channel),lightMapUv:bt&&m(x.lightMap.channel),bumpMapUv:Et&&m(x.bumpMap.channel),normalMapUv:Tt&&m(x.normalMap.channel),displacementMapUv:Xt&&m(x.displacementMap.channel),emissiveMapUv:zt&&m(x.emissiveMap.channel),metalnessMapUv:Jt&&m(x.metalnessMap.channel),roughnessMapUv:ee&&m(x.roughnessMap.channel),anisotropyMapUv:ht&&m(x.anisotropyMap.channel),clearcoatMapUv:Mt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:At&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:D&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:y&&m(x.sheenRoughnessMap.channel),specularMapUv:_&&m(x.specularMap.channel),specularColorMapUv:U&&m(x.specularColorMap.channel),specularIntensityMapUv:G&&m(x.specularIntensityMap.channel),transmissionMapUv:z&&m(x.transmissionMap.channel),thicknessMapUv:A&&m(x.thicknessMap.channel),alphaMapUv:N&&m(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Tt||q),vertexNormals:!!Y.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(te||N),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Y.attributes.normal===void 0&&Tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:te&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===we,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===we,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:B&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(B&&x.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)T.push(k),T.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(p(T,x),R(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function R(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function P(x){const T=f[x.type];let k;if(T){const V=Vn[T];k=Od.clone(V.uniforms)}else k=x.uniforms;return k}function M(x,T){let k=h.get(T);return k!==void 0?++k.usedTimes:(k=new v_(i,T,x,r),l.push(k),h.set(T,k)),k}function C(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function L(x){o.remove(x)}function F(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:M,releaseProgram:C,releaseShaderCache:L,programs:l,dispose:F}}function w_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function T_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lu(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,S,g,p){let R=i[t];return R===void 0?(R={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:p},i[t]=R):(R.id=u.id,R.object=u,R.geometry=f,R.material=m,R.materialVariant=a(u),R.groupOrder=S,R.renderOrder=u.renderOrder,R.z=g,R.group=p),t++,R}function c(u,f,m,S,g,p,R){R.reversedDepth===!0&&(g=-g);const P=o(u,f,m,S,g,p);m.transmission>0?n.push(P):m.transparent===!0?r.push(P):e.push(P)}function l(u,f,m,S,g,p){const R=o(u,f,m,S,g,p);m.transmission>0?n.unshift(R):m.transparent===!0?r.unshift(R):e.unshift(R)}function h(u,f){e.length>1&&e.sort(u||T_),n.length>1&&n.sort(f||ou),r.length>1&&r.sort(f||ou)}function d(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:h}}function A_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new lu,i.set(n,[a])):r>=s.length?(a=new lu,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function R_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Wt};break;case"SpotLight":e={position:new W,direction:new W,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function C_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let P_=0;function L_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D_(i){const t=new R_,e=C_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const r=new W,s=new Ee,a=new Ee;function o(l){let h=0,d=0,u=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let f=0,m=0,S=0,g=0,p=0,R=0,P=0,M=0,C=0,L=0,F=0,x=0,T=0,k=0;l.sort(L_);for(let Z=0,K=l.length;Z<K;Z++){const X=l[Z],Y=X.color,ct=X.intensity,rt=X.distance;let gt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===ji?gt=X.shadow.map.texture:gt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)h+=Y.r*ct,d+=Y.g*ct,u+=Y.b*ct;else if(X.isLightProbe){for(let st=0;st<9;st++)n.probe[st].addScaledVector(X.sh.coefficients[st],ct);k++}else if(X.isSunLight){const st=t.get(X);if(st.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const et=X.shadow,nt=e.get(X);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[m]=nt,n.sunShadowMap[m]=gt;const St=et.getViewportCount();for(let yt=0;yt<St;yt++)n.sunShadowMatrix[S+yt]=et.getMatrix(yt),n.sunShadowCascade[S+yt]=et._cascadeData[yt];S+=St,m++}n.sun[f]=st,f++}else if(X.isDirectionalLight){const st=t.get(X);if(st.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const et=X.shadow,nt=e.get(X);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=gt,n.directionalShadowMatrix[g]=X.shadow.matrix,C++}n.directional[g]=st,g++}else if(X.isSpotLight){const st=t.get(X);st.position.setFromMatrixPosition(X.matrixWorld),st.color.copy(Y).multiplyScalar(ct),st.distance=rt,st.coneCos=Math.cos(X.angle),st.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),st.decay=X.decay,n.spot[R]=st;const et=X.shadow;if(X.map&&(n.spotLightMap[x]=X.map,x++,et.updateMatrices(X),X.castShadow&&T++),n.spotLightMatrix[R]=et.matrix,X.castShadow){const nt=e.get(X);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.spotShadow[R]=nt,n.spotShadowMap[R]=gt,F++}R++}else if(X.isRectAreaLight){const st=t.get(X);st.color.copy(Y).multiplyScalar(ct),st.halfWidth.set(X.width*.5,0,0),st.halfHeight.set(0,X.height*.5,0),n.rectArea[P]=st,P++}else if(X.isPointLight){const st=t.get(X);if(st.color.copy(X.color).multiplyScalar(X.intensity),st.distance=X.distance,st.decay=X.decay,X.castShadow){const et=X.shadow,nt=e.get(X);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,n.pointShadow[p]=nt,n.pointShadowMap[p]=gt,n.pointShadowMatrix[p]=X.shadow.matrix,L++}n.point[p]=st,p++}else if(X.isHemisphereLight){const st=t.get(X);st.skyColor.copy(X.color).multiplyScalar(ct),st.groundColor.copy(X.groundColor).multiplyScalar(ct),n.hemi[M]=st,M++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const V=n.hash;(V.sunLength!==f||V.directionalLength!==g||V.pointLength!==p||V.spotLength!==R||V.rectAreaLength!==P||V.hemiLength!==M||V.numSunShadows!==m||V.numDirectionalShadows!==C||V.numPointShadows!==L||V.numSpotShadows!==F||V.numSpotMaps!==x||V.numLightProbes!==k)&&(n.sun.length=f,n.directional.length=g,n.spot.length=R,n.rectArea.length=P,n.point.length=p,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=k,V.sunLength=f,V.directionalLength=g,V.pointLength=p,V.spotLength=R,V.rectAreaLength=P,V.hemiLength=M,V.numSunShadows=m,V.numDirectionalShadows=C,V.numPointShadows=L,V.numSpotShadows=F,V.numSpotMaps=x,V.numLightProbes=k,n.version=P_++)}function c(l,h){let d=0,u=0,f=0,m=0,S=0,g=0;const p=h.matrixWorldInverse;for(let R=0,P=l.length;R<P;R++){const M=l[R];if(M.isSunLight){const C=n.sun[d];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const C=n.directional[u];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),u++}else if(M.isSpotLight){const C=n.spot[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const C=n.rectArea[S];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const C=n.hemi[g];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function cu(i){const t=new D_(i),e=[],n=[],r=[];function s(u){d.camera=u,e.length=0,n.length=0,r.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function I_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new cu(i),t.set(r,[o])):s>=a.length?(o=new cu(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,F_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],O_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],uu=new Ee,es=new W,fo=new W;function B_(i,t,e){let n=new Bl;const r=new wt,s=new wt,a=new Fe,o=new Vd,c=new Wd,l={},h=e.maxTextureSize,d={[Ni]:dn,[dn]:Ni,[Wn]:Wn},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new We;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ye(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let p=this.type;this.render=function(L,F,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;this.type===Ih&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ls);const T=i.getRenderTarget(),k=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(fi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=p!==this.type;K&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(Y=>Y.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,Y=L.length;X<Y;X++){const ct=L[X],rt=ct.shadow;if(rt===void 0){ie("WebGLShadowMap:",ct,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;r.copy(rt.mapSize);const gt=rt.getFrameExtents();r.multiply(gt),s.copy(rt.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/gt.x),r.x=s.x*gt.x,rt.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/gt.y),r.y=s.y*gt.y,rt.mapSize.y=s.y));const st=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=st,rt.map===null||K===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===rs){if(ct.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Fn(r.x,r.y,{format:ji,type:Kn,minFilter:je,magFilter:je,generateMipmaps:!1}),rt.map.texture.name=ct.name+".shadowMap",rt.map.depthTexture=new Ms(r.x,r.y,Un),rt.map.depthTexture.name=ct.name+".shadowMapDepth",rt.map.depthTexture.format=pi,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=$e,rt.map.depthTexture.magFilter=$e}else ct.isPointLight?(rt.map=new Mh(r.x),rt.map.depthTexture=new nd(r.x,$n)):(rt.map=new Fn(r.x,r.y),rt.map.depthTexture=new Ms(r.x,r.y,$n)),rt.map.depthTexture.name=ct.name+".shadowMap",rt.map.depthTexture.format=pi,this.type===ls?(rt.map.depthTexture.compareFunction=st?Dl:Ll,rt.map.depthTexture.minFilter=je,rt.map.depthTexture.magFilter=je):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=$e,rt.map.depthTexture.magFilter=$e);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==r.x||rt.map.height!==r.y)&&rt.map.setSize(r.x,r.y);const et=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();ct.isPointLight!==!0&&rt.updateMatrices(ct,x);for(let nt=0;nt<et;nt++){const St=rt.getCamera(nt);if(ct.isPointLight){const yt=rt.camera,qt=rt.matrix,$t=ct.distance||yt.far;$t!==yt.far&&(yt.far=$t,yt.updateProjectionMatrix()),es.setFromMatrixPosition(ct.matrixWorld),yt.position.copy(es),fo.copy(yt.position),fo.add(F_[nt]),yt.up.copy(O_[nt]),yt.lookAt(fo),yt.updateMatrixWorld(),qt.makeTranslation(-es.x,-es.y,-es.z),uu.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(uu,yt.coordinateSystem,yt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(rt.map),i.clear());const yt=rt.getViewport(nt);a.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),Z.viewport(a)}n=rt.getFrustum(nt),M(F,x,St,ct,this.type)}rt.isPointLightShadow!==!0&&this.type===rs&&R(rt,x),rt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,k,V)};function R(L,F){const x=t.update(S);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null?L.mapPass=new Fn(r.x,r.y,{format:ji,type:Kn}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),u.uniforms.shadow_pass.value=L.map.depthTexture,u.uniforms.resolution.value.set(L.map.width,L.map.height),u.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(F,null,x,u,S,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value.set(L.map.width,L.map.height),f.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(F,null,x,f,S,null)}function P(L,F,x,T){let k=null;const V=x.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)k=V;else if(k=x.isPointLight===!0?c:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=k.uuid,K=F.uuid;let X=l[Z];X===void 0&&(X={},l[Z]=X);let Y=X[K];Y===void 0&&(Y=k.clone(),X[K]=Y,F.addEventListener("dispose",C)),k=Y}if(k.visible=F.visible,k.wireframe=F.wireframe,T===rs?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:d[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,x.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Z=i.properties.get(k);Z.light=x}return k}function M(L,F,x,T,k){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===rs)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,L.matrixWorld);const K=t.update(L),X=L.material;if(Array.isArray(X)){const Y=K.groups;for(let ct=0,rt=Y.length;ct<rt;ct++){const gt=Y[ct],st=X[gt.materialIndex];if(st&&st.visible){const et=P(L,st,T,k);L.onBeforeShadow(i,L,F,x,K,et,gt),i.renderBufferDirect(x,null,K,et,L,gt),L.onAfterShadow(i,L,F,x,K,et,gt)}}}else if(X.visible){const Y=P(L,X,T,k);L.onBeforeShadow(i,L,F,x,K,Y,null),i.renderBufferDirect(x,null,K,Y,L,null),L.onAfterShadow(i,L,F,x,K,Y,null)}}const Z=L.children;for(let K=0,X=Z.length;K<X;K++)M(Z[K],F,x,T,k)}function C(L){L.target.removeEventListener("dispose",C);for(const x in l){const T=l[x],k=L.target.uuid;k in T&&(T[k].dispose(),delete T[k])}}}function z_(i,t){function e(){let A=!1;const H=new Fe;let N=null;const J=new Fe(0,0,0,0);return{setMask:function(E){N!==E&&!A&&(i.colorMask(E,E,E,E),N=E)},setLocked:function(E){A=E},setClear:function(E,B,Q,ut,mt){mt===!0&&(E*=ut,B*=ut,Q*=ut),H.set(E,B,Q,ut),J.equals(H)===!1&&(i.clearColor(E,B,Q,ut),J.copy(H))},reset:function(){A=!1,N=null,J.set(-1,0,0,0)}}}function n(){let A=!1,H=!1,N=null,J=null,E=null;return{setReversed:function(B){if(H!==B){const Q=t.get("EXT_clip_control");B?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT),H=B;const ut=E;E=null,this.setClear(ut)}},getReversed:function(){return H},setTest:function(B){B?_t(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(B){N!==B&&!A&&(i.depthMask(B),N=B)},setFunc:function(B){if(H&&(B=pf[B]),J!==B){switch(B){case To:i.depthFunc(i.NEVER);break;case Ao:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=B}},setLocked:function(B){A=B},setClear:function(B){E!==B&&(E=B,H&&(B=1-B),i.clearDepth(B))},reset:function(){A=!1,N=null,J=null,E=null,H=!1}}}function r(){let A=!1,H=null,N=null,J=null,E=null,B=null,Q=null,ut=null,mt=null;return{setTest:function(Rt){A||(Rt?_t(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Rt){H!==Rt&&!A&&(i.stencilMask(Rt),H=Rt)},setFunc:function(Rt,ne,Qt){(N!==Rt||J!==ne||E!==Qt)&&(i.stencilFunc(Rt,ne,Qt),N=Rt,J=ne,E=Qt)},setOp:function(Rt,ne,Qt){(B!==Rt||Q!==ne||ut!==Qt)&&(i.stencilOp(Rt,ne,Qt),B=Rt,Q=ne,ut=Qt)},setLocked:function(Rt){A=Rt},setClear:function(Rt){mt!==Rt&&(i.clearStencil(Rt),mt=Rt)},reset:function(){A=!1,H=null,N=null,J=null,E=null,B=null,Q=null,ut=null,mt=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],S=null,g=!1,p=null,R=null,P=null,M=null,C=null,L=null,F=null,x=new Wt(0,0,0),T=0,k=!1,V=null,Z=null,K=null,X=null,Y=null;const ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,gt=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(st)[1]),rt=gt>=1):st.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),rt=gt>=2);let et=null,nt={};const St=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),qt=new Fe().fromArray(St),$t=new Fe().fromArray(yt);function Nt(A,H,N,J){const E=new Uint8Array(4),B=i.createTexture();i.bindTexture(A,B),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Q=0;Q<N;Q++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,E):i.texImage2D(H+Q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,E);return B}const pt={};pt[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(ms),Et(!1),Tt(nc),_t(i.CULL_FACE),vt(fi);function _t(A){h[A]!==!0&&(i.enable(A),h[A]=!0)}function Ct(A){h[A]!==!1&&(i.disable(A),h[A]=!1)}function Kt(A,H){return u[A]!==H?(i.bindFramebuffer(A,H),u[A]=H,A===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=H),A===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=H),!0):!1}function Dt(A,H){let N=m,J=!1;if(A){N=f.get(H),N===void 0&&(N=[],f.set(H,N));const E=A.textures;if(N.length!==E.length||N[0]!==i.COLOR_ATTACHMENT0){for(let B=0,Q=E.length;B<Q;B++)N[B]=i.COLOR_ATTACHMENT0+B;N.length=E.length,J=!0}}else N[0]!==i.BACK&&(N[0]=i.BACK,J=!0);J&&i.drawBuffers(N)}function te(A){return S!==A?(i.useProgram(A),S=A,!0):!1}const ce={[Rr]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};ce[Oh]=i.MIN,ce[Bh]=i.MAX;const it={[zh]:i.ZERO,[kh]:i.ONE,[Gh]:i.SRC_COLOR,[Iu]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Uu]:i.ONE_MINUS_SRC_ALPHA,[qh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(A,H,N,J,E,B,Q,ut,mt,Rt){if(A===fi){g===!0&&(Ct(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),A!==Uh){if(A!==p||Rt!==k){if((R!==Rr||C!==Rr)&&(i.blendEquation(i.FUNC_ADD),R=Rr,C=Rr),Rt)switch(A){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xe("WebGLState: Invalid blending: ",A);break}else switch(A){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ic:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",A);break}P=null,M=null,L=null,F=null,x.set(0,0,0),T=0,p=A,k=Rt}return}E=E||H,B=B||N,Q=Q||J,(H!==R||E!==C)&&(i.blendEquationSeparate(ce[H],ce[E]),R=H,C=E),(N!==P||J!==M||B!==L||Q!==F)&&(i.blendFuncSeparate(it[N],it[J],it[B],it[Q]),P=N,M=J,L=B,F=Q),(ut.equals(x)===!1||mt!==T)&&(i.blendColor(ut.r,ut.g,ut.b,mt),x.copy(ut),T=mt),p=A,k=!1}function bt(A,H){A.side===Wn?Ct(i.CULL_FACE):_t(i.CULL_FACE);let N=A.side===dn;H&&(N=!N),Et(N),A.blending===cs&&A.transparent===!1?vt(fi):vt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),s.setMask(A.colorWrite);const J=A.stencilWrite;o.setTest(J),J&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),zt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(A){V!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),V=A)}function Tt(A){A!==Lh?(_t(i.CULL_FACE),A!==Z&&(A===nc?i.cullFace(i.BACK):A===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),Z=A}function Xt(A){A!==K&&(rt&&i.lineWidth(A),K=A)}function zt(A,H,N){A?(_t(i.POLYGON_OFFSET_FILL),(X!==H||Y!==N)&&(X=H,Y=N,a.getReversed()&&(H=-H),i.polygonOffset(H,N))):Ct(i.POLYGON_OFFSET_FILL)}function Jt(A){A?_t(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function ee(A){A===void 0&&(A=i.TEXTURE0+ct-1),et!==A&&(i.activeTexture(A),et=A)}function q(A,H,N){N===void 0&&(et===null?N=i.TEXTURE0+ct-1:N=et);let J=nt[N];J===void 0&&(J={type:void 0,texture:void 0},nt[N]=J),(J.type!==A||J.texture!==H)&&(et!==N&&(i.activeTexture(N),et=N),i.bindTexture(A,H||pt[A]),J.type=A,J.texture=H)}function Me(){const A=nt[et];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(A){xe("WebGLState:",A)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(A){xe("WebGLState:",A)}}function v(){try{i.texSubImage2D(...arguments)}catch(A){xe("WebGLState:",A)}}function tt(){try{i.texSubImage3D(...arguments)}catch(A){xe("WebGLState:",A)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(A){xe("WebGLState:",A)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(A){xe("WebGLState:",A)}}function Mt(){try{i.texStorage2D(...arguments)}catch(A){xe("WebGLState:",A)}}function At(){try{i.texStorage3D(...arguments)}catch(A){xe("WebGLState:",A)}}function dt(){try{i.texImage2D(...arguments)}catch(A){xe("WebGLState:",A)}}function xt(){try{i.texImage3D(...arguments)}catch(A){xe("WebGLState:",A)}}function Pt(A){return d[A]!==void 0?d[A]:i.getParameter(A)}function D(A,H){d[A]!==H&&(i.pixelStorei(A,H),d[A]=H)}function y(A){qt.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),qt.copy(A))}function _(A){$t.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),$t.copy(A))}function U(A,H){let N=l.get(H);N===void 0&&(N=new WeakMap,l.set(H,N));let J=N.get(A);J===void 0&&(J=i.getUniformBlockIndex(H,A.name),N.set(A,J))}function G(A,H){const J=l.get(H).get(A);c.get(H)!==J&&(i.uniformBlockBinding(H,J,A.__bindingPointIndex),c.set(H,J))}function z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,nt={},u={},f=new WeakMap,m=[],S=null,g=!1,p=null,R=null,P=null,M=null,C=null,L=null,F=null,x=new Wt(0,0,0),T=0,k=!1,V=null,Z=null,K=null,X=null,Y=null,qt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_t,disable:Ct,bindFramebuffer:Kt,drawBuffers:Dt,useProgram:te,setBlending:vt,setMaterial:bt,setFlipSided:Et,setCullFace:Tt,setLineWidth:Xt,setPolygonOffset:zt,setScissorTest:Jt,activeTexture:ee,bindTexture:q,unbindTexture:Me,compressedTexImage2D:re,compressedTexImage3D:O,texImage2D:dt,texImage3D:xt,pixelStorei:D,getParameter:Pt,updateUBOMapping:U,uniformBlockBinding:G,texStorage2D:Mt,texStorage3D:At,texSubImage2D:v,texSubImage3D:tt,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:y,viewport:_,reset:z}}function k_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(O,v){return m?new OffscreenCanvas(O,v):xa("canvas")}function g(O,v,tt){let at=1;const ht=re(O);if((ht.width>tt||ht.height>tt)&&(at=tt/Math.max(ht.width,ht.height)),at<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Mt=Math.floor(at*ht.width),At=Math.floor(at*ht.height);u===void 0&&(u=S(Mt,At));const dt=v?S(Mt,At):u;return dt.width=Mt,dt.height=At,dt.getContext("2d").drawImage(O,0,0,Mt,At),ie("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Mt+"x"+At+")."),dt}else return"data"in O&&ie("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),O;return O}function p(O){return O.generateMipmaps}function R(O){i.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(O,v,tt,at,ht,Mt=!1){if(O!==null){if(i[O]!==void 0)return i[O];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let At;at&&(At=t.get("EXT_texture_norm16"),At||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=v;if(v===i.RED&&(tt===i.FLOAT&&(dt=i.R32F),tt===i.HALF_FLOAT&&(dt=i.R16F),tt===i.UNSIGNED_BYTE&&(dt=i.R8),tt===i.UNSIGNED_SHORT&&At&&(dt=At.R16_EXT),tt===i.SHORT&&At&&(dt=At.R16_SNORM_EXT)),v===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(dt=i.R8UI),tt===i.UNSIGNED_SHORT&&(dt=i.R16UI),tt===i.UNSIGNED_INT&&(dt=i.R32UI),tt===i.BYTE&&(dt=i.R8I),tt===i.SHORT&&(dt=i.R16I),tt===i.INT&&(dt=i.R32I)),v===i.RG&&(tt===i.FLOAT&&(dt=i.RG32F),tt===i.HALF_FLOAT&&(dt=i.RG16F),tt===i.UNSIGNED_BYTE&&(dt=i.RG8),tt===i.UNSIGNED_SHORT&&At&&(dt=At.RG16_EXT),tt===i.SHORT&&At&&(dt=At.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(dt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(dt=i.RG16UI),tt===i.UNSIGNED_INT&&(dt=i.RG32UI),tt===i.BYTE&&(dt=i.RG8I),tt===i.SHORT&&(dt=i.RG16I),tt===i.INT&&(dt=i.RG32I)),v===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),tt===i.UNSIGNED_INT&&(dt=i.RGB32UI),tt===i.BYTE&&(dt=i.RGB8I),tt===i.SHORT&&(dt=i.RGB16I),tt===i.INT&&(dt=i.RGB32I)),v===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(dt=i.RGBA32UI),tt===i.BYTE&&(dt=i.RGBA8I),tt===i.SHORT&&(dt=i.RGBA16I),tt===i.INT&&(dt=i.RGBA32I)),v===i.RGB&&(tt===i.UNSIGNED_SHORT&&At&&(dt=At.RGB16_EXT),tt===i.SHORT&&At&&(dt=At.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(dt=i.R11F_G11F_B10F)),v===i.RGBA){const xt=Mt?_a:ve.getTransfer(ht);tt===i.FLOAT&&(dt=i.RGBA32F),tt===i.HALF_FLOAT&&(dt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(dt=xt===we?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&At&&(dt=At.RGBA16_EXT),tt===i.SHORT&&At&&(dt=At.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function C(O,v){let tt;return O?v===null||v===$n||v===_s?tt=i.DEPTH24_STENCIL8:v===Un?tt=i.DEPTH32F_STENCIL8:v===gs&&(tt=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$n||v===_s?tt=i.DEPTH_COMPONENT24:v===Un?tt=i.DEPTH_COMPONENT32F:v===gs&&(tt=i.DEPTH_COMPONENT16),tt}function L(O,v){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==$e&&O.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?v.mipmaps.length:1}function F(O){const v=O.target;v.removeEventListener("dispose",F),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(O){const v=O.target;v.removeEventListener("dispose",x),V(v)}function T(O){const v=n.get(O);if(v.__webglInit===void 0)return;const tt=O.source,at=f.get(tt);if(at){const ht=at[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&k(O),Object.keys(at).length===0&&f.delete(tt)}n.remove(O)}function k(O){const v=n.get(O);i.deleteTexture(v.__webglTexture);const tt=O.source,at=f.get(tt);delete at[v.__cacheKey],a.memory.textures--}function V(O){const v=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(v.__webglFramebuffer[at]))for(let ht=0;ht<v.__webglFramebuffer[at].length;ht++)i.deleteFramebuffer(v.__webglFramebuffer[at][ht]);else i.deleteFramebuffer(v.__webglFramebuffer[at]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[at])}else{if(Array.isArray(v.__webglFramebuffer))for(let at=0;at<v.__webglFramebuffer.length;at++)i.deleteFramebuffer(v.__webglFramebuffer[at]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let at=0;at<v.__webglColorRenderbuffer.length;at++)v.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[at]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const tt=O.textures;for(let at=0,ht=tt.length;at<ht;at++){const Mt=n.get(tt[at]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(tt[at])}n.remove(O)}let Z=0;function K(){Z=0}function X(){return Z}function Y(O){Z=O}function ct(){const O=Z;return O>=r.maxTextures&&ie("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+r.maxTextures),Z+=1,O}function rt(O){const v=[];return v.push(O.wrapS),v.push(O.wrapT),v.push(O.wrapR||0),v.push(O.magFilter),v.push(O.minFilter),v.push(O.anisotropy),v.push(O.internalFormat),v.push(O.format),v.push(O.type),v.push(O.generateMipmaps),v.push(O.premultiplyAlpha),v.push(O.flipY),v.push(O.unpackAlignment),v.push(O.colorSpace),v.join()}function gt(O,v){const tt=n.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const at=O.image;if(at===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(tt,O,v);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+v)}function st(O,v){const tt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Ct(tt,O,v);return}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+v)}function et(O,v){const tt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Ct(tt,O,v);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+v)}function nt(O,v){const tt=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&tt.__version!==O.version){Kt(tt,O,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+v)}const St={[Io]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},yt={[$e]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},qt={[sf]:i.NEVER,[uf]:i.ALWAYS,[af]:i.LESS,[Ll]:i.LEQUAL,[of]:i.EQUAL,[Dl]:i.GEQUAL,[lf]:i.GREATER,[cf]:i.NOTEQUAL};function $t(O,v){if(v.type===Un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===Ua||v.magFilter===Ps||v.magFilter===$i||v.minFilter===je||v.minFilter===Ua||v.minFilter===Ps||v.minFilter===$i)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,St[v.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,St[v.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,St[v.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,yt[v.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,qt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$e||v.minFilter!==Ps&&v.minFilter!==$i||v.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Nt(O,v){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,v.addEventListener("dispose",F));const at=v.source;let ht=f.get(at);ht===void 0&&(ht={},f.set(at,ht));const Mt=rt(v);if(Mt!==O.__cacheKey){ht[Mt]===void 0&&(ht[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ht[Mt].usedTimes++;const At=ht[O.__cacheKey];At!==void 0&&(ht[O.__cacheKey].usedTimes--,At.usedTimes===0&&k(v)),O.__cacheKey=Mt,O.__webglTexture=ht[Mt].texture}return tt}function pt(O,v,tt){return Math.floor(Math.floor(O/tt)/v)}function _t(O,v,tt,at){const Mt=O.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,tt,at,v.data);else{Mt.sort((D,y)=>D.start-y.start);let At=0;for(let D=1;D<Mt.length;D++){const y=Mt[At],_=Mt[D],U=y.start+y.count,G=pt(_.start,v.width,4),z=pt(y.start,v.width,4);_.start<=U+1&&G===z&&pt(_.start+_.count-1,v.width,4)===G?y.count=Math.max(y.count,_.start+_.count-y.start):(++At,Mt[At]=_)}Mt.length=At+1;const dt=e.getParameter(i.UNPACK_ROW_LENGTH),xt=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let D=0,y=Mt.length;D<y;D++){const _=Mt[D],U=Math.floor(_.start/4),G=Math.ceil(_.count/4),z=U%v.width,A=Math.floor(U/v.width),H=G,N=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,z),e.pixelStorei(i.UNPACK_SKIP_ROWS,A),e.texSubImage2D(i.TEXTURE_2D,0,z,A,H,N,tt,at,v.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,dt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Ct(O,v,tt){let at=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=i.TEXTURE_3D);const ht=Nt(O,v),Mt=v.source;e.bindTexture(at,O.__webglTexture,i.TEXTURE0+tt);const At=n.get(Mt);if(Mt.version!==At.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const N=ve.getPrimaries(ve.workingColorSpace),J=v.colorSpace===Ui?null:ve.getPrimaries(v.colorSpace),E=v.colorSpace===Ui||N===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,E)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let xt=g(v.image,!1,r.maxTextureSize);xt=Me(v,xt);const Pt=s.convert(v.format,v.colorSpace),D=s.convert(v.type);let y=M(v.internalFormat,Pt,D,v.normalized,v.colorSpace,v.isVideoTexture);$t(at,v);let _;const U=v.mipmaps,G=v.isVideoTexture!==!0,z=At.__version===void 0||ht===!0,A=Mt.dataReady,H=L(v,xt);if(v.isDepthTexture)y=C(v.format===Ki,v.type),z&&(G?e.texStorage2D(i.TEXTURE_2D,1,y,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,y,xt.width,xt.height,0,Pt,D,null));else if(v.isDataTexture)if(U.length>0){G&&z&&e.texStorage2D(i.TEXTURE_2D,H,y,U[0].width,U[0].height);for(let N=0,J=U.length;N<J;N++)_=U[N],G?A&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,_.width,_.height,Pt,D,_.data):e.texImage2D(i.TEXTURE_2D,N,y,_.width,_.height,0,Pt,D,_.data);v.generateMipmaps=!1}else G?(z&&e.texStorage2D(i.TEXTURE_2D,H,y,xt.width,xt.height),A&&_t(v,xt,Pt,D)):e.texImage2D(i.TEXTURE_2D,0,y,xt.width,xt.height,0,Pt,D,xt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,y,U[0].width,U[0].height,xt.depth);for(let N=0,J=U.length;N<J;N++)if(_=U[N],v.format!==Nn)if(Pt!==null)if(G){if(A)if(v.layerUpdates.size>0){const E=Hc(_.width,_.height,v.format,v.type);for(const B of v.layerUpdates){const Q=_.data.subarray(B*E/_.data.BYTES_PER_ELEMENT,(B+1)*E/_.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,B,_.width,_.height,1,Pt,Q)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,_.width,_.height,xt.depth,Pt,_.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,y,_.width,_.height,xt.depth,0,_.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?A&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,_.width,_.height,xt.depth,Pt,D,_.data):e.texImage3D(i.TEXTURE_2D_ARRAY,N,y,_.width,_.height,xt.depth,0,Pt,D,_.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{G&&z&&e.texStorage2D(i.TEXTURE_2D,H,y,U[0].width,U[0].height);for(let N=0,J=U.length;N<J;N++)_=U[N],v.format!==Nn?Pt!==null?G?A&&e.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,_.width,_.height,Pt,_.data):e.compressedTexImage2D(i.TEXTURE_2D,N,y,_.width,_.height,0,_.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?A&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,_.width,_.height,Pt,D,_.data):e.texImage2D(i.TEXTURE_2D,N,y,_.width,_.height,0,Pt,D,_.data)}else if(v.isDataArrayTexture)if(G){if(z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,y,xt.width,xt.height,xt.depth),A)if(v.layerUpdates.size>0){const N=Hc(xt.width,xt.height,v.format,v.type);for(const J of v.layerUpdates){const E=xt.data.subarray(J*N/xt.data.BYTES_PER_ELEMENT,(J+1)*N/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,xt.width,xt.height,1,Pt,D,E)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,D,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,y,xt.width,xt.height,xt.depth,0,Pt,D,xt.data);else if(v.isData3DTexture)G?(z&&e.texStorage3D(i.TEXTURE_3D,H,y,xt.width,xt.height,xt.depth),A&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,D,xt.data)):e.texImage3D(i.TEXTURE_3D,0,y,xt.width,xt.height,xt.depth,0,Pt,D,xt.data);else if(v.isFramebufferTexture){if(z)if(G)e.texStorage2D(i.TEXTURE_2D,H,y,xt.width,xt.height);else{let N=xt.width,J=xt.height;for(let E=0;E<H;E++)e.texImage2D(i.TEXTURE_2D,E,y,N,J,0,Pt,D,null),N>>=1,J>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const N=i.canvas;if(N.hasAttribute("layoutsubtree")||N.setAttribute("layoutsubtree","true"),xt.parentNode!==N){N.appendChild(xt),d.add(v),N.onpaint=J=>{const E=J.changedElements;for(const B of d)E.includes(B.image)&&(B.needsUpdate=!0)},N.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xt);else{const E=i.RGBA,B=i.RGBA,Q=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,E,B,Q,xt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(U.length>0){if(G&&z){const N=re(U[0]);e.texStorage2D(i.TEXTURE_2D,H,y,N.width,N.height)}for(let N=0,J=U.length;N<J;N++)_=U[N],G?A&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Pt,D,_):e.texImage2D(i.TEXTURE_2D,N,y,Pt,D,_);v.generateMipmaps=!1}else if(G){if(z){const N=re(xt);e.texStorage2D(i.TEXTURE_2D,H,y,N.width,N.height)}A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,D,xt)}else e.texImage2D(i.TEXTURE_2D,0,y,Pt,D,xt);p(v)&&R(at),At.__version=Mt.version,v.onUpdate&&v.onUpdate(v)}O.__version=v.version}function Kt(O,v,tt){if(v.image.length!==6)return;const at=Nt(O,v),ht=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+tt);const Mt=n.get(ht);if(ht.version!==Mt.__version||at===!0){e.activeTexture(i.TEXTURE0+tt);const At=ve.getPrimaries(ve.workingColorSpace),dt=v.colorSpace===Ui?null:ve.getPrimaries(v.colorSpace),xt=v.colorSpace===Ui||At===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Pt=v.isCompressedTexture||v.image[0].isCompressedTexture,D=v.image[0]&&v.image[0].isDataTexture,y=[];for(let B=0;B<6;B++)!Pt&&!D?y[B]=g(v.image[B],!0,r.maxCubemapSize):y[B]=D?v.image[B].image:v.image[B],y[B]=Me(v,y[B]);const _=y[0],U=s.convert(v.format,v.colorSpace),G=s.convert(v.type),z=M(v.internalFormat,U,G,v.normalized,v.colorSpace),A=v.isVideoTexture!==!0,H=Mt.__version===void 0||at===!0,N=ht.dataReady;let J=L(v,_);$t(i.TEXTURE_CUBE_MAP,v);let E;if(Pt){A&&H&&e.texStorage2D(i.TEXTURE_CUBE_MAP,J,z,_.width,_.height);for(let B=0;B<6;B++){E=y[B].mipmaps;for(let Q=0;Q<E.length;Q++){const ut=E[Q];v.format!==Nn?U!==null?A?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q,0,0,ut.width,ut.height,U,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q,z,ut.width,ut.height,0,ut.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q,0,0,ut.width,ut.height,U,G,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q,z,ut.width,ut.height,0,U,G,ut.data)}}}else{if(E=v.mipmaps,A&&H){E.length>0&&J++;const B=re(y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,J,z,B.width,B.height)}for(let B=0;B<6;B++)if(D){A?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,y[B].width,y[B].height,U,G,y[B].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,z,y[B].width,y[B].height,0,U,G,y[B].data);for(let Q=0;Q<E.length;Q++){const mt=E[Q].image[B].image;A?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q+1,0,0,mt.width,mt.height,U,G,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q+1,z,mt.width,mt.height,0,U,G,mt.data)}}else{A?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,U,G,y[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,z,U,G,y[B]);for(let Q=0;Q<E.length;Q++){const ut=E[Q];A?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q+1,0,0,U,G,ut.image[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q+1,z,U,G,ut.image[B])}}}p(v)&&R(i.TEXTURE_CUBE_MAP),Mt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}O.__version=v.version}function Dt(O,v,tt,at,ht,Mt){const At=s.convert(tt.format,tt.colorSpace),dt=s.convert(tt.type),xt=M(tt.internalFormat,At,dt,tt.normalized,tt.colorSpace),Pt=n.get(v),D=n.get(tt);if(D.__renderTarget=v,!Pt.__hasExternalTextures){const y=Math.max(1,v.width>>Mt),_=Math.max(1,v.height>>Mt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,Mt,xt,y,_,v.depth,0,At,dt,null):e.texImage2D(ht,Mt,xt,y,_,0,At,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),ee(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ht,D.__webglTexture,0,Jt(v)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ht,D.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(O,v,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,O),v.depthBuffer){const at=v.depthTexture,ht=at&&at.isDepthTexture?at.type:null,Mt=C(v.stencilBuffer,ht),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ee(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(v),Mt,v.width,v.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(v),Mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,O)}else{const at=v.textures;for(let ht=0;ht<at.length;ht++){const Mt=at[ht],At=s.convert(Mt.format,Mt.colorSpace),dt=s.convert(Mt.type),xt=M(Mt.internalFormat,At,dt,Mt.normalized,Mt.colorSpace);ee(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(v),xt,v.width,v.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(v),xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(O,v,tt){const at=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=n.get(v.depthTexture);if(ht.__renderTarget=v,(!ht.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),at){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,v.depthTexture.addEventListener("dispose",F)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),$t(i.TEXTURE_CUBE_MAP,v.depthTexture);const Pt=s.convert(v.depthTexture.format),D=s.convert(v.depthTexture.type);let y;v.depthTexture.format===pi?y=i.DEPTH_COMPONENT24:v.depthTexture.format===Ki&&(y=i.DEPTH24_STENCIL8);for(let _=0;_<6;_++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,y,v.width,v.height,0,Pt,D,null)}}else gt(v.depthTexture,0);const Mt=ht.__webglTexture,At=Jt(v),dt=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,xt=v.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===pi)ee(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,dt,Mt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,xt,dt,Mt,0);else if(v.depthTexture.format===Ki)ee(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,dt,Mt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,xt,dt,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(O){const v=n.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==O.depthTexture){const at=O.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),at){const ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,at.removeEventListener("dispose",ht)};at.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=at}if(O.depthTexture&&!v.__autoAllocateDepthBuffer)if(tt)for(let at=0;at<6;at++)ce(v.__webglFramebuffer[at],O,at);else{const at=O.texture.mipmaps;at&&at.length>0?ce(v.__webglFramebuffer[0],O,0):ce(v.__webglFramebuffer,O,0)}else if(tt){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]===void 0)v.__webglDepthbuffer[at]=i.createRenderbuffer(),te(v.__webglDepthbuffer[at],O,!1);else{const ht=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=v.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Mt)}}else{const at=O.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),te(v.__webglDepthbuffer,O,!1);else{const ht=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(O,v,tt){const at=n.get(O);v!==void 0&&Dt(at.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&it(O)}function bt(O){const v=O.texture,tt=n.get(O),at=n.get(v);O.addEventListener("dispose",x);const ht=O.textures,Mt=O.isWebGLCubeRenderTarget===!0,At=ht.length>1;if(At||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=v.version,a.memory.textures++),Mt){tt.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){tt.__webglFramebuffer[dt]=[];for(let xt=0;xt<v.mipmaps.length;xt++)tt.__webglFramebuffer[dt][xt]=i.createFramebuffer()}else tt.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){tt.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)tt.__webglFramebuffer[dt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(At)for(let dt=0,xt=ht.length;dt<xt;dt++){const Pt=n.get(ht[dt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&ee(O)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let dt=0;dt<ht.length;dt++){const xt=ht[dt];tt.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[dt]);const Pt=s.convert(xt.format,xt.colorSpace),D=s.convert(xt.type),y=M(xt.internalFormat,Pt,D,xt.normalized,xt.colorSpace,O.isXRRenderTarget===!0),_=Jt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,_,y,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),te(tt.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),$t(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Dt(tt.__webglFramebuffer[dt][xt],O,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else Dt(tt.__webglFramebuffer[dt],O,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(v)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,xt=ht.length;dt<xt;dt++){const Pt=ht[dt],D=n.get(Pt);let y=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(y=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(y,D.__webglTexture),$t(y,Pt),Dt(tt.__webglFramebuffer,O,Pt,i.COLOR_ATTACHMENT0+dt,y,0),p(Pt)&&R(y)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(dt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,at.__webglTexture),$t(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Dt(tt.__webglFramebuffer[xt],O,v,i.COLOR_ATTACHMENT0,dt,xt);else Dt(tt.__webglFramebuffer,O,v,i.COLOR_ATTACHMENT0,dt,0);p(v)&&R(dt),e.unbindTexture()}O.depthBuffer&&it(O)}function Et(O){const v=O.textures;for(let tt=0,at=v.length;tt<at;tt++){const ht=v[tt];if(p(ht)){const Mt=P(O),At=n.get(ht).__webglTexture;e.bindTexture(Mt,At),R(Mt),e.unbindTexture()}}}const Tt=[],Xt=[];function zt(O){if(O.samples>0){if(ee(O)===!1){const v=O.textures,tt=O.width,at=O.height;let ht=i.COLOR_BUFFER_BIT;const Mt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(O),dt=v.length>1;if(dt)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const xt=O.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Pt]);const D=n.get(v[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,tt,at,0,0,tt,at,ht,i.NEAREST),c===!0&&(Tt.length=0,Xt.length=0,Tt.push(i.COLOR_ATTACHMENT0+Pt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Tt.push(Mt),Xt.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Pt]);const D=n.get(v[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){const v=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Jt(O){return Math.min(r.maxSamples,O.samples)}function ee(O){const v=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function q(O){const v=a.render.frame;h.get(O)!==v&&(h.set(O,v),O.update())}function Me(O,v){const tt=O.colorSpace,at=O.format,ht=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==ga&&tt!==Ui&&(ve.getTransfer(tt)===we?(at!==Nn||ht!==Mn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",tt)),v}function re(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=ct,this.resetTextureUnits=K,this.getTextureUnits=X,this.setTextureUnits=Y,this.setTexture2D=gt,this.setTexture2DArray=st,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=vt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function G_(i,t){function e(n,r=Ui){let s;const a=ve.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===Zu)return i.RGB;if(n===Nn)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Rl)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===Cl)return i.RG_INTEGER;if(n===Pl)return i.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ua)if(a===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Fo||n===Oo||n===Bo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===No)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===ko||n===Go||n===Ho||n===Vo||n===da||n===Wo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zo||n===ko)return a===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Go)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ho)return s.COMPRESSED_R11_EAC;if(n===Vo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===da)return s.COMPRESSED_RG11_EAC;if(n===Wo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===$o||n===Ko||n===Jo||n===Qo||n===jo||n===tl||n===el||n===nl||n===il||n===rl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xo)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===al||n===ol)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sl)return a===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===pa||n===ul)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class W_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new sh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:H_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X_ extends er{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null;const S=typeof XRWebGLBinding<"u",g=new W_,p={},R=e.getContextAttributes();let P=null,M=null;const C=[],L=[],F=new wt;let x=null,T=null;const k=new wn;k.viewport=new Fe;const V=new wn;V.viewport=new Fe;const Z=[k,V],K=new Kd;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let _t=C[pt];return _t===void 0&&(_t=new Ga,C[pt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(pt){let _t=C[pt];return _t===void 0&&(_t=new Ga,C[pt]=_t),_t.getGripSpace()},this.getHand=function(pt){let _t=C[pt];return _t===void 0&&(_t=new Ga,C[pt]=_t),_t.getHandSpace()};function ct(pt){const _t=L.indexOf(pt.inputSource);if(_t===-1)return;const Ct=C[_t];Ct!==void 0&&(Ct.update(pt.inputSource,pt.frame,l||a),Ct.dispatchEvent({type:pt.type,data:pt.inputSource}))}function rt(){r.removeEventListener("select",ct),r.removeEventListener("selectstart",ct),r.removeEventListener("selectend",ct),r.removeEventListener("squeeze",ct),r.removeEventListener("squeezestart",ct),r.removeEventListener("squeezeend",ct),r.removeEventListener("end",rt),r.removeEventListener("inputsourceschange",gt);for(let pt=0;pt<C.length;pt++){const _t=L[pt];_t!==null&&(L[pt]=null,C[pt].disconnect(_t))}X=null,Y=null,g.reset();for(const pt in p)delete p[pt];if(t.setRenderTarget(P),f=null,u=null,d=null,r=null,M=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(F.width,F.height,!1),T!==null){const pt=T.camera;pt.fov=T.fov,pt.zoom=T.zoom,pt.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){s=pt,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){o=pt,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(pt){l=pt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(pt){if(r=pt,r!==null){if(P=t.getRenderTarget(),r.addEventListener("select",ct),r.addEventListener("selectstart",ct),r.addEventListener("selectend",ct),r.addEventListener("squeeze",ct),r.addEventListener("squeezestart",ct),r.addEventListener("squeezeend",ct),r.addEventListener("end",rt),r.addEventListener("inputsourceschange",gt),R.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(F),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Kt=null,Dt=null;R.depth&&(Dt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=R.stencil?Ki:pi,Kt=R.stencil?_s:$n);const te={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(te),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Fn(u.textureWidth,u.textureHeight,{format:Nn,type:Mn,depthTexture:new Ms(u.textureWidth,u.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ct={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,Ct),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Nt.setContext(r),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function gt(pt){for(let _t=0;_t<pt.removed.length;_t++){const Ct=pt.removed[_t],Kt=L.indexOf(Ct);Kt>=0&&(L[Kt]=null,C[Kt].disconnect(Ct))}for(let _t=0;_t<pt.added.length;_t++){const Ct=pt.added[_t];let Kt=L.indexOf(Ct);if(Kt===-1){for(let te=0;te<C.length;te++)if(te>=L.length){L.push(Ct),Kt=te;break}else if(L[te]===null){L[te]=Ct,Kt=te;break}if(Kt===-1)break}const Dt=C[Kt];Dt&&Dt.connect(Ct)}}const st=new W,et=new W;function nt(pt,_t,Ct){st.setFromMatrixPosition(_t.matrixWorld),et.setFromMatrixPosition(Ct.matrixWorld);const Kt=st.distanceTo(et),Dt=_t.projectionMatrix.elements,te=Ct.projectionMatrix.elements,ce=Dt[14]/(Dt[10]-1),it=Dt[14]/(Dt[10]+1),vt=(Dt[9]+1)/Dt[5],bt=(Dt[9]-1)/Dt[5],Et=(Dt[8]-1)/Dt[0],Tt=(te[8]+1)/te[0],Xt=ce*Et,zt=ce*Tt,Jt=Kt/(-Et+Tt),ee=Jt*-Et;if(_t.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(ee),pt.translateZ(Jt),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),Dt[10]===-1)pt.projectionMatrix.copy(_t.projectionMatrix),pt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const q=ce+Jt,Me=it+Jt,re=Xt-ee,O=zt+(Kt-ee),v=vt*it/Me*q,tt=bt*it/Me*q;pt.projectionMatrix.makePerspective(re,O,v,tt,q,Me),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function St(pt,_t){_t===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(_t.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(r===null)return;let _t=pt.near,Ct=pt.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(Ct=g.depthFar)),K.near=V.near=k.near=_t,K.far=V.far=k.far=Ct,(X!==K.near||Y!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),X=K.near,Y=K.far),K.layers.mask=pt.layers.mask|6,k.layers.mask=K.layers.mask&-5,V.layers.mask=K.layers.mask&-3;const Kt=pt.parent,Dt=K.cameras;St(K,Kt);for(let te=0;te<Dt.length;te++)St(Dt[te],Kt);Dt.length===2?nt(K,k,V):K.projectionMatrix.copy(k.projectionMatrix),T===null&&pt.isPerspectiveCamera&&(T={camera:pt,fov:pt.fov,zoom:pt.zoom}),yt(pt,K,Kt)};function yt(pt,_t,Ct){Ct===null?pt.matrix.copy(_t.matrixWorld):(pt.matrix.copy(Ct.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(_t.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(_t.projectionMatrix),pt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=vs*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(pt){c=pt,u!==null&&(u.fixedFoveation=pt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=pt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(pt){return p[pt]};let qt=null;function $t(pt,_t){if(h=_t.getViewerPose(l||a),m=_t,h!==null){const Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Kt=!1;Ct.length!==K.cameras.length&&(K.cameras.length=0,Kt=!0);for(let it=0;it<Ct.length;it++){const vt=Ct[it];let bt=null;if(f!==null)bt=f.getViewport(vt);else{const Tt=d.getViewSubImage(u,vt);bt=Tt.viewport,it===0&&(t.setRenderTargetTextures(M,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(M))}let Et=Z[it];Et===void 0&&(Et=new wn,Et.layers.enable(it),Et.viewport=new Fe,Z[it]=Et),Et.matrix.fromArray(vt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(vt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(bt.x,bt.y,bt.width,bt.height),it===0&&(K.matrix.copy(Et.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Kt===!0&&K.cameras.push(Et)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const it=d.getDepthInformation(Ct[0]);it&&it.isValid&&it.texture&&g.init(it,r.renderState)}if(Dt&&Dt.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let it=0;it<Ct.length;it++){const vt=Ct[it].camera;if(vt){let bt=p[vt];bt||(bt=new sh,p[vt]=bt);const Et=d.getCameraImage(vt);bt.sourceTexture=Et}}}}for(let Ct=0;Ct<C.length;Ct++){const Kt=L[Ct],Dt=C[Ct];Kt!==null&&Dt!==void 0&&Dt.update(Kt,_t,l||a)}qt&&qt(pt,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),m=null}const Nt=new xh;Nt.setAnimationLoop($t),this.setAnimationLoop=function(pt){qt=pt},this.dispose=function(){}}}const q_=new Ee,wh=new se;wh.set(-1,0,0,0,1,0,0,0,1);function Y_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,mh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,R,P,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),S(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,R,P):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const R=t.get(p),P=R.envMap,M=R.envMapRotation;P&&(g.envMap.value=P,g.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(wh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,R,P){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=P*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){const R=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Z_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,C){const L=C.program;n.uniformBlockBinding(M,L)}function l(M,C){let L=r[M.id];L===void 0&&(g(M),L=h(M),r[M.id]=L,M.addEventListener("dispose",R));const F=C.program;n.updateUBOMapping(M,F);const x=t.render.frame;s[M.id]!==x&&(u(M),s[M.id]=x)}function h(M){const C=d();M.__bindingPointIndex=C;const L=i.createBuffer(),F=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,F,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,L),L}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const C=r[M.id],L=M.uniforms,F=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let x=0,T=L.length;x<T;x++){const k=L[x];if(Array.isArray(k))for(let V=0,Z=k.length;V<Z;V++)f(k[V],x,V,F);else f(k,x,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,C,L,F){if(S(M,C,L,F)===!0){const x=M.__offset,T=M.value;if(Array.isArray(T)){let k=0;for(let V=0;V<T.length;V++){const Z=T[V],K=p(Z);m(Z,M.__data,k),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function m(M,C,L){typeof M=="number"||typeof M=="boolean"?C[0]=M:M.isMatrix3?(C[0]=M.elements[0],C[1]=M.elements[1],C[2]=M.elements[2],C[3]=0,C[4]=M.elements[3],C[5]=M.elements[4],C[6]=M.elements[5],C[7]=0,C[8]=M.elements[6],C[9]=M.elements[7],C[10]=M.elements[8],C[11]=0):ArrayBuffer.isView(M)?C.set(new M.constructor(M.buffer,M.byteOffset,C.length)):M.toArray(C,L)}function S(M,C,L,F){const x=M.value,T=C+"_"+L;if(F[T]===void 0)return typeof x=="number"||typeof x=="boolean"?F[T]=x:ArrayBuffer.isView(x)?F[T]=x.slice():F[T]=x.clone(),!0;{const k=F[T];if(typeof x=="number"||typeof x=="boolean"){if(k!==x)return F[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(k.equals(x)===!1)return k.copy(x),!0}}return!1}function g(M){const C=M.uniforms;let L=0;const F=16;for(let T=0,k=C.length;T<k;T++){const V=Array.isArray(C[T])?C[T]:[C[T]];for(let Z=0,K=V.length;Z<K;Z++){const X=V[Z],Y=Array.isArray(X.value)?X.value:[X.value];for(let ct=0,rt=Y.length;ct<rt;ct++){const gt=Y[ct],st=p(gt),et=L%F,nt=et%st.boundary,St=et+nt;L+=nt,St!==0&&F-St<st.storage&&(L+=F-St),X.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=L,L+=st.storage}}}const x=L%F;return x>0&&(L+=F-x),M.__size=L,M.__cache={},this}function p(M){const C={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(C.boundary=4,C.storage=4):M.isVector2?(C.boundary=8,C.storage=8):M.isVector3||M.isColor?(C.boundary=16,C.storage=12):M.isVector4?(C.boundary=16,C.storage=16):M.isMatrix3?(C.boundary=48,C.storage=48):M.isMatrix4?(C.boundary=64,C.storage=64):M.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(C.boundary=16,C.storage=M.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",M),C}function R(M){const C=M.target;C.removeEventListener("dispose",R);const L=a.indexOf(C.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function P(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:P}}const $_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function K_(){return zn===null&&(zn=new Ol($_,16,16,ji,Kn),zn.name="DFG_LUT",zn.minFilter=je,zn.magFilter=je,zn.wrapS=ci,zn.wrapT=ci,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class J_{constructor(t={}){const{canvas:e=ff(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const S=f,g=new Set([Pl,Cl,Rl]),p=new Set([Mn,$n,gs,_s,Tl,Al]),R=new Uint32Array(4),P=new Int32Array(4),M=new W;let C=null,L=null;const F=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,Z=null,K=null,X=null,Y=null;this._outputColorSpace=Ve;let ct=0,rt=0,gt=null,st=-1,et=null;const nt=new Fe,St=new Fe;let yt=null;const qt=new Wt(0);let $t=0,Nt=e.width,pt=e.height,_t=1,Ct=null,Kt=null;const Dt=new Fe(0,0,Nt,pt),te=new Fe(0,0,Nt,pt);let ce=!1;const it=new Bl;let vt=!1,bt=!1;const Et=new Ee,Tt=new W,Xt=new Fe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function ee(){return gt===null?_t:1}let q=n;function Me(w,j){return e.getContext(w,j)}let re,O,v,tt,at,ht,Mt,At,dt,xt,Pt,D,y,_,U,G,z,A,H,N,J,E,B;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",ne,!1),q===null){const j="webgl2";if(q=Me(j,w),q===null)throw Me(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Q()}catch(w){throw e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),xe("WebGLRenderer: "+w.message),w}function Q(){re=new Km(q),re.init(),J=new G_(q,re),O=new km(q,re,t,J),v=new z_(q,re),O.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),K=q.createFramebuffer(),X=q.createFramebuffer(),Y=q.createFramebuffer(),tt=new jm(q),at=new w_,ht=new k_(q,re,v,at,O,J,tt),Mt=new $m(k),At=new ep(q),E=new Bm(q,At),dt=new Jm(q,At,tt,E),xt=new eg(q,dt,At,E,tt),A=new tg(q,O,ht),U=new Gm(at),Pt=new E_(k,Mt,re,O,E,U),D=new Y_(k,at),y=new A_,_=new I_(re),z=new Om(k,Mt,v,xt,m,c),G=new B_(k,xt,O),B=new Z_(q,tt,O,v),H=new zm(q,re,tt),N=new Qm(q,re,tt),tt.programs=Pt.programs,k.capabilities=O,k.extensions=re,k.properties=at,k.renderLists=y,k.shadowMap=G,k.state=v,k.info=tt}S!==Mn&&(T=new ig(S,e.width,e.height,o,r,s));const ut=new X_(k,q);this.xr=ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(Nt,pt,!1))},this.getSize=function(w){return w.set(Nt,pt)},this.setSize=function(w,j,ft=!0){if(ut.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=w,pt=j,e.width=Math.floor(w*_t),e.height=Math.floor(j*_t),ft===!0&&(e.style.width=w+"px",e.style.height=j+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(Nt*_t,pt*_t).floor()},this.setDrawingBufferSize=function(w,j,ft){Nt=w,pt=j,_t=ft,e.width=Math.floor(w*ft),e.height=Math.floor(j*ft),this.setViewport(0,0,w,j)},this.setEffects=function(w){if(S===Mn){xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let j=0;j<w.length;j++)if(w[j].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(nt)},this.getViewport=function(w){return w.copy(Dt)},this.setViewport=function(w,j,ft,ot){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,j,ft,ot),v.viewport(nt.copy(Dt).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,j,ft,ot){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,j,ft,ot),v.scissor(St.copy(te).multiplyScalar(_t).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(w){v.setScissorTest(ce=w)},this.setOpaqueSort=function(w){Ct=w},this.setTransparentSort=function(w){Kt=w},this.getClearColor=function(w){return w.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ft=!0){let ot=0;if(w){let lt=!1;if(gt!==null){const Ut=gt.texture.format;lt=g.has(Ut)}if(lt){const Ut=gt.texture.type,Bt=p.has(Ut),It=z.getClearColor(),Ht=z.getClearAlpha(),Yt=It.r,ue=It.g,ge=It.b;Bt?(R[0]=Yt,R[1]=ue,R[2]=ge,R[3]=Ht,q.clearBufferuiv(q.COLOR,0,R)):(P[0]=Yt,P[1]=ue,P[2]=ge,P[3]=Ht,q.clearBufferiv(q.COLOR,0,P))}else ot|=q.COLOR_BUFFER_BIT}j&&(ot|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(ot|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&q.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),z.dispose(),y.dispose(),_.dispose(),at.dispose(),Mt.dispose(),xt.dispose(),E.dispose(),B.dispose(),Pt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",pe),ut.removeEventListener("sessionend",kt),jt.stop()};function mt(w){w.preventDefault(),va("WebGLRenderer: Context Lost."),V=!0}function Rt(){va("WebGLRenderer: Context Restored."),V=!1;const w=tt.autoReset,j=G.enabled,ft=G.autoUpdate,ot=G.needsUpdate,lt=G.type;Q(),tt.autoReset=w,G.enabled=j,G.autoUpdate=ft,G.needsUpdate=ot,G.type=lt}function ne(w){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qt(w){const j=w.target;j.removeEventListener("dispose",Qt),Gt(j)}function Gt(w){oe(w),at.remove(w)}function oe(w){const j=at.get(w).programs;j!==void 0&&(j.forEach(function(ft){Pt.releaseProgram(ft)}),w.isShaderMaterial&&Pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ft,ot,lt,Ut){j===null&&(j=zt);const Bt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,It=Cs(w,j,ft,ot,lt);v.setMaterial(ot,Bt);let Ht=ft.index,Yt=1;if(ot.wireframe===!0){if(Ht=dt.getWireframeAttribute(ft),Ht===void 0)return;Yt=2}const ue=ft.drawRange,ge=ft.attributes.position;let Vt=ue.start*Yt,be=(ue.start+ue.count)*Yt;Ut!==null&&(Vt=Math.max(Vt,Ut.start*Yt),be=Math.min(be,(Ut.start+Ut.count)*Yt)),Ht!==null?(Vt=Math.max(Vt,0),be=Math.min(be,Ht.count)):ge!=null&&(Vt=Math.max(Vt,0),be=Math.min(be,ge.count));const ze=be-Vt;if(ze<0||ze===1/0)return;E.setup(lt,ot,It,ft,Ht);let Ue,Re=H;if(Ht!==null&&(Ue=At.get(Ht),Re=N,Re.setIndex(Ue)),lt.isMesh)ot.wireframe===!0?(v.setLineWidth(ot.wireframeLinewidth*ee()),Re.setMode(q.LINES)):Re.setMode(q.TRIANGLES);else if(lt.isLine){let tn=ot.linewidth;tn===void 0&&(tn=1),v.setLineWidth(tn*ee()),lt.isLineSegments?Re.setMode(q.LINES):lt.isLineLoop?Re.setMode(q.LINE_LOOP):Re.setMode(q.LINE_STRIP)}else lt.isPoints?Re.setMode(q.POINTS):lt.isSprite&&Re.setMode(q.TRIANGLES);if(lt.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Re.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{const tn=lt._multiDrawStarts,Ot=lt._multiDrawCounts,on=lt._multiDrawCount,Se=Ht?At.get(Ht).bytesPerElement:1,Sn=at.get(ot).currentProgram.getUniforms();for(let On=0;On<on;On++)Sn.setValue(q,"_gl_DrawID",On),Re.render(tn[On]/Se,Ot[On])}else if(lt.isInstancedMesh)Re.renderInstances(Vt,ze,lt.count);else if(ft.isInstancedBufferGeometry){const tn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ot=Math.min(ft.instanceCount,tn);Re.renderInstances(Vt,ze,Ot)}else Re.render(Vt,ze)};function Ce(w,j,ft,ot){Z!==null&&w.isNodeMaterial&&Z.setObject(ot,w),vt===!0&&U.setState(w,ft,!1),w.transparent===!0&&w.side===Wn&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,_i(w,j,ot),w.side=Ni,w.needsUpdate=!0,_i(w,j,ot),w.side=Wn):_i(w,j,ot)}this.compile=function(w,j,ft=null){ft===null&&(ft=w),Z!==null&&Z.renderStart(w,j,ft),L=_.get(ft),L.init(j),x.push(L),ft.traverseVisible(function(lt){lt.isLight&&lt.layers.test(j.layers)&&(L.pushLight(lt),lt.castShadow&&L.pushShadow(lt))}),w!==ft&&w.traverseVisible(function(lt){lt.isLight&&lt.layers.test(j.layers)&&(L.pushLight(lt),lt.castShadow&&L.pushShadow(lt))}),L.setupLights(),Z!==null&&Z.updateLights(L.state.lightsArray),bt=this.localClippingEnabled,vt=U.init(this.clippingPlanes,bt),vt===!0&&U.setGlobalState(this.clippingPlanes,j),Z!==null&&G.render(L.state.shadowsArray,ft,j);const ot=new Set;return w.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;const Ut=lt.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const It=Ut[Bt];Ce(It,ft,j,lt),ot.add(It)}else Ce(Ut,ft,j,lt),ot.add(Ut)}),L=x.pop(),Z!==null&&Z.renderEnd(),ot},this.compileAsync=function(w,j,ft=null){const ot=this.compile(w,j,ft);return new Promise(lt=>{function Ut(){if(ot.forEach(function(Bt){const Ht=at.get(Bt).currentProgram;(Ht===void 0||Ht.isReady())&&ot.delete(Bt)}),ot.size===0){lt(w);return}setTimeout(Ut,10)}re.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ft=null;function de(w){Ft&&Ft(w)}function pe(){jt.stop()}function kt(){jt.start()}const jt=new xh;jt.setAnimationLoop(de),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(w){Ft=w,ut.setAnimationLoop(w),w===null?jt.stop():jt.start()},ut.addEventListener("sessionstart",pe),ut.addEventListener("sessionend",kt),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(w,j);const ft=ut.enabled===!0&&ut.isPresenting===!0,ot=T!==null&&(gt===null||ft)&&T.begin(k,gt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(j),j=ut.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,j,gt),L=_.get(w,x.length),L.init(j),L.state.textureUnits=ht.getTextureUnits(),x.push(L),Et.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),it.setFromProjectionMatrix(Et,qn,j.reversedDepth),bt=this.localClippingEnabled,vt=U.init(this.clippingPlanes,bt),C=y.get(w,F.length),C.init(),F.push(C),ut.enabled===!0&&ut.isPresenting===!0){const Bt=k.xr.getDepthSensingMesh();Bt!==null&&_e(Bt,j,-1/0,k.sortObjects)}_e(w,j,0,k.sortObjects),C.finish(),Z!==null&&Z.updateLights(L.state.lightsArray),k.sortObjects===!0&&C.sort(Ct,Kt),Jt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Jt&&z.addToRenderList(C,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&U.beginShadows();const lt=L.state.shadowsArray;if(G.render(lt,w,j),vt===!0&&U.endShadows(),(ot&&T.hasRenderPass())===!1){const Bt=C.opaque,It=C.transmissive;if(L.setupLights(),j.isArrayCamera){const Ht=j.cameras;if(It.length>0)for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){const ge=Ht[Yt];jn(Bt,It,w,ge)}Jt&&z.render(w);for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){const ge=Ht[Yt];Pe(C,w,ge,ge.viewport)}}else It.length>0&&jn(Bt,It,w,j),Jt&&z.render(w),Pe(C,w,j)}gt!==null&&rt===0&&(ht.updateMultisampleRenderTarget(gt),ht.updateRenderTargetMipmap(gt)),ot&&T.end(k),w.isScene===!0&&w.onAfterRender(k,w,j),E.resetDefaultState(),st=-1,et=null,x.pop(),x.length>0?(L=x[x.length-1],ht.setTextureUnits(L.state.textureUnits),vt===!0&&U.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?C=F[F.length-1]:C=null,Z!==null&&Z.renderEnd()};function _e(w,j,ft,ot){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ft=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(it)){ot&&Xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const Bt=xt.update(w),It=w.material;It.visible&&C.push(w,Bt,It,ft,Xt.z,null,j)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(it))){const Bt=xt.update(w),It=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xt.copy(w.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Xt.copy(Bt.boundingSphere.center)),Xt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(It)){const Ht=Bt.groups;for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){const ge=Ht[Yt],Vt=It[ge.materialIndex];Vt&&Vt.visible&&C.push(w,Bt,Vt,ft,Xt.z,ge,j)}}else It.visible&&C.push(w,Bt,It,ft,Xt.z,null,j)}}const Ut=w.children;for(let Bt=0,It=Ut.length;Bt<It;Bt++)_e(Ut[Bt],j,ft,ot)}function Pe(w,j,ft,ot){const{opaque:lt,transmissive:Ut,transparent:Bt}=w;L.setupLightsView(ft),vt===!0&&U.setGlobalState(k.clippingPlanes,ft),ot&&v.viewport(nt.copy(ot)),lt.length>0&&gi(lt,j,ft),Ut.length>0&&gi(Ut,j,ft),Bt.length>0&&gi(Bt,j,ft),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function jn(w,j,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ot.id]===void 0){const Vt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ot.id]=new Fn(1,1,{generateMipmaps:!0,type:Vt?Kn:Mn,minFilter:$i,samples:Math.max(4,O.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}const Ut=L.state.transmissionRenderTarget[ot.id],Bt=ot.viewport||nt;Ut.setSize(Bt.z*k.transmissionResolutionScale,Bt.w*k.transmissionResolutionScale);const It=k.getRenderTarget(),Ht=k.getActiveCubeFace(),Yt=k.getActiveMipmapLevel();k.setRenderTarget(Ut),k.getClearColor(qt),$t=k.getClearAlpha(),$t<1&&k.setClearColor(16777215,.5),k.clear(),Jt&&z.render(ft);const ue=k.toneMapping;k.toneMapping=Yn;const ge=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),L.setupLightsView(ot),vt===!0&&U.setGlobalState(k.clippingPlanes,ot),gi(w,ft,ot),ht.updateMultisampleRenderTarget(Ut),ht.updateRenderTargetMipmap(Ut),re.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let be=0,ze=j.length;be<ze;be++){const Ue=j[be],{object:Re,geometry:tn,material:Ot,group:on}=Ue;if(Ot.side===Wn&&Re.layers.test(ot.layers)){const Se=Ot.side;Ot.side=dn,Ot.needsUpdate=!0,Bi(Re,ft,ot,tn,Ot,on),Ot.side=Se,Ot.needsUpdate=!0,Vt=!0}}Vt===!0&&(ht.updateMultisampleRenderTarget(Ut),ht.updateRenderTargetMipmap(Ut))}k.setRenderTarget(It,Ht,Yt),k.setClearColor(qt,$t),ge!==void 0&&(ot.viewport=ge),k.toneMapping=ue}function gi(w,j,ft){const ot=j.isScene===!0?j.overrideMaterial:null;for(let lt=0,Ut=w.length;lt<Ut;lt++){const Bt=w[lt],{object:It,geometry:Ht,group:Yt}=Bt;let ue=Bt.material;ue.allowOverride===!0&&ot!==null&&(ue=ot),It.layers.test(ft.layers)&&Bi(It,j,ft,Ht,ue,Yt)}}function Bi(w,j,ft,ot,lt,Ut){Z!==null&&lt.isNodeMaterial&&Z.setObject(w,lt),w.onBeforeRender(k,j,ft,ot,lt,Ut),w.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),lt.onBeforeRender(k,j,ft,ot,w,Ut),lt.transparent===!0&&lt.side===Wn&&lt.forceSinglePass===!1?(lt.side=dn,lt.needsUpdate=!0,k.renderBufferDirect(ft,j,ot,lt,w,Ut),lt.side=Ni,lt.needsUpdate=!0,k.renderBufferDirect(ft,j,ot,lt,w,Ut),lt.side=Wn):k.renderBufferDirect(ft,j,ot,lt,w,Ut),w.onAfterRender(k,j,ft,ot,lt,Ut)}function _i(w,j,ft){j.isScene!==!0&&(j=zt);const ot=at.get(w),lt=L.state.lights,Ut=L.state.shadowsArray,Bt=lt.state.version,It=Pt.getParameters(w,lt.state,Ut,j,ft,L.state.lightProbeGridArray),Ht=Pt.getProgramCacheKey(It);let Yt=ot.programs;ot.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?j.environment:null,ot.fog=j.fog;const ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ot.envMap=Mt.get(w.envMap||ot.environment,ue),ot.envMapRotation=ot.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",Qt),Yt=new Map,ot.programs=Yt);let ge=Yt.get(Ht);if(ge!==void 0){if(ot.currentProgram===ge&&ot.lightsStateVersion===Bt)return Wr(w,It),ge}else It.uniforms=Pt.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,ft,It),w.onBeforeCompile(It,k),ge=Pt.acquireProgram(It,Ht),Yt.set(Ht,ge),ot.uniforms=It.uniforms;const Vt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=U.uniform),Wr(w,It),ot.needsLights=xi(w),ot.lightsStateVersion=Bt,ot.needsLights&&(Vt.ambientLightColor.value=lt.state.ambient,Vt.lightProbe.value=lt.state.probe,Vt.sunLights.value=lt.state.sun,Vt.sunLightShadows.value=lt.state.sunShadow,Vt.directionalLights.value=lt.state.directional,Vt.directionalLightShadows.value=lt.state.directionalShadow,Vt.spotLights.value=lt.state.spot,Vt.spotLightShadows.value=lt.state.spotShadow,Vt.rectAreaLights.value=lt.state.rectArea,Vt.ltc_1.value=lt.state.rectAreaLTC1,Vt.ltc_2.value=lt.state.rectAreaLTC2,Vt.pointLights.value=lt.state.point,Vt.pointLightShadows.value=lt.state.pointShadow,Vt.hemisphereLights.value=lt.state.hemi,Vt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Vt.sunShadowCascade.value=lt.state.sunShadowCascade,Vt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Vt.spotLightMatrix.value=lt.state.spotLightMatrix,Vt.spotLightMap.value=lt.state.spotLightMap,Vt.pointShadowMatrix.value=lt.state.pointShadowMatrix),ot.lightProbeGrid=L.state.lightProbeGridArray.length>0,ot.currentProgram=ge,ot.uniformsList=null,ge}function Vr(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=ha.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Wr(w,j){const ft=at.get(w);ft.outputColorSpace=j.outputColorSpace,ft.batching=j.batching,ft.batchingColor=j.batchingColor,ft.instancing=j.instancing,ft.instancingColor=j.instancingColor,ft.instancingMorph=j.instancingMorph,ft.skinning=j.skinning,ft.morphTargets=j.morphTargets,ft.morphNormals=j.morphNormals,ft.morphColors=j.morphColors,ft.morphTargetsCount=j.morphTargetsCount,ft.numClippingPlanes=j.numClippingPlanes,ft.numIntersection=j.numClipIntersection,ft.vertexAlphas=j.vertexAlphas,ft.vertexTangents=j.vertexTangents,ft.toneMapping=j.toneMapping}function sr(w,j){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(j.matrixWorld);for(let ft=0,ot=w.length;ft<ot;ft++){const lt=w[ft];if(lt.texture!==null&&lt.boundingBox.containsPoint(M))return lt}return null}function Cs(w,j,ft,ot,lt){j.isScene!==!0&&(j=zt),ht.resetTextureUnits();const Ut=j.fog,Bt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?j.environment:null,It=gt===null?k.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ve.workingColorSpace,Ht=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Yt=Mt.get(ot.envMap||Bt,Ht),ue=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ge=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Vt=!!ft.morphAttributes.position,be=!!ft.morphAttributes.normal,ze=!!ft.morphAttributes.color;let Ue=Yn;ot.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ue=k.toneMapping);const Re=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tn=Re!==void 0?Re.length:0,Ot=at.get(ot),on=L.state.lights;if(vt===!0&&(bt===!0||w!==et)){const Le=w===et&&ot.id===st;U.setState(ot,w,Le)}let Se=!1;ot.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==on.state.version||Ot.outputColorSpace!==It||lt.isBatchedMesh&&Ot.batching===!1||!lt.isBatchedMesh&&Ot.batching===!0||lt.isBatchedMesh&&Ot.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Ot.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Ot.instancing===!1||!lt.isInstancedMesh&&Ot.instancing===!0||lt.isSkinnedMesh&&Ot.skinning===!1||!lt.isSkinnedMesh&&Ot.skinning===!0||lt.isInstancedMesh&&Ot.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Ot.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Ot.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Ot.instancingMorph===!1&&lt.morphTexture!==null||Ot.envMap!==Yt||ot.fog===!0&&Ot.fog!==Ut||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==U.numPlanes||Ot.numIntersection!==U.numIntersection)||Ot.vertexAlphas!==ue||Ot.vertexTangents!==ge||Ot.morphTargets!==Vt||Ot.morphNormals!==be||Ot.morphColors!==ze||Ot.toneMapping!==Ue||Ot.morphTargetsCount!==tn||!!Ot.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Ot.__version=ot.version);let Sn=Ot.currentProgram;Se===!0&&(Sn=_i(ot,j,lt),Z&&ot.isNodeMaterial&&Z.onUpdateProgram(ot,Sn,Ot));let On=!1,Mi=!1,ar=!1;const Ae=Sn.getUniforms(),Be=Ot.uniforms;if(v.useProgram(Sn.program)&&(On=!0,Mi=!0,ar=!0),ot.id!==st&&(st=ot.id,Mi=!0),Ot.needsLights){const Le=sr(L.state.lightProbeGridArray,lt);Ot.lightProbeGrid!==Le&&(Ot.lightProbeGrid=Le,Mi=!0)}if(On||et!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ae.setValue(q,"projectionMatrix",w.projectionMatrix),Ae.setValue(q,"viewMatrix",w.matrixWorldInverse);const yi=Ae.map.cameraPosition;yi!==void 0&&yi.setValue(q,Tt.setFromMatrixPosition(w.matrixWorld)),O.logarithmicDepthBuffer&&Ae.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ae.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,Mi=!0,ar=!0)}if(Ot.needsLights&&(on.state.sunShadowMap.length>0&&Ae.setValue(q,"sunShadowMap",on.state.sunShadowMap,ht),on.state.directionalShadowMap.length>0&&Ae.setValue(q,"directionalShadowMap",on.state.directionalShadowMap,ht),on.state.spotShadowMap.length>0&&Ae.setValue(q,"spotShadowMap",on.state.spotShadowMap,ht),on.state.pointShadowMap.length>0&&Ae.setValue(q,"pointShadowMap",on.state.pointShadowMap,ht)),lt.isSkinnedMesh){Ae.setOptional(q,lt,"bindMatrix"),Ae.setOptional(q,lt,"bindMatrixInverse");const Le=lt.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ae.setValue(q,"boneTexture",Le.boneTexture,ht))}lt.isBatchedMesh&&(Ae.setOptional(q,lt,"batchingTexture"),Ae.setValue(q,"batchingTexture",lt._matricesTexture,ht),Ae.setOptional(q,lt,"batchingIdTexture"),Ae.setValue(q,"batchingIdTexture",lt._indirectTexture,ht),Ae.setOptional(q,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Ae.setValue(q,"batchingColorTexture",lt._colorsTexture,ht));const Si=ft.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&A.update(lt,ft,Sn),(Mi||Ot.receiveShadow!==lt.receiveShadow)&&(Ot.receiveShadow=lt.receiveShadow,Ae.setValue(q,"receiveShadow",lt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&j.environment!==null&&(Be.envMapIntensity.value=j.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=K_()),Mi){if(Ae.setValue(q,"toneMappingExposure",k.toneMappingExposure),Ot.needsLights&&ti(Be,ar),Ut&&ot.fog===!0&&D.refreshFogUniforms(Be,Ut),D.refreshMaterialUniforms(Be,ot,_t,pt,L.state.transmissionRenderTarget[w.id]),Ot.needsLights&&Ot.lightProbeGrid){const Le=Ot.lightProbeGrid;Be.probesSH.value=Le.texture,Be.probesMin.value.copy(Le.boundingBox.min),Be.probesMax.value.copy(Le.boundingBox.max),Be.probesResolution.value.copy(Le.resolution)}ha.upload(q,Vr(Ot),Be,ht)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ha.upload(q,Vr(Ot),Be,ht),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ae.setValue(q,"center",lt.center),Ae.setValue(q,"modelViewMatrix",lt.modelViewMatrix),Ae.setValue(q,"normalMatrix",lt.normalMatrix),Ae.setValue(q,"modelMatrix",lt.matrixWorld),ot.uniformsGroups!==void 0){const Le=ot.uniformsGroups;for(let yi=0,or=Le.length;yi<or;yi++){const ec=Le[yi];B.update(ec,Sn),B.bind(ec,Sn)}}return Sn}function ti(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.sunLights.needsUpdate=j,w.sunLightShadows.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function xi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(w,j,ft){const ot=at.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),at.get(w.texture).__webglTexture=j,at.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ft=at.get(w);ft.__webglFramebuffer=j,ft.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,ft=0){gt=w,ct=j,rt=ft;let ot=null,lt=!1,Ut=!1;if(w){const It=at.get(w);if(It.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(q.FRAMEBUFFER,It.__webglFramebuffer),nt.copy(w.viewport),St.copy(w.scissor),yt=w.scissorTest,v.viewport(nt),v.scissor(St),v.setScissorTest(yt),st=-1;return}else if(It.__webglFramebuffer===void 0)ht.setupRenderTarget(w);else if(It.__hasExternalTextures)ht.rebindTextures(w,at.get(w.texture).__webglTexture,at.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ue=w.depthTexture;if(It.__boundDepthTexture!==ue){if(ue!==null&&at.has(ue)&&(w.width!==ue.image.width||w.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ut=!0);const Yt=at.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[j])?ot=Yt[j][ft]:ot=Yt[j],lt=!0):w.samples>0&&ht.useMultisampledRTT(w)===!1?ot=at.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?ot=Yt[ft]:ot=Yt,nt.copy(w.viewport),St.copy(w.scissor),yt=w.scissorTest}else nt.copy(Dt).multiplyScalar(_t).floor(),St.copy(te).multiplyScalar(_t).floor(),yt=ce;if(ft!==0&&(ot=K),v.bindFramebuffer(q.FRAMEBUFFER,ot)&&v.drawBuffers(w,ot),v.viewport(nt),v.scissor(St),v.setScissorTest(yt),lt){const It=at.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,ft)}else if(Ut){const It=j;for(let Ht=0;Ht<w.textures.length;Ht++){const Yt=at.get(w.textures[Ht]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ht,Yt.__webglTexture,ft,It)}}else if(w!==null&&ft!==0){const It=at.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,ft)}st=-1};function vi(w){const j=at.get(w);return(j.__readFormat!==w.format||j.__readType!==w.type)&&(j.__readFormat=w.format,j.__readType=w.type,j.__formatReadable=O.textureFormatReadable(w.format),j.__typeReadable=O.textureTypeReadable(w.type)),j}this.readRenderTargetPixels=function(w,j,ft,ot,lt,Ut,Bt,It=0){if(!(w&&w.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht){v.bindFramebuffer(q.FRAMEBUFFER,Ht);try{const Yt=w.textures[It],ue=Yt.format,ge=Yt.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It);const Vt=vi(Yt);if(Vt.__formatReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ot&&ft>=0&&ft<=w.height-lt&&q.readPixels(j,ft,ot,lt,J.convert(ue),J.convert(ge),Ut)}finally{const Yt=gt!==null?at.get(gt).__webglFramebuffer:null;v.bindFramebuffer(q.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(w,j,ft,ot,lt,Ut,Bt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht)if(j>=0&&j<=w.width-ot&&ft>=0&&ft<=w.height-lt){v.bindFramebuffer(q.FRAMEBUFFER,Ht);const Yt=w.textures[It],ue=Yt.format,ge=Yt.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It);const Vt=vi(Yt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,be),q.bufferData(q.PIXEL_PACK_BUFFER,Ut.byteLength,q.STREAM_READ),q.readPixels(j,ft,ot,lt,J.convert(ue),J.convert(ge),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const ze=gt!==null?at.get(gt).__webglFramebuffer:null;v.bindFramebuffer(q.FRAMEBUFFER,ze);const Ue=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await df(q,Ue,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,be),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ut),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(be),q.deleteSync(Ue),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ft=0){const ot=Math.pow(2,-ft),lt=Math.floor(w.image.width*ot),Ut=Math.floor(w.image.height*ot),Bt=j!==null?j.x:0,It=j!==null?j.y:0;ht.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,ft,0,0,Bt,It,lt,Ut),v.unbindTexture()},this.copyTextureToTexture=function(w,j,ft=null,ot=null,lt=0,Ut=0){let Bt,It,Ht,Yt,ue,ge,Vt,be,ze;const Ue=w.isCompressedTexture?w.mipmaps[Ut]:w.image;if(ft!==null)Bt=ft.max.x-ft.min.x,It=ft.max.y-ft.min.y,Ht=ft.isBox3?ft.max.z-ft.min.z:1,Yt=ft.min.x,ue=ft.min.y,ge=ft.isBox3?ft.min.z:0;else{const Be=Math.pow(2,-lt);Bt=Math.floor(Ue.width*Be),It=Math.floor(Ue.height*Be),w.isDataArrayTexture?Ht=Ue.depth:w.isData3DTexture?Ht=Math.floor(Ue.depth*Be):Ht=1,Yt=0,ue=0,ge=0}ot!==null?(Vt=ot.x,be=ot.y,ze=ot.z):(Vt=0,be=0,ze=0);const Re=J.convert(j.format),tn=J.convert(j.type);let Ot;j.isData3DTexture?(ht.setTexture3D(j,0),Ot=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ht.setTexture2DArray(j,0),Ot=q.TEXTURE_2D_ARRAY):(ht.setTexture2D(j,0),Ot=q.TEXTURE_2D),v.activeTexture(q.TEXTURE0),v.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),v.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),v.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const on=v.getParameter(q.UNPACK_ROW_LENGTH),Se=v.getParameter(q.UNPACK_IMAGE_HEIGHT),Sn=v.getParameter(q.UNPACK_SKIP_PIXELS),On=v.getParameter(q.UNPACK_SKIP_ROWS),Mi=v.getParameter(q.UNPACK_SKIP_IMAGES);v.pixelStorei(q.UNPACK_ROW_LENGTH,Ue.width),v.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ue.height),v.pixelStorei(q.UNPACK_SKIP_PIXELS,Yt),v.pixelStorei(q.UNPACK_SKIP_ROWS,ue),v.pixelStorei(q.UNPACK_SKIP_IMAGES,ge);const ar=w.isDataArrayTexture||w.isData3DTexture,Ae=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const Be=at.get(w),Si=at.get(j),Le=at.get(Be.__renderTarget),yi=at.get(Si.__renderTarget);v.bindFramebuffer(q.READ_FRAMEBUFFER,Le.__webglFramebuffer),v.bindFramebuffer(q.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let or=0;or<Ht;or++)ar&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,at.get(w).__webglTexture,lt,ge+or),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,at.get(j).__webglTexture,Ut,ze+or)),q.blitFramebuffer(Yt,ue,Bt,It,Vt,be,Bt,It,q.DEPTH_BUFFER_BIT,q.NEAREST);v.bindFramebuffer(q.READ_FRAMEBUFFER,null),v.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(lt!==0||w.isRenderTargetTexture||at.has(w)){const Be=at.get(w),Si=at.get(j);v.bindFramebuffer(q.READ_FRAMEBUFFER,X),v.bindFramebuffer(q.DRAW_FRAMEBUFFER,Y);for(let Le=0;Le<Ht;Le++)ar?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Be.__webglTexture,lt,ge+Le):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Be.__webglTexture,lt),Ae?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Si.__webglTexture,Ut,ze+Le):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Si.__webglTexture,Ut),lt!==0?q.blitFramebuffer(Yt,ue,Bt,It,Vt,be,Bt,It,q.COLOR_BUFFER_BIT,q.NEAREST):Ae?q.copyTexSubImage3D(Ot,Ut,Vt,be,ze+Le,Yt,ue,Bt,It):q.copyTexSubImage2D(Ot,Ut,Vt,be,Yt,ue,Bt,It);v.bindFramebuffer(q.READ_FRAMEBUFFER,null),v.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ae?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(Ot,Ut,Vt,be,ze,Bt,It,Ht,Re,tn,Ue.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Ot,Ut,Vt,be,ze,Bt,It,Ht,Re,Ue.data):q.texSubImage3D(Ot,Ut,Vt,be,ze,Bt,It,Ht,Re,tn,Ue):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ut,Vt,be,Bt,It,Re,tn,Ue.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ut,Vt,be,Ue.width,Ue.height,Re,Ue.data):q.texSubImage2D(q.TEXTURE_2D,Ut,Vt,be,Bt,It,Re,tn,Ue);v.pixelStorei(q.UNPACK_ROW_LENGTH,on),v.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Se),v.pixelStorei(q.UNPACK_SKIP_PIXELS,Sn),v.pixelStorei(q.UNPACK_SKIP_ROWS,On),v.pixelStorei(q.UNPACK_SKIP_IMAGES,Mi),Ut===0&&j.generateMipmaps&&q.generateMipmap(Ot),v.unbindTexture()},this.initRenderTarget=function(w){at.get(w).__webglFramebuffer===void 0&&ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ht.setTextureCube(w,0):w.isData3DTexture?ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ht.setTexture2DArray(w,0):ht.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){ct=0,rt=0,gt=null,v.reset(),E.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}const ns=new W;function bn(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;ns.copy(t),ns[n]=0,ns.normalize();const l=.5*a/(a+o),h=1-ns.angleTo(i)/c;return Math.sign(ns[e])===1?h*l:o/(a+o)+l+l*(1-h)}class Xl extends Oi{constructor(t=1,e=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new W,l=new W,h=new W(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,S=new W,g=.5/a;for(let p=0,R=0;p<d.length;p+=3,R+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*s,d[p+1]=h.y*Math.sign(c.y)+l.y*s,d[p+2]=h.z*Math.sign(c.z)+l.z*s,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/m)){case 0:S.set(1,0,0),f[R+0]=bn(S,l,"z","y",s,n),f[R+1]=1-bn(S,l,"y","z",s,e);break;case 1:S.set(-1,0,0),f[R+0]=1-bn(S,l,"z","y",s,n),f[R+1]=1-bn(S,l,"y","z",s,e);break;case 2:S.set(0,1,0),f[R+0]=1-bn(S,l,"x","z",s,t),f[R+1]=bn(S,l,"z","x",s,n);break;case 3:S.set(0,-1,0),f[R+0]=1-bn(S,l,"x","z",s,t),f[R+1]=1-bn(S,l,"z","x",s,n);break;case 4:S.set(0,0,1),f[R+0]=1-bn(S,l,"x","y",s,t),f[R+1]=1-bn(S,l,"y","x",s,e);break;case 5:S.set(0,0,-1),f[R+0]=bn(S,l,"x","y",s,t),f[R+1]=1-bn(S,l,"y","x",s,e);break}}static fromJSON(t){return new Xl(t.width,t.height,t.depth,t.segments,t.radius)}}function ql(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new We;let l=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(const h in s){const d=hu(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let S=0;S<a[h].length;++S)f.push(a[h][S][u]);const m=hu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function hu(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new Ke(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){const S=h.getComponent(u,m);o.setComponent(u+d,m,S)}}else a.set(h.array,c);c+=h.count*e}return r!==void 0&&(o.gpuType=r),o}function Th(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let R=0,P=o.length;R<P;R++){const M=o[R],C=i.attributes[M];c[M]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const L=i.morphAttributes[M];L&&(l[M]||(l[M]=[]),L.forEach((F,x)=>{const T=new F.array.constructor(F.count*F.itemSize);l[M][x]=new F.constructor(T,F.itemSize,F.normalized)}))}const f=t*.5,m=Math.log10(1/t),S=Math.pow(10,m),g=f*S;for(let R=0;R<s;R++){const P=n?n.getX(R):R;let M="";for(let C=0,L=o.length;C<L;C++){const F=o[C],x=i.getAttribute(F),T=x.itemSize;for(let k=0;k<T;k++)M+=`${Math.trunc(x[d[k]](P)*S+g)},`}if(M in e)h.push(e[M]);else{for(let C=0,L=o.length;C<L;C++){const F=o[C],x=i.getAttribute(F),T=i.morphAttributes[F],k=x.itemSize,V=c[F],Z=l[F];for(let K=0;K<k;K++){const X=d[K],Y=u[K];if(V[Y](a,x[X](P)),T)for(let ct=0,rt=T.length;ct<rt;ct++)Z[ct][Y](a,T[ct][X](P))}}e[M]=a,h.push(a),a++}}const p=i.clone();for(const R in i.attributes){const P=c[R];if(p.setAttribute(R,new P.constructor(P.array.slice(0,a*P.itemSize),P.itemSize,P.normalized)),R in l)for(let M=0;M<l[R].length;M++){const C=l[R][M];p.morphAttributes[R][M]=new C.constructor(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return p.setIndex(h),p}const Yl={sun:"#ffd49e",grass:"#86a35b",leaf:"#4c6b3d",earth:"#c49a6b",wood:"#8a5d3b",plaster:"#efe2c8",kawara:"#5d6d82",red:"#c64a32"},Hn=new Wt,fu=new Wt,Ah=i=>"#"+i.getHexString();function ae(i,t,e){return Hn.set(i),fu.set(t),Ah(Hn.lerp(fu,e))}function xn(i,t){return Hn.set(i),Hn.r=Math.min(1,Hn.r*t),Hn.g=Math.min(1,Hn.g*t),Hn.b=Math.min(1,Hn.b*t),Ah(Hn)}const Zt=Yl,b={...Zt,grassLight:ae(Zt.grass,Zt.plaster,.2),grassDark:xn(ae(Zt.grass,Zt.leaf,.45),.95),dryGrass:ae(Zt.grass,Zt.earth,.5),moss:ae(Zt.leaf,Zt.grass,.45),earthLight:ae(Zt.earth,Zt.plaster,.32),earthDark:xn(Zt.earth,.74),mud:xn(ae(Zt.earth,Zt.kawara,.3),.55),wetEarth:xn(ae(Zt.earth,Zt.kawara,.45),.62),forestFloor:xn(ae(Zt.leaf,Zt.earth,.25),.82),woodLight:ae(Zt.wood,Zt.earth,.5),woodDark:xn(Zt.wood,.62),woodPale:ae(Zt.wood,Zt.plaster,.45),stone:ae(Zt.kawara,Zt.plaster,.5),stoneLight:ae(Zt.kawara,Zt.plaster,.68),stoneDark:ae(Zt.kawara,Zt.plaster,.28),roof:Zt.kawara,roofDark:xn(Zt.kawara,.78),ink:xn(Zt.kawara,.36),cedar:xn(Zt.leaf,.82),leafLight:ae(Zt.leaf,Zt.grass,.55),hydrangeaBlue:ae(ae(Zt.kawara,"#8f86e0",.6),Zt.plaster,.22),hydrangeaPink:ae(Zt.red,Zt.plaster,.42),rust:ae(Zt.red,Zt.wood,.55),redDark:xn(Zt.red,.72),paper:Zt.plaster,glow:ae(Zt.sun,Zt.plaster,.3),water:ae(ae(Zt.kawara,Zt.leaf,.22),Zt.plaster,.38),waterDeep:ae(Zt.kawara,Zt.leaf,.3),paddyWater:ae("#9db3d6",Zt.plaster,.28),ginger:ae(Zt.earth,Zt.red,.3),catWhite:ae(Zt.plaster,"#ffffff",.4),catGray:ae(Zt.kawara,Zt.plaster,.2),catBrown:xn(ae(Zt.wood,Zt.kawara,.18),.62),catBlack:xn(Zt.kawara,.3)},Je={fog:"#e3d4b8",skyFill:"#9db3d6",groundFill:"#7d7346",shadowTint:"#aeb0e2",outline:"#3a2d38",sunIntensity:2.05,fillIntensity:3,sunDir:new W(-.78,.42,.45).normalize()},As=new Map;for(const i of["wood","woodLight","woodDark","woodPale"])As.set(b[i],"wood");for(const i of["stone","stoneLight","stoneDark"])As.set(b[i],"stone");for(const i of["red","redDark","roof","roofDark","rust"])As.set(b[i],"paint");for(const i of["leaf","cedar","leafLight","grass","grassDark","moss","hydrangeaBlue","hydrangeaPink"])As.set(b[i],"leaf");const Q_=i=>As.get(i)||"plain";function j_(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Zl(i=1){const t=Math.imul(i,2654435761),e=(a,o)=>{let c=Math.imul(a,374761393)^Math.imul(o,668265263)^t;return c=Math.imul(c^c>>>13,1274126177),c^=c>>>16,(c>>>0)/4294967296},n=a=>a*a*(3-2*a);function r(a,o){const c=Math.floor(a),l=Math.floor(o),h=n(a-c),d=n(o-l),u=e(c,l),f=e(c+1,l),m=e(c,l+1),S=e(c+1,l+1);return u+(f-u)*h+(m-u)*d+(u-f-m+S)*h*d}function s(a,o,c=4){let l=.5,h=1,d=0,u=0;for(let f=0;f<c;f++)d+=l*r(a*h,o*h),u+=l,l*=.5,h*=2.03;return d/u}return{noise:r,fbm:s,hash:e}}function du({minX:i,maxX:t,minZ:e,maxZ:n},r,s,a=()=>!0,o=18,c=1/0){const l=r/Math.SQRT2,h=Math.ceil((t-i)/l),d=Math.ceil((n-e)/l),u=new Int32Array(h*d).fill(-1),f=[],m=[],S=(p,R)=>Math.floor((p-i)/l)+Math.floor((R-e)/l)*h,g=(p,R)=>{if(p<i||p>=t||R<e||R>=n)return!1;const P=Math.floor((p-i)/l),M=Math.floor((R-e)/l);for(let C=Math.max(0,M-2);C<=Math.min(d-1,M+2);C++)for(let L=Math.max(0,P-2);L<=Math.min(h-1,P+2);L++){const F=u[L+C*h];if(F>=0){const x=f[F][0]-p,T=f[F][1]-R;if(x*x+T*T<r*r)return!1}}return!0};for(let p=0;p<40&&f.length<c;p++){const R=i+s()*(t-i),P=e+s()*(n-e);g(R,P)&&(u[S(R,P)]=f.length,m.push(f.length),f.push([R,P]))}for(;m.length&&f.length<c;){const p=Math.floor(s()*m.length),[R,P]=f[m[p]];let M=!1;for(let C=0;C<o;C++){const L=s()*Math.PI*2,F=r*(1+s()),x=R+Math.cos(L)*F,T=P+Math.sin(L)*F;if(g(x,T)){u[S(x,T)]=f.length,m.push(f.length),f.push([x,T]),M=!0;break}}M||m.splice(p,1)}return f.filter(([p,R])=>a(p,R))}const pn={uTime:{value:0},uWind:{value:1},uShadowTint:{value:new Wt(Je.shadowTint)},uSunNorm:{value:Je.sunIntensity/Math.PI},uGlow:{value:1}},po={};function tx(i=!1){const t=i?"smooth":"bands";if(po[t])return po[t];const e=new Ol(new Uint8Array([88,150,210,255]),4,1,Ra);return e.minFilter=e.magFilter=i?je:$e,e.generateMipmaps=!1,e.needsUpdate=!0,po[t]=e,e}const pu=`
  uniform float uTime;
  uniform float uWind;
  vec2 windAt(vec3 wp, float bend) {
    float gust = 0.55 + 0.45 * sin(uTime * 0.6 + wp.x * 0.05 + wp.z * 0.04);
    float a = sin(uTime * 1.9 + wp.x * 0.42 + wp.z * 0.31);
    float b = sin(uTime * 3.1 + wp.x * 0.9 - wp.z * 0.7) * 0.35;
    return vec2(a + b, (a - b) * 0.45) * bend * gust * uWind;
  }
`;function Nr({color:i="#ffffff",vertexColors:t=!0,glow:e=!1,wind:n=null,side:r=Ni,smooth:s=!1}={}){const a=new Hd({color:i,vertexColors:t,gradientMap:tx(s),side:r});return a.onBeforeCompile=o=>{o.uniforms.uTime=pn.uTime,o.uniforms.uWind=pn.uWind,o.uniforms.uShadowTint=pn.uShadowTint,o.uniforms.uSunNorm=pn.uSunNorm,o.uniforms.uGlow=pn.uGlow;let c="",l="";e&&(c+=`attribute float aGlow;
varying float vGlow;
`,l+=`vGlow = aGlow;
`),n==="instanced"?(c+=pu,l+=`
        vec3 iwp = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float bend = position.y * position.y * 1.6;
        transformed.xz += windAt(iwp, bend) * 0.16;
      `):n==="attr"&&(c+=`attribute float aSway;
`+pu,l+=`
        if (aSway > 0.0) {
          vec3 swp = (modelMatrix * vec4(position, 1.0)).xyz;
          transformed.xz += windAt(swp * 0.35, aSway) * 0.06;
        }
      `),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
`+c).replace("#include <begin_vertex>",`#include <begin_vertex>
`+l),n==="instanced"&&(o.vertexShader=o.vertexShader.replace("#include <shadowmap_vertex>",`{ vec4 worldPosition = modelMatrix * instanceMatrix * vec4(0.0, 0.06, 0.0, 1.0);
#include <shadowmap_vertex>
}`)),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uShadowTint;
        uniform float uSunNorm;
        uniform float uGlow;
        ${e?"varying float vGlow;":""}`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        {
          // How much direct sun reaches this pixel (0 in cast shadow / far side)
          float base = max(dot(diffuseColor.rgb, vec3(0.3333)), 1e-3);
          float lit = clamp(dot(reflectedLight.directDiffuse, vec3(0.3333)) / (base * uSunNorm), 0.0, 1.0);
          // Shadows lean cool blue-violet instead of going gray
          reflectedLight.indirectDiffuse *= mix(uShadowTint * 1.08, vec3(1.0), smoothstep(0.05, 0.55, lit));
        }`),n==="instanced"&&(o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)),e&&(o.fragmentShader=o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
// after dark, paper windows and lanterns glow warm amber
totalEmissiveRadiance += mix(diffuseColor.rgb, vec3(1.0, 0.74, 0.42), clamp((uGlow - 1.0) * 0.45, 0.0, 0.65)) * vGlow * 1.35 * uGlow;`))},a.customProgramCacheKey=()=>`toon|${e}|${n}`,a}function Rh(i=.035){const t=new En({color:Je.outline,side:dn});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      transformed += normalize(normal) * ${i.toFixed(4)};`)},t.customProgramCacheKey=()=>`outline|${i}`,t}const mu=new Map;function rr(i,t={}){const e=i+JSON.stringify(t);let n=mu.get(e);return n||(n=Nr({color:i,vertexColors:!1,...t}),mu.set(e,n)),n}const gu=new Map;function Rs(i,t){let e=gu.get(i);return e||(e=t(),gu.set(i,e)),e}function Hr(i,t,e){return i.userData.swatch=t,e&&Object.assign(i.userData,e),i.castShadow=!0,i.receiveShadow=!0,i}function $(i,t,e,n,r=.1,s){const a=Math.min(r,i/2-.001,t/2-.001,e/2-.001),o=a>.06?2:1,c=Rs(`rb${i}|${t}|${e}|${a}|${o}`,()=>new Xl(i,t,e,o,Math.max(a,.001)));return Hr(new ye(c,rr(n)),n,s)}function le(i,t,e,n,r=10,s){const a=Rs(`cy${i}|${t}|${e}|${r}`,()=>new Ca(i,t,e,r));return Hr(new ye(a,rr(n)),n,s)}function Ge(i,t,e=1,n){const r=Rs(`ic${i}|${e}`,()=>new Ji(i,e));return Hr(new ye(r,rr(t)),t,n)}function Ln(i,t,e,n=8,r){const s=Rs(`co${i}|${t}|${n}`,()=>new zl(i,t,n));return Hr(new ye(s,rr(e)),e,r)}function mo(i,t,e){return Hr(new ye(i,rr(t)),t,e)}function Tr(i,t,e,n,{sag:r=.08,flare:s=.25,seg:a=16}={},o){const c=`bent${i}|${t}|${e}|${r}|${s}|${a}`,l=Rs(c,()=>{const h=new Oi(i,t,e,a,1,2),d=h.attributes.position;for(let u=0;u<d.count;u++){const f=2*d.getX(u)/i;d.setY(u,d.getY(u)-r*(1-f*f)+s*Math.pow(Math.abs(f),6))}return h.computeVertexNormals(),h});return Hr(new ye(l,rr(n)),n,o)}const kn={glow:1},Ri={sway:1},ai={sway:1,hang:1};function I(i,t,e=0,n=0,r=0,s=0,a=0,o=0){return t.position.set(e,n,r),t.rotation.set(a,s,o),i.add(t),t}function Wi(i,{width:t=512,height:e=256,bg:n=b.woodPale,fg:r="#4a2e18",font:s="DotGothic16",size:a=64,border:o=b.woodDark,align:c="center"}={}){const l=document.createElement("canvas");l.width=t,l.height=e;const h=l.getContext("2d");if(n){h.fillStyle=n,h.fillRect(0,0,t,e),h.globalAlpha=.1,h.strokeStyle=o,h.lineWidth=3;for(let S=18;S<e;S+=26)h.beginPath(),h.moveTo(0,S+Math.sin(S)*3),h.bezierCurveTo(t*.3,S-6,t*.6,S+6,t,S),h.stroke();h.globalAlpha=1,o&&(h.lineWidth=10,h.strokeRect(5,5,t-10,e-10))}h.fillStyle=r,h.textAlign=c,h.textBaseline="middle";const d=Array.isArray(i)?i:[i],u=a*1.15,f=e/2-(d.length-1)*u/2;d.forEach((S,g)=>{let p=a;for(h.font=`${p}px "${s}", sans-serif`;h.measureText(S).width>t-40&&p>12;)p-=2,h.font=`${p}px "${s}", sans-serif`;h.fillText(S,c==="center"?t/2:24,f+g*u)});const m=new Zi(l);return m.colorSpace=Ve,m.anisotropy=4,m}const _l=new Map,ex=new Wt("#f4efe4");function nx(i){for(const t of _l.values())t.color.copy(ex).multiplyScalar(i)}function Gn(i,t,e){let n=_l.get(e);n||(n=new En({map:e,color:"#f4efe4"}),_l.set(e,n));const r=new ye(new mi(i,t),n);return r.receiveShadow=!0,r.userData.textured=!0,r}const go=Zl(23),_u=Je.sunDir,ix=new Wt(b.moss),rx=new Wt(b.plaster);function sx(i,{groundAt:t,chunk:e=18,outline:n=!0}={}){i.updateMatrixWorld(!0);const r=new Map,s=[],a=new Wt,o=new Wt,c=new W,l=new W,h=new W,d=new se;i.traverse(g=>{if(!g.isMesh)return;if(g.userData.textured||g.userData.noBake){s.push(g);return}let p=g.geometry.index?g.geometry.toNonIndexed():g.geometry.clone();for(const gt of Object.keys(p.attributes))gt!=="position"&&gt!=="normal"&&p.deleteAttribute(gt);p.applyMatrix4(g.matrixWorld),d.getNormalMatrix(g.matrixWorld);const R=g.userData.swatch||"#"+g.material.color.getHexString();a.set(R);const P=Q_(R),M=g.userData.glow?1:0,C=g.userData.sway?1:0,L=g.userData.hang?1:0,F=p.attributes.position,x=p.attributes.normal,T=F.count,k=new Float32Array(T*3),V=new Float32Array(T).fill(M),Z=new Float32Array(T);p.computeBoundingBox(),p.boundingBox.getCenter(h);const K=t?t(h.x,h.z):0,X=p.boundingBox.min.y,Y=Math.max(.001,p.boundingBox.max.y-X),ct=(go.hash(Math.round(h.x*13),Math.round(h.z*7))-.5)*.08;for(let gt=0;gt<T;gt++){c.fromBufferAttribute(F,gt),l.fromBufferAttribute(x,gt),o.copy(a);const st=1+ct+(go.noise(c.x*1.9+c.y,c.z*1.9-c.y)-.5)*.1;o.multiplyScalar(st);const et=c.y-K;if(!M)if(o.multiplyScalar(1-.28*(1-Math.min(1,Math.max(0,et/.65)))),P==="wood")o.multiplyScalar(1-.18*(1-Math.min(1,Math.max(0,et/.9))));else if(P==="stone"){const nt=Math.min(1,Math.max(0,(go.noise(c.x*2.3,c.z*2.3+c.y)-.52)*4)),St=Math.max(l.y>.4?.85:0,et<.35?.7:0,l.dot(_u)<-.2?.55:0);o.lerp(ix,nt*St)}else P==="paint"&&o.lerp(rx,Math.max(0,l.dot(_u))*.16);k[gt*3]=o.r,k[gt*3+1]=o.g,k[gt*3+2]=o.b,L?Z[gt]=Math.pow((p.boundingBox.max.y-c.y)/Y,1.3)*(1.4+Y*1.6):C&&(Z[gt]=Math.pow((c.y-X)/Y,1.5)*(.6+Y*.3))}p.setAttribute("color",new Ke(k,3)),p.setAttribute("aGlow",new Ke(V,1)),p.setAttribute("aSway",new Ke(Z,1));const rt=`${Math.floor(h.x/e)}|${Math.floor(h.z/e)}`;r.has(rt)||r.set(rt,[]),r.get(rt).push(p)});const u=new fe;u.name="static-baked";const f=Nr({glow:!0,wind:"attr"}),m=n?Rh(.032):null;let S=0;for(const g of r.values()){const p=ql(g,!1);if(g.forEach(P=>P.dispose()),!p)continue;p.computeBoundingSphere(),S+=p.attributes.position.count;const R=new ye(p,f);if(R.castShadow=!0,R.receiveShadow=!0,u.add(R),m){const P=new We;P.setAttribute("position",p.attributes.position.clone());const M=Th(P,.001);M.computeVertexNormals();const C=new ye(M,m);C.castShadow=!1,C.receiveShadow=!1,u.add(C)}}for(const g of s){const p=g.matrixWorld.clone();g.parent.remove(g),p.decompose(g.position,g.quaternion,g.scale),u.add(g)}return u.userData.vertexCount=S,u}function xl(i,t=.03){const e=new We,n=i.geometry.index?i.geometry.toNonIndexed():i.geometry;e.setAttribute("position",n.attributes.position.clone());const r=Th(e,.001);r.computeVertexNormals();const s=new ye(r,Rh(t));return s.castShadow=!1,i.add(s),s}function Pi(i){i.updateMatrixWorld(!0);const t=new Ee().copy(i.matrixWorld).invert(),e=[],n=new Wt;return i.traverse(r=>{if(!r.isMesh||r===i)return;let s=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const o of Object.keys(s.attributes))o!=="position"&&o!=="normal"&&s.deleteAttribute(o);s.applyMatrix4(new Ee().multiplyMatrices(t,r.matrixWorld)),n.set(r.userData.swatch||"#"+r.material.color.getHexString());const a=new Float32Array(s.attributes.position.count*3);for(let o=0;o<a.length;o+=3)a[o]=n.r,a[o+1]=n.g,a[o+2]=n.b;s.setAttribute("color",new Ke(a,3)),e.push(s)}),ql(e,!1)}const _o={m:null};function Li(){return _o.m||(_o.m=Nr({vertexColors:!0})),_o.m}const ui=Zl(11),De=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Di=(i,t,e)=>i+(t-i)*e,hn={minX:-40,maxX:40,minZ:-30,maxZ:31},Qe={minX:-29.5,maxX:30.5,minZ:-20,maxZ:21.6},xu=-.42,vl=4.5,ax=1.45,Ml=[{id:"street",kind:"road",hw:ax,pts:[[-29,0],[31,0]]},{id:"plaza",kind:"road",hw:3.1,pts:[[0,1.2]]},{id:"road-n",kind:"road",hw:1.15,pts:[[0,1],[0,7.4]]},{id:"road-s",kind:"road",hw:1.15,pts:[[0,12.4],[.4,19],[.8,32]]},{id:"steps",kind:"steps",hw:1.05,pts:[[0,-1.6],[0,-15.3]]},{id:"post",kind:"path",hw:.85,pts:[[.3,17.6],[-4.8,17.8]]},{id:"commute",kind:"worn",hw:.5,pts:[[-10,-.55],[-4,-.35],[2,-.45],[6.3,-.6]]},{id:"porch",kind:"worn",hw:.55,pts:[[-10,-1.6],[-10,-2.2]]}],Xn={hw:1.4,pts:[[-44,10.6],[-20,9.5],[-8,10.6],[4,9.4],[16,10.5],[44,9.1]]},fn={x:0,hw:1.15,z0:7.2,z1:12.6,rise:.4},Lr=[{minX:-28.4,maxX:-24.6,minZ:-8.2,maxZ:-2.3,level:.5},{minX:-24.2,maxX:-20.4,minZ:-8.2,maxZ:-2.3,level:.36},{minX:-20,maxX:-16.2,minZ:-8.2,maxZ:-2.3,level:.22}],ba=.38,Ch=[{id:"house",minX:-15.2,maxX:-4.8,minZ:-9.4,maxZ:-1.6,h:.05},{id:"workshop",minX:3.4,maxX:12.8,minZ:-9.4,maxZ:-1.6,h:.04},{id:"hut",minX:13.2,maxX:17.4,minZ:-8.4,maxZ:-1.6,h:.05},{id:"post",minX:-10.4,maxX:-2.8,minZ:13.4,maxZ:19.2,h:.08},{id:"busstop",minX:2.2,maxX:6.8,minZ:15.4,maxZ:19.2,h:.05}],Dr={minX:17.6,maxX:30.2,minZ:-4.7,maxZ:-1.6,h:.22},He={minZ:-6.7,maxZ:-5,minX:15.2,maxX:31.4,h:.14};function Ea(i,t,e){if(e.length===1)return{d:Math.hypot(i-e[0][0],t-e[0][1])};let n=1/0;for(let r=0;r<e.length-1;r++){const[s,a]=e[r],[o,c]=e[r+1],l=o-s,h=c-a;let d=((i-s)*l+(t-a)*h)/(l*l+h*h);d=Math.max(0,Math.min(1,d));const u=i-(s+l*d),f=t-(a+h*d);n=Math.min(n,u*u+f*f)}return{d:Math.sqrt(n)}}const xo=(i,t,e,n=0)=>t>=i.minX-n&&t<=i.maxX+n&&e>=i.minZ-n&&e<=i.maxZ+n,vu=(i,t,e)=>Math.min(t-i.minX,i.maxX-t,e-i.minZ,i.maxZ-e),ox=i=>{const t=Math.min(1,Math.max(0,(-8.4-i)/6.4));return vl*(.6*t+.4*De(0,1,t))};function Es(i,t){const e={h:0,path:0,kind:null,stream:0,paddy:null,rim:0,platform:!1,track:!1,steps:0,plateau:0,pad:0};let n=(ui.fbm(i*.06,t*.06)-.5)*.4;const r=De(-8.6,-15,t);if(r>0){const d=(vl*r+r*(1-r)*2.6*(ui.fbm(i*.09+7,t*.09)-.5))/1.25,u=d-Math.floor(d);n+=1.25*(Math.floor(d)+De(.7,1,u))}const s=(1-De(7.5,9.5,Math.abs(i)))*De(-14.2,-15,t);if(s>0&&(n=Di(n,vl+(ui.noise(i*.4,t*.4)-.5)*.06,s)),e.plateau=s,i<-15.6&&i>-29&&t>-8.8&&t<-1.7){for(const h of Lr)if(xo(h,i,t)){const d=vu(h,i,t);d<ba?(e.paddy="bund",n=h.level+.15-d/ba*.04):(e.paddy="mud",n=h.level-.15);break}e.paddy||(n=Di(n,.4,.6))}for(const h of Ch)if(xo(h,i,t,1.2)){const d=De(-1.2,.3,vu(h,i,t));n=Di(n,h.h,d),e.pad=Math.max(e.pad,d)}for(const h of Ml){const{d}=Ea(i,t,h.pts);if(h.kind==="steps"){const f=1-De(h.hw+.25,h.hw+1.1,d);if(f>0){n=Di(n,ox(t),f);const m=1-De(h.hw-.1,h.hw+.3,d);t<-8.4?e.steps=Math.max(e.steps,m):m>e.path&&(e.path=m,e.kind="road")}continue}const u=1-De(h.hw,h.hw+.75,d);u>0&&(n=Di(n,n*.4-.03,u),u>e.path&&(e.path=u,e.kind=h.kind))}if(xo(Dr,i,t)&&(n=Dr.h,e.platform=!0),i>He.minX-.6&&i<He.maxX&&t>He.minZ-.6&&t<He.maxZ+.6){const h=1-De(0,.6,Math.max(He.minZ-t,t-He.maxZ,He.minX-i,0));n=Di(n,He.h,h),e.track=h>.5}const a=Math.max(Math.abs(i+.5)-30.5,-20-t,0),o=Math.max(t-21.6,0);if(a>0||o>0){const h=ui.fbm(i*.12+3,t*.12);n+=5*De(0,7,a)*(.75+h*.5)+1.3*De(0,5,o)*(.6+h*.8),e.rim=Math.max(a,o*.6)}const c=Ea(i,t,Xn.pts).d,l=1-De(Xn.hw-.3,Xn.hw+1,c);return l>0&&(n=Di(n,-1.05,l),e.stream=l),e.h=n,e}function hi(i,t){return Es(i,t).h}function _n(i,t){if(Math.abs(i-fn.x)<fn.hw+.3&&t>fn.z0&&t<fn.z1){const e=(t-fn.z0)/(fn.z1-fn.z0),n=Di(hi(i,fn.z0),hi(i,fn.z1),e);return Math.max(n,0)+.2+Math.sin(Math.PI*e)*fn.rise}return hi(i,t)}const zr=.5,ps=Math.round((Qe.maxX-Qe.minX)/zr)+1,Sl=Math.round((Qe.maxZ-Qe.minZ)/zr)+1;let wa=null;function lx(){wa=new Uint8Array(ps*Sl);const i=.3;for(let t=0;t<Sl;t++)for(let e=0;e<ps;e++){const n=Qe.minX+e*zr,r=Qe.minZ+t*zr,s=Es(n,r);let a=!s.paddy&&s.stream<.35&&!s.track&&s.rim===0;if(a){const o=hi(n+i,r)-hi(n-i,r),c=hi(n,r+i)-hi(n,r-i);a=Math.hypot(o,c)/(2*i)<.95}wa[e+t*ps]=a?1:0}}function vo(i,t){if(Math.abs(i-fn.x)<fn.hw&&t>fn.z0-.4&&t<fn.z1+.4)return!0;if(i<Qe.minX||i>Qe.maxX||t<Qe.minZ||t>Qe.maxZ)return!1;wa||lx();const e=Math.floor((i-Qe.minX)/zr),n=Math.floor((t-Qe.minZ)/zr);for(let r=n;r<=n+1;r++)for(let s=e;s<=e+1;s++)if(s<0||r<0||s>=ps||r>=Sl||!wa[s+r*ps])return!1;return!0}const rn=new Wt,vn=new Wt,yl=i=>new Wt(i),Ne=Object.fromEntries(["grass","grassLight","grassDark","dryGrass","moss","earth","earthLight","earthDark","mud","wetEarth","forestFloor","stone","stoneLight","stoneDark","plaster","kawara","leaf"].map(i=>[i,yl(b[i])]));function cx(i=[]){const e=Math.round((hn.maxX-hn.minX)/.4)+1,n=Math.round((hn.maxZ-hn.minZ)/.4)+1,r=new mi(hn.maxX-hn.minX,hn.maxZ-hn.minZ,e-1,n-1);r.rotateX(-Math.PI/2),r.translate((hn.minX+hn.maxX)/2,0,(hn.minZ+hn.maxZ)/2);const s=r.attributes.position,a=new Float32Array(s.count*3),o=new Array(s.count);for(let h=0;h<s.count;h++){const d=Es(s.getX(h),s.getZ(h));o[h]=d,s.setY(h,d.h)}r.computeVertexNormals();const c=r.attributes.normal,l=(h,d)=>{let u=0;for(const f of i){const m=h-f.x,S=d-f.z,g=m*m+S*S;g<f.r*f.r&&(u=Math.max(u,(1-Math.sqrt(g)/f.r)*(f.k??.35)))}return u};for(let h=0;h<s.count;h++){const d=s.getX(h),u=s.getZ(h),f=o[h],m=c.getY(h),S=ui.fbm(d*.18,u*.18),g=ui.fbm(d*.07+40,u*.07-12),p=ui.noise(d*1.7,u*1.7);rn.copy(Ne.grass).lerp(S>.5?Ne.grassLight:Ne.grassDark,Math.abs(S-.5)*1.6),rn.lerp(Ne.dryGrass,De(.6,.78,g)*.55);const R=Math.max(De(0,4,f.rim),De(-11,-18,u)*De(8,14,Math.abs(d))*.6);R>0&&rn.lerp(Ne.forestFloor,R*.85);const P=De(.82,.55,m);if(P>0&&!f.stream&&(vn.copy(Ne.stone).lerp(p>.5?Ne.stoneLight:Ne.stoneDark,Math.abs(p-.5)*1.4),vn.lerp(Ne.moss,De(.55,.8,ui.noise(d*.9+9,u*.9))*.7),rn.lerp(vn,P)),f.path>0){const C=De(.32,.6,f.path+(p-.5)*.5);f.kind==="worn"?vn.copy(Ne.earth).lerp(Ne.earthDark,.15+p*.2):vn.copy(Ne.earthLight).lerp(Ne.earth,.3+(p-.5)*.35+(1-De(.7,1,f.path))*.3),rn.lerp(vn,C)}f.steps>0&&rn.lerp(vn.copy(Ne.stone).lerp(Ne.stoneDark,p*.4),f.steps),f.plateau>.5&&f.path===0&&rn.lerp(vn.copy(Ne.earthLight).lerp(Ne.plaster,.25+p*.15),(f.plateau-.5)*1.6*De(6,4,Math.abs(d))),f.paddy==="mud"?rn.copy(Ne.mud):f.paddy==="bund"&&rn.lerp(Ne.grassDark,.5),f.platform&&rn.copy(Ne.stoneLight).lerp(Ne.plaster,.25+p*.1),f.track&&rn.copy(Ne.stoneDark).lerp(Ne.earthDark,.35+p*.3),f.stream>0&&rn.lerp(vn.copy(Ne.wetEarth).lerp(Ne.stoneDark,p*.5),De(0,.6,f.stream));const M=l(d,u);M>0&&rn.multiplyScalar(1-M),a[h*3]=rn.r,a[h*3+1]=rn.g,a[h*3+2]=rn.b}return r.setAttribute("color",new Ke(a,3)),r.deleteAttribute("uv"),r}function ux(i=[]){const t=[],e=(n,r,s)=>{const a=yl(r),o=yl(s??r),c=n.attributes.position,l=new Float32Array(c.count*3);for(let h=0;h<c.count;h++)vn.copy(a).lerp(o,ui.noise(c.getX(h)*.3,c.getZ(h)*.3)),l[h*3]=vn.r,l[h*3+1]=vn.g,l[h*3+2]=vn.b;return n.setAttribute("color",new Ke(l,3)),n.deleteAttribute("uv"),n};{const n=Xn.pts,r=[],s=[],a=Xn.hw+.55;let o=0;for(let l=0;l<n.length-1;l++){const[h,d]=n[l],[u,f]=n[l+1],m=Math.hypot(u-h,f-d),S=Math.ceil(m/.8);for(let g=0;g<=S;g++){if(l>0&&g===0)continue;const p=g/S,R=h+(u-h)*p,P=d+(f-d)*p,M=-(f-d)/m,C=(u-h)/m;if(r.push(R+M*a,xu,P+C*a,R-M*a,xu,P-C*a),o>0){const L=(o-1)*2;s.push(L,L+2,L+1,L+1,L+2,L+3)}o++}}const c=new We;c.setAttribute("position",new Ie(r,3)),c.setIndex(s),c.computeVertexNormals(),t.push(e(c.toNonIndexed(),b.water,b.waterDeep))}for(const n of Lr){const r=new mi(n.maxX-n.minX-ba*2+.1,n.maxZ-n.minZ-ba*2+.1,3,6).rotateX(-Math.PI/2);r.translate((n.minX+n.maxX)/2,n.level-.03,(n.minZ+n.maxZ)/2),t.push(e(r.toNonIndexed(),b.paddyWater,b.water))}for(const n of i){const r=new Ts(n.r,18).rotateX(-Math.PI/2);r.scale(1,1,n.sz??.7),r.translate(n.x,hi(n.x,n.z)+.035,n.z),t.push(e(r.toNonIndexed(),b.waterDeep,b.water))}return ql(t,!1)}const hx=[0,0],fx={street:[[-28,0],[30,0]],south:[[0,0],[0,7.2],[0,12.6],[.4,18.6]],steps:[[0,0],[0,-15.2]]};function Mu(i,t){let e=null;for(const[n,r]of Object.entries(fx))for(let s=0;s<r.length-1;s++){const[a,o]=r[s],[c,l]=r[s+1],h=c-a,d=l-o;let u=((i-a)*h+(t-o)*d)/(h*h+d*d);u=Math.max(0,Math.min(1,u));const f=a+h*u,m=o+d*u,S=Math.hypot(i-f,t-m);(!e||S<e.d)&&(e={name:n,x:f,z:m,d:S})}return e}function dx(i,t,e,n){const r=Mu(i,t),s=Mu(e,n),a=[];return r.d>.6&&a.push([r.x,r.z]),r.name!==s.name&&a.push(hx),a.push([s.x,s.z]),a.push([e,n]),a}const px="william.edwardo@gmail.com",os={email:`mailto:${px}`,linkedin:"https://www.linkedin.com/in/william-edwardo-gunawan/",github:"https://github.com/wiledw/",instagram:"https://www.instagram.com/wil_edw/"},Su={title:"William's House",kicker:"About",image:{src:"/img/profile.jpg",alt:"Portrait of William Edwardo Gunawan by a mountain lake"},pages:["Hi, I'm William Edwardo Gunawan, a Forward Deployed Engineer in Toronto.","I graduated from Toronto Metropolitan University with a Bachelor of Computer Science with Distinction, shipped at startups like Fiscal AI and Postilize, and build and run production software for clients.","I work directly with the teams who use what I build. Engineering is an act of trust."],list:{heading:"Three rules I work by",items:[["Start with the user, not the stack.","Their workflow decides the architecture, and the tools come after."],["Ship, then sharpen.","A working version in front of people beats a perfect plan nobody has seen."],["Own it after launch.","The job doesn't end at deploy. That's where people start depending on it."]]},more:{label:"Read the full About",href:"/#about"}},yu={title:"Post box",kicker:"Contact",pages:["Let's build something real. Pick a way to say hi."],actions:[{label:"Email me",href:os.email,primary:!0},{label:"LinkedIn",href:os.linkedin},{label:"GitHub",href:os.github},{label:"Instagram",href:os.instagram}]},bu={title:"Mochi the cat",kicker:"Off-screen",pages:["Mochi opens one eye. This stone has been warm since noon and she is not moving.","When William is not coding, he is into music, games, travel and food. Mochi is mostly into the food part."]},mx={title:"Kaya the cat",kicker:"Village patrol",pages:["Kaya, the white cat, walks the street between the house and the workshop all day, mostly to supervise.","Kaya decides you are worth following. Pet Kaya again if you would like some space."]},gx={title:"Anu the cat",kicker:"Village patrol",pages:["Anu, the brown cat, is never far from Kaya. Together they keep the street in order.","Anu trots along beside you now. Pet Anu again if you would like some space."]},Eu={title:"Kuro, station master",kicker:"Platform duty",pages:["Kuro has checked every stop on this line since 2020. Light the lanterns along the platform to read them, oldest first."]},wu={title:"Central Auto Sales",kicker:"Client · 2026 — Present",image:{src:"/img/centralautosales.png",alt:"Central Auto Sales logo",dark:!0},pages:["Production platform for a multi-location used car dealership. Searchable inventory, side-by-side comparison, an admin dashboard and a daily new-arrivals newsletter.","I'm the only engineer: I built it, ship its features, and stay on call."],tags:["Next.js","Supabase","Vercel"],actions:[{label:"Visit the live site",href:"https://www.central-autosales.com/",primary:!0}]},Mo=[{title:"Magic Quill",kicker:"Hackathon winner",image:{src:"/img/magicquil.PNG",alt:"Magic Quill wordmark",dark:!0},pages:["Real-time lecture transcription that turns speech, slides, diagrams and equations into clean, organized notes, exported as Markdown and PDF."],tags:["Next.js","Gemini","OCR","LaTeX"],actions:[{label:"See it on Devpost",href:"https://devpost.com/software/magic-quill",primary:!0}]},{title:"ALI",kicker:"Hack49 · Winner",image:{src:"/img/ali.png",alt:"ALI logo"},pages:["An AI companion app that screens for early signs of Alzheimer's through natural speech, while keeping elderly users company and less isolated."],tags:["React Native","FastAPI","PyTorch","Wav2Vec"],actions:[{label:"See it on DoraHacks",href:"https://dorahacks.io/buidl/17822",primary:!0}]},{title:"TrashCam",kicker:"HackTheValley 9 · Winner",image:{src:"/img/trashcam.png",alt:"TrashCam logo"},pages:["Real-time waste sorting through your camera. Object recognition with Google Cloud Vision and COCO-SSD tells you which bin each item belongs in."],tags:["Next.js","TypeScript","PostgreSQL","Gemini"],actions:[{label:"See it on Devpost",href:"https://devpost.com/software/trashcam-rwtjqn",primary:!0}]},{title:"SageAI",kicker:"GenAI Genesis (Google) · Winner",image:{src:"/img/sageai.jpeg",alt:"SageAI symptom analysis screen",cover:!0},pages:["An AI diagnostic tool that reads written symptoms with BERT and turns uploaded images into descriptions with Google Imagen, reaching over 90% accuracy across 41 diseases."],tags:["React","Node.js","PyTorch","Vertex AI","MongoDB"],actions:[{label:"See it on Devpost",href:"https://devpost.com/software/sageai",primary:!0}]}],Ci=[{title:"PT. Rapier Technology International",marker:"Rapier",kicker:"Software Engineer Intern · Jan 2020 — Apr 2022",pages:["Built and maintained RESTful APIs with Flask and front-end components with React, kept uploads secure with pre-signed S3 URLs, and set up a GitHub Actions pipeline that cut deployment friction by 40%."],tags:["Flask","React","AWS S3","GitHub Actions"],actions:[{label:"rapiertechnology.co.id",href:"https://rapiertechnology.co.id/"}]},{title:"Cove",marker:"Cove",kicker:"Full Stack Developer Intern · May 2023 — Aug 2023",pages:["Built a full-stack React and Node.js application, and added testing to the CI/CD pipeline with cross-functional teams, cutting deployment time by 50% and production issues by 20%."],tags:["React","Node.js","MongoDB","CI/CD"],actions:[{label:"cove.dev",href:"https://www.cove.dev/"}]},{title:"Esportium",marker:"Esportium",kicker:"Software Engineer Intern · May 2024 — Aug 2024",pages:["Helped build a full-stack platform on C#, ASP.NET, React and AWS RDS. Designed its REST API and ran weekly beta testing that halved average response time."],tags:["C#","ASP.NET","React","AWS RDS","xUnit"]},{title:"MedPass",marker:"MedPass",kicker:"Front-end Developer · Feb 2025 — May 2025",pages:["Turned Figma designs into scalable web applications, and set front-end testing standards that reached over 90% coverage on critical components."],tags:["React","Jest","React Testing Library","Figma"]},{title:"Fiscal AI",marker:"Fiscal AI",kicker:"Software Engineer · Apr 2025 — Jul 2025",pages:["Built a Python ETL pipeline over SEC EDGAR filings for 4,000+ U.S. companies and up to 40 years of history, with a chained Gemini pipeline reaching 98% extraction accuracy."],tags:["Python","Gemini","AWS Lambda","S3","Parquet"],actions:[{label:"fiscal.ai",href:"https://fiscal.ai/"}]},{title:"Postilize",marker:"Postilize",kicker:"Software Engineer II · Aug 2025 — Nov 2026 · Promoted Aug 2026",pages:["Raised the precision of AI-detected sales signals, reaching 95.7% on litigation filtering. Turned SEC filing extractions that ran for hours into 1.4 s or less, and cut timing-out feed searches for the largest customers from 43 s to about 14 s.","Built Strategy Shift, which compares consecutive quarterly SEC filings across 8,126 public issuers to catch strategy changes before they turn into legal work. It is well received by several of the top 100 U.S. law firms."],tags:["Node.js","MongoDB","BullMQ","Redis","OpenAI","Atlas Search"],actions:[{label:"postilize.com",href:"https://www.postilize.com/"}]},{title:"Central Auto Sales",marker:"Central Auto",kicker:"Full-Stack Engineer (Client) · Jan 2026 — Present",pages:["Sole engineer on the dealership's production website: searchable multi-location inventory, vehicle comparison, an admin dashboard, a daily newsletter, and on call for whatever comes up."],tags:["Next.js","TypeScript","Supabase","Vercel","Resend"],actions:[{label:"central-autosales.com",href:"https://www.central-autosales.com/"}]},{title:"Optimus SBR",marker:"Optimus SBR",kicker:"Forward Deployed Engineer · Nov 2026 — Present",pages:["Embedded with client teams to scope real problems on the ground, then build and ship the software that solves them."],actions:[{label:"optimussbr.com",href:"https://www.optimussbr.com/"}]}],So=[{title:"Languages",crop:"carrot",items:["TypeScript","JavaScript","Python","Java","SQL","C#"]},{title:"Frameworks",crop:"cabbage",items:["Next.js","React","Node.js","FastAPI","Django","TensorFlow"]},{title:"Platforms",crop:"sunflower",items:["AWS","Azure","GCP","Supabase","Docker","Redis","Claude"]}],Tu={title:"Notice board",kicker:"GitHub activity",pages:["Fresh from the village notice board: what William has been shipping on GitHub over the last 12 months."],actions:[{label:"@wiledw on GitHub",href:os.github,primary:!0}]},Au={title:"Bus stop",kicker:"Classic site",pages:["The bus back to the classic site comes whenever you want it. Everything in the village is written out in full there."],actions:[{label:"Take the bus back",href:"/",primary:!0,sameTab:!0}]},_x={title:"Welcome to the village",kicker:"William Edwardo Gunawan",pages:["Hi, I'm William! This little village is my portfolio. Cross the bridge to the plaza: everything is along one street from there.","West: my home and the rice paddies. East: the workshop and the station, one stop per job. Up the steps: my hackathon wins at the shrine. Or tap a place on the map to walk there."]},xx=["← Home · Rice paddies","↑ Shrine","Workshop · Station →"],sn=hi,Xi=Zl(5),oi=-1.05,Ru=1.6;function vx({reducedMotion:i=!1}={}){const t=new fe,e=new fe,n=[],r=[],s=[],a=[],o=[],c=j_(20261106),l=(D,y)=>D+c()*(y-D),h=(D,y,_)=>n.push({type:"circle",x:D,z:y,r:_}),d=(D,y,_,U)=>n.push({type:"box",minX:D,maxX:y,minZ:_,maxZ:U}),u=(D,y,_,U,G=.18)=>n.push({type:"seg",x1:D,z1:y,x2:_,z2:U,r:G}),f=(D,y,_,U=.32)=>r.push({x:D,z:y,r:_,k:U}),m=(D,y,_)=>s.push({x:D,z:y,r:_}),S=(D,y,_=0)=>s.some(U=>(D-U.x)**2+(y-U.z)**2<(U.r+_)**2),g=(D,y,_)=>Ml.some(U=>Ea(D,y,U.pts).d<U.hw+_);function p(D,y,_=0,U=t){const G=new fe;return G.position.set(D,sn(D,y),y),G.rotation.y=_,U.add(G),G}const R=(()=>{const D=document.createElement("canvas");D.width=D.height=64;const y=D.getContext("2d"),_=y.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(255,252,236,1)"),_.addColorStop(.25,"rgba(255,232,180,0.85)"),_.addColorStop(1,"rgba(255,220,150,0)"),y.fillStyle=_,y.fillRect(0,0,64,64),y.fillStyle="#fff",y.beginPath(),y.moveTo(32,2),y.quadraticCurveTo(35,29,62,32),y.quadraticCurveTo(35,35,32,62),y.quadraticCurveTo(29,35,2,32),y.quadraticCurveTo(29,29,32,2),y.fill();const U=new Zi(D);return U.colorSpace=Ve,U})(),P=new eh({map:R,transparent:!0,depthWrite:!1,fog:!1});function M({id:D,name:y,label:_,plateRange:U,verb:G="Look",x:z,z:A,sx:H,sz:N,height:J=2.4,radius:E=1.8,entry:B,counts:Q=!0,onInteract:ut,anchor:mt}){const Rt=mt||new W(z,_n(z,A),A),ne=mt?null:new W(H??z,_n(H??z,N??A),N??A),Qt=new Qf(P);Qt.scale.setScalar(.5),Qt.renderOrder=5,e.add(Qt);const Gt={id:D,name:y,label:_||y,plateRange:U,verb:G,pos:Rt,spot:ne,height:J,radius:E,entry:B,counts:Q,onInteract:ut,sparkle:Qt,discovered:!1,phase:c()*6};return a.push(Gt),Gt}o.push(({t:D})=>{for(const y of a){const _=y.sparkle;if(!_.visible)continue;const U=y.spot||y.pos;_.position.set(U.x,U.y+y.height+Math.sin(D*2.4+y.phase)*.12,U.z),_.scale.setScalar(.48+Math.sin(D*3+y.phase)*.07)}});function C(D,y,_=1){const U=p(D,y,l(-.1,.1));return I(U,$(.8*_,.2*_,.8*_,b.stoneDark,.06),0,.1*_,0),I(U,le(.13*_,.19*_,.75*_,b.stone,7),0,.57*_,0),I(U,$(.62*_,.14*_,.62*_,b.stone,.05),0,1*_,0),I(U,$(.42*_,.38*_,.42*_,b.glow,.05,kn),0,1.26*_,0),I(U,Ln(.6*_,.4*_,b.stone,4),0,1.65*_,0,Math.PI/4),I(U,Ge(.09*_,b.stoneDark,0),0,1.92*_,0),h(D,y,.45*_),f(D,y,.9*_,.25),m(D,y,.7),U}function L(D,y,_=1){const U=p(D,y,l(0,6.28));U.rotation.x=l(-.04,.04),U.rotation.z=l(-.04,.04);const G=1.5*_;I(U,le(.12*_,.24*_,G+2.6*_,b.woodDark,6),0,(G+2.6*_)/2,0);for(let z=0;z<4;z++){const A=1-z/4,H=(.55+.85*A)*_*l(.9,1.1),N=(1.3+.4*A)*_;I(U,Ln(H,N,z%2?b.cedar:b.leaf,7,Ri),l(-.08,.08)*_,G+z*_+N/2,l(-.08,.08)*_,l(0,3))}h(D,y,.35*_),f(D,y,1.5*_,.22),m(D,y,.6*_)}function F(D,y,_=1){const U=p(D,y,l(0,6.28));I(U,le(.15*_,.26*_,2*_,b.woodDark,7),0,1*_,0,0,l(-.08,.08),l(-.08,.08)),I(U,le(.07*_,.11*_,1.1*_,b.woodDark,6),.35*_,1.95*_,0,0,0,-.65),[[0,2.75,0,1.15],[.95,2.45,.25,.85],[-.85,2.5,.3,.9],[.2,2.5,-.85,.85],[-.25,3.4,.1,.75],[.55,3.15,.55,.6]].forEach(([z,A,H,N],J)=>{const E=Ge(N*_*l(.88,1.12),J%3===1?b.leafLight:b.leaf,1,Ri);E.scale.y=l(.78,.95),I(U,E,z*_,A*_,H*_,l(0,3))}),h(D,y,.35*_),f(D,y,2.2*_,.3),m(D,y,.8*_)}function x(D,y,_=1){const U=p(D,y,l(0,6.28));I(U,Ge(.55*_,b.leaf,1,Ri),0,.38*_,0).scale.y=.75;const G=4+Math.floor(c()*3),z=c()>.6;for(let A=0;A<G;A++){const H=A/G*Math.PI*2+l(-.3,.3),N=z?A%2?b.hydrangeaPink:ae(b.hydrangeaPink,b.plaster,.3):A%2?b.hydrangeaBlue:ae(b.hydrangeaBlue,b.hydrangeaPink,.35);I(U,Ge(l(.18,.24)*_,N,1,Ri),Math.cos(H)*.38*_,l(.55,.75)*_,Math.sin(H)*.38*_)}h(D,y,.5*_),f(D,y,.9*_,.22),m(D,y,.7*_)}function T(D,y,_=1){const U=p(D,y,l(0,6.28));I(U,Ge(.62*_,b.leaf,1,Ri),0,.42*_,0).scale.y=.72,I(U,Ge(.42*_,b.leafLight,1,Ri),.32*_,.6*_,.1*_).scale.y=.8,h(D,y,.55*_),f(D,y,1*_,.22),m(D,y,.7*_)}function k(D,y,_=1,U=!0){const G=p(D,y,l(0,6.28)),z=Ge(.5*_,c()>.5?b.stone:b.stoneDark,0);z.scale.set(l(.9,1.25),l(.45,.7),l(.8,1.05)),I(G,z,0,.12*_,0,0,l(-.2,.2),l(-.2,.2)),U&&_>.7&&h(D,y,.42*_),f(D,y,.8*_,.2),m(D,y,.55*_)}function V(D,y){const _=p(D,y),U=6+Math.floor(c()*4);for(let G=0;G<U;G++){const z=l(-.8,.8),A=l(-.8,.8),H=l(3.4,5.4),N=l(-.08,.08),J=l(-.08,.08);I(_,le(.07,.085,H,ae(b.grass,b.plaster,.15),6),z,H/2,A,0,N,J);for(let E=.8;E<H-.3;E+=l(.75,1))I(_,le(.09,.09,.05,b.moss,6),z-J*E,E,A+N*E);for(let E=0;E<3;E++)I(_,Ln(.32,.95,E%2?b.leafLight:b.grass,4,Ri),z+l(-.3,.3),H-l(.1,.9),A+l(-.3,.3),l(0,3),l(-.5,.5),l(-1.2,1.2))}h(D,y,.95),f(D,y,1.6,.25),m(D,y,1.2)}function Z(D,y,_,U){const G=Math.hypot(_-D,U-y),z=Math.max(1,Math.round(G/1.25)),A=Math.atan2(U-y,_-D);for(let H=0;H<=z;H++){const N=H/z,J=D+(_-D)*N,E=y+(U-y)*N,B=l(.85,1.05);I(t,$(.17,B,.17,b.wood,.05),J,sn(J,E)+B/2-.05,E,l(0,1),l(-.07,.07),l(-.07,.07))}for(const H of[.42,.78]){const N=sn(D,y)+H+l(-.04,.04),J=sn(_,U)+H+l(-.04,.04);I(t,$(G+.1,.1,.07,b.woodLight,.03),(D+_)/2,(N+J)/2,(y+U)/2,-A,0,Math.atan2(J-N,G))}u(D,y,_,U,.2)}function K(D,y){const _=p(D,y);I(_,$(.16,2.2,.16,b.woodDark,.04),0,1.1,0,0,l(-.03,.03),l(-.03,.03)),I(_,$(.7,.1,.12,b.woodDark,.03),.22,2.15,0),I(_,$(.3,.42,.3,b.paper,.05,kn),.48,1.85,0),I(_,$(.38,.08,.38,b.ink,.03),.48,2.08,0),h(D,y,.2),f(D,y,.6,.2)}function X(D,y,_,{ry:U=0,w:G=1.8,h:z=.75,y:A=1.3,arrow:H=0}={}){const N=p(D,y,U);I(N,$(.15,A+z/2,.15,b.woodDark,.04),0,(A+z/2)/2,-.14,0,0,l(-.03,.03)),I(N,$(G,z,.12,b.woodPale,.06),H*.12,A,0),H&&I(N,Ln(z*.6,.4,b.woodPale,4),H*(G/2+.1),A,0,0,0,-H*Math.PI/2).scale.set(1,1,.22);const J=Wi(_,{width:512,height:Math.round(512*(z/G)),size:_.length>2?40:_.length>1?52:68});return I(N,Gn(G-.12,z-.1,J),H*.12,A,.065),h(D,y,.28),m(D,y,.6),N}function Y(D,y,_,{wall:U=b.plaster,roof:G=b.roof,wallH:z=2.6,pitch:A=.55,overhang:H=.6,sag:N=.07,flare:J=.22}={}){const E={sag:N,flare:J};I(D,$(y+.4,.5,_+.4,b.stone,.12),0,.25,0),I(D,$(y,z,_,U,.1),0,.5+z/2,0);for(const ne of[-1,1])for(const Qt of[-1,1])I(D,$(.26,z+.05,.26,b.woodDark,.06),ne*(y/2-.04),.5+z/2,Qt*(_/2-.04));I(D,$(y+.1,.2,_+.1,b.woodDark,.05),0,.5+z,0);const B=.5+z+.1,Q=B+_/2*Math.tan(A),ut=_/2/Math.cos(A)+H;for(const ne of[1,-1]){const Qt=new fe;I(Qt,Tr(y+H*2,.24,ut,G,E),0,0,0);const Gt=Math.max(3,Math.round(ut/.42));for(let oe=0;oe<Gt;oe++)I(Qt,Tr(y+H*2+.04,.09,.16,b.roofDark,E),0,.14,-ut/2+.3+oe*((ut-.45)/(Gt-1)));Qt.position.set(0,(Q+B)/2+.08-H/2*Math.sin(A),ne*_/4+ne*(H/2)*Math.cos(A)),Qt.rotation.x=ne*A,D.add(Qt)}I(D,Tr(y+H*2+.1,.26,.4,b.roofDark,E),0,Q+.28,0);for(const ne of[-1,1])I(D,$(.5,.42,.5,b.roofDark,.12),ne*(y/2+H),Q+.36+J,0,0,0,ne*-.2);const mt=new uh;mt.moveTo(-_/2,0),mt.lineTo(_/2,0),mt.lineTo(0,Q-B),mt.closePath();const Rt=new Vl(mt,{depth:.16,bevelEnabled:!1});for(const ne of[-1,1])I(D,mo(Rt,U),ne*(y/2)+(ne>0?0:.16),B-.02,0,-Math.PI/2);return{top:B,ridge:Q}}function ct(D,y,_,U,G=1.2,z=.9){I(D,$(G+.16,z+.16,.14,b.woodDark,.04),y,_,U),I(D,$(G,z,.1,b.paper,.03,kn),y,_,U+.04);for(let A=1;A<3;A++)I(D,$(.035,z,.12,b.woodDark,.01),y-G/2+G/3*A,_,U+.05);I(D,$(G,.035,.12,b.woodDark,.01),y,_,U+.05)}{const _=p(-10,-6.1);Y(_,9,5.4,{wallH:2.7});const U=2.75;I(_,$(9.4,.14,1.1,b.woodLight,.04),0,.72,U+.5);for(const z of[-4.4,-1.5,1.5,4.4])I(_,$(.14,.7,.14,b.woodDark,.04),z,.35,U+.95);I(_,$(1.8,2.15,.14,b.woodDark,.05),0,1.75,U),I(_,$(1.56,1.95,.1,b.paper,.03,kn),0,1.75,U+.05);for(let z=1;z<4;z++)I(_,$(.035,1.95,.12,b.woodDark,.01),-.78+z*.39,1.75,U+.06);for(let z=1;z<4;z++)I(_,$(1.56,.035,.12,b.woodDark,.01),0,.78+z*.49,U+.06);ct(_,-2.9,2,U),ct(_,2.9,2,U),I(_,$(1.3,.34,.7,b.stone,.1),0,.17,U+1.4);for(const z of[-.18,.18])I(_,$(.17,.05,.36,b.woodPale,.02),z,.36,U+1.38,z*.4),I(_,$(.12,.03,.03,b.red,.01),z,.4,U+1.3,z*.4);I(_,le(.07,.06,.12,b.plaster,10),2.2,.85,U+.45),I(_,le(.06,.06,.012,b.woodDark,10),2.2,.91,U+.45),I(_,$(.6,1.6,.6,b.stoneDark,.1),2.6,4.4,-1);const G=ae(b.kawara,b.ink,.45);I(_,le(.03,.03,1.8,b.woodDark,6),0,2.86,U+.18,0,0,Math.PI/2);for(const z of[-.56,0,.56])I(_,$(.52,.7,.03,G,.01,ai),z,2.5,U+.2,0,z*.08);I(_,le(.12,.12,.02,b.plaster,14),0,2.48,U+.225,0,Math.PI/2);for(const[z,A]of[[-1.15,1],[1.2,.8],[1.6,.65]])I(_,le(.2*A,.15*A,.3*A,ae(b.red,b.earth,.55),10),z,.15*A,U+1.45),I(_,Ge(.24*A,b.leafLight,1,Ri),z,.36*A,U+1.45);I(_,le(.035,.035,2.8,ae(b.grass,b.plaster,.3),6),-2.8,2.62,U+.88,0,0,Math.PI/2);for(const[z,A,H,N]of[[-3.95,.5,.62,b.plaster],[-3.3,.62,.5,b.hydrangeaBlue],[-2.55,.46,.7,ae(b.plaster,b.sun,.4)],[-1.9,.18,.28,b.ink],[-1.65,.18,.28,b.ink]])I(_,$(A,H,.025,N,.01,ai),z,2.6-H/2,U+.88),I(_,$(.05,.06,.05,b.woodLight,.01),z,2.62,U+.9);I(_,$(1.7,.08,1.05,ae(b.hydrangeaPink,b.plaster,.45),.03),3.3,.84,U+.5),I(_,$(1.7,.42,.06,ae(b.hydrangeaPink,b.plaster,.45),.03,ai),3.3,.62,U+1.02);{const z=new fe;I(z,le(.13,.15,.24,b.hydrangeaBlue,10),0,.12,0),I(z,le(.025,.035,.34,b.hydrangeaBlue,6),.18,.2,0,0,0,-.9),I(z,$(.03,.14,.2,b.hydrangeaBlue,.01),-.05,.3,0),I(_,z,2.2,0,U+1.55,.6)}I(_,le(.006,.006,.4,b.ink,4),-3.7,3,U+.75),I(_,Ge(.09,b.paddyWater,1,ai),-3.7,2.78,U+.75).scale.y=.8,I(_,$(.06,.22,.01,b.red,.005,ai),-3.7,2.55,U+.75),d(-10-4.9,-10+4.9,-6.1-3,-6.1+3.15),u(-10-4.6,-6.1+3.8,-10-.95,-6.1+3.8,.15),u(-10+.95,-6.1+3.8,-10+4.6,-6.1+3.8,.15),f(-10,-6.1,7,.3),m(-10,-6.1,6.2),M({id:"house",name:Su.title,label:"Home · About me",verb:"Knock",x:-10,z:oi,sz:-6.1+4.3,height:2,entry:Su})}{const _=p(8.2,-6.3),U=8,G=5;I(_,$(U+.4,.4,G+.4,b.stoneDark,.1),0,.2,0),I(_,$(U,2.8,.3,b.woodLight,.06),0,1.8,-G/2+.15);for(const E of[-1,1])I(_,$(.3,2.8,G,b.woodLight,.06),E*(U/2-.15),1.8,0);for(let E=0;E<7;E++)I(_,$(.05,2.7,.05,b.woodDark,.02),-U/2+.6+E*1.15,1.8,-G/2+.32);for(const E of[-1,0,1])I(_,$(.26,3,.26,b.woodDark,.06),E*(U/2-.13),1.9,G/2-.13);const z=new fe;I(z,$(U+1.1,.16,G+1,b.rust,.05),0,0,0);for(let E=0;E<14;E++)I(z,$(.08,.06,G+1,b.redDark,.02),-U/2-.4+E*.68,.1,0);z.position.set(0,3.45,0),z.rotation.x=.12,_.add(z),I(_,$(3.2,.14,.9,b.woodPale,.04),1.6,1,1.6);for(const E of[-1.4,1.4])I(_,$(.14,.95,.8,b.woodDark,.04),1.6+E,.48,1.6);I(_,$(.8,.46,.55,b.stone,.06),.8,1.3,1.55),I(_,$(.5,.3,.03,b.ink,.01,kn),.8,1.36,1.84),I(_,$(.6,.05,.25,b.ink,.02),2.3,1.1,1.7);for(let E=0;E<5;E++)I(_,$(.06,l(.45,.8),.05,E%2?b.stoneDark:b.woodDark,.02),-2.6+E*.4,2.2,-G/2+.36,0,0,l(-.2,.2));const A=Wi(["CENTRAL","AUTO SALES"],{width:512,height:220,size:70,bg:"#1d1b1c",fg:b.plaster,border:"#333"});for(const E of[-1.4,1.4])I(_,$(.1,.9,.1,b.woodDark,.03),E,3.45,G/2+.5);I(_,$(3.6,1.1,.14,b.woodDark,.06),0,4.05,G/2+.62),I(_,Gn(3.35,.92,A),0,4.05,G/2+.7),d(8.2-U/2-.3,8.2+U/2+.3,-6.3-G/2-.3,-6.3+G/2+.2),f(8.2,-6.3,6,.3),m(8.2,-6.3,5.4);const H=5.9,N=-2.75,J=p(H,N,.12);I(J,$(2.6,.58,1.36,b.red,.24),0,.8,0),I(J,$(1.45,.56,1.22,b.red,.22),-.2,1.33,0),I(J,$(1.32,.44,1.28,b.paddyWater,.14),-.2,1.34,0),I(J,$(2.64,.12,1.4,b.plaster,.05),0,.62,0);for(const[E,B]of[[-.88,-.7],[-.88,.7],[.88,-.7]])I(J,le(.29,.29,.22,b.ink,12),E,.48,B,0,Math.PI/2),I(J,$(.38,.22,.38,b.woodLight,.04),E,.12,B*.8);I(J,le(.29,.29,.22,b.ink,12),1.9,.12,.35,0,0,Math.PI/2),I(J,$(.38,.28,.38,b.woodLight,.04),.88,.14,.56),d(H-1.4,H+2.2,N-.75,N+.6);{const E=p(11,-2.75,.06);for(const mt of[-.7,.7]){I(E,$(.1,.12,.9,b.woodLight,.03),mt,.62,0);for(const Rt of[-.3,.3])I(E,$(.08,.66,.08,b.wood,.02),mt,.31,Rt,0,Rt*.5,0)}I(E,$(2.1,.06,.32,b.woodPale,.02),.1,.71,.05,.05),I(E,$(.5,.06,.3,b.woodPale,.02),1.4,.04,.45,.6),I(E,$(.34,.03,.06,b.stoneDark,.01),-.4,.76,.05),d(9.9,12.1,-3.35,-2.25);const B=p(3.95,-5.6,0);for(let mt=0;mt<6;mt++)I(B,$(.12,2.4-mt*.12,.2,mt%2?b.woodLight:b.wood,.03),mt%3*.14,1.15,-1+mt*.36,0,0,-.22);const Q=p(12.15,-3.35);I(Q,le(.32,.32,.9,b.rust,12),0,.45,0);for(const mt of[.25,.65])I(Q,le(.33,.33,.05,b.redDark,12),0,mt,0);h(12.15,-3.35,.38);const ut=p(8.5,-2.35,.3);I(ut,$(.62,.3,.32,b.red,.05),0,.15,0),I(ut,$(.4,.05,.05,b.ink,.02),0,.34,0)}f(H,N,2,.3),m(H,N,2),M({id:"central-auto",name:wu.title,label:"Workshop · Central Auto Sales",verb:"Check out the car",x:H+.4,z:oi,sx:H,sz:N,height:2.2,entry:wu})}{const y=sn(0,-3.5);for(const N of[-2.3,2.3])I(t,le(.22,.26,3.8,b.red,12),N,y+1.9,-3.5),I(t,le(.31,.31,.38,b.ink,12),N,y+.19,-3.5),h(N,-3.5,.38),f(N,-3.5,.9,.3);I(t,$(5.6,.26,.38,b.red,.06),0,y+3,-3.5),I(t,$(6.6,.32,.56,b.red,.08),0,y+3.72,-3.5),I(t,$(7.1,.2,.66,b.ink,.08),0,y+3.96,-3.5);for(const N of[-1,1])I(t,$(.9,.2,.66,b.ink,.08),N*3.65,y+4.06,-3.5,0,0,N*.2);I(t,$(.3,.7,.26,b.red,.05),0,y+3.38,-3.5);const _=Wi(["神社","shrine"],{width:256,height:384,bg:b.ink,fg:b.sun,size:64,border:b.ink});I(t,Gn(.26,.6,_),0,y+3.38,-3.5+.14);for(let N=-8.8;N>-14.9;N-=.6)I(t,$(2.2+l(-.1,.1),.16,.54,c()>.5?b.stone:b.stoneLight,.05),l(-.05,.05),sn(0,N)+.02,N,l(-.04,.04));for(const N of[-6.2,-10.4,-13.6])for(const J of[-1.95,1.95])C(J,N,.8);const U=-18.7,G=p(0,U);I(G,$(6.4,.7,4.6,b.stone,.12),0,.35,0),I(G,$(5,2.4,3.2,b.woodLight,.08),0,1.9,0);for(const N of[-2.4,-.8,.8,2.4])I(G,$(.24,2.5,.24,b.red,.05),N,1.95,1.65);const z=new fe,A={sag:.12,flare:.6};for(const N of[1,-1]){const J=I(z,new fe,0,0,N*1.25,0,N*.5);I(J,Tr(7.6,.26,3.4,b.roof,A),0,0,0);for(let E=0;E<6;E++)I(J,Tr(7.64,.08,.14,b.roofDark,A),0,.14,-1.45+E*.58)}I(z,Tr(7.8,.3,.4,b.roofDark,A),0,.82,0),z.position.y=3.65,G.add(z),I(G,$(.06,1.7,.06,b.red,.02,ai),0,2.05,2.1,0,0,.04),I(G,$(.06,1.7,.06,b.plaster,.02,ai),.05,2.05,2.1,0,0,-.04),I(G,Ge(.2,b.sun,1),0,2.95,2.1),I(G,le(.12,.12,4.6,b.woodPale,8),0,2.95,1.82,0,0,Math.PI/2);for(const N of[-1.4,0,1.4])I(G,$(.14,.45,.02,b.plaster,.01,ai),N,2.6,1.88);I(G,$(1.2,.5,.6,b.woodDark,.04),0,.95,2.5),d(-3.3,3.3,U-2.4,U+2.4),f(0,U,5,.3),m(0,U,4.6);const H=[-6.1,-4.3,4.3,6.1];for(const N of[-5.2,5.2]){const J=p(N,-16.4);for(const E of[-1.55,1.55])I(J,$(.14,2,.14,b.woodDark,.04),E,1,0);I(J,$(3.5,.12,.14,b.woodDark,.04),0,1.75,0),I(J,$(3.7,.12,.6,b.roof,.04),0,2.08,-.05,0,.1),I(J,$(3.7,.12,.6,b.roof,.04),0,2.08,.05,0,-.1),u(N-1.6,-16.4,N+1.6,-16.4,.18),f(N,-16.4,2,.22),m(N,-16.4,2)}Mo.forEach((N,J)=>{const E=H[J],B=p(E,-16.3);I(B,$(.02,.32,.02,b.red,.005),0,1.6,.09);const Q=l(-.05,.05);I(B,$(1.3,.86,.08,b.woodPale,.05),0,1.08,.1,0,0,Q),I(B,Ln(.74,.3,b.woodPale,4),0,1.65,.1).scale.set(.9,1,.1);const ut=Wi([N.title,"WIN"],{width:512,height:340,size:96,bg:b.woodPale,fg:"#3b2412",border:b.woodDark}),mt=I(B,Gn(1.2,.8,ut),0,1.08,.145);mt.rotation.z=Q,M({id:`hack-${J}`,name:N.title,label:`${N.title} · win`,plateRange:7,verb:"Read the plaque",x:E,z:-15.3,sz:-16.3,height:2.45,radius:1.3,entry:N})}),C(-2.4,-16,.85),C(2.4,-16,.85);for(const N of[-1,1]){const J=p(N*1.75,-14.6,N*-.35);I(J,$(.7,.42,.7,b.stoneDark,.08),0,.21,0),I(J,$(.42,.5,.52,b.stone,.16),0,.66,-.05),I(J,$(.42,.4,.4,b.stone,.15),0,1.05,.12),I(J,Ge(.24,b.stoneLight,1),0,1.13,.02).scale.set(1.15,.9,.8),I(J,$(.3,N>0?.12:.06,.08,b.ink,.02),0,.98,.33),I(J,$(.12,.28,.12,b.stone,.05),-.26,.34,.24),I(J,$(.12,.28,.12,b.stone,.05),.26,.34,.24),h(N*1.75,-14.6,.42)}}let rt=()=>{};const gt=[],st=new Float32Array(Ci.length),et=new Float32Array(Ci.length),nt=D=>et[D]=1;{const{minX:D,maxX:y,minZ:_,maxZ:U,h:G}=Dr;I(t,$(y-D,G+.3,.25,b.stone,.05),(D+y)/2,G/2-.15,_+.05),I(t,$(y-D-.2,.04,.3,ae(b.sun,b.earth,.25),.02),(D+y)/2,G+.01,_+.45);for(let E=D+.3;E<y;E+=1.6)I(t,$(.1,.8,.1,b.woodDark,.03),E,G+.4,_+.15);I(t,$(y-D,.08,.06,b.woodLight,.02),(D+y)/2,G+.72,_+.15),u(D,_+.15,y,_+.15,.15);for(let E=He.minX;E<He.maxX;E+=.72)I(t,$(.3,.1,2.2,b.woodDark,.03),E,sn(E,-5.85)+.04,-5.85+l(-.04,.04),l(-.03,.03));for(const E of[-6.5,-5.2]){const B=He.maxX-He.minX;I(t,$(B,.1,.08,b.stoneDark,.02),He.minX+B/2,He.h+.15,E)}I(t,$(.3,.7,1.8,b.red,.06),He.minX,.45,-5.85);{const E=He.maxX,B=new fe;B.position.set(E,0,-5.85),t.add(B),I(B,$(1.2,3.6,5.6,b.stone,.2),.3,1.6,0),I(B,$(.4,2.7,2.6,b.ink,.3),-.3,1.3,0),I(B,$(1.3,.4,5.9,b.stoneDark,.12),.25,3.45,0);for(const Q of[-1.6,1.6])I(B,$(.5,2.8,.5,b.stoneDark,.1),-.45,1.4,Q)}d(He.minX-.2,He.maxX+2,He.minZ-.2,He.maxZ+.2);const z=p(25.2,-5.85,Math.PI/2);z.position.y+=.2,I(z,$(2.2,1.2,6.2,b.plaster,.3),0,.95,0),I(z,$(2.25,1,6.25,ae(b.kawara,b.leaf,.35),.28),0,2,0),I(z,$(2.1,.22,6,b.stoneLight,.1),0,2.6,0);for(let E=0;E<4;E++)I(z,$(.06,.55,.9,b.paddyWater,.04,kn),1.12,2,-2.1+E*1.4);I(z,$(1.4,.5,.06,b.paddyWater,.04),0,2,-3.12);for(const E of[-.6,.6])I(z,$(.2,.12,.06,b.glow,.03,kn),E,1.3,-3.13);f(25.2,-5.85,3.4,.3);const A=15.3,H=-6,N=p(A,H);Y(N,3.4,3.2,{wallH:2.3,wall:b.woodPale}),I(N,$(1,1.9,.1,b.woodDark,.04),-.7,1.45,1.65),ct(N,.85,1.85,1.65,.9,.7);const J=Wi(["えき STATION"],{width:512,height:110,size:54,bg:b.plaster,fg:b.ink,border:b.ink});I(N,Gn(2.6,.56,J),0,3.15,1.75),d(A-1.9,A+1.9,H-1.8,H+1.75),f(A,H,3.2,.3),m(A,H,3);{const E=p(16.9,-3.35);I(E,$(.9,1.85,.7,b.plaster,.06),0,.93,0),I(E,$(.92,.22,.72,b.red,.05),0,1.78,0),I(E,$(.74,.86,.04,b.paper,.02,kn),0,1.22,.36);const B=[b.red,b.hydrangeaBlue,b.leafLight,b.sun,b.earth];for(let Qt=0;Qt<3;Qt++)for(let Gt=0;Gt<5;Gt++)I(E,$(.09,.18,.04,B[(Qt*2+Gt)%5],.02,kn),-.28+Gt*.14,1.48-Qt*.26,.385);I(E,$(.5,.14,.05,b.ink,.02),0,.42,.37),d(16.4,17.4,-3.75,-2.95),f(16.9,-3.35,1.1,.3);const Q=p(30,-2.4);I(Q,le(.06,.06,2.6,b.stoneDark,8),0,1.3,0);const ut=document.createElement("canvas");ut.width=ut.height=128;const mt=ut.getContext("2d");mt.fillStyle=b.plaster,mt.beginPath(),mt.arc(64,64,60,0,Math.PI*2),mt.fill(),mt.strokeStyle=b.ink,mt.lineWidth=6,mt.stroke();for(let Qt=0;Qt<12;Qt++){const Gt=Qt/12*Math.PI*2;mt.fillStyle=b.ink,mt.fillRect(64+Math.cos(Gt)*48-3,64+Math.sin(Gt)*48-3,6,6)}const Rt=mt.getImageData(0,0,128,128),ne=new Zi(ut);ne.colorSpace=Ve,rt=(Qt,Gt)=>{mt.putImageData(Rt,0,0),mt.lineCap="round",mt.strokeStyle=b.ink;const oe=(Qt%12+Gt/60)/12*Math.PI*2-Math.PI/2,Ce=Gt/60*Math.PI*2-Math.PI/2;mt.lineWidth=8,mt.beginPath(),mt.moveTo(64,64),mt.lineTo(64+Math.cos(oe)*30,64+Math.sin(oe)*30),mt.stroke(),mt.lineWidth=5,mt.beginPath(),mt.moveTo(64,64),mt.lineTo(64+Math.cos(Ce)*46,64+Math.sin(Ce)*46),mt.stroke(),mt.fillStyle=b.red,mt.beginPath(),mt.arc(64,64,6,0,Math.PI*2),mt.fill(),ne.needsUpdate=!0},rt(17,10),I(Q,le(.36,.36,.12,b.ink,18),0,2.6,0,0,Math.PI/2),I(Q,Gn(.62,.62,ne),0,2.6,.065),h(30,-2.4,.2)}Ci.forEach((E,B)=>{var pe;const Q=18.8+B*1.55,ut=-2.45,mt=p(Q,ut);mt.position.y=Dr.h;for(const kt of[-.6,.6])I(mt,$(.08,1.55,.08,b.stoneDark,.02),kt,.78,-.04);I(mt,$(1.38,.8,.08,b.plaster,.03),0,1.25,0),I(mt,$(.3,.16,.24,b.ink,.03),0,1.78,0),I(mt,$(.22,.18,.18,b.glow,.03,kn),0,1.64,0),gt.push({x:Q,y:Dr.h+1.64,z:ut});const Rt=((pe=E.kicker.match(/(\d{4})/))==null?void 0:pe[1])??"",ne=B>0?Ci[B-1].marker:"start",Qt=B<Ci.length-1?Ci[B+1].marker:"today",Gt=document.createElement("canvas");Gt.width=420,Gt.height=240;const oe=Gt.getContext("2d");oe.fillStyle=b.plaster,oe.fillRect(0,0,420,240),oe.fillStyle=b.ink,oe.textAlign="center";let Ce=64;for(oe.font=`${Ce}px "DotGothic16"`;oe.measureText(E.marker).width>390&&Ce>26;)oe.font=`${Ce-=2}px "DotGothic16"`;oe.fillText(E.marker,210,92),oe.fillStyle=b.red,oe.fillRect(16,122,388,10),oe.fillStyle=b.ink,oe.font='30px "DotGothic16"',oe.textAlign="left",oe.fillText("← "+ne,18,178),oe.textAlign="right",oe.fillText(Qt+" →",402,178),oe.textAlign="center",oe.font='32px "DotGothic16"',oe.fillText(Rt,210,222);const Ft=new Zi(Gt);Ft.colorSpace=Ve,Ft.anisotropy=4,I(mt,Gn(1.3,.74,Ft),0,1.25,.045),u(Q-.65,ut,Q+.65,ut,.1);const de=M({id:`career-${B}`,name:`${E.title}`,label:`${E.marker} · ${Rt}`,plateRange:5,verb:"Read the stop",x:Q,z:oi,sx:Q,sz:ut,height:1.95,radius:1.35,entry:E,onInteract:()=>nt(B)});de.light=()=>nt(B)})}Lr.forEach((D,y)=>{const _=So[y],U=(D.minX+D.maxX)/2,G=X(U,-1.95,[_.title],{w:2.4,h:.78,y:1.05});G.position.y=Math.max(G.position.y,0),M({id:`skill-${y}`,name:_.title,label:`${_.title} · skills`,verb:"Read the sign",x:U,z:oi+.1,sz:-1.95,height:1.75,radius:1.7,entry:{title:`${_.title} paddy`,kicker:"Rice terraces",pages:[`Growing well in this paddy: ${_.items.join(", ")}.`],tags:_.items}})});{const D=p(-22.3,-6.4);D.position.y=Lr[1].level-.1,I(D,$(.1,2,.1,b.woodDark,.03),0,1,0),I(D,$(1.5,.08,.08,b.woodDark,.03),0,1.45,0),I(D,$(.7,.72,.36,b.hydrangeaBlue,.12),0,1.35,0),I(D,Ge(.28,b.plaster,1),0,2.05,0),I(D,Ln(.6,.3,b.dryGrass,10),0,2.32,0)}Z(-15.7,-2.4,-15.7,-8.8),X(-3.9,3.5,xx,{w:2.5,h:1.2,y:1.15});function St(D,y){const _=D.getContext("2d");if(_.fillStyle=b.plaster,_.fillRect(0,0,D.width,D.height),_.fillStyle="#4a2e18",_.font='40px "DotGothic16", sans-serif',_.textAlign="left",_.textBaseline="top",_.fillText("GitHub · last year",28,22),!y){_.font='30px "DotGothic16", sans-serif',_.fillText("Loading the latest…",28,120);return}_.font='56px "DotGothic16", sans-serif';const U=y.total.toLocaleString("en-CA");_.fillText(U,28,74);const G=_.measureText(U).width;_.font='28px "DotGothic16", sans-serif',_.fillText("contributions",44+G,98);const z=y.days.slice(-26*7),A=[ae(b.plaster,b.earth,.3),ae(b.grass,b.plaster,.45),b.grass,b.leafLight,b.leaf];z.forEach((H,N)=>{_.fillStyle=A[Math.max(0,Math.min(4,H.level))],_.fillRect(58+Math.floor(N/7)*21,188+N%7*21,17,17)}),_.fillStyle=b.red,_.beginPath(),_.arc(D.width/2,14,9,0,Math.PI*2),_.fill()}{const _=p(3.9,3.7);for(const A of[-1.1,1.1])I(_,$(.18,2.2,.18,b.woodDark,.05),A,1.1,0);I(_,$(2.5,1.5,.14,b.wood,.06),0,1.4,0),I(_,$(2.8,.2,.5,b.roof,.06),0,2.32,0);const U=document.createElement("canvas");U.width=640,U.height=384;const G=new Zi(U);G.colorSpace=Ve,G.anisotropy=4,I(_,Gn(2.3,1.38,G),0,1.4,.075),u(3.9-1.2,3.7,3.9+1.2,3.7,.2),f(3.9,3.7,1.6,.25),m(3.9,3.7,1.5),St(U,null),G.needsUpdate=!0;const z=M({id:"board",name:Tu.title,label:"GitHub activity",verb:"Read",x:3.9,z:Ru+.3,sz:3.7,height:2.75,radius:1.8,entry:Tu});z.setContributions=A=>{St(U,A),G.needsUpdate=!0}}{const _=p(-6.6,15.9);Y(_,6,4,{wallH:2.4});const U=2.05;I(_,$(1.4,2,.12,b.woodDark,.04),.9,1.5,U),I(_,$(1.2,1.8,.08,b.paddyWater,.03),.9,1.5,U+.04),ct(_,-1.6,1.9,U,1.4,.9),I(_,le(.03,.03,1.5,b.woodDark,6),.9,2.62,U+.16,0,0,Math.PI/2);for(const H of[-.34,.34])I(_,$(.62,.55,.03,b.red,.01,ai),.9+H,2.32,U+.18);{const H=p(-3.6,16.9);I(H,le(.04,.04,2.4,b.woodDark,6),0,1.2,0),I(H,$(.42,1.4,.03,b.red,.01),.24,1.55,0);const N=Wi(["〒","P","O","S","T"],{width:128,height:448,size:72,bg:b.red,fg:b.plaster,border:null});I(H,Gn(.38,1.33,N),.24,1.55,.02),h(-3.6,16.9,.12)}d(-6.6-3.3,-6.6+3.3,15.9-2.3,15.9+2.2),f(-6.6,15.9,4.8,.3),m(-6.6,15.9,4.4);const G=-2.5,z=18.9,A=p(G,z);I(A,$(.62,.18,.62,b.stoneDark,.05),0,.09,0),I(A,le(.32,.32,1.2,b.red,16),0,.78,0),I(A,Ge(.33,b.red,2),0,1.38,0).scale.y=.55,I(A,$(.42,.06,.08,b.ink,.02),0,1.15,.3),I(A,$(.26,.2,.04,b.plaster,.02),0,.82,.32),h(G,z,.42),f(G,z,.8,.3),m(G,z,.8),M({id:"mailbox",name:yu.title,label:"Post box · Contact",verb:"Post a letter",x:G,z:z-.9,sz:z,height:1.95,radius:1.6,entry:yu})}{const _=p(4.6,17.6,-.05);for(const H of[-1.3,1.3])I(_,$(.14,2.3,.14,b.woodDark,.04),H,1.15,-.5);I(_,$(3.1,2.1,.1,b.woodPale,.03),0,1.25,-.75),I(_,$(3.3,.16,1.5,b.roof,.05),0,2.35,-.2,0,.12),I(_,$(2.4,.1,.5,b.woodLight,.03),0,.5,-.42);for(const H of[-1,1])I(_,$(.1,.48,.4,b.woodDark,.02),H,.24,-.42);d(4.6-1.5,4.6+1.5,17.6-1,17.6-.1),f(4.6,17.6,2.2,.25),m(4.6,17.6,2);const U=2.2,G=16.6,z=p(U,G);I(z,le(.05,.05,2.2,b.stoneDark,8),0,1.1,0),I(z,le(.46,.46,.05,b.red,20),0,2.2,-.03,0,Math.PI/2),I(z,$(.5,.36,.05,b.plaster,.02),0,1.5,.03);const A=Wi(["BUS","classic site"],{width:256,height:256,size:46,bg:b.plaster,fg:b.ink,border:null});I(z,Gn(.64,.64,A),0,2.2,.01),h(U,G,.2),M({id:"exit",name:Au.title,label:"Bus · back to the classic site",verb:"Wait for the bus",x:U-.6,z:G+.6,sx:U,sz:G,height:2.75,radius:1.6,entry:Au,counts:!1})}{const{z0:y,z1:_}=fn;for(let U=0;U<12;U++){const G=(U+.5)/12,z=y+(_-y)*G,A=_n(0,z-.2),H=_n(0,z+.2);I(t,$(2.7,.14,(_-y)/12-.04,U%2?b.woodLight:b.wood,.04),0,_n(0,z)-.08,z,0,-Math.atan2(H-A,.4))}for(const U of[-1.38,1.38]){for(let G=0;G<=4;G++){const z=y+(_-y)*G/4;I(t,$(.18,.95,.18,b.woodDark,.04),U,_n(0,Math.min(_-.01,Math.max(y+.01,z)))+.35,z)}for(let G=0;G<4;G++){const z=y+(_-y)*G/4,A=y+(_-y)*(G+1)/4,H=_n(0,Math.max(y+.01,z))+.78,N=_n(0,Math.min(_-.01,A))+.78;I(t,$(.1,.1,Math.hypot(A-z,N-H)+.1,b.woodLight,.03),U,(H+N)/2,(z+A)/2,0,-Math.atan2(N-H,A-z))}u(U,y-.2,U,_+.2,.22);for(const G of[8.8,11])I(t,le(.15,.17,1.6,b.woodDark,7),U,-.75,G)}}const yt=[{x:-13,z:4.5,r:.75,sz:.6}];{const _=p(-14.4,3.6);I(_,le(.85,.92,.8,b.stone,14),0,.4,0),I(_,le(.68,.68,.82,b.ink,14),0,.42,0);for(const U of[-.8,.8])I(_,$(.12,1.9,.12,b.woodDark,.03),U,1.25,0);I(_,$(2,.1,.9,b.roof,.04),0,2.2,.3,0,.3),I(_,$(2,.1,.9,b.roof,.04),0,2.2,-.3,0,-.3),I(_,le(.04,.04,1.6,b.woodLight,6),0,1.75,0,0,0,Math.PI/2),I(_,le(.17,.14,.26,b.wood,10),.98,.95,.3),h(-14.4,3.6,.95),f(-14.4,3.6,1.6,.3),m(-14.4,3.6,1.4),m(yt[0].x,yt[0].z,.9)}{const D=du({minX:hn.minX+1,maxX:hn.maxX-1,minZ:hn.minZ+1,maxZ:24},2.3,c,(y,_)=>{if(y>14&&_>-7.6&&_<-3.8||g(y,_,1.6)||S(y,_,.8))return!1;const U=Es(y,_);if(U.stream>0||U.paddy)return!1;const G=Math.max(Math.abs(y+.5)-29.8,-19.6-_),z=_<-9.6&&Math.abs(y)>9.2,A=_<-14.8&&Math.abs(y)>7.6;return G>0?Xi.noise(y*.3,_*.3)>.12:z||A?Xi.noise(y*.25,_*.25)>.36:!1});for(const[y,_]of D)L(y,_,l(.85,1.25))}for(const[D,y,_]of[[-20.5,4.6,1.05],[-26,6.6,1],[9.8,5,1],[16.2,5.6,1.1],[22.6,4.4,1],[27.8,6.2,1.1],[-6.4,6.8,.9],[-14,15.4,1],[11,15.8,1.1],[16.5,17.6,1],[-17,18,1.05],[7.6,19.6,.9]])F(D,y,_);for(const[D,y]of[[-15.2,-2.3],[-4.6,-2.4],[3.2,-2.3],[12.9,-2.6],[-1.8,6],[1.9,13.6],[-9.9,18.8],[-3.7,13.7],[8.2,3.6],[-8,6.2]])x(D,y,l(.85,1.1));for(const[D,y]of[[-13.2,-11.3],[-17.6,-10.6],[-21.4,-11.6],[11.4,-11]])V(D,y);for(const[D,y]of[[-11,7.6],[6,7.4],[12.5,7.8],[-19,7.2],[-25,8],[20,7.6],[26,7.4],[-1.9,21.4],[9.4,21],[-10,20.8]])T(D,y,l(.8,1.15));{const D=du({minX:-30,maxX:30,minZ:6,maxZ:15},1.5,c,(y,_)=>{const U=Ea(y,_,Xn.pts).d;return U>Xn.hw+.2&&U<Xn.hw+1.6&&Math.abs(y)>2.6&&!S(y,_,.2)});for(const[y,_]of D)k(y,_,l(.45,1),!1)}for(const D of[-24,-17.4,-6.2,6.4,12.6,19.6,26.6])K(D,2.15);for(const[D,y]of[[-1.7,5.4],[1.7,14.6]])K(D,y);function qt(D,y,_,{color:U=b.kawara,lean:G=0,basket:z=!0}={}){const A=p(D,y,_),H=new fe;H.rotation.z=G,A.add(H);const N=new ya(.33,.035,6,18);for(const E of[-.55,.55])I(H,mo(N,b.ink),E,.36,0),I(H,le(.03,.03,.1,b.stoneLight,6),E,.36,0,0,Math.PI/2);const J=(E,B,Q,ut)=>I(H,$(Math.hypot(Q-E,ut-B),.05,.05,U,.02),(E+Q)/2,(B+ut)/2,0,0,0,Math.atan2(ut-B,Q-E));J(-.55,.36,-.05,.4),J(-.05,.4,-.15,.8),J(-.15,.78,.4,.8),J(-.05,.4,.4,.8),J(.4,.8,.55,.36),I(H,$(.22,.05,.12,b.ink,.02),-.18,.86,0),I(H,$(.05,.05,.46,b.ink,.02),.44,.95,0),z&&I(H,$(.26,.18,.3,b.woodLight,.03),.62,.84,0),f(D,y,1,.18),m(D,y,.9)}qt(-10.2,18.6,.15,{color:b.red}),h(-10.2,18.6,.6);const $t={x:-1.5,z:16.55,heading:2.45},Nt=(()=>{const D=b.hydrangeaBlue,y=new fe,_=new fe;y.add(_),e.add(y);const U=new fe,G=new fe;G.rotation.y=-Math.PI/2,U.add(G);const z=(Ft,de,pe,kt,jt=.055,_e=D)=>I(G,$(Math.hypot(pe-Ft,kt-de),jt,jt,_e,.02),(Ft+pe)/2,(de+kt)/2,0,0,0,Math.atan2(kt-de,pe-Ft));z(-.55,.36,-.05,.4),z(-.05,.4,-.22,.86),z(-.2,.8,.42,.84),z(-.05,.4,.42,.84),z(-.2,.8,-.55,.36),z(.42,.84,.55,.36),z(.42,.84,.36,1.08,.045,b.stoneLight),I(G,$(.28,.07,.16,b.ink,.03),-.23,.9,0),I(G,$(.05,.05,.6,b.stoneLight,.02),.36,1.1,0);for(const Ft of[-.27,.27])I(G,$(.07,.07,.1,b.ink,.03),.36,1.1,Ft);I(G,Ge(.045,b.glow,1),.38,1.15,.17),I(G,$(.3,.2,.34,b.woodLight,.04),.68,.92,0),I(G,$(.2,.05,.28,b.red,.02),.68,1.03,0),I(G,$(.4,.04,.2,b.stoneLight,.02),-.55,.74,0),z(-.55,.36,-.42,.74,.035,b.stoneLight),I(G,$(.42,.03,.1,D,.015),-.58,.72,0,0,0,.12);const A=new ye(Pi(U),Li());A.castShadow=!0,xl(A,.018),_.add(A);const H=new ye(Pi((()=>{const Ft=new fe;return I(Ft,$(.035,.42,.035,b.ink,.015),.16,.2,-.05,0,.15,.35),Ft})()),Li());_.add(H);const N=Pi((()=>{const Ft=new fe;return I(Ft,mo(new ya(.33,.042,6,20),b.ink),0,0,0,Math.PI/2),I(Ft,$(.018,.62,.018,b.stoneLight,.005),0,0,0),I(Ft,$(.018,.018,.62,b.stoneLight,.005),0,0,0),I(Ft,le(.05,.05,.12,b.stoneLight,8),0,0,0,0,0,Math.PI/2),Ft})()),J=[.55,-.55].map(Ft=>{const de=new ye(N,Li());return de.position.set(0,.36,Ft),de.castShadow=!0,_.add(de),de}),E=new ye(Pi((()=>{const Ft=new fe;return I(Ft,le(.07,.07,.05,b.stoneLight,10),0,0,0,0,0,Math.PI/2),I(Ft,$(.03,.3,.04,b.ink,.01),.1,0,0),I(Ft,$(.03,.3,.04,b.ink,.01),-.1,0,0,0,Math.PI),I(Ft,$(.12,.04,.08,b.ink,.015),.17,.15,0),I(Ft,$(.12,.04,.08,b.ink,.015),-.17,-.15,0),Ft})()),Li());E.position.set(0,.4,.05),_.add(E);const B=new ye(new Ts(.5,20),new En({color:"#3a2d48",transparent:!0,opacity:.22,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.scale.set(.62,1.45,1),B.position.y=.04,y.add(B);const Q={type:"seg",x1:0,z1:0,x2:0,z2:0,r:.2,off:!1};n.push(Q);const ut=M({id:"bike",name:"your bicycle",label:"Bicycle",verb:"Ride",anchor:y.position,height:1.25,radius:1.5,counts:!1});ut.kind="bike";let mt=0,Rt=0,ne=!1,Qt=-.09,Gt=1;o.push(({dt:Ft})=>{ne||(_.rotation.z+=(Qt-_.rotation.z)*Math.min(1,Ft*6)),Gt<1&&(Gt=Math.min(1,Gt+Ft*2.8),_.position.y=-Math.sin(Gt*Math.PI*2.5)*.06*(1-Gt))});function oe(Ft,de,pe,kt){mt=pe,y.position.set(Ft,_n(Ft,de),de),y.rotation.y=pe;const jt=Math.sin(pe)*.55,_e=Math.cos(pe)*.55,Pe=Math.atan2(_n(Ft+jt,de+_e)-_n(Ft-jt,de-_e),1.1);_.rotation.set(-Pe,0,kt)}function Ce(Ft,de,pe,kt=!0){ne=!1,oe(Ft,de,pe,_.rotation.z),H.visible=!0;const jt=Math.sin(pe)*.5,_e=Math.cos(pe)*.5;Object.assign(Q,{x1:Ft-jt,z1:de-_e,x2:Ft+jt,z2:de+_e,off:!kt}),ut.hidden=!1}return Ce($t.x,$t.z,$t.heading),{it:ut,root:y,seat:_,get heading(){return mt},get crankAngle(){return Rt/.85},get solid(){return!Q.off},set solid(Ft){Q.off=!Ft},mount(){Q.off=!0,ut.hidden=!0,ut.sparkle.visible=!1},seated(){ne=!0,H.visible=!1,Gt=0},thump(){Gt=.35},park:Ce,ride(Ft,de,pe,kt,jt){oe(Ft,de,pe,kt),Rt+=jt;for(const _e of J)_e.rotation.x=Rt/.33;E.rotation.x=Rt/.85}}})();for(const[D,y,_]of[[-11.9,1.75,.34],[-12.7,2.45,.3],[-13.4,2.95,.32]]){const U=Ge(_,b.stoneLight,0);U.scale.set(1.1,.22,.85),I(t,U,D,sn(D,y)+.02,y,l(0,3)),m(D,y,_+.1)}{const D=p(3.65,-3.15,.2);I(D,$(.7,.55,.6,b.woodLight,.04),0,.28,0),I(D,$(.6,.45,.55,b.wood,.04),.06,.78,.02,.35);for(let y=0;y<3;y++)I(D,Ge(.09,b.red,1),-.15+y*.13,.62,.12);h(3.65,-3.15,.45)}{const D=p(14.25,-4.1);I(D,le(.16,.14,.42,b.stoneDark,10),0,.21,0),I(D,Ln(.09,.85,b.red,6),.04,.68,0,0,.06,0),I(D,Ln(.09,.8,b.hydrangeaBlue,6),-.05,.64,.03,0,-.08,.05),h(14.25,-4.1,.2),I(t,Ln(.08,.8,b.leafLight,6),4,sn(4,17.2)+.62,17.2,0,0,-1.35)}const pt=(D,y,_)=>{const U=new fe;I(U,$(.62,.34,.34,D,.14),0,.42,0),I(U,$(.36,.22,.36,y,.1),.12,.34,0),_&&I(U,$(.3,.06,.3,_,.03),-.08,.6,0);const G=new fe;I(G,$(.42,.36,.4,D,.15),0,0,0),I(G,$(.1,.12,.22,y,.05),.19,-.07,0);for(const A of[-1,1])I(G,Ln(.1,.17,D,4),-.02,.24,A*.12,Math.PI/4),I(G,$(.035,.08,.06,b.ink,.015),.21,.04,A*.09);I(G,$(.03,.03,.05,b.hydrangeaPink,.01),.235,-.03,0);const z=new fe;return I(z,$(.08,.46,.08,D,.035),0,.21,0),{torso:U,head:G,tail:z}},_t=D=>{const y=new ye(Pi(D),Li());return y.castShadow=!0,xl(y,.022),y};{const _=p(-9.4,3.5,.4),U=Ge(.7,b.stoneLight,0);U.scale.set(1.15,.42,.9),I(_,U,0,.18,0),h(-9.4,3.5,.75),f(-9.4,3.5,1.1,.25),m(-9.4,3.5,1);const G=pt(b.ginger,b.catWhite),z=new fe;I(z,$(.62,.3,.5,b.ginger,.15),0,.17,0),I(z,$(.3,.16,.4,b.catWhite,.08),.18,.1,.05),G.head.position.set(.3,.26,.12),G.head.rotation.set(.25,.4,-.35),G.head.children.forEach(N=>{N.userData.swatch===b.ink&&(N.scale.y=.25)}),z.add(G.head);for(let N=0;N<4;N++)I(z,$(.1,.1,.16,b.ginger,.04),-.32+N*.12,.08,-.26-Math.sin(N*.8)*.06,N*.35);const A=_t(z),H=new fe;H.position.set(-9.4,sn(-9.4,3.5)+.34,3.5),H.rotation.y=.6,H.add(A),e.add(H),o.push(({t:N})=>{const J=Math.sin(N*1.4);A.scale.set(1,1+J*.035,1+J*.02)}),M({id:"cat",name:bu.title,label:"Mochi · hobbies",verb:"Pet",x:-9.4,z:Ru+.2,sz:3.5,height:1.15,radius:1.7,entry:bu})}function Ct({id:D,entry:y,label:_,fur:U,belly:G,patch:z,x:A,z:H,side:N,area:J={minX:-13,maxX:13,minZ:-.9,maxZ:.9}}){const E=pt(U,G,z),B=_t(E.torso),Q=_t(E.head),ut=_t(E.tail),mt=new fe,Rt=new fe;mt.add(Rt),Rt.add(B),Q.position.set(.38,.62,0),Rt.add(Q),ut.position.set(-.3,.48,0),ut.rotation.z=.5,Rt.add(ut);const ne=[],Qt=$(.1,.26,.1,U,.04).geometry.clone().translate(0,-.13,0);for(const[jt,_e]of[[.2,.11],[.2,-.11],[-.2,.11],[-.2,-.11]]){const Pe=new ye(Qt,rr(U));Pe.position.set(jt,.27,_e),Pe.castShadow=!0,Rt.add(Pe),ne.push(Pe)}mt.position.set(A,sn(A,H),H),e.add(mt);const Gt=mt.position,oe=new W(A,0,H);let Ce=2,Ft=0,de=0,pe=!1;const kt=M({id:D,name:y.title,label:_,verb:"Pet",anchor:Gt,height:1.3,radius:1.5,entry:y});kt.freeze=!1,kt.lookAt=(jt,_e)=>{Ft=Math.atan2(-(_e-Gt.z),jt-Gt.x),mt.rotation.y=Ft},kt.onInteract=()=>{pe=!pe},o.push(({t:jt,dt:_e,focus:Pe})=>{if(ut.rotation.x=Math.sin(jt*2.6)*.4,kt.freeze){Q.rotation.y=Math.sin(jt*2)*.12;return}if(pe){const ti=Pe.x-Gt.x,xi=Pe.z-Gt.z,vi=Math.hypot(ti,xi);vi>1.9&&(oe.set(Pe.x-ti/vi*1.4-xi/vi*N,0,Pe.z-xi/vi*1.4+ti/vi*N),Ce=0)}if(Ce>0){Ce-=_e,ne.forEach(ti=>ti.rotation.z*=.8),Rt.position.y=Math.sin(jt*2)*.008;return}const jn=oe.x-Gt.x,gi=oe.z-Gt.z,Bi=Math.hypot(jn,gi);if(Bi<.15){Ce=pe?.3:l(1.5,4.5),pe||oe.set(l(J.minX,J.maxX),0,l(J.minZ,J.maxZ));return}const _i=pe?Bi>4?4.4:2.6:.9,Vr=Gt.x+jn/Bi*_i*_e,Wr=Gt.z+gi/Bi*_i*_e;vo(Vr,Wr)?(Gt.x=Vr,Gt.z=Wr,de=0):pe?(de+=_e,de>1.2&&vo(Pe.x+N*1.4,Pe.z+.8)&&(Gt.x=Pe.x+N*1.4,Gt.z=Pe.z+.8,de=0)):(Ce=.5,oe.set(l(J.minX,J.maxX),0,l(J.minZ,J.maxZ))),Gt.y=_n(Gt.x,Gt.z);let sr=Math.atan2(-gi,jn)-Ft;sr=Math.atan2(Math.sin(sr),Math.cos(sr)),Ft+=sr*Math.min(1,_e*6),mt.rotation.y=Ft;const Cs=8+_i*3;ne.forEach((ti,xi)=>ti.rotation.z=Math.sin(jt*Cs+xi%2*Math.PI+(xi>1?.6:0))*.55),Rt.position.y=Math.abs(Math.sin(jt*Cs))*.025})}Ct({id:"cat-kaya",entry:mx,label:"Kaya",fur:b.catWhite,belly:b.catWhite,patch:ae(b.catWhite,b.catGray,.35),x:4,z:.4,side:-.7}),Ct({id:"cat-anu",entry:gx,label:"Anu",fur:b.catBrown,belly:ae(b.catBrown,b.earth,.45),patch:xn(b.catBrown,.7),x:-3,z:-.3,side:.7});{const _=p(15.3,-2.75);I(_,$(1.9,.12,.55,b.woodLight,.04),0,.48,0),I(_,$(1.9,.42,.1,b.woodLight,.04),0,.78,-.25);for(const N of[-.8,.8])I(_,$(.12,.46,.46,b.woodDark,.03),N,.23,0);d(15.3-1.05,15.3+1.05,-2.75-.4,-2.75+.35);const U=pt(b.catBlack,b.catBlack);U.head.children.forEach(N=>{N.userData.swatch===b.ink&&(N.userData.swatch=b.sun)});const G=new fe;I(G,$(.34,.44,.32,b.catBlack,.14),0,.22,0),U.head.position.set(.06,.58,0),G.add(U.head);for(const N of[-1,1])I(G,$(.1,.06,.1,b.catBlack,.03),.16,.03,N*.08);I(G,le(.17,.19,.1,b.kawara,12),.04,.84,0),I(G,$(.16,.03,.26,b.ink,.01),.18,.79,0);const z=_t(G),A=_t(U.tail),H=new fe;H.position.set(15.3+.4,sn(15.3,-2.75)+.54,-2.75),H.rotation.y=-Math.PI/2,H.add(z),A.position.set(-.16,.06,0),A.rotation.set(0,0,1.3),H.add(A),e.add(H),o.push(({t:N})=>{A.rotation.x=Math.sin(N*1.6)*.5,z.rotation.y=Math.sin(N*.4)*.08}),M({id:"cat-kuro",name:Eu.title,label:"Kuro · station master",verb:"Salute",x:15.3+.4,z:oi,sz:-2.75,height:1.8,radius:1.2,entry:Eu})}const Kt=new ye(cx(r),Nr({vertexColors:!0,smooth:!0}));Kt.receiveShadow=!0,Kt.castShadow=!0,Kt.name="terrain";const Dt=new Gd({vertexColors:!0,roughness:.22,metalness:0,transparent:!0,opacity:.9});Dt.onBeforeCompile=D=>{D.uniforms.uTime=pn.uTime,D.uniforms.uGlow=pn.uGlow,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uGlow;
varying vec3 vWPos;`).replace("#include <color_fragment>",`#include <color_fragment>
        float w1 = sin(vWPos.x * 2.1 + uTime * 0.9 + sin(vWPos.z * 1.3 + uTime * 0.6) * 1.4);
        float w2 = sin(vWPos.z * 2.4 - uTime * 0.7 + sin(vWPos.x * 1.1) * 1.2);
        diffuseColor.rgb += smoothstep(0.88, 1.0, w1 * w2) * 0.2;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * 0.28 / max(1.0, uGlow * 1.6);`)};const te=new ye(ux(yt),Dt);te.receiveShadow=!0,te.name="water";function ce(D=.42,y=.075){const _=[];for(let z=0;z<3;z++){const A=z/3*Math.PI*2+.3,H=Math.cos(A),N=Math.sin(A);_.push(-y*N,0,y*H,y*N,0,-y*H,H*.12,D*(.85+z*.08),N*.12)}const U=new We;U.setAttribute("position",new Ie(_,3));const G=[];for(let z=0;z<_.length/3;z++)G.push(0,1,0);return U.setAttribute("normal",new Ie(G,3)),U}const it=new Xe,vt=new Wt,bt=[],Et=[],Tt=[];{for(let y=Qe.minZ-3;y<Qe.maxZ+2;y+=.4)for(let _=Qe.minX-4;_<Qe.maxX+4;_+=.4){const U=_+(c()-.5)*.4*1.4,G=y+(c()-.5)*.4*1.4,z=Es(U,G);if(z.paddy||z.platform||z.track||z.stream>.15||z.steps>.2||z.pad>.6||S(U,G))continue;let A=1-z.path*1.25;A*=.3+.9*De(.32,.62,Xi.fbm(U*.22,G*.22)),z.rim>2&&(A*=.35),z.plateau>.5&&(A*=.25),c()<A*.62&&bt.push([U,z.h,G,z.path]);const H=z.path>.05&&z.path<.6?.22:0;c()<(H+De(.7,.85,Xi.noise(U*.35+50,G*.35))*.12)*(1-z.path)&&Tt.push([U,z.h,G])}for(const y of Lr)for(let _=y.minX+.7;_<y.maxX-.55;_+=.48)for(let U=y.minZ+.7;U<y.maxZ-.55;U+=.45)Et.push([_+l(-.06,.06),y.level-.05,U+l(-.06,.06)])}const Xt=Nr({vertexColors:!1,wind:"instanced",side:Wn,smooth:!0}),zt=[b.grass,b.grassLight,b.grassDark,b.dryGrass].map(D=>new Wt(D)),Jt=new Pn(ce(),Xt,bt.length);Jt.name="grass",bt.forEach(([D,y,_,U],G)=>{const z=l(.65,1.3)*(1-U*.5);it.position.set(D,y-.02,_),it.rotation.set(0,l(0,6.28),0),it.scale.set(z,z*l(.8,1.25),z),it.updateMatrix(),Jt.setMatrixAt(G,it.matrix);const A=Xi.fbm(D*.18,_*.18);vt.copy(zt[0]).lerp(A>.5?zt[1]:zt[2],Math.abs(A-.5)*1.8),vt.lerp(zt[3],De(.62,.8,Xi.fbm(D*.07+40,_*.07-12))*.6),Jt.setColorAt(G,vt.multiplyScalar(l(.92,1.08)))}),Jt.receiveShadow=!0,e.add(Jt);const ee=new Wt(b.leafLight),q=new Pn(ce(),Xt,Et.length);q.name="rice",Et.forEach(([D,y,_],U)=>{it.position.set(D,y,_),it.rotation.set(0,l(0,6.28),0);const G=l(1.1,1.4);it.scale.set(G*.9,G*1.5,G*.9),it.updateMatrix(),q.setMatrixAt(U,it.matrix),q.setColorAt(U,vt.copy(ee).multiplyScalar(l(.9,1.1)))}),q.receiveShadow=!1,e.add(q);const Me=[b.plaster,ae(b.sun,b.plaster,.2),b.hydrangeaPink,b.hydrangeaBlue].map(D=>new Wt(D)),re=new Pn(new Ji(.075,0),Nr({vertexColors:!1}),Math.max(1,Tt.length));Tt.forEach(([D,y,_],U)=>{it.position.set(D,y+l(.16,.28),_),it.rotation.set(l(0,3),l(0,3),0),it.scale.set(1,.55,1),it.updateMatrix(),re.setMatrixAt(U,it.matrix),re.setColorAt(U,Me[Xi.noise(D*.5,_*.5)>.55?Math.floor(c()*4):c()>.3?0:1])}),re.receiveShadow=!0,e.add(re);{const D=new fe;I(D,$(.42,.1,.16,b.ginger,.05),0,0,0),I(D,$(.14,.11,.17,b.plaster,.05),.06,.01,0),I(D,Ln(.1,.18,b.ginger,4),-.27,0,0,0,0,Math.PI/2);const y=6,_=new Pn(Pi(D),Li(),y);_.frustumCulled=!1;const U=Array.from({length:y},(H,N)=>({s:l(.36,.64),speed:l(.006,.012)*(N%2?1:-1),lane:l(-.7,.7),wob:l(0,6)})),G=Xn.pts;let z=0;for(let H=1;H<G.length;H++)z+=Math.hypot(G[H][0]-G[H-1][0],G[H][1]-G[H-1][1]);const A=H=>{let N=H*z;for(let J=0;J<G.length-1;J++){const[E,B]=G[J],[Q,ut]=G[J+1],mt=Math.hypot(Q-E,ut-B);if(N<=mt)return{x:E+(Q-E)*N/mt,z:B+(ut-B)*N/mt,tx:(Q-E)/mt,tz:(ut-B)/mt};N-=mt}return{x:0,z:10,tx:1,tz:0}};e.add(_),o.push(({t:H,dt:N})=>{U.forEach((J,E)=>{J.s+=J.speed*N*2,(J.s<.34||J.s>.66)&&(J.speed*=-1),J.s=Math.min(.66,Math.max(.34,J.s));const B=A(J.s),Q=J.lane+Math.sin(H*.7+J.wob)*.25;it.position.set(B.x-B.tz*Q,-.5,B.z+B.tx*Q),it.rotation.set(0,Math.atan2(-B.tz,B.tx)+(J.speed<0?Math.PI:0)+Math.sin(H*5+J.wob)*.18,0),it.scale.setScalar(E%3===0?1.2:1),it.updateMatrix(),_.setMatrixAt(E,it.matrix)}),_.instanceMatrix.needsUpdate=!0})}{const D=new Pn(new Oi(.24,.2,.2),new En({color:"#ffffff"}),gt.length),y=(()=>{const A=document.createElement("canvas");A.width=A.height=64;const H=A.getContext("2d"),N=H.createRadialGradient(32,32,0,32,32,32);N.addColorStop(0,"rgba(255,214,140,0.85)"),N.addColorStop(.45,"rgba(255,190,110,0.3)"),N.addColorStop(1,"rgba(255,170,80,0)"),H.fillStyle=N,H.fillRect(0,0,64,64);const J=new Zi(A);return J.colorSpace=Ve,J})(),_=new Pn(new mi(1.5,1.5),new En({map:y,transparent:!0,depthWrite:!1,blending:fa,fog:!1}),gt.length),U=new Wt("#000000"),G=new Wt(b.glow),z=new Wt;gt.forEach((A,H)=>{D.setColorAt(H,U),_.setColorAt(H,U)}),D.frustumCulled=_.frustumCulled=!1,e.add(D,_),o.push(({t:A,dt:H,camera:N})=>{let J=!1;gt.forEach((E,B)=>{st[B]+=(et[B]-st[B])*Math.min(1,H*2.5);const Q=st[B]*(1+Math.sin(A*9+B)*.05+Math.sin(A*23+B*3)*.04),ut=Q>.01;ut&&(J=!0),D.setColorAt(B,z.copy(U).lerp(G,Math.min(1,Q))),_.setColorAt(B,z.copy(U).lerp(G,Math.min(1,Q*.9))),it.position.set(E.x,E.y,E.z),it.quaternion.identity(),it.scale.setScalar(ut?1:1e-4),it.updateMatrix(),D.setMatrixAt(B,it.matrix),it.quaternion.copy(N.quaternion),it.updateMatrix(),_.setMatrixAt(B,it.matrix)}),D.instanceColor.needsUpdate=_.instanceColor.needsUpdate=!0,D.instanceMatrix.needsUpdate=_.instanceMatrix.needsUpdate=!0,D.visible=_.visible=J})}{const y=new En({color:b.plaster,transparent:!0,opacity:.85}),_=new Pn(new Ji(.045,0),y,70);_.frustumCulled=!1;const U=Array.from({length:70},()=>({x:l(-18,18),y:l(.3,4),z:l(-14,14),v:l(.08,.25),p:l(0,6)}));e.add(_),o.push(({t:G,dt:z,focus:A})=>{y.opacity=.85*(1-O()*.9),_.visible=y.opacity>.05,U.forEach((H,N)=>{H.x+=(.35+Math.sin(G*.5+H.p)*.25)*z,H.y+=Math.sin(G*.9+H.p)*H.v*z,H.z+=Math.cos(G*.4+H.p)*.12*z,(H.x-A.x>18||Math.abs(H.z-A.z)>15)&&(H.x=A.x-18,H.z=A.z+l(-14,14),H.y=sn(H.x,H.z)+l(.4,3.5)),it.position.set(H.x,H.y,H.z),it.quaternion.identity(),it.scale.setScalar(1),it.updateMatrix(),_.setMatrixAt(N,it.matrix)}),_.instanceMatrix.needsUpdate=!0})}function O(){return Math.min(1,Math.max(0,(pn.uGlow.value-1.3)/1.1))}const v=(()=>{const D=document.createElement("canvas");D.width=D.height=64;const y=D.getContext("2d"),_=y.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(255,255,220,1)"),_.addColorStop(.2,"rgba(240,255,170,0.8)"),_.addColorStop(1,"rgba(200,255,120,0)"),y.fillStyle=_,y.fillRect(0,0,64,64);const U=new Zi(D);return U.colorSpace=Ve,U})();{const y=new Pn(new mi(.5,.5),new En({map:v,transparent:!0,depthWrite:!1,blending:fa,fog:!1}),64);y.frustumCulled=!1;const _=Array.from({length:64},(z,A)=>{const H=A%4,N=H===0?l(-28,-16.5):H===1?l(-16,16):l(-26,26),J=H===0?l(-8,-2.5):H===1?l(2.4,6.5):l(7.4,12.8);return{x:N,z:J,y:l(.35,1.6),p:l(0,6.28),rate:l(1.2,2.6),r:l(.4,1.2)}}),U=new Wt("#e4ff8a"),G=new Wt;_.forEach((z,A)=>y.setColorAt(A,G.setRGB(0,0,0))),e.add(y),o.push(({t:z,camera:A})=>{const H=O();if(y.visible=H>.02,!y.visible)return;const N=i?.3:1;_.forEach((J,E)=>{const B=z*.35*N+J.p;it.position.set(J.x+Math.cos(B)*J.r,J.y+Math.sin(z*.8*N+J.p)*.25,J.z+Math.sin(B*1.3)*J.r),it.quaternion.copy(A.quaternion),it.scale.setScalar(1),it.updateMatrix(),y.setMatrixAt(E,it.matrix);const Q=Math.pow(Math.max(0,Math.sin(z*J.rate*N+J.p)),3);y.setColorAt(E,G.copy(U).multiplyScalar(H*(.4+Q*1.1)))}),y.instanceMatrix.needsUpdate=!0,y.instanceColor.needsUpdate=!0})}{const D=p(1.3,-15.85);I(D,$(.7,.3,.7,b.stoneDark,.06),0,.15,0),I(D,le(.3,.22,.4,b.ink,12),0,.5,0),I(D,le(.34,.34,.06,b.woodDark,12),0,.72,0),h(1.3,-15.85,.4);const y=[{x:-7.4,y:sn(-10,-6.1)+5.25,z:-7.1,n:12,size:.42,rise:.55,life:4.2},{x:1.3,y:sn(1.3,-15.85)+.8,z:-15.85,n:8,size:.14,rise:.35,life:3.2}],_=y.reduce((z,A)=>z+A.n,0),U=new Pn(new Ji(1,1),new En({color:"#f3efe6",transparent:!0,opacity:.42,depthWrite:!1}),_);U.frustumCulled=!1;const G=[];y.forEach(z=>{for(let A=0;A<z.n;A++)G.push({s:z,age:A/z.n*z.life,seed:l(0,6)})}),e.add(U),o.push(({t:z,dt:A})=>{G.forEach((H,N)=>{const J=H.s;H.age+=A,H.age>J.life&&(H.age-=J.life,H.seed=l(0,6));const E=H.age/J.life,B=Math.sin(Math.min(1,E*1.2)*Math.PI*.5),Q=1-Math.pow(E,2.2);it.position.set(J.x+E*.9+Math.sin(z*.7+H.seed)*.12*E,J.y+E*J.rise*J.life,J.z-E*.4),it.quaternion.identity(),it.scale.setScalar(J.size*(.4+B*1.1)*Q+1e-4),it.updateMatrix(),U.setMatrixAt(N,it.matrix)}),U.instanceMatrix.needsUpdate=!0})}{const D=new fe;I(D,$(.36,.05,.05,b.red,.02),0,0,0),I(D,$(.06,.012,.5,b.plaster,.005),.06,.02,0),I(D,$(.06,.012,.44,b.plaster,.005),-.03,.02,0);const y=5,_=new Pn(Pi(D),Li(),y);_.frustumCulled=!1;const U=Array.from({length:y},(G,z)=>{const A=z<3?[l(-27,-17.5),l(-7.5,-3)]:[l(-12,12),l(7.8,12)];return{home:A,x:A[0],z:A[1],tx:A[0],tz:A[1],y:l(.9,1.6),wait:l(0,2),face:0}});e.add(_),o.push(({t:G,dt:z})=>{const A=1-Math.min(1,Math.max(0,(pn.uGlow.value-.9)/.8));if(_.visible=A>.05,!_.visible)return;const H=i?.35:1;U.forEach((N,J)=>{N.wait-=z*H,N.wait<=0&&(N.tx=N.home[0]+l(-3,3),N.tz=N.home[1]+l(-2.2,2.2),N.wait=l(.8,2.6));const E=Math.min(1,z*3.2*H),B=N.tx-N.x,Q=N.tz-N.z;N.x+=B*E,N.z+=Q*E,Math.hypot(B,Q)>.05&&(N.face=Math.atan2(-Q,B)),it.position.set(N.x,N.y+Math.sin(G*3+J)*.06,N.z),it.rotation.set(0,N.face,0),it.scale.set(1.7,1.7,1.7*(.75+Math.abs(Math.sin(G*40+J))*.25)),it.updateMatrix(),_.setMatrixAt(J,it.matrix)}),_.instanceMatrix.needsUpdate=!0})}const tt=[];let at=()=>{};if(!i){const y=new Pn(new Ji(.11,0),new En({color:b.plaster,transparent:!0,opacity:.72,depthWrite:!1}),24);y.frustumCulled=!1;for(let U=0;U<24;U++)tt.push({age:9,x:0,y:0,z:0,vx:0,vz:0});let _=0;at=(U,G,z,A)=>{for(let H=0;H<2;H++){const N=tt[_];_=(_+1)%24;const J=H?1:-1;N.age=0,N.x=U+Math.cos(A)*.14*J,N.z=z-Math.sin(A)*.14*J,N.y=G+.06,N.vx=-Math.sin(A)*.35+l(-.15,.15),N.vz=-Math.cos(A)*.35+l(-.15,.15)}},e.add(y),o.push(({dt:U})=>{tt.forEach((G,z)=>{G.age+=U;const A=Math.min(1,G.age/.55);it.position.set(G.x+G.vx*A*.5,G.y+A*.18,G.z+G.vz*A*.5),it.quaternion.identity(),it.scale.setScalar(A>=1?1e-4:(.5+A*1.1)*(1-A)),it.updateMatrix(),y.setMatrixAt(z,it.matrix)}),y.instanceMatrix.needsUpdate=!0})}const ht=sx(t,{groundAt:sn});e.add(Kt,te);const Mt=(D,y)=>Array.from({length:y},(_,U)=>`${D}-${U}`),At=[{key:"rice",label:"Rice paddies",short:"Rice",x:-22.3,z:oi,ids:Mt("skill",So.length)},{key:"home",label:"Home",short:"Home",x:-10,z:oi,ids:["house","cat"]},{key:"shrine",label:"Shrine",short:"Shrine",x:0,z:-15.2,ids:Mt("hack",Mo.length)},{key:"plaza",label:"Plaza",short:"Plaza",x:0,z:1.4,ids:["board","cat-kaya","cat-anu"]},{key:"workshop",label:"Workshop",short:"Shop",x:6.3,z:oi,ids:["central-auto"]},{key:"station",label:"Station",short:"Station",x:21,z:oi,ids:[...Mt("career",Ci.length),"cat-kuro"]},{key:"post",label:"Post office",short:"Post",x:-2.5,z:18,ids:["mailbox"]},{key:"bus",label:"Bus stop",short:"Bus",x:1.6,z:17.2,ids:["exit"]}],dt=(D,y,_,U,G,z)=>D>=_&&D<=U&&y>=G&&y<=z,xt=[{key:"shrine",title:"Shrine of Wins",kicker:"Hackathon victories",noun:"plaques read",ids:Mt("hack",Mo.length),test:(D,y)=>y<-8.4&&Math.abs(D)<9.5},{key:"rice",title:"Rice Terraces",kicker:"Skills I grow",noun:"signs read",ids:Mt("skill",So.length),test:(D,y)=>dt(D,y,-30,-15.4,-10,2.6)},{key:"home",title:"William's House",kicker:"About me",noun:"found",ids:["house","cat"],test:(D,y)=>dt(D,y,-15.4,-3.2,-10,2.6)},{key:"plaza",title:"Village Plaza",kicker:"Start here",noun:"found",ids:["board","cat-kaya","cat-anu"],test:(D,y)=>dt(D,y,-3.2,3.2,-8.4,6.8)},{key:"workshop",title:"The Workshop",kicker:"Projects",noun:"found",ids:["central-auto"],test:(D,y)=>dt(D,y,3.2,13.1,-10,2.6)},{key:"station",title:"Career Line Station",kicker:"Experience · one stop per role",noun:"stops visited",ids:Mt("career",Ci.length),test:(D,y)=>dt(D,y,13.1,31,-10,2.6)},{key:"south",title:"Post Office & Bus Stop",kicker:"Say hello · or head back",noun:"found",ids:["mailbox"],test:(D,y)=>y>12.6}];return{areaAt:(D,y)=>xt.find(_=>_.test(D,y))||null,spawnDust:(D,y,_,U)=>at(D,y,_,U),setStationClock:(D,y)=>rt(D,y),staticRoot:ht,dynamicRoot:e,colliders:n,interactables:a,updaters:o,heightAt:_n,canStand:vo,route:dx,landmarks:At,map:{paths:Ml,stream:Xn,paddies:Lr,platform:Dr,pads:Ch,bounds:Qe},spawn:{x:.45,z:19.8,facing:Math.PI},bike:Nt,stats:{bakedVertices:ht.userData.vertexCount,grass:bt.length,rice:Et.length,flowers:Tt.length}}}const ra="#f1c9a3",qi="#2a2224",yo="#2c2a31",Cu="#e9e3d6",Pu="#4a4148";function bo(i,t=.024){const e=new ye(Pi(i),Li());return e.castShadow=!0,t&&xl(e,t),e}function Mx(){const i=new fe,t=new fe;i.add(t);const e=P=>{const M=new fe,C=new fe;return P(C),M.add(bo(C)),M},n=e(P=>{I(P,$(.24,.42,.26,Cu,.1),0,-.21,0),I(P,$(.27,.15,.36,Pu,.07),0,-.47,.04)}),r=e(P=>{I(P,$(.24,.42,.26,Cu,.1),0,-.21,0),I(P,$(.27,.15,.36,Pu,.07),0,-.47,.04)});n.position.set(-.14,.55,0),r.position.set(.14,.55,0),t.add(n,r);const s=new fe;I(s,$(.66,.62,.42,yo,.16),0,.84,0),I(s,$(.34,.12,.3,yo,.05),0,1.17,0),t.add(bo(s));const a=P=>{I(P,$(.19,.5,.21,yo,.09),0,-.25,0),I(P,Ge(.1,ra,1),0,-.55,0)},o=e(a),c=e(a);o.position.set(-.43,1.08,0),c.position.set(.43,1.08,0),t.add(o,c);const l=new fe;l.position.set(0,1.55,0),t.add(l);const h=new fe;I(h,$(.84,.76,.76,ra,.3),0,0,0),I(h,Ge(.09,ra,1),-.43,-.02,0),I(h,Ge(.09,ra,1),.43,-.02,0),I(h,$(.92,.34,.82,qi,.16),0,.33,-.02),I(h,$(.9,.5,.3,qi,.14),0,.12,-.27),I(h,$(.14,.36,.6,qi,.06),-.42,.13,-.06),I(h,$(.14,.36,.6,qi,.06),.42,.13,-.06),I(h,$(.62,.22,.22,qi,.09),.08,.36,.3,.1,-.35,-.18),I(h,$(.4,.18,.2,qi,.08),-.24,.3,.33,-.2,-.2,.25),I(h,$(.3,.2,.3,qi,.09),.12,.54,.12,.3,.3,.2),I(h,$(.12,.05,.02,"#c9796a",.02),0,-.2,.385),I(h,$(.12,.06,.02,"#f0a8a0",.025),-.27,-.13,.38),I(h,$(.12,.06,.02,"#f0a8a0",.025),.27,-.13,.38),l.add(bo(h,.026));const d=$(.08,.12,.04,"#231c1e",.035),u=$(.08,.12,.04,"#231c1e",.035);I(l,d,-.17,-.02,.385),I(l,u,.17,-.02,.385);const f=new ye(new Ts(.5,20),new En({color:"#3a2d48",transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.04,i.add(f);let m=0,S=2,g=0,p=0,R=!1;return{root:i,head:l,animate(P,M,C,L=!1){const F=Math.min(1,P*14);if(R){const Y=Math.sin(C)*.42;return n.rotation.x+=(-.5+Y-n.rotation.x)*F,r.rotation.x+=(-.5-Y-r.rotation.x)*F,o.rotation.x+=(-.95-o.rotation.x)*F,c.rotation.x+=(-.95-c.rotation.x)*F,c.rotation.z+=(0-c.rotation.z)*F,g=0,t.position.set(0,.4+Math.abs(Math.sin(C))*.012,-.21),t.scale.set(1,1,1),t.rotation.set(.12,0,0),l.rotation.z=Math.sin(M*1.3)*.02,S-=P,d.scale.y=u.scale.y=S<.12?.15:1,S<0&&(S=2+Math.random()*3),!1}t.position.z+=(0-t.position.z)*F,t.rotation.x+=(0-t.rotation.x)*F;const x=C>.05&&!L;m+=P*(x?7+C*4.5:0);const T=x?Math.sin(m)*Math.min(.75,.45+C*.18):0;n.rotation.x+=(T-n.rotation.x)*F,r.rotation.x+=(-T-r.rotation.x)*F;let k=T*.9;g>0?(g-=P,c.rotation.z+=(2.6-c.rotation.z)*F,k=Math.sin(M*14)*.35):c.rotation.z+=(0-c.rotation.z)*F,o.rotation.x+=(-T*.9-o.rotation.x)*F,c.rotation.x+=(k-c.rotation.x)*F;const V=x?Math.abs(Math.sin(m)):0;t.position.y=x?V*.08:Math.sin(M*2.2)*.012;const Z=x?(1-V)*.06*Math.min(1,C):0;t.scale.set(1+Z*.6,1-Z+V*.025,1+Z*.6),t.rotation.z=x?Math.sin(m)*.03:0,l.rotation.z=x?-Math.sin(m)*.025:Math.sin(M*1.3)*.03,S-=P,d.scale.y=u.scale.y=S<.12?.15:1,S<0&&(S=2+Math.random()*3);const K=Math.floor(m/Math.PI),X=x&&K!==p;return p=K,X},wave(P=1.6){g=P},setRiding(P){R=P,f.visible=!P}}}const cn=i=>document.querySelector(i);function Dn(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.textContent=e),n}function Sx({audio:i,reducedMotion:t}){const e=cn("#dialog"),n=cn("#dialog-name"),r=cn("#dialog-kicker"),s=cn("#dialog-media"),a=cn("#dialog-text"),o=cn("#dialog-extras"),c=cn("#dialog-hint"),l=cn("#prompt"),h=cn("#prompt-verb"),d=cn("#prompt-name"),u=cn("#progress"),f=cn("#progress-bar"),m=cn("#toast"),S=cn("#help");let g=null;function p(et){var St;if(o.replaceChildren(),et.list){const yt=Dn("p","d-list-heading",et.list.heading),qt=Dn("ol","d-list");for(const[$t,Nt]of et.list.items){const pt=Dn("li");pt.append(Dn("strong",null,$t),Dn("span",null," "+Nt)),qt.append(pt)}o.append(yt,qt)}if((St=et.tags)!=null&&St.length){const yt=Dn("div","d-tags");for(const qt of et.tags)yt.append(Dn("span","d-tag",qt));o.append(yt)}const nt=[...et.actions||[]];if(et.more&&nt.push({label:et.more.label,href:et.more.href,sameTab:!0}),nt.length){const yt=Dn("div","d-actions");nt.forEach((qt,$t)=>{const Nt=Dn("a","d-action"+(qt.primary?" is-primary":""));Nt.href=qt.href,!qt.sameTab&&!qt.href.startsWith("mailto:")&&(Nt.target="_blank",Nt.rel="noopener noreferrer"),Nt.append(Dn("kbd",null,String($t+1))),Nt.append(document.createTextNode(qt.label)),yt.append(Nt)}),o.append(yt)}}function R(et){const{entry:nt}=g;g.page=et;const St=nt.pages[et]??"",yt=et>=nt.pages.length-1;o.hidden=!0,c.textContent="",clearInterval(g.timer);const qt=()=>{if(clearInterval(g.timer),g.typing=!1,a.textContent=St,yt){o.hidden=!o.childElementCount;const Nt=o.querySelectorAll(".d-action").length;c.innerHTML=Nt?`<kbd>1</kbd>${Nt>1?`–<kbd>${Nt}</kbd>`:""} open link · <kbd>E</kbd> close`:"<kbd>E</kbd> close"}else c.innerHTML='<kbd>E</kbd> next <span class="d-caret">▼</span>'};if(g.finish=qt,t)return qt();g.typing=!0;let $t=0;a.textContent="",g.timer=setInterval(()=>{$t+=1,a.textContent=St.slice(0,$t),$t%3===0&&St[$t-1]!==" "&&i.blip(),$t>=St.length&&qt()},16)}function P(et,{onClose:nt}={}){if(g&&M(!0),g={entry:et,page:0,typing:!1,timer:null,onClose:nt},n.textContent=et.title,r.textContent=et.kicker||"",s.replaceChildren(),s.hidden=!et.image,et.image){const St=Dn("img");St.src=et.image.src,St.alt=et.image.alt,St.decoding="async",s.classList.toggle("is-dark",!!et.image.dark),s.classList.toggle("is-cover",!!et.image.cover),s.append(St)}p(et),e.hidden=!1,requestAnimationFrame(()=>e.classList.add("is-open")),i.open(),R(0)}function M(et){if(!g)return;clearInterval(g.timer);const nt=g.onClose;g=null,e.classList.remove("is-open"),e.hidden=!0,et||i.close(),nt==null||nt()}function C(){if(g){if(g.typing)return g.finish();if(g.page<g.entry.pages.length-1)return R(g.page+1);M()}}function L(et){if(!g||g.typing||g.page<g.entry.pages.length-1)return!1;const nt=o.querySelectorAll(".d-action")[et-1];return nt?(nt.click(),!0):!1}e.addEventListener("click",et=>{et.target.closest("a")||C()});let F=null;function x(et,nt,St,yt){F!==et&&(F=et,h.textContent=et.verb,d.textContent=et.name,l.querySelector("kbd").textContent=yt?"Tap":"E"),l.style.transform=`translate(${Math.round(nt)}px, ${Math.round(St)}px) translate(-50%, -100%)`,l.classList.add("is-on")}function T(){F=null,l.classList.remove("is-on")}function k(et,nt){u.textContent=`${et} / ${nt}`,f.style.width=`${et/nt*100}%`}let V=null;function Z(et,nt=2600){m.innerHTML=et,m.classList.add("is-on"),clearTimeout(V),V=setTimeout(()=>m.classList.remove("is-on"),nt)}const K=cn("#area-banner");let X=null;function Y({title:et,kicker:nt,found:St,total:yt,noun:qt}){K.querySelector(".area-kicker").textContent=nt,K.querySelector(".area-title").textContent=et;const $t=K.querySelector(".area-count"),Nt=yt>0&&St===yt;$t.textContent=yt?Nt?`All ${yt} ${qt} ✓`:`${St} of ${yt} ${qt}`:"",$t.classList.toggle("is-done",Nt),K.classList.add("is-on"),clearTimeout(X),X=setTimeout(()=>K.classList.remove("is-on"),3200)}function ct(){clearTimeout(X),K.classList.remove("is-on")}S.addEventListener("pointerdown",et=>{et.target===S&&st(!1)});let rt=!1,gt=null;function st(et){const nt=et??!rt;return nt===rt||(rt=nt,clearTimeout(gt),nt?(S.classList.remove("is-closing"),S.hidden=!1):(S.classList.add("is-closing"),gt=setTimeout(()=>{S.hidden=!0,S.classList.remove("is-closing")},t?0:240))),nt}return{open:P,close:M,advance:C,activateAction:L,get isOpen(){return!!g},get helpOpen(){return rt},showPrompt:x,hidePrompt:T,setProgress:k,toast:Z,toggleHelp:st,showArea:Y,hideArea:ct}}const yx={rice:"below",home:"above",shrine:"right",plaza:"right",workshop:"above",station:"below",post:"left",bus:"right"};function bx({canvas:i,world:t,onTravel:e}){const n=t.map.bounds,r=2,s=n.minX-r,a=n.maxX+r,o=n.minZ-r,c=n.maxZ+r,l=i.clientWidth||220,h=Math.round(l*(c-o)/(a-s));i.style.height=`${h}px`;const d=Math.min(window.devicePixelRatio||1,2);i.width=Math.round(l*d),i.height=Math.round(h*d);const u=i.getContext("2d"),f=l/(a-s),m=T=>(T-s)*f,S=T=>(T-o)*f,g=document.createElement("canvas");g.width=i.width,g.height=i.height;const p=g.getContext("2d");p.scale(d,d),p.fillStyle="#f3e6c6",p.fillRect(0,0,l,h);const R=p.createLinearGradient(0,S(-20),0,S(-8));R.addColorStop(0,"#9fb47a"),R.addColorStop(1,"rgba(159,180,122,0)"),p.fillStyle=R,p.fillRect(0,0,l,S(-8)),p.fillStyle="rgba(122,148,96,0.35)",p.fillRect(0,0,l,3),p.fillRect(0,h-3,l,3);const P=(T,k,V)=>{p.beginPath(),T.forEach(([Z,K],X)=>X?p.lineTo(m(Z),S(K)):p.moveTo(m(Z),S(K))),p.lineWidth=k,p.strokeStyle=V,p.lineCap="round",p.lineJoin="round",p.stroke()};P(t.map.stream.pts,t.map.stream.hw*2*f,"#86b7c3"),p.fillStyle="#b9d0c6";for(const T of t.map.paddies)p.fillRect(m(T.minX),S(T.minZ),(T.maxX-T.minX)*f,(T.maxZ-T.minZ)*f);for(const T of t.map.paths)T.pts.length===1?(p.beginPath(),p.arc(m(T.pts[0][0]),S(T.pts[0][1]),T.hw*f,0,Math.PI*2),p.fillStyle="#ddc08e",p.fill()):P(T.pts,Math.max(2,T.hw*2*f),T.kind==="steps"?"#c9c2b2":"#ddc08e");p.fillStyle="#a0703f",p.fillRect(m(-1.3),S(7.2),2.6*f,5.4*f);const M=t.map.platform;p.fillStyle="#d6d0c2",p.fillRect(m(M.minX),S(M.minZ),(M.maxX-M.minX)*f,(M.maxZ-M.minZ)*f),p.fillStyle="#7d6a57",p.fillRect(m(15.2),S(-6.3),(n.maxX+r-15.2)*f,.9*f),p.fillStyle="#8a6d55";for(const T of t.map.pads)T.id!=="busstop"&&p.fillRect(m(T.minX+.6),S(T.minZ+.8),(T.maxX-T.minX-1.2)*f,(T.maxZ-T.minZ-2.4)*f);p.fillRect(m(-3.2),S(-20.5),6.4*f,4.6*f),p.fillStyle=b.red,p.fillRect(m(-2.3)-1,S(-3.5)-1,4.6*f+2,2);const C=t.landmarks.map(T=>({...T,px:m(T.x),py:S(T.z)}));let L=null;function F(T,k,V,Z){u.setTransform(1,0,0,1,0,0),u.drawImage(g,0,0),u.setTransform(d,0,0,d,0,0),u.font='10px "DotGothic16", ui-monospace, monospace',u.textBaseline="middle";for(const Y of C){const ct=Y.ids.length,rt=Y.ids.filter(V).length,gt=ct>0&&rt===ct,st=L===Y?5.5:4.2;u.beginPath(),u.arc(Y.px,Y.py,st,0,Math.PI*2),u.fillStyle=Y.key==="bus"?"#fff8e8":gt?"#6f9a48":"#e9a23b",u.fill(),u.lineWidth=1.5,u.strokeStyle="#5b3a20",u.stroke();const et=Y.key==="bus"?Y.short:`${Y.short} ${rt}/${ct}`,nt=u.measureText(et).width,St=yx[Y.key]||"right";let yt=Y.px+7,qt=Y.py;St==="left"&&(yt=Y.px-7-nt),St==="above"&&(yt=Y.px-nt/2,qt=Y.py-10),St==="below"&&(yt=Y.px-nt/2,qt=Y.py+10),yt=Math.max(2,Math.min(l-nt-2,yt)),u.fillStyle="rgba(251,241,218,0.85)",u.fillRect(yt-2,qt-6,nt+4,12),u.fillStyle="#4a2e18",u.fillText(et,yt,qt+.5)}if(Z){const Y=m(Z.x),ct=S(Z.z);u.lineWidth=1.4,u.strokeStyle="#3f5f9e",u.fillStyle="#fff8e8";for(const rt of[-2.6,2.6])u.beginPath(),u.arc(Y+rt,ct,2.3,0,Math.PI*2),u.fill(),u.stroke();u.beginPath(),u.moveTo(Y-2.6,ct),u.lineTo(Y,ct-2.4),u.lineTo(Y+2.6,ct),u.stroke()}const K=m(T.x),X=S(T.z);u.save(),u.translate(K,X),u.rotate(-k+Math.PI),u.beginPath(),u.moveTo(0,-6),u.lineTo(4,4),u.lineTo(0,2),u.lineTo(-4,4),u.closePath(),u.fillStyle=b.red,u.fill(),u.lineWidth=1.2,u.strokeStyle="#fff8e8",u.stroke(),u.restore()}const x=T=>{const k=i.getBoundingClientRect(),V=(T.clientX-k.left)/k.width*l,Z=(T.clientY-k.top)/k.height*h;let K=null,X=16;for(const Y of C){const ct=Math.hypot(Y.px-V,Y.py-Z);ct<X&&(X=ct,K=Y)}return{best:K,x:V/f+s,z:Z/f+o}};return i.addEventListener("pointermove",T=>{L=x(T).best,i.style.cursor=L?"pointer":"crosshair",i.title=L?`Walk to ${L.label}`:"Tap to walk here"}),i.addEventListener("pointerleave",()=>L=null),i.addEventListener("pointerdown",T=>{T.stopPropagation();const{best:k,x:V,z:Z}=x(T);e(k||{x:V,z:Z,label:null})}),{draw:F}}function Ex({container:i,items:t,camera:e}){const n=t.map(o=>{const c=document.createElement("div");c.className="np";const l=document.createElement("span");l.className="np-check",l.setAttribute("aria-hidden","true"),l.textContent="✓";const h=document.createElement("span");return h.textContent=o.label,c.append(l,h),i.append(c),{it:o,el:c,w:0,h:0,op:-1,done:null,x:0,y:0,d:0,visible:!1}}),r=new W,s=[];function a(o,c,l,h){const d=[];for(const u of n){const f=u.it.spot||u.it.pos;u.d=Math.hypot(f.x-o.x,f.z-o.z);const m=u.it.plateRange??9,S=Math.min(4.5,m*.55);let g=u.d<S?1:u.d<m?1-(u.d-S)/(m-S):0;if((u.it===c||u.it.hidden)&&(g=0),u.target=g,g>.01&&(r.set(f.x,f.y+u.it.height+.62,f.z).project(e),r.z<1&&r.x>-1.2&&r.x<1.2&&r.y>-1.2&&r.y<1.2)){u.x=(r.x+1)/2*l,u.y=(1-r.y)/2*h,d.push(u);continue}u.target=0}if(d.sort((u,f)=>u.d-f.d),s.length=0,c){const u=c.spot||c.pos;r.set(u.x,u.y+c.height+.55,u.z).project(e);const f=(r.x+1)/2*l,m=(1-r.y)/2*h;s.push({l:f-130,r:f+130,t:m-70,b:m+6})}for(const u of d){u.w||(u.w=u.el.offsetWidth||120,u.h=u.el.offsetHeight||24);const f={l:u.x-u.w/2-4,r:u.x+u.w/2+4,t:u.y-u.h-2,b:u.y+2};if(s.some(m=>f.l<m.r&&f.r>m.l&&f.t<m.b&&f.b>m.t)){u.target=0;continue}s.push(f),u.el.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -100%)`}for(const u of n)Math.abs(u.target-u.op)>.02&&(u.op=u.target,u.el.style.opacity=u.op.toFixed(2)),u.done!==u.it.discovered&&(u.done=u.it.discovered,u.el.classList.toggle("is-done",u.done))}return{update:a,set visible(o){i.hidden=!o}}}const Lu="village:sound";function wx(){let i=null,t=null,e=!0;try{e=localStorage.getItem(Lu)!=="off"}catch{}function n(){if(i)return i;const s=window.AudioContext||window.webkitAudioContext;return s?(i=new s,t=i.createGain(),t.gain.value=.22,t.connect(i.destination),i):null}function r({freq:s=440,type:a="square",dur:o=.06,vol:c=.25,slide:l=0,delay:h=0}){if(!e||!n())return;i.state==="suspended"&&i.resume();const d=i.currentTime+h,u=i.createOscillator(),f=i.createGain();u.type=a,u.frequency.setValueAtTime(s,d),l&&u.frequency.exponentialRampToValueAtTime(s*l,d+o),f.gain.setValueAtTime(1e-4,d),f.gain.exponentialRampToValueAtTime(c,d+.008),f.gain.exponentialRampToValueAtTime(1e-4,d+o),u.connect(f).connect(t),u.start(d),u.stop(d+o+.02)}return{unlock:n,get enabled(){return e},setEnabled(s){e=s;try{localStorage.setItem(Lu,s?"on":"off")}catch{}},blip(){r({freq:520+Math.random()*140,type:"square",dur:.035,vol:.08})},open(){r({freq:660,type:"triangle",dur:.09,vol:.2}),r({freq:990,type:"triangle",dur:.12,vol:.18,delay:.07})},close(){r({freq:700,type:"triangle",dur:.08,vol:.15,slide:.6})},discover(){[784,988,1175,1568].forEach((s,a)=>r({freq:s,type:"triangle",dur:.18,vol:.16,delay:a*.08}))},bell(){for(const s of[0,.16])r({freq:2093,type:"triangle",dur:.16,vol:.09,delay:s}),r({freq:2637,type:"sine",dur:.12,vol:.05,delay:s})},step(){r({freq:140+Math.random()*30,type:"sine",dur:.05,vol:.05,slide:.7})}}}const Tx=[{h:0,sun:"#a8baf0",int:.75,el:45,az:-25,sky:"#55659c",ground:"#383a4c",fill:2.3,fog:"#26304f",tint:"#97a2dc",glow:2.6,signs:.72,exposure:1.15},{h:5,sun:"#c2a8d8",int:.5,el:14,az:95,sky:"#7078a8",ground:"#4a4548",fill:2.4,fog:"#6c6f92",tint:"#a3a3d8",glow:2,signs:.82,exposure:1.1},{h:7,sun:"#ffd6ae",int:1.8,el:22,az:72,sky:"#b4c6e4",ground:"#857e58",fill:2.9,fog:"#e6dccb",tint:"#b2b4e2",glow:.6,signs:.97,exposure:1},{h:12,sun:"#fff1d8",int:2.25,el:58,az:10,sky:"#a8c1e3",ground:"#8a8458",fill:3,fog:"#dde0d6",tint:"#bcbee6",glow:.35,signs:1,exposure:.98},{h:16.5,sun:Yl.sun,int:Je.sunIntensity,el:25,az:-60,sky:Je.skyFill,ground:Je.groundFill,fill:Je.fillIntensity,fog:Je.fog,tint:Je.shadowTint,glow:1,signs:1,exposure:1},{h:18.6,sun:"#ffa070",int:1.65,el:17,az:-76,sky:"#a49fcf",ground:"#7a604a",fill:2.8,fog:"#dcae90",tint:"#b4a6dc",glow:1.6,signs:.95,exposure:1.03},{h:20.2,sun:"#8a92cf",int:.7,el:14,az:-90,sky:"#5e66a0",ground:"#3e3640",fill:2.4,fog:"#4f5380",tint:"#9198d4",glow:2.4,signs:.78,exposure:1.12},{h:24,sun:"#a8baf0",int:.75,el:45,az:-25,sky:"#55659c",ground:"#383a4c",fill:2.3,fog:"#26304f",tint:"#97a2dc",glow:2.6,signs:.72,exposure:1.15}],$l=["sun","sky","ground","fog","tint"],Ax=["int","el","az","fill","glow","signs","exposure"],sa=Tx.map(i=>({...i,...Object.fromEntries($l.map(t=>[t,new Wt(i[t])]))})),Yi={dir:new W,...Object.fromEntries($l.map(i=>[i,new Wt]))};function Rx(i){const t=(i%24+24)%24;let e=0;for(;e<sa.length-2&&sa[e+1].h<=t;)e++;const n=sa[e],r=sa[e+1],s=(t-n.h)/(r.h-n.h),a=s*s*(3-2*s);for(const l of $l)Yi[l].copy(n[l]).lerp(r[l],a);for(const l of Ax)Yi[l]=n[l]+(r[l]-n[l])*a;const o=Ma.degToRad(Yi.el),c=Ma.degToRad(Yi.az);return Yi.dir.set(Math.cos(o)*Math.sin(c),Math.sin(o),Math.cos(o)*Math.cos(c)).normalize(),Yi.night=t<5.2||t>20.4,Yi}function Cx(i){const t=(i%24+24)%24;return t>=5&&t<8?"Early morning":t>=8&&t<11?"Morning":t>=11&&t<14?"Midday":t>=14&&t<17.5?"Afternoon":t>=17.5&&t<19.6?"Evening":t>=19.6&&t<21?"Dusk":"Night"}const is=[{mode:"live",label:"Live"},{mode:"fixed",hour:7.5,label:"Morning"},{mode:"fixed",hour:12.5,label:"Noon"},{mode:"fixed",hour:18.7,label:"Evening"},{mode:"fixed",hour:22.5,label:"Night"}];function Eo(i=new Date){return i.getHours()+i.getMinutes()/60+i.getSeconds()/3600}const Ar=window.matchMedia("(prefers-reduced-motion: reduce)").matches,wo=window.matchMedia("(pointer: coarse)").matches,Du="village:found",aa=document.getElementById("title"),Ii=document.getElementById("start"),Px=document.getElementById("stage");function Ph(i){document.getElementById("title-status").textContent=i,Ii.disabled=!0,Ii.textContent="Village unavailable",document.getElementById("fallback").hidden=!1}Lx().catch(i=>{console.error(i),Ph("The village could not load in this browser.")});async function Lx(){var J;try{await Promise.race([Promise.all([document.fonts.load('64px "DotGothic16"'),document.fonts.load('16px "M PLUS Rounded 1c"')]),new Promise(E=>setTimeout(E,2500))])}catch{}let i;try{i=new J_({antialias:!0,powerPreference:"high-performance"})}catch{return Ph("Your browser has WebGL turned off, so the village cannot be drawn.")}const t=[{pixelRatio:2,shadow:2048},{pixelRatio:1.5,shadow:1024},{pixelRatio:1,shadow:1024}];let e=(navigator.hardwareConcurrency||8)<=4?1:0;i.setPixelRatio(Math.min(window.devicePixelRatio,t[e].pixelRatio)),i.setSize(window.innerWidth,window.innerHeight),i.outputColorSpace=Ve,i.toneMapping=El,i.toneMappingExposure=1,i.shadowMap.enabled=!0,i.shadowMap.type=ls,Px.appendChild(i.domElement);const n=new Wf;n.background=new Wt(Je.fog),n.fog=new Fl(Je.fog,36,80);const r=new wn(28,window.innerWidth/window.innerHeight,.5,200),s=new W(0,23,19);let a=1;const o=new Xd(Je.skyFill,Je.groundFill,Je.fillIntensity);n.add(o);const c=new Zd(Yl.sun,Je.sunIntensity);c.castShadow=!0,c.shadow.mapSize.setScalar(t[e].shadow),c.shadow.camera.left=-24,c.shadow.camera.right=24,c.shadow.camera.top=22,c.shadow.camera.bottom=-22,c.shadow.camera.near=1,c.shadow.camera.far=120,c.shadow.bias=-6e-4,c.shadow.normalBias=.045,n.add(c,c.target);const l=Je.sunDir.clone().multiplyScalar(55);Ar&&(pn.uWind.value=.15);const h=vx({reducedMotion:Ar});n.add(h.staticRoot,h.dynamicRoot);const d=Mx();n.add(d.root);const u={pos:new W(h.spawn.x,h.heightAt(h.spawn.x,h.spawn.z),h.spawn.z),facing:h.spawn.facing,speed:0};d.root.position.copy(u.pos),d.root.rotation.y=u.facing;const f=wx(),m=Sx({audio:f,reducedMotion:Ar}),S=h.interactables.filter(E=>E.counts);let g=new Set;try{g=new Set(JSON.parse(localStorage.getItem(Du)||"[]"))}catch{}for(const E of h.interactables)g.has(E.id)&&(E.discovered=!0,E.sparkle.visible=!1,(J=E.light)==null||J.call(E));const p=()=>S.filter(E=>E.discovered).length;m.setProgress(p(),S.length);const R=Object.fromEntries(h.interactables.map(E=>[E.id,E])),P=E=>{var B;return!!((B=R[E])!=null&&B.discovered)},M=Ex({container:document.getElementById("nameplates"),items:h.interactables,camera:r}),C=bx({canvas:document.getElementById("minimap"),world:h,onTravel:E=>{!Z||m.isOpen||(E.label&&m.toast(`Walking to <strong>${E.label}</strong>`,1600),Y(E.x,E.z))}});function L(E){if(E.discovered||(E.discovered=!0,E.sparkle.visible=!1,!E.counts))return;g.add(E.id);try{localStorage.setItem(Du,JSON.stringify([...g]))}catch{}const B=p();m.setProgress(B,S.length),f.discover(),B===S.length?m.toast("<strong>You found everything!</strong> Thanks for visiting. The post box by the post office is the best way to say hi.",6e3):m.toast(`<strong>Discovered</strong> ${E.name} · ${B}/${S.length}`)}const F=h.interactables.find(E=>E.id==="board");fetch("https://github-contributions-api.jogruber.de/v4/wiledw?y=last").then(E=>E.ok?E.json():Promise.reject(E.status)).then(E=>{var ut;const B=E.contributions||[];if(!B.length)return;const Q=((ut=E.total)==null?void 0:ut.lastYear)??Object.values(E.total||{}).reduce((mt,Rt)=>mt+Rt,0);F.setContributions({total:Q,days:B}),F.entry={...F.entry,pages:[`${Q.toLocaleString("en-CA")} contributions on GitHub over the last 12 months. The board shows the last six months, one square per day.`]}}).catch(()=>{});const x=.4;function T(E,B){if(!h.canStand(E,B))return!0;for(const Q of h.colliders)if(!Q.off)if(Q.type==="circle"){const ut=E-Q.x,mt=B-Q.z,Rt=Q.r+x;if(ut*ut+mt*mt<Rt*Rt)return!0}else if(Q.type==="box"){if(E>Q.minX-x&&E<Q.maxX+x&&B>Q.minZ-x&&B<Q.maxZ+x)return!0}else{const ut=Q.x2-Q.x1,mt=Q.z2-Q.z1,Rt=Math.max(0,Math.min(1,((E-Q.x1)*ut+(B-Q.z1)*mt)/(ut*ut+mt*mt))),ne=E-(Q.x1+ut*Rt),Qt=B-(Q.z1+mt*Rt),Gt=Q.r+x;if(ne*ne+Qt*Qt<Gt*Gt)return!0}return!1}function k(E,B){const{pos:Q}=u;return T(Q.x+E,Q.z+B)?E&&!T(Q.x+E,Q.z)?(Q.x+=E,Math.abs(E)):B&&!T(Q.x,Q.z+B)?(Q.z+=B,Math.abs(B)):0:(Q.x+=E,Q.z+=B,Math.hypot(E,B))}const V=new Set;let Z=!1,K=null,X=[];function Y(E,B,Q){const ut=h.route(u.pos.x,u.pos.z,E,B).map(([mt,Rt])=>({x:mt,z:Rt}));Q&&(ut[ut.length-1].interact=Q),K=ut.shift()||null,X=ut,Mt=0}const ct={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};function rt(){if(Z)return;Z=!0,f.unlock(),aa.classList.add("is-gone"),setTimeout(()=>aa.hidden=!0,700),document.body.classList.add("is-playing");let E=!1;try{E=localStorage.getItem("village:welcomed")==="1",localStorage.setItem("village:welcomed","1")}catch{}d.wave(2.2),E?m.toast("Welcome back! Your discoveries are where you left them."):setTimeout(()=>m.open(_x),550)}Ii.addEventListener("click",rt),aa.addEventListener("click",E=>{!E.target.closest("a")&&!Ii.disabled&&rt()});function gt(E){var Q,ut;if(!E||Nt)return;if(E.kind==="bike")return _t();K=null,X=[],St=0;const B=E.spot||E.pos;nt||(u.facing=Math.atan2(B.x-u.pos.x,B.z-u.pos.z)),(Q=E.onInteract)==null||Q.call(E),"freeze"in E&&(E.freeze=!0),(ut=E.lookAt)==null||ut.call(E,u.pos.x,u.pos.z),m.hidePrompt(),m.open(E.entry,{onClose:()=>{"freeze"in E&&(E.freeze=!1)}}),L(E)}const st=h.bike,et=document.getElementById("btn-hop");let nt=!1,St=0,yt=0,qt=0,$t=!1,Nt=null;function pt(E){Nt.t+=E;const B=Math.min(1,Nt.t/Nt.dur),Q=B*B*(3-2*B);d.root.position.lerpVectors(Nt.from,Nt.to,Q),d.root.position.y+=Math.sin(B*Math.PI)*Nt.lift;let ut=Nt.yaw1-Nt.yaw0;if(ut=Math.atan2(Math.sin(ut),Math.cos(ut)),d.root.rotation.set(0,Nt.yaw0+ut*Math.min(1,Q*1.4),0),B>=1){const mt=Nt.done;Nt=null,mt()}}function _t(){if(nt||Nt||!Z)return;K=null,X=[],St=0,yt=0;const E=st.root.position,B=st.heading;st.mount(),m.hidePrompt(),Nt={t:0,dur:Ar?.18:.38,from:d.root.position.clone(),to:E.clone(),yaw0:d.root.rotation.y,yaw1:B,lift:.8,done:()=>{nt=!0,d.root.position.set(0,0,0),d.root.rotation.set(0,0,0),st.seat.add(d.root),st.seated(),f.bell(),et.hidden=!1,$t||($t=!0,m.toast(wo?"<strong>On your bike!</strong> Tap Hop off to park it anywhere.":"<strong>On your bike!</strong> Shift to go faster, B to hop off and park it anywhere.",3600))}},u.pos.x=E.x,u.pos.z=E.z,u.facing=qt=B,d.setRiding(!0),f.step()}function Ct(){if(!nt||Nt)return;nt=!1,St=0;const E=u.facing,{x:B,z:Q}=u.pos,ut=new W;d.root.getWorldPosition(ut),st.park(B,Q,E,!0),st.thump();const mt=Math.cos(E),Rt=-Math.sin(E),ne=Math.sin(E),Qt=Math.cos(E),Gt=(Ft,de,pe)=>de>=0?[[Ft,de,pe],[-Ft,-de,pe]]:[[-Ft,-de,pe],[Ft,de,pe]],Ce=[...Gt(mt,Rt,.95),...Gt(ne,Qt,1.2),...Gt(mt,Rt,1.4)].find(([Ft,de,pe])=>!T(B+Ft*pe,Q+de*pe));Ce?(u.pos.x=B+Ce[0]*Ce[2],u.pos.z=Q+Ce[1]*Ce[2]):st.solid=!1,u.pos.y=h.heightAt(u.pos.x,u.pos.z),n.add(d.root),d.root.position.copy(ut),d.root.rotation.set(0,E,0),d.setRiding(!1),et.hidden=!0,Nt={t:0,dur:Ar?.16:.32,from:ut,to:u.pos.clone(),yaw0:E,yaw1:E,lift:.55,done:()=>f.step()}}et.addEventListener("click",E=>{Ct(),E.currentTarget.blur()}),window.addEventListener("keydown",E=>{var B,Q;if(!(E.metaKey||E.ctrlKey||E.altKey)){if(!Z){if(E.code==="Tab")return;aa.hidden||(E.preventDefault(),rt());return}if(E.code==="Escape"){m.helpOpen?m.toggleHelp(!1):m.isOpen&&m.close();return}if(m.helpOpen){["KeyH","Slash","KeyE","Space","Enter"].includes(E.code)&&(E.preventDefault(),m.toggleHelp(!1));return}if(m.isOpen){if(["KeyE","Space","Enter"].includes(E.code)){if(E.code!=="KeyE"&&((Q=(B=document.activeElement)==null?void 0:B.closest)!=null&&Q.call(B,"#dialog a")))return;E.preventDefault(),m.advance()}else/^Digit[1-9]$/.test(E.code)&&m.activateAction(Number(E.code.slice(5)))&&E.preventDefault();return}ct[E.code]?(E.preventDefault(),V.add(E.code),K=null,X=[]):E.code==="ShiftLeft"||E.code==="ShiftRight"?V.add("Shift"):["KeyE","Space","Enter"].includes(E.code)?(E.preventDefault(),ht?gt(ht):nt&&Ct()):E.code==="KeyB"?nt?Ct():Math.hypot(st.root.position.x-u.pos.x,st.root.position.z-u.pos.z)<st.it.radius+.4?_t():m.toast("Your bike is where you left it. Look for it on the map.",2400):E.code==="KeyH"||E.code==="Slash"?m.toggleHelp(!0):E.code==="KeyM"&&document.getElementById("btn-map").click()}}),window.addEventListener("keyup",E=>{V.delete(E.code),(E.code==="ShiftLeft"||E.code==="ShiftRight")&&V.delete("Shift")}),window.addEventListener("blur",()=>V.clear());const Kt=new jd,Dt=new wt,te=new li(new W(0,1,0),0),ce=new W;i.domElement.addEventListener("pointerdown",E=>{if(!Z)return rt();if(m.isOpen)return m.advance();if(m.helpOpen)return m.toggleHelp(!1);if(Dt.set(E.clientX/window.innerWidth*2-1,-(E.clientY/window.innerHeight)*2+1),Kt.setFromCamera(Dt,r),!Kt.ray.intersectPlane(te,ce))return;let B=null,Q=46;const ut=new W;for(const mt of h.interactables){if(mt.hidden)continue;const Rt=mt.spot||mt.pos;ut.set(Rt.x,Rt.y+Math.min(mt.height,1.6),Rt.z).project(r);const ne=(ut.x+1)/2*window.innerWidth,Qt=(1-ut.y)/2*window.innerHeight,Gt=Math.hypot(ne-E.clientX,Qt-E.clientY);Gt<Q&&(Q=Gt,B=mt)}B?Y(B.pos.x,B.pos.z,B):Math.hypot(ce.x-u.pos.x,ce.z-u.pos.z)>8?Y(ce.x,ce.z):(K={x:ce.x,z:ce.z},X=[],Mt=0)}),i.domElement.addEventListener("wheel",E=>{E.preventDefault(),a=Ma.clamp(a+E.deltaY*.0012,.6,1.5)},{passive:!1});const it=document.getElementById("btn-sound"),vt=()=>{it.setAttribute("aria-pressed",String(f.enabled)),it.title=f.enabled?"Sound on":"Sound off",it.classList.toggle("is-off",!f.enabled)};vt(),it.addEventListener("click",()=>{f.setEnabled(!f.enabled),vt(),it.blur()}),document.getElementById("btn-help").addEventListener("click",E=>{m.toggleHelp(),E.currentTarget.blur()}),document.getElementById("help-close").addEventListener("click",()=>m.toggleHelp(!1));const bt=document.querySelector(".hud-map"),Et=document.getElementById("btn-map"),Tt=E=>{bt.hidden=!E,Et.setAttribute("aria-pressed",String(E));try{localStorage.setItem("village:map",E?"on":"off")}catch{}};try{localStorage.getItem("village:map")==="off"&&Tt(!1)}catch{}Et.addEventListener("click",E=>{Tt(bt.hidden),E.currentTarget.blur()});let Xt=0,zt=Eo(),Jt="";const ee=document.getElementById("clock"),q=document.getElementById("clock-text");function Me(){const E=is[Xt];return E.mode==="live"?Eo():E.hour}function re(E){const B=Rx(E);c.color.copy(B.sun),c.intensity=B.int,l.copy(B.dir).multiplyScalar(55),o.color.copy(B.sky),o.groundColor.copy(B.ground),o.intensity=B.fill,n.fog.color.copy(B.fog),n.background.copy(B.fog),pn.uShadowTint.value.copy(B.tint),pn.uSunNorm.value=Math.max(.3,B.int)/Math.PI,pn.uGlow.value=B.glow,i.toneMappingExposure=B.exposure,nx(B.signs),ee.classList.toggle("is-night",B.night)}function O(){const E=is[Xt],B=E.mode==="live",Q=B?Eo():E.hour,ut=new Date;B||ut.setHours(Math.floor(Q),Math.round(Q%1*60));const Rt=`${ut.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})} · ${Cx(Q)}${B?"":" (preview)"}`;Rt!==Jt&&(Jt=Rt,q.textContent=Rt,ee.title=B?"Lit by your local time. Click to preview other times of day.":`Previewing ${E.label}. Click for the next one.`,h.setStationClock(ut.getHours(),ut.getMinutes()))}ee.addEventListener("click",E=>{Xt=(Xt+1)%is.length,O(),m.toast(is[Xt].mode==="live"?"Back to <strong>your local time</strong>":`Previewing <strong>${is[Xt].label}</strong>`,1500),E.currentTarget.blur()}),re(zt),O();const v=new Jd;v.connect(document);const tt=new W().copy(u.pos),at=new W;let ht=null,Mt=0,At=0,dt=null,xt=null,Pt=0;const D={};let y=0;const _=new W,U={t:0,dt:0,focus:u.pos,camera:r};let G=0,z=0;function A(E){var Q;e=E;const B=t[E];i.setPixelRatio(Math.min(window.devicePixelRatio,B.pixelRatio)),i.setSize(window.innerWidth,window.innerHeight),c.shadow.mapSize.x!==B.shadow&&(c.shadow.mapSize.setScalar(B.shadow),(Q=c.shadow.map)==null||Q.dispose(),c.shadow.map=null)}function H(E){if(!Z||document.hidden||e>=t.length-1||E>.25||(G+=E,++z<120))return;const B=G/z;G=z=0,B>1/45&&A(e+1)}function N(E){v.update(E);const B=v.getDelta();H(B);const Q=Math.min(B,.05),ut=v.getElapsed();pn.uTime.value=ut;{let kt=Me()-zt;kt=(kt%24+24)%24,kt>.001&&(zt=(zt+Math.min(kt,Math.max(.02,kt*Q*1.8)))%24),re(zt),At&63||O()}let mt=0,Rt=0;const ne=Z&&!m.isOpen&&!m.helpOpen&&!Nt;if(ne){for(const kt of V){const jt=ct[kt];jt&&(mt+=jt[0],Rt+=jt[1])}if(!mt&&!Rt&&K){const kt=K.x-u.pos.x,jt=K.z-u.pos.z,_e=Math.hypot(kt,jt),Pe=K.interact?K.interact.radius*.6:X.length?.45:.15;if(_e<=Pe){const jn=K.interact;K=X.shift()||null,nt&&!K&&(St=Math.min(St,1.2)),jn&&gt(jn)}else mt=kt/_e,Rt=jt/_e}}let Qt=Math.hypot(mt,Rt);const Gt=V.has("Shift")||K&&!V.size&&(X.length>0||Math.hypot(K.x-u.pos.x,K.z-u.pos.z)>7),oe=nt?Gt?11:7.4:Gt?8.2:4.8,Ce=nt&&Qt>0&&!K;if(nt){let kt=Qt>0&&ne?oe:0;kt&&K&&!X.length&&(kt=Math.min(kt,1.6+Math.hypot(K.x-u.pos.x,K.z-u.pos.z)*3)),St+=(kt-St)*Math.min(1,Q*(kt>St?2.4:3.2)),ne||(St=0),Qt===0&&St>.2&&(mt=Math.sin(u.facing),Rt=Math.cos(u.facing),Qt=1)}let Ft=0;if(Qt>0){mt/=Qt,Rt/=Qt;let jt=Math.atan2(mt,Rt)-u.facing;jt=Math.atan2(Math.sin(jt),Math.cos(jt)),u.facing+=jt*Math.min(1,Q*(nt?7.5:14)),Ce&&(mt=Math.sin(u.facing),Rt=Math.cos(u.facing));const _e=nt?St:oe;if(Ft=k(mt*_e*Q,Rt*_e*Q),nt&&Ft<_e*Q*.4&&(St*=.7),K){if(Ft<(nt?Math.max(St,1.5):oe)*Q*.2?Mt+=Q:Mt=0,Mt>.35&&X.length)K=X.shift(),Mt=0;else if(Mt>.35){const Pe=K.interact;K=null,Pe&&Math.hypot(Pe.pos.x-u.pos.x,Pe.pos.z-u.pos.z)<Pe.radius+.6&&gt(Pe)}}}const de=Q>0?Ft/Q:0;if(u.speed+=(de/4.8-u.speed)*Math.min(1,Q*12),de>.5&&!nt&&(y+=Ft,y>(Gt?1.5:1.15)&&(y=0,f.step())),u.pos.y=h.heightAt(u.pos.x,u.pos.z),Nt)pt(Q),d.animate(Q,ut,st.crankAngle,!0);else if(nt){let kt=u.facing-qt;kt=Math.atan2(Math.sin(kt),Math.cos(kt)),qt=u.facing;const jt=Ma.clamp(Q>0?-kt/Q*.07*Math.min(1,St/5):0,-.3,.3);yt+=(jt-yt)*Math.min(1,Q*7),st.ride(u.pos.x,u.pos.z,u.facing,yt,Ft),d.animate(Q,ut,st.crankAngle),St>6.5&&(y+=Ft,y>1.8&&(y=0,h.spawnDust(u.pos.x-Math.sin(u.facing)*.55,u.pos.y,u.pos.z-Math.cos(u.facing)*.55,u.facing)))}else{d.root.position.copy(u.pos);let kt=u.facing-d.root.rotation.y;kt=Math.atan2(Math.sin(kt),Math.cos(kt)),d.root.rotation.y+=kt*Math.min(1,Q*16),d.animate(Q,ut,u.speed)&&u.speed>.5&&h.spawnDust(u.pos.x,u.pos.y,u.pos.z,u.facing),!st.solid&&Math.hypot(st.root.position.x-u.pos.x,st.root.position.z-u.pos.z)>1.1&&(st.solid=!0)}U.t=ut,U.dt=Q;for(const kt of h.updaters)kt(U);if(tt.lerp(u.pos,Ar?1:Math.min(1,Q*5)),at.copy(s).multiplyScalar(a),r.position.copy(tt).add(at),r.lookAt(tt.x,tt.y+.8,tt.z),c.position.copy(tt).add(l),c.target.position.copy(tt),ht=null,Z&&!m.isOpen){let kt=1/0;for(const jt of h.interactables){if(jt.hidden)continue;const _e=Math.hypot(jt.pos.x-u.pos.x,jt.pos.z-u.pos.z);_e<jt.radius&&_e<kt&&(kt=_e,ht=jt)}}if(ht&&!m.helpOpen){const kt=ht.spot||ht.pos;_.set(kt.x,kt.y+ht.height+.55,kt.z).project(r),m.showPrompt(ht,(_.x+1)/2*window.innerWidth,(1-_.y)/2*window.innerHeight,wo)}else m.hidePrompt();if(Z&&!(At&3)){const kt=h.areaAt(u.pos.x,u.pos.z),jt=kt?kt.key:null;jt!==xt&&(xt=jt,Pt=ut),jt!==dt&&ut-Pt>.35&&!m.isOpen&&(dt=jt,kt&&ut-(D[jt]??-99)>8&&(D[jt]=ut,m.showArea({...kt,found:kt.ids.filter(P).length,total:kt.ids.length})))}m.isOpen&&m.hideArea();const pe=Z&&!m.isOpen&&!m.helpOpen;M.visible=pe,pe&&M.update(u.pos,ht,window.innerWidth,window.innerHeight),At++&1||C.draw(u.pos,nt?u.facing:d.root.rotation.y,P,nt?null:st.root.position),i.render(n,r)}window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.fov=r.aspect<1?44:28,r.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}),window.dispatchEvent(new Event("resize")),document.getElementById("prompt").addEventListener("click",()=>gt(ht)),i.setAnimationLoop(N),document.getElementById("title-status").textContent=wo?"Tap anywhere to start":"Press any key to start",Ii.disabled=!1,Ii.textContent="Enter the village",Ii.classList.add("is-ready"),Ii.focus({preventScroll:!0})}
