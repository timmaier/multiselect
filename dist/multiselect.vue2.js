import{toRefs as e,ref as t,computed as u,watch as n,nextTick as a}from"@vue/composition-api";function l(e){return-1!==[null,void 0,!1].indexOf(e)}function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,n)}return u}function s(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?o(Object(u),!0).forEach((function(t){c(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):o(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}function c(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}function v(a,o,v){var p=e(a),d=p.options,f=p.mode,g=p.trackBy,b=p.limit,m=p.hideSelected,D=p.createTag,h=p.createOption,y=p.label,O=p.appendNewTag,_=p.appendNewOption,F=p.multipleLabel,A=p.object,S=p.loading,C=p.delay,E=p.resolveOnLoad,B=p.minChars,P=p.filterResults,L=p.clearOnSearch,w=p.clearOnSelect,k=p.valueProp,q=p.canDeselect,x=p.max,T=p.strict,j=p.closeOnSelect,I=p.groups,R=(p.groupLabel,p.groupOptions),V=p.groupHideEmpty,N=p.groupSelect,G=v.iv,H=v.ev,$=v.search,M=v.clearSearch,U=v.update,W=v.pointer,K=v.clearPointer,X=v.blur,z=v.focus,J=v.deactivate,Q=t([]),Y=t([]),Z=t(!1),ee=u((function(){return D.value||h.value||!1})),te=u((function(){return void 0!==O.value?O.value:void 0===_.value||_.value})),ue=u((function(){if(I.value){var e=Y.value||[],t=[];return e.forEach((function(e){Le(e[R.value]).forEach((function(u){t.push(Object.assign({},u,e.disabled?{disabled:!0}:{}))}))})),t}var u=Le(Y.value||[]);return Q.value.length&&(u=u.concat(Q.value)),u})),ne=u((function(){return I.value?Be((Y.value||[]).map((function(e){var t,u=Le(e[R.value]);return s(s({},e),{},(c(t={group:!0},R.value,Pe(u,!1).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),c(t,"__VISIBLE__",Pe(u).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),t))}))):[]})),ae=u((function(){var e=ue.value;return se.value.length&&(e=se.value.concat(e)),e=Pe(e),b.value>0&&(e=e.slice(0,b.value)),e})),le=u((function(){switch(f.value){case"single":return!l(G.value[k.value]);case"multiple":case"tags":return!l(G.value)&&G.value.length>0}})),re=u((function(){return void 0!==F&&void 0!==F.value?F.value(G.value):G.value&&G.value.length>1?"".concat(G.value.length," options selected"):"1 option selected"})),ie=u((function(){return!ue.value.length&&!Z.value&&!se.value.length})),oe=u((function(){return ue.value.length>0&&0==ae.value.length&&($.value&&I.value||!I.value)})),se=u((function(){var e;return!1!==ee.value&&$.value?-1!==Se($.value)?[]:[(e={},c(e,k.value,$.value),c(e,y.value,$.value),c(e,ce.value,$.value),e)]:[]})),ce=u((function(){return g.value||y.value})),ve=u((function(){switch(f.value){case"single":return null;case"multiple":case"tags":return[]}})),pe=u((function(){return S.value||Z.value})),de=function(e){switch("object"!==i(e)&&(e=Ae(e)),f.value){case"single":U(e);break;case"multiple":case"tags":U(G.value.concat(e))}o.emit("select",ge(e),e)},fe=function(e){switch("object"!==i(e)&&(e=Ae(e)),f.value){case"single":me();break;case"tags":case"multiple":U(Array.isArray(e)?G.value.filter((function(t){return-1===e.map((function(e){return e[k.value]})).indexOf(t[k.value])})):G.value.filter((function(t){return t[k.value]!=e[k.value]})))}o.emit("deselect",ge(e),e)},ge=function(e){return A.value?e:e[k.value]},be=function(e){fe(e)},me=function(){o.emit("clear"),U(ve.value)},De=function(e){if(void 0!==e.group)return"single"!==f.value&&(Fe(e[R.value])&&e[R.value].length);switch(f.value){case"single":return!l(G.value)&&G.value[k.value]==e[k.value];case"tags":case"multiple":return!l(G.value)&&-1!==G.value.map((function(e){return e[k.value]})).indexOf(e[k.value])}},he=function(e){return!0===e.disabled},ye=function(){return!(void 0===x||-1===x.value||!le.value&&x.value>0)&&G.value.length>=x.value},Oe=function(e){void 0===Ae(e[k.value])&&ee.value&&(o.emit("tag",e[k.value]),o.emit("option",e[k.value]),te.value&&Ee(e),M())},_e=function(e){return void 0===e.find((function(e){return!De(e)&&!e.disabled}))},Fe=function(e){return void 0===e.find((function(e){return!De(e)}))},Ae=function(e){return ue.value[ue.value.map((function(e){return String(e[k.value])})).indexOf(String(e))]},Se=function(e){return ue.value.map((function(e){return e[ce.value]})).indexOf(e)},Ce=function(e){return-1!==["tags","multiple"].indexOf(f.value)&&m.value&&De(e)},Ee=function(e){Q.value.push(e)},Be=function(e){return V.value?e.filter((function(e){return $.value?e.__VISIBLE__.length:e[R.value].length})):e.filter((function(e){return!$.value||e.__VISIBLE__.length}))},Pe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],u=e;return $.value&&P.value&&(u=u.filter((function(e){return-1!==r(e[ce.value],T.value).indexOf(r($.value,T.value))}))),m.value&&t&&(u=u.filter((function(e){return!Ce(e)}))),u},Le=function(e){var t,u=e;return t=u,"[object Object]"===Object.prototype.toString.call(t)&&(u=Object.keys(u).map((function(e){var t,n=u[e];return c(t={},k.value,e),c(t,ce.value,n),c(t,y.value,n),t}))),u=u.map((function(e){var t;return"object"===i(e)?e:(c(t={},k.value,e),c(t,ce.value,e),c(t,y.value,e),t)}))},we=function(){l(H.value)||(G.value=qe(H.value))},ke=function(e){Z.value=!0,d.value($.value).then((function(t){Y.value=t,"function"==typeof e&&e(t),Z.value=!1}))},qe=function(e){return l(e)?"single"===f.value?{}:[]:A.value?e:"single"===f.value?Ae(e)||{}:e.filter((function(e){return!!Ae(e)})).map((function(e){return Ae(e)}))};if("single"!==f.value&&!l(H.value)&&!Array.isArray(H.value))throw new Error('v-model must be an array when using "'.concat(f.value,'" mode'));return d&&"function"==typeof d.value?E.value?ke(we):1==A.value&&we():(Y.value=d.value,we()),C.value>-1&&n($,(function(e){e.length<B.value||(Z.value=!0,L.value&&(Y.value=[]),setTimeout((function(){e==$.value&&d.value($.value).then((function(t){e!=$.value&&$.value||(Y.value=t,W.value=ae.value.filter((function(e){return!0!==e.disabled}))[0]||null,Z.value=!1)}))}),C.value))}),{flush:"sync"}),n(H,(function(e){var t,u,n;if(l(e))G.value=qe(e);else switch(f.value){case"single":(A.value?e[k.value]!=G.value[k.value]:e!=G.value[k.value])&&(G.value=qe(e));break;case"multiple":case"tags":t=A.value?e.map((function(e){return e[k.value]})):e,u=G.value.map((function(e){return e[k.value]})),n=u.slice().sort(),t.length===u.length&&t.slice().sort().every((function(e,t){return e===n[t]}))||(G.value=qe(e))}}),{deep:!0}),"function"!=typeof a.options&&n(d,(function(e,t){Y.value=a.options,Object.keys(G.value).length||we(),function(){if(le.value)if("single"===f.value){var e=Ae(G.value[k.value])[y.value];G.value[y.value]=e,A.value&&(H.value[y.value]=e)}else G.value.forEach((function(e,t){var u=Ae(G.value[t][k.value])[y.value];G.value[t][y.value]=u,A.value&&(H.value[t][y.value]=u)}))}()})),{fo:ae,filteredOptions:ae,hasSelected:le,multipleLabelText:re,eo:ue,extendedOptions:ue,fg:ne,filteredGroups:ne,noOptions:ie,noResults:oe,resolving:Z,busy:pe,select:de,deselect:fe,remove:be,selectAll:function(){"single"!==f.value&&de(ae.value)},clear:me,isSelected:De,isDisabled:he,isMax:ye,getOption:Ae,handleOptionClick:function(e){if(!he(e)){switch(f.value){case"single":if(De(e))return void(q.value&&fe(e));Oe(e),X(),de(e);break;case"multiple":if(De(e))return void fe(e);if(ye())return;Oe(e),de(e),w.value&&M(),m.value&&K(),j.value&&X();break;case"tags":if(De(e))return void fe(e);if(ye())return;Oe(e),w.value&&M(),de(e),m.value&&K(),j.value&&X()}j.value?J():z()}},handleGroupClick:function(e){if(!he(e)&&"single"!==f.value&&N.value){switch(f.value){case"multiple":case"tags":_e(e[R.value])?fe(e[R.value]):de(e[R.value].filter((function(e){return-1===G.value.map((function(e){return e[k.value]})).indexOf(e[k.value])})).filter((function(e){return!e.disabled})).filter((function(e,t){return G.value.length+1+t<=x.value||-1===x.value})))}j.value&&J()}},handleTagRemove:function(e,t){0===t.button?be(e):t.preventDefault()},refreshOptions:function(e){ke(e)},resolveOptions:ke}}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var u=Object.prototype.toString.call(e).slice(8,-1);"Object"===u&&e.constructor&&(u=e.constructor.name);if("Map"===u||"Set"===u)return Array.from(e);if("Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var u=0,n=new Array(t);u<t;u++)n[u]=e[u];return n}function f(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var u=Object.prototype.toString.call(e).slice(8,-1);"Object"===u&&e.constructor&&(u=e.constructor.name);if("Map"===u||"Set"===u)return Array.from(e);if("Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var u=0,n=new Array(t);u<t;u++)n[u]=e[u];return n}function b(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,n)}return u}function m(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}function D(t,n,a){var l=e(t),r=l.classes,i=l.disabled,o=l.openDirection,s=l.showOptions,c=a.isOpen,v=a.isPointed,p=a.isSelected,d=a.isDisabled,f=a.isActive,g=a.canPointGroups,D=a.resolving,h=a.fo,y=u((function(){return function(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?b(Object(u),!0).forEach((function(t){m(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):b(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},r.value)})),O=u((function(){return!!(c.value&&s.value&&(!D.value||D.value&&h.value.length))}));return{classList:u((function(){var e=y.value;return{container:[e.container].concat(i.value?e.containerDisabled:[]).concat(O.value&&"top"===o.value?e.containerOpenTop:[]).concat(O.value&&"top"!==o.value?e.containerOpen:[]).concat(f.value?e.containerActive:[]),spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(i.value?e.tagDisabled:[]),tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(c.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,dropdown:[e.dropdown].concat("top"===o.value?e.dropdownTop:[]).concat(c.value&&s.value&&O.value?[]:e.dropdownHidden),options:[e.options].concat("top"===o.value?e.optionsTop:[]),group:e.group,groupLabel:function(t){var u=[e.groupLabel];return v(t)?u.push(p(t)?e.groupLabelSelectedPointed:e.groupLabelPointed):p(t)&&g.value?u.push(d(t)?e.groupLabelSelectedDisabled:e.groupLabelSelected):d(t)&&u.push(e.groupLabelDisabled),g.value&&u.push(e.groupLabelPointable),u},groupOptions:e.groupOptions,option:function(t,u){var n=[e.option];return v(t)?n.push(p(t)?e.optionSelectedPointed:e.optionPointed):p(t)?n.push(d(t)?e.optionSelectedDisabled:e.optionSelected):(d(t)||u&&d(u))&&n.push(e.optionDisabled),n},noOptions:e.noOptions,noResults:e.noResults,fakeInput:e.fakeInput}})),showDropdown:O}}function h(e,t,u,n,a,l,r,i,o,s){"boolean"!=typeof r&&(o=i,i=r,r=!1);var c,v="function"==typeof u?u.options:u;if(e&&e.render&&(v.render=e.render,v.staticRenderFns=e.staticRenderFns,v._compiled=!0,a&&(v.functional=!0)),n&&(v._scopeId=n),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(l)},v._ssrRegister=c):t&&(c=r?function(e){t.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),c)if(v.functional){var p=v.render;v.render=function(e,t){return c.call(t),p(e,t)}}else{var d=v.beforeCreate;v.beforeCreate=d?[].concat(d,c):[c]}return u}const y={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"}},setup(r,i){const o=function(n,a){var l=e(n),r=l.value,i=l.modelValue,o=l.mode,s=l.valueProp,c=t("single"!==o.value?[]:{}),v=void 0!==a.expose?i:r,p=u((function(){return"single"===o.value?c.value[s.value]:c.value.map((function(e){return e[s.value]}))})),d=u((function(){return"single"!==o.value?c.value.map((function(e){return e[s.value]})).join(","):c.value[s.value]}));return{iv:c,internalValue:c,ev:v,externalValue:v,textValue:d,plainValue:p}}(r,i),s=function(u,n,a){var l=e(u),r=l.groupSelect,i=l.mode,o=l.groups,s=t(null),c=function(e){void 0===e||null!==e&&e.disabled||o.value&&e&&e.group&&("single"===i.value||!r.value)||(s.value=e)};return{pointer:s,setPointer:c,clearPointer:function(){c(null)}}}(r),c=function(u,n,a){var l=e(u).disabled,r=t(!1);return{isOpen:r,open:function(){r.value||l.value||(r.value=!0,n.emit("open"))},close:function(){r.value&&(r.value=!1,n.emit("close"))}}}(r,i),d=function(e,u,a){var l=t(null),r=t(null);return n(l,(function(e){u.emit("search-change",e)})),{search:l,input:r,clearSearch:function(){l.value=""},handleSearchInput:function(e){l.value=e.target.value},handlePaste:function(e){u.emit("paste",e)}}}(0,i),g=function(t,u,n){var a=e(t),r=a.object,i=a.valueProp,o=a.mode,s=n.iv,c=function(e){return r.value||l(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},v=function(e){return l(e)?"single"===o.value?{}:[]:e};return{update:function(e){s.value=v(e);var t=c(e);u.emit("change",t),u.emit("input",t),u.emit("update:modelValue",t)}}}(r,i,{iv:o.iv}),b=function(n,a,l){var r=e(n),i=r.searchable,o=r.disabled,s=l.input,c=l.open,v=l.close,p=l.clearSearch,d=t(null),f=t(!1),g=u((function(){return i.value||o.value?-1:0})),b=function(){i.value&&s.value.blur(),d.value.blur()},m=function(){i.value&&!o.value&&s.value.focus()},D=function(){f.value=!1,setTimeout((function(){f.value||(v(),p())}),1)};return{multiselect:d,tabindex:g,isActive:f,blur:b,focus:m,handleFocus:function(){m()},activate:function(){o.value||(f.value=!0,c())},deactivate:D,handleCaretClick:function(){D(),b()}}}(r,0,{input:d.input,open:c.open,close:c.close,clearSearch:d.clearSearch}),m=v(r,i,{ev:o.ev,iv:o.iv,search:d.search,clearSearch:d.clearSearch,update:g.update,pointer:s.pointer,clearPointer:s.clearPointer,blur:b.blur,focus:b.focus,deactivate:b.deactivate}),h=function(t,l,r){var i=e(t),o=i.valueProp,s=i.showOptions,c=i.searchable,v=i.groupLabel,d=i.groups,f=i.mode,g=i.groupSelect,b=r.fo,m=r.fg,D=r.handleOptionClick,h=r.handleGroupClick,y=r.search,O=r.pointer,_=r.setPointer,F=r.clearPointer,A=r.multiselect,S=u((function(){return b.value.filter((function(e){return!e.disabled}))})),C=u((function(){return m.value.filter((function(e){return!e.disabled}))})),E=u((function(){return"single"!==f.value&&g.value})),B=u((function(){return O.value&&O.value.group})),P=u((function(){return V(O.value)})),L=u((function(){var e=B.value?O.value:V(O.value),t=C.value.map((function(e){return e[v.value]})).indexOf(e[v.value]),u=C.value[t-1];return void 0===u&&(u=k.value),u})),w=u((function(){var e=C.value.map((function(e){return e.label})).indexOf(B.value?O.value[v.value]:V(O.value)[v.value])+1;return C.value.length<=e&&(e=0),C.value[e]})),k=u((function(){return p(C.value).slice(-1)[0]})),q=u((function(){return O.value.__VISIBLE__.filter((function(e){return!e.disabled}))[0]})),x=u((function(){var e=P.value.__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(O.value[o.value])-1]})),T=u((function(){var e=V(O.value).__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(O.value[o.value])+1]})),j=u((function(){return p(L.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),I=u((function(){return p(k.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),R=function(){_(S.value[0]||null)},V=function(e){return C.value.find((function(t){return-1!==t.__VISIBLE__.map((function(e){return e[o.value]})).indexOf(e[o.value])}))},N=function(){var e=A.value.querySelector("[data-pointed]");if(e){var t=e.parentElement.parentElement;d.value&&(t=B.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return n(y,(function(e){c.value&&(e.length&&s.value?R():F())})),{pointer:O,canPointGroups:E,isPointed:function(e){return!(!O.value||!(!e.group&&O.value[o.value]==e[o.value]||void 0!==e.group&&O.value[v.value]==e[v.value]))||void 0},setPointerFirst:R,selectPointer:function(){O.value&&!0!==O.value.disabled&&(B.value?h(O.value):D(O.value))},forwardPointer:function(){if(null===O.value)_((d.value&&E.value?C.value[0]:S.value[0])||null);else if(d.value&&E.value){var e=B.value?q.value:T.value;void 0===e&&(e=w.value),_(e||null)}else{var t=S.value.map((function(e){return e[o.value]})).indexOf(O.value[o.value])+1;S.value.length<=t&&(t=0),_(S.value[t]||null)}a((function(){N()}))},backwardPointer:function(){if(null===O.value){var e=S.value[S.value.length-1];d.value&&E.value&&void 0===(e=I.value)&&(e=k.value),_(e||null)}else if(d.value&&E.value){var t=B.value?j.value:x.value;void 0===t&&(t=B.value?L.value:P.value),_(t||null)}else{var u=S.value.map((function(e){return e[o.value]})).indexOf(O.value[o.value])-1;u<0&&(u=S.value.length-1),_(S.value[u]||null)}a((function(){N()}))}}}(r,0,{fo:m.fo,fg:m.fg,handleOptionClick:m.handleOptionClick,handleGroupClick:m.handleGroupClick,search:d.search,pointer:s.pointer,setPointer:s.setPointer,clearPointer:s.clearPointer,multiselect:b.multiselect}),y=function(t,n,a){var l=e(t),r=l.mode,i=l.addTagOn,o=l.openDirection,s=l.searchable,c=l.showOptions,v=l.valueProp,p=l.groups,d=l.addOptionOn,g=l.createTag,b=l.createOption,m=a.iv,D=a.update,h=a.search,y=a.setPointer,O=a.selectPointer,_=a.backwardPointer,F=a.forwardPointer,A=a.blur,S=a.fo,C=u((function(){return g.value||b.value||!1})),E=u((function(){return void 0!==i.value?i.value:void 0!==d.value?d.value:["enter"]})),B=function(){"tags"===r.value&&!c.value&&C.value&&s.value&&!p.value&&y(S.value[S.value.map((function(e){return e[v.value]})).indexOf(h.value)])};return{handleKeydown:function(e){switch(e.key){case"Backspace":if("single"===r.value)return;if(s.value&&-1===[null,""].indexOf(h.value))return;if(0===m.value.length)return;D(f(m.value).slice(0,-1));break;case"Enter":if(e.preventDefault(),-1===E.value.indexOf("enter")&&C.value)return;B(),O();break;case" ":if(!C.value&&!s.value)return e.preventDefault(),B(),void O();if(!C.value)return!1;if(-1===E.value.indexOf("space")&&C.value)return;e.preventDefault(),B(),O();break;case"Tab":case";":case",":if(-1===E.value.indexOf(e.key.toLowerCase())||!C.value)return;B(),O(),e.preventDefault();break;case"Escape":A();break;case"ArrowUp":if(e.preventDefault(),!c.value)return;"top"===o.value?F():_();break;case"ArrowDown":if(e.preventDefault(),!c.value)return;"top"===o.value?_():F()}},preparePointer:B}}(r,0,{iv:o.iv,update:g.update,search:d.search,setPointer:s.setPointer,selectPointer:h.selectPointer,backwardPointer:h.backwardPointer,forwardPointer:h.forwardPointer,blur:b.blur,fo:m.fo}),O=D(r,0,{isOpen:c.isOpen,isPointed:h.isPointed,canPointGroups:h.canPointGroups,isSelected:m.isSelected,isDisabled:m.isDisabled,isActive:b.isActive,resolving:m.resolving,fo:m.fo});return{...o,...c,...b,...s,...g,...d,...m,...h,...y,...O}}};var O=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{ref:"multiselect",class:e.classList.container,attrs:{tabindex:e.tabindex,id:e.id},on:{focusin:e.activate,focusout:e.deactivate,keydown:e.handleKeydown,focus:e.handleFocus}},["tags"!==e.mode&&e.searchable&&!e.disabled?[u("input",{ref:"input",class:e.classList.search,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(t){return t.stopPropagation(),e.handlePaste(t)}}})]:e._e(),e._v(" "),"tags"==e.mode?[u("div",{class:e.classList.tags},[e._l(e.iv,(function(t,n,a){return e._t("tag",[u("span",{key:a,class:e.classList.tag},[e._v("\n          "+e._s(t[e.label])+"\n          "),e.disabled?e._e():u("span",{class:e.classList.tagRemove,on:{click:function(u){return e.handleTagRemove(t,u)}}},[u("span",{class:e.classList.tagRemoveIcon})])])],{option:t,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),u("div",{class:e.classList.tagsSearchWrapper},[u("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?u("input",{ref:"input",class:e.classList.tagsSearch,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(t){return t.stopPropagation(),e.handlePaste(t)}}}):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",[u("div",{class:e.classList.singleLabel},[u("span",{class:e.classList.singleLabelText},[e._v(e._s(e.iv[e.label]))])])],{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",[u("div",{class:e.classList.multipleLabel},[e._v("\n        "+e._s(e.multipleLabelText)+"\n      ")])],{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",[u("div",{class:e.classList.placeholder},[e._v("\n        "+e._s(e.placeholder)+"\n      ")])])],e._v(" "),e.busy&&e.isActive?e._t("spinner",[u("span",{class:e.classList.spinner})]):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",[u("span",{class:e.classList.clear,on:{mousedown:e.clear}},[u("span",{class:e.classList.clearIcon})])],{clear:e.clear}):e._e(),e._v(" "),e.caret&&e.showOptions?e._t("caret",[u("span",{class:e.classList.caret,on:{click:e.handleCaretClick}})]):e._e(),e._v(" "),u("div",{class:e.classList.dropdown,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),u("ul",{class:e.classList.options},[e.groups?e._l(e.fg,(function(t,n,a){return u("li",{key:a,class:e.classList.group},[u("div",{class:e.classList.groupLabel(t),attrs:{"data-pointed":e.isPointed(t)},on:{mouseenter:function(u){return e.setPointer(t)},click:function(u){return e.handleGroupClick(t)}}},[e._t("grouplabel",[u("span",[e._v(e._s(t[e.groupLabel]))])],{group:t})],2),e._v(" "),u("ul",{class:e.classList.groupOptions},e._l(t.__VISIBLE__,(function(n,a,l){return u("li",{key:l,class:e.classList.option(n,t),attrs:{"data-pointed":e.isPointed(n)},on:{mouseenter:function(t){return e.setPointer(n)},click:function(t){return e.handleOptionClick(n)}}},[e._t("option",[u("span",[e._v(e._s(n[e.label]))])],{option:n,search:e.search})],2)})),0)])})):e._l(e.fo,(function(t,n,a){return u("li",{key:a,class:e.classList.option(t),attrs:{"data-pointed":e.isPointed(t)},on:{mouseenter:function(u){return e.setPointer(t)},click:function(u){return e.handleOptionClick(t)}}},[e._t("option",[u("span",[e._v(e._s(t[e.label]))])],{option:t,search:e.search})],2)}))],2),e._v(" "),e.noOptions?e._t("nooptions",[u("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.noOptionsText)}})]):e._e(),e._v(" "),e.noResults?e._t("noresults",[u("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.noResultsText)}})]):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2),e._v(" "),e.required?u("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?u("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(t,n){return u("input",{key:n,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:t}})}))]:e._e(),e._v(" "),u("div",{class:e.classList.spacer})],2)};O._withStripped=!0;const _=h({render:O,staticRenderFns:[]},undefined,y,undefined,false,undefined,!1,void 0,void 0,void 0);export default _;
