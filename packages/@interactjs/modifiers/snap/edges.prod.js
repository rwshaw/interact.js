import t from"../../utils/clone.prod.js";import e from"../../utils/extend.prod.js";import{makeModifier as s}from"../base.prod.js";import{snapSize as r}from"./size.prod.js";const o={start(t){const{edges:e}=t;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],r.start(t)):null},set:r.set,defaults:e(t(r.defaults),{targets:null,range:null,offset:{x:0,y:0}})};export default s(o,"snapEdges");export{o as snapEdges};
//# sourceMappingURL=edges.prod.js.map