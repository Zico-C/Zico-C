import{_ as R,c as h,w as b,l as d,S as m,R as o,x as O,b as M,n as y}from"./index-0842854f.js";import{s as S}from"./utils-0507c293.js";var g=function(a){R(u,a);function u(r,e){var t;return t=a.call(this)||this,t.client=r,t.setOptions(e),t.bindMethods(),t.updateResult(),t}var s=u.prototype;return s.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},s.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},s.onUnsubscribe=function(){if(!this.listeners.length){var e;(e=this.currentMutation)==null||e.removeObserver(this)}},s.onMutationUpdate=function(e){this.updateResult();var t={listeners:!0};e.type==="success"?t.onSuccess=!0:e.type==="error"&&(t.onError=!0),this.notify(t)},s.getCurrentResult=function(){return this.currentResult},s.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},s.mutate=function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,h({},this.options,{variables:typeof e<"u"?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},s.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:b(),t=h({},e,{isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=t},s.notify=function(e){var t=this;d.batch(function(){t.mutateOptions&&(e.onSuccess?(t.mutateOptions.onSuccess==null||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):e.onError&&(t.mutateOptions.onError==null||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),e.listeners&&t.listeners.forEach(function(c){c(t.currentResult)})})},u}(m);function C(a,u,s){var r=o.useRef(!1),e=o.useState(0),t=e[1],c=O(a,u,s),p=M(),n=o.useRef();n.current?n.current.setOptions(c):n.current=new g(p,c);var i=n.current.getCurrentResult();o.useEffect(function(){r.current=!0;var l=n.current.subscribe(d.batchCalls(function(){r.current&&t(function(f){return f+1})}));return function(){r.current=!1,l()}},[]);var v=o.useCallback(function(l,f){n.current.mutate(l,f).catch(y)},[]);if(i.error&&S(void 0,n.current.options.useErrorBoundary,[i.error]))throw i.error;return h({},i,{mutate:v,mutateAsync:i.mutate})}export{C as u};
