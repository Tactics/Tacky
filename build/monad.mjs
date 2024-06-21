var a=class r{constructor(t){this.value=t;}static of(t){return new r(t)}bind(t){return t(this.value)}unwrap(){return this.value}map(t){let e=t(this.value);return r.of(e)}};var l=class r{static of(){return new r}bind(t){return this}unwrap(){throw new Error("Value of None cannot be unwrapped")}map(t){return this}};var s=class r{constructor(){this.contexts={};}static empty(){return new r}get(t){return this.contexts[t]?a.of(this.contexts[t]):l.of()}add(t,e){let o=new r;return o.contexts={...this.contexts},o.contexts[t]=e,o}remove(t){let e=new r;return e.contexts={...this.contexts},delete e.contexts[t],e}*[Symbol.iterator](){for(let t in this.contexts)yield this.contexts[t];}};var i=class r{constructor(){this.traces=[];}static empty(){return new r}add(t){let e=new r;return e.traces=[...this.traces,t],e}*[Symbol.iterator](){for(let t of this.traces)yield t;}};var m=class r{constructor(t,e){this.message=t,this.time=e;}static from(t,e){return new r(t,e)}read(){return this.message}at(){return this.time}};var u=class r{constructor(t,e,o,c,n){this.message=t,this.name="Failure",this.code=e,this.traces=o,this.contexts=c,this.previous=n;}static dueTo(t,e,o,c,n,p){return n=n??i.empty(),c?n.add(c):n.add(m.from(t,Date.now())),p=p??s.empty(),new r(t,e,n,p,o||null)}bind(t){return this}map(t){return this}lift(t){return this}unwrap(){throw new Error("Value of Failure can not be unwrapped")}getTraces(){return this.traces}withTrace(t){return this.traces.add(t),this}withContext(t,e){return this.contexts.add(t,e),this}getContext(t){return this.contexts.get(t)}getContexts(){return this.contexts}clearContext(t){return this.contexts.remove(t),this}};var x=class r{constructor(t,e,o){this.value=t,this.traces=e,this.contexts=o;}static of(t,e,o){return new r(t,e??i.empty(),o??s.empty())}bind(t){return t(this.value)}lift(t){return new r(t,this.traces,this.contexts)}map(t){return new r(t(this.value),this.traces,this.contexts)}unwrap(){return this.value}getTraces(){return this.traces}withTrace(t){return this.traces.add(t),this}withContext(t,e){return this.contexts.add(t,e),this}getContext(t){return this.contexts.get(t)}getContexts(){return this.contexts}clearContext(t){return this.contexts.remove(t),this}};var h=class{};

export { h as Awaiting, s as ContextCollection, u as Failure, l as None, a as Some, x as Success, i as TraceCollection };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=monad.mjs.map