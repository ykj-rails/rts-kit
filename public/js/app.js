(()=>{"use strict";function n(n,e,r,t,o,a,c){try{var u=n[a](c),i=u.value}catch(n){return void r(n)}u.done?e(i):Promise.resolve(i).then(t,o)}var e=function(){var e,t=(e=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=r(2,2),console.log("hello ".concat(e));case 2:case"end":return n.stop()}}),n)})),function(){var r=this,t=arguments;return new Promise((function(o,a){var c=e.apply(r,t);function u(e){n(c,o,a,u,i,"next",e)}function i(e){n(c,o,a,u,i,"throw",e)}u(void 0)}))});return function(){return t.apply(this,arguments)}}(),r=function(n,e){return n+e};e(),console.log({sample:"sample",sample2:99})})();