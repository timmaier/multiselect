import{toRefs as e,ref as t,computed as u,watch as n,getCurrentInstance as a,nextTick as l}from"@vue/composition-api";function r(e){return-1!==[null,void 0,!1].indexOf(e)}function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,n)}return u}function s(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?c(Object(u),!0).forEach((function(t){v(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):c(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}function v(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}function p(l,c,p){var d=e(l),f=d.options,g=d.mode,b=d.trackBy,m=d.limit,h=d.hideSelected,D=d.createTag,y=d.createOption,O=d.label,_=d.appendNewTag,F=d.appendNewOption,S=d.multipleLabel,A=d.object,C=d.loading,E=d.delay,P=d.resolveOnLoad,B=d.minChars,L=d.filterResults,w=d.clearOnSearch,q=d.clearOnSelect,k=(d.searchOnEmpty,d.valueProp),x=d.canDeselect,T=d.max,j=d.strict,I=d.closeOnSelect,R=d.groups,V=(d.groupLabel,d.groupOptions),H=d.groupHideEmpty,N=d.groupSelect,G=a().proxy,M=p.iv,$=p.ev,U=p.search,W=p.clearSearch,K=p.update,X=p.pointer,z=p.clearPointer,J=p.blur,Q=p.focus,Y=p.deactivate,Z=t([]),ee=t([]),te=t(!1),ue=t(null),ne=u((function(){return D.value||y.value||!1})),ae=u((function(){return void 0!==_.value?_.value:void 0===F.value||F.value})),le=u((function(){if(R.value){var e=ee.value||[],t=[];return e.forEach((function(e){ke(e[V.value]).forEach((function(u){t.push(Object.assign({},u,e.disabled?{disabled:!0}:{}))}))})),t}var u=ke(ee.value||[]);return Z.value.length&&(u=u.concat(Z.value)),u})),re=u((function(){return R.value?we((ee.value||[]).map((function(e){var t,u=ke(e[V.value]);return s(s({},e),{},(v(t={group:!0},V.value,qe(u,!1).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),v(t,"__VISIBLE__",qe(u).map((function(t){return Object.assign({},t,e.disabled?{disabled:!0}:{})}))),t))}))):[]})),ie=u((function(){var e=le.value;return pe.value.length&&(e=pe.value.concat(e)),e=qe(e),m.value>0&&(e=e.slice(0,m.value)),e})),oe=u((function(){switch(g.value){case"single":return!r(M.value[k.value]);case"multiple":case"tags":return!r(M.value)&&M.value.length>0}})),ce=u((function(){return void 0!==S&&void 0!==S.value?S.value(M.value,G):M.value&&M.value.length>1?"".concat(M.value.length," options selected"):"1 option selected"})),se=u((function(){return!le.value.length&&!te.value&&!pe.value.length})),ve=u((function(){return le.value.length>0&&0==ie.value.length&&(U.value&&R.value||!R.value)})),pe=u((function(){var e;return!1!==ne.value&&U.value?-1!==Pe(U.value)?[]:[(e={},v(e,k.value,U.value),v(e,O.value,U.value),v(e,de.value,U.value),e)]:[]})),de=u((function(){return b.value||O.value})),fe=u((function(){switch(g.value){case"single":return null;case"multiple":case"tags":return[]}})),ge=u((function(){return C.value||te.value})),be=function(e){switch("object"!==o(e)&&(e=Ee(e)),g.value){case"single":K(e);break;case"multiple":case"tags":K(M.value.concat(e))}c.emit("select",he(e),e)},me=function(e){switch("object"!==o(e)&&(e=Ee(e)),g.value){case"single":ye();break;case"tags":case"multiple":K(Array.isArray(e)?M.value.filter((function(t){return-1===e.map((function(e){return e[k.value]})).indexOf(t[k.value])})):M.value.filter((function(t){return t[k.value]!=e[k.value]})))}c.emit("deselect",he(e),e)},he=function(e){return A.value?e:e[k.value]},De=function(e){me(e)},ye=function(){c.emit("clear"),K(fe.value)},Oe=function(e){if(void 0!==e.group)return"single"!==g.value&&(Ce(e[V.value])&&e[V.value].length);switch(g.value){case"single":return!r(M.value)&&M.value[k.value]==e[k.value];case"tags":case"multiple":return!r(M.value)&&-1!==M.value.map((function(e){return e[k.value]})).indexOf(e[k.value])}},_e=function(e){return!0===e.disabled},Fe=function(){return!(void 0===T||-1===T.value||!oe.value&&T.value>0)&&M.value.length>=T.value},Se=function(e){void 0===Ee(e[k.value])&&ne.value&&(c.emit("tag",e[k.value]),c.emit("option",e[k.value]),ae.value&&Le(e),W())},Ae=function(e){return void 0===e.find((function(e){return!Oe(e)&&!e.disabled}))},Ce=function(e){return void 0===e.find((function(e){return!Oe(e)}))},Ee=function(e){return le.value[le.value.map((function(e){return String(e[k.value])})).indexOf(String(e))]},Pe=function(e){return le.value.map((function(e){return e[de.value]})).indexOf(e)},Be=function(e){return-1!==["tags","multiple"].indexOf(g.value)&&h.value&&Oe(e)},Le=function(e){Z.value.push(e)},we=function(e){return H.value?e.filter((function(e){return U.value?e.__VISIBLE__.length:e[V.value].length})):e.filter((function(e){return!U.value||e.__VISIBLE__.length}))},qe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],u=e;return U.value&&L.value&&(u=u.filter((function(e){return-1!==i(e[de.value],j.value).indexOf(i(U.value,j.value))}))),h.value&&t&&(u=u.filter((function(e){return!Be(e)}))),u},ke=function(e){var t,u=e;return t=u,"[object Object]"===Object.prototype.toString.call(t)&&(u=Object.keys(u).map((function(e){var t,n=u[e];return v(t={},k.value,e),v(t,de.value,n),v(t,O.value,n),t}))),u=u.map((function(e){var t;return"object"===o(e)?e:(v(t={},k.value,e),v(t,de.value,e),v(t,O.value,e),t)}))},xe=function(){r($.value)||(M.value=Ie($.value))},Te=function(e){return te.value=!0,new Promise((function(t,u){f.value(U.value,G).then((function(t){ee.value=t||[],"function"==typeof e&&e(t),te.value=!1})).catch((function(e){console.error(e),ee.value=[],te.value=!1})).finally((function(){t()}))}))},je=function(){if(oe.value)if("single"===g.value){var e=Ee(M.value[k.value]);if(void 0!==e){var t=e[O.value];M.value[O.value]=t,A.value&&($.value[O.value]=t)}}else M.value.forEach((function(e,t){var u=Ee(M.value[t][k.value]);if(void 0!==u){var n=u[O.value];M.value[t][O.value]=n,A.value&&($.value[t][O.value]=n)}}))},Ie=function(e){return r(e)?"single"===g.value?{}:[]:A.value?e:"single"===g.value?Ee(e)||{}:e.filter((function(e){return!!Ee(e)})).map((function(e){return Ee(e)}))},Re=function(){ue.value=n(U,(function(e){e.length<B.value||(te.value=!0,w.value&&(ee.value=[]),setTimeout((function(){e==U.value&&f.value(U.value,G).then((function(t){e!=U.value&&U.value||(ee.value=t,X.value=ie.value.filter((function(e){return!0!==e.disabled}))[0]||null,te.value=!1)})).catch((function(e){console.error(e)}))}),E.value))}),{flush:"sync"})};if("single"!==g.value&&!r($.value)&&!Array.isArray($.value))throw new Error('v-model must be an array when using "'.concat(g.value,'" mode'));return f&&"function"==typeof f.value?P.value?Te(xe):1==A.value&&xe():(ee.value=f.value,xe()),E.value>-1&&Re(),n(E,(function(e,t){ue.value&&ue.value(),e>=0&&Re()})),n($,(function(e){var t,u,n;if(r(e))M.value=Ie(e);else switch(g.value){case"single":(A.value?e[k.value]!=M.value[k.value]:e!=M.value[k.value])&&(M.value=Ie(e));break;case"multiple":case"tags":t=A.value?e.map((function(e){return e[k.value]})):e,u=M.value.map((function(e){return e[k.value]})),n=u.slice().sort(),t.length===u.length&&t.slice().sort().every((function(e,t){return e===n[t]}))||(M.value=Ie(e))}}),{deep:!0}),n(f,(function(e,t){"function"==typeof l.options?P.value&&Te((function(){Object.keys(M.value).length&&xe()})):(ee.value=l.options,Object.keys(M.value).length||xe(),je())})),n(O,je),{fo:ie,filteredOptions:ie,hasSelected:oe,multipleLabelText:ce,eo:le,extendedOptions:le,fg:re,filteredGroups:re,noOptions:se,noResults:ve,resolving:te,busy:ge,select:be,deselect:me,remove:De,selectAll:function(){"single"!==g.value&&be(ie.value)},clear:ye,isSelected:Oe,isDisabled:_e,isMax:Fe,getOption:Ee,handleOptionClick:function(e){if(!_e(e)){switch(g.value){case"single":if(Oe(e))return void(x.value&&me(e));Se(e),J(),be(e);break;case"multiple":if(Oe(e))return void me(e);if(Fe())return;Se(e),be(e),q.value&&W(),h.value&&z(),I.value&&J();break;case"tags":if(Oe(e))return void me(e);if(Fe())return;Se(e),q.value&&W(),be(e),h.value&&z(),I.value&&J()}I.value?Y():Q()}},handleGroupClick:function(e){if(!_e(e)&&"single"!==g.value&&N.value){switch(g.value){case"multiple":case"tags":Ae(e[V.value])?me(e[V.value]):be(e[V.value].filter((function(e){return-1===M.value.map((function(e){return e[k.value]})).indexOf(e[k.value])})).filter((function(e){return!e.disabled})).filter((function(e,t){return M.value.length+1+t<=T.value||-1===T.value})))}I.value&&Y()}},handleTagRemove:function(e,t){0===t.button?De(e):t.preventDefault()},refreshOptions:function(e){Te(e)},resolveOptions:Te,refreshLabels:je}}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var u=Object.prototype.toString.call(e).slice(8,-1);"Object"===u&&e.constructor&&(u=e.constructor.name);if("Map"===u||"Set"===u)return Array.from(e);if("Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var u=0,n=new Array(t);u<t;u++)n[u]=e[u];return n}function g(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var u=Object.prototype.toString.call(e).slice(8,-1);"Object"===u&&e.constructor&&(u=e.constructor.name);if("Map"===u||"Set"===u)return Array.from(e);if("Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var u=0,n=new Array(t);u<t;u++)n[u]=e[u];return n}function m(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,n)}return u}function h(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}function D(t,n,a){var l=e(t),r=l.classes,i=l.disabled,o=l.openDirection,c=l.showOptions,s=a.isOpen,v=a.isPointed,p=a.isSelected,d=a.isDisabled,f=a.isActive,g=a.canPointGroups,b=a.resolving,D=a.fo,y=u((function(){return function(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?m(Object(u),!0).forEach((function(t){h(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):m(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},r.value)})),O=u((function(){return!!(s.value&&c.value&&(!b.value||b.value&&D.value.length))}));return{classList:u((function(){var e=y.value;return{container:[e.container].concat(i.value?e.containerDisabled:[]).concat(O.value&&"top"===o.value?e.containerOpenTop:[]).concat(O.value&&"top"!==o.value?e.containerOpen:[]).concat(f.value?e.containerActive:[]),spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(i.value?e.tagDisabled:[]),tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(s.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,dropdown:[e.dropdown].concat("top"===o.value?e.dropdownTop:[]).concat(s.value&&c.value&&O.value?[]:e.dropdownHidden),options:[e.options].concat("top"===o.value?e.optionsTop:[]),group:e.group,groupLabel:function(t){var u=[e.groupLabel];return v(t)?u.push(p(t)?e.groupLabelSelectedPointed:e.groupLabelPointed):p(t)&&g.value?u.push(d(t)?e.groupLabelSelectedDisabled:e.groupLabelSelected):d(t)&&u.push(e.groupLabelDisabled),g.value&&u.push(e.groupLabelPointable),u},groupOptions:e.groupOptions,option:function(t,u){var n=[e.option];return v(t)?n.push(p(t)?e.optionSelectedPointed:e.optionPointed):p(t)?n.push(d(t)?e.optionSelectedDisabled:e.optionSelected):(d(t)||u&&d(u))&&n.push(e.optionDisabled),n},noOptions:e.noOptions,noResults:e.noResults,fakeInput:e.fakeInput}})),showDropdown:O}}function y(e,t,u,n,a,l,r,i,o,c){"boolean"!=typeof r&&(o=i,i=r,r=!1);var s,v="function"==typeof u?u.options:u;if(e&&e.render&&(v.render=e.render,v.staticRenderFns=e.staticRenderFns,v._compiled=!0,a&&(v.functional=!0)),n&&(v._scopeId=n),l?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(l)},v._ssrRegister=s):t&&(s=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),s)if(v.functional){var p=v.render;v.render=function(e,t){return s.call(t),p(e,t)}}else{var d=v.beforeCreate;v.beforeCreate=d?[].concat(d,s):[s]}return u}const O={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},searchOnEmpty:{type:Boolean,required:!1,default:!1},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:[Object],default:()=>({})}},setup(a,i){const o=function(n,a){var l=e(n),r=l.value,i=l.modelValue,o=l.mode,c=l.valueProp,s=t("single"!==o.value?[]:{}),v=void 0!==a.expose?i:r,p=u((function(){return"single"===o.value?s.value[c.value]:s.value.map((function(e){return e[c.value]}))})),d=u((function(){return"single"!==o.value?s.value.map((function(e){return e[c.value]})).join(","):s.value[c.value]}));return{iv:s,internalValue:s,ev:v,externalValue:v,textValue:d,plainValue:p}}(a,i),c=function(u,n,a){var l=e(u),r=l.groupSelect,i=l.mode,o=l.groups,c=t(null),s=function(e){void 0===e||null!==e&&e.disabled||o.value&&e&&e.group&&("single"===i.value||!r.value)||(c.value=e)};return{pointer:c,setPointer:s,clearPointer:function(){s(null)}}}(a),s=function(u,n,a){var l=e(u).disabled,r=t(!1);return{isOpen:r,open:function(){r.value||l.value||(r.value=!0,n.emit("open"))},close:function(){r.value&&(r.value=!1,n.emit("close"))}}}(a,i),v=function(e,u,a){var l=t(null),r=t(null);return n(l,(function(e){u.emit("search-change",e)})),{search:l,input:r,clearSearch:function(){l.value=""},handleSearchInput:function(e){l.value=e.target.value},handlePaste:function(e){u.emit("paste",e)}}}(0,i),f=function(t,u,n){var a=e(t),l=a.object,i=a.valueProp,o=a.mode,c=n.iv,s=function(e){return l.value||r(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},v=function(e){return r(e)?"single"===o.value?{}:[]:e};return{update:function(e){c.value=v(e);var t=s(e);u.emit("change",t),u.emit("input",t),u.emit("update:modelValue",t)}}}(a,i,{iv:o.iv}),b=function(n,a,l){var r=e(n),i=r.searchable,o=r.disabled,c=l.input,s=l.open,v=l.close,p=l.clearSearch,d=t(null),f=t(!1),g=u((function(){return i.value||o.value?-1:0})),b=function(){i.value&&c.value.blur(),d.value.blur()},m=function(){i.value&&!o.value&&c.value.focus()},h=function(){f.value=!1,setTimeout((function(){f.value||(v(),p())}),1)};return{multiselect:d,tabindex:g,isActive:f,blur:b,focus:m,handleFocus:function(){m()},activate:function(){o.value||(f.value=!0,s())},deactivate:h,handleCaretClick:function(){h(),b()}}}(a,0,{input:v.input,open:s.open,close:s.close,clearSearch:v.clearSearch}),m=p(a,i,{ev:o.ev,iv:o.iv,search:v.search,clearSearch:v.clearSearch,update:f.update,pointer:c.pointer,clearPointer:c.clearPointer,blur:b.blur,focus:b.focus,deactivate:b.deactivate}),h=function(t,a,r){var i=e(t),o=i.valueProp,c=i.showOptions,s=i.searchable,v=i.groupLabel,p=i.groups,f=i.mode,g=i.groupSelect,b=r.fo,m=r.fg,h=r.handleOptionClick,D=r.handleGroupClick,y=r.search,O=r.pointer,_=r.setPointer,F=r.clearPointer,S=r.multiselect,A=u((function(){return b.value.filter((function(e){return!e.disabled}))})),C=u((function(){return m.value.filter((function(e){return!e.disabled}))})),E=u((function(){return"single"!==f.value&&g.value})),P=u((function(){return O.value&&O.value.group})),B=u((function(){return V(O.value)})),L=u((function(){var e=P.value?O.value:V(O.value),t=C.value.map((function(e){return e[v.value]})).indexOf(e[v.value]),u=C.value[t-1];return void 0===u&&(u=q.value),u})),w=u((function(){var e=C.value.map((function(e){return e.label})).indexOf(P.value?O.value[v.value]:V(O.value)[v.value])+1;return C.value.length<=e&&(e=0),C.value[e]})),q=u((function(){return d(C.value).slice(-1)[0]})),k=u((function(){return O.value.__VISIBLE__.filter((function(e){return!e.disabled}))[0]})),x=u((function(){var e=B.value.__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(O.value[o.value])-1]})),T=u((function(){var e=V(O.value).__VISIBLE__.filter((function(e){return!e.disabled}));return e[e.map((function(e){return e[o.value]})).indexOf(O.value[o.value])+1]})),j=u((function(){return d(L.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),I=u((function(){return d(q.value.__VISIBLE__.filter((function(e){return!e.disabled}))).slice(-1)[0]})),R=function(){_(A.value[0]||null)},V=function(e){return C.value.find((function(t){return-1!==t.__VISIBLE__.map((function(e){return e[o.value]})).indexOf(e[o.value])}))},H=function(){var e=S.value.querySelector("[data-pointed]");if(e){var t=e.parentElement.parentElement;p.value&&(t=P.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return n(y,(function(e){s.value&&(e.length&&c.value?R():F())})),{pointer:O,canPointGroups:E,isPointed:function(e){return!(!O.value||!(!e.group&&O.value[o.value]==e[o.value]||void 0!==e.group&&O.value[v.value]==e[v.value]))||void 0},setPointerFirst:R,selectPointer:function(){O.value&&!0!==O.value.disabled&&(P.value?D(O.value):h(O.value))},forwardPointer:function(){if(null===O.value)_((p.value&&E.value?C.value[0]:A.value[0])||null);else if(p.value&&E.value){var e=P.value?k.value:T.value;void 0===e&&(e=w.value),_(e||null)}else{var t=A.value.map((function(e){return e[o.value]})).indexOf(O.value[o.value])+1;A.value.length<=t&&(t=0),_(A.value[t]||null)}l((function(){H()}))},backwardPointer:function(){if(null===O.value){var e=A.value[A.value.length-1];p.value&&E.value&&void 0===(e=I.value)&&(e=q.value),_(e||null)}else if(p.value&&E.value){var t=P.value?j.value:x.value;void 0===t&&(t=P.value?L.value:B.value),_(t||null)}else{var u=A.value.map((function(e){return e[o.value]})).indexOf(O.value[o.value])-1;u<0&&(u=A.value.length-1),_(A.value[u]||null)}l((function(){H()}))}}}(a,0,{fo:m.fo,fg:m.fg,handleOptionClick:m.handleOptionClick,handleGroupClick:m.handleGroupClick,search:v.search,pointer:c.pointer,setPointer:c.setPointer,clearPointer:c.clearPointer,multiselect:b.multiselect}),y=function(t,n,a){var l=e(t),r=l.mode,i=l.addTagOn,o=l.openDirection,c=l.searchable,s=l.showOptions,v=l.valueProp,p=l.groups,d=l.addOptionOn,f=l.createTag,b=l.createOption,m=a.iv,h=a.update,D=a.search,y=a.setPointer,O=a.selectPointer,_=a.backwardPointer,F=a.forwardPointer,S=a.blur,A=a.fo,C=u((function(){return f.value||b.value||!1})),E=u((function(){return void 0!==i.value?i.value:void 0!==d.value?d.value:["enter"]})),P=function(){"tags"===r.value&&!s.value&&C.value&&c.value&&!p.value&&y(A.value[A.value.map((function(e){return e[v.value]})).indexOf(D.value)])};return{handleKeydown:function(e){switch(e.key){case"Backspace":if("single"===r.value)return;if(c.value&&-1===[null,""].indexOf(D.value))return;if(0===m.value.length)return;h(g(m.value).slice(0,-1));break;case"Enter":if(e.preventDefault(),-1===E.value.indexOf("enter")&&C.value)return;P(),O();break;case" ":if(!C.value&&!c.value)return e.preventDefault(),P(),void O();if(!C.value)return!1;if(-1===E.value.indexOf("space")&&C.value)return;e.preventDefault(),P(),O();break;case"Tab":case";":case",":if(-1===E.value.indexOf(e.key.toLowerCase())||!C.value)return;P(),O(),e.preventDefault();break;case"Escape":S();break;case"ArrowUp":if(e.preventDefault(),!s.value)return;"top"===o.value?F():_();break;case"ArrowDown":if(e.preventDefault(),!s.value)return;"top"===o.value?_():F()}},preparePointer:P}}(a,0,{iv:o.iv,update:f.update,search:v.search,setPointer:c.setPointer,selectPointer:h.selectPointer,backwardPointer:h.backwardPointer,forwardPointer:h.forwardPointer,blur:b.blur,fo:m.fo}),O=D(a,0,{isOpen:s.isOpen,isPointed:h.isPointed,canPointGroups:h.canPointGroups,isSelected:m.isSelected,isDisabled:m.isDisabled,isActive:b.isActive,resolving:m.resolving,fo:m.fo});return{...o,...s,...b,...c,...f,...v,...m,...h,...y,...O}}};var _=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{ref:"multiselect",class:e.classList.container,attrs:{tabindex:e.tabindex,id:e.id},on:{focusin:e.activate,focusout:e.deactivate,keydown:e.handleKeydown,focus:e.handleFocus}},["tags"!==e.mode&&e.searchable&&!e.disabled?[u("input",e._b({ref:"input",class:e.classList.search,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(t){return t.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",e.attrs,!1))]:e._e(),e._v(" "),"tags"==e.mode?[u("div",{class:e.classList.tags},[e._l(e.iv,(function(t,n,a){return e._t("tag",(function(){return[u("span",{key:a,class:e.classList.tag},[e._v("\n          "+e._s(t[e.label])+"\n          "),e.disabled?e._e():u("span",{class:e.classList.tagRemove,on:{click:function(u){return e.handleTagRemove(t,u)}}},[u("span",{class:e.classList.tagRemoveIcon})])])]}),{option:t,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),u("div",{class:e.classList.tagsSearchWrapper},[u("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?u("input",e._b({ref:"input",class:e.classList.tagsSearch,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(t){return t.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",e.attrs,!1)):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",(function(){return[u("div",{class:e.classList.singleLabel},[u("span",{class:e.classList.singleLabelText,domProps:{innerHTML:e._s(e.iv[e.label])}})])]}),{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",(function(){return[u("div",{class:e.classList.multipleLabel,domProps:{innerHTML:e._s(e.multipleLabelText)}})]}),{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",(function(){return[u("div",{class:e.classList.placeholder},[e._v("\n        "+e._s(e.placeholder)+"\n      ")])]}))],e._v(" "),e.busy&&e.isActive?e._t("spinner",(function(){return[u("span",{class:e.classList.spinner})]})):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",(function(){return[u("span",{class:e.classList.clear,on:{mousedown:e.clear}},[u("span",{class:e.classList.clearIcon})])]}),{clear:e.clear}):e._e(),e._v(" "),e.caret&&e.showOptions?e._t("caret",(function(){return[u("span",{class:e.classList.caret,on:{click:e.handleCaretClick}})]})):e._e(),e._v(" "),u("div",{class:e.classList.dropdown,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),u("ul",{class:e.classList.options},[e.groups?e._l(e.fg,(function(t,n,a){return u("li",{key:a,class:e.classList.group},[u("div",{class:e.classList.groupLabel(t),attrs:{"data-pointed":e.isPointed(t)},on:{mouseenter:function(u){return e.setPointer(t)},click:function(u){return e.handleGroupClick(t)}}},[e._t("grouplabel",(function(){return[u("span",{domProps:{innerHTML:e._s(t[e.groupLabel])}})]}),{group:t})],2),e._v(" "),u("ul",{class:e.classList.groupOptions},e._l(t.__VISIBLE__,(function(n,a,l){return u("li",{key:l,class:e.classList.option(n,t),attrs:{"data-pointed":e.isPointed(n)},on:{mouseenter:function(t){return e.setPointer(n)},click:function(t){return e.handleOptionClick(n)}}},[e._t("option",(function(){return[u("span",{domProps:{innerHTML:e._s(n[e.label])}})]}),{option:n,search:e.search})],2)})),0)])})):e._l(e.fo,(function(t,n,a){return u("li",{key:a,class:e.classList.option(t),attrs:{"data-pointed":e.isPointed(t)},on:{mouseenter:function(u){return e.setPointer(t)},click:function(u){return e.handleOptionClick(t)}}},[e._t("option",(function(){return[u("span",[e._v(e._s(t[e.label]))])]}),{option:t,search:e.search,selected:e.isSelected(t),pointed:e.isPointed(t)})],2)}))],2),e._v(" "),e.noOptions?e._t("nooptions",(function(){return[u("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.noOptionsText)}})]})):e._e(),e._v(" "),e.noResults?e._t("noresults",(function(){return[u("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.noResultsText)}})]})):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2),e._v(" "),e.required?u("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?u("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(t,n){return u("input",{key:n,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:t}})}))]:e._e(),e._v(" "),u("div",{class:e.classList.spacer})],2)};_._withStripped=!0;const F=y({render:_,staticRenderFns:[]},undefined,O,undefined,false,undefined,!1,void 0,void 0,void 0);export default F;
