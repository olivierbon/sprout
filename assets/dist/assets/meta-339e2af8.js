import"./addressField-c5a66b02.js";import"./emailField-b0a45f50.js";import"./phoneField-bb6f10b1.js";(function(s){s.fn.caret=function(e){var t=this[0],a=t.contentEditable==="true";if(arguments.length==0){if(window.getSelection){if(a){t.focus();var i=window.getSelection().getRangeAt(0),o=i.cloneRange();return o.selectNodeContents(t),o.setEnd(i.endContainer,i.endOffset),o.toString().length}return t.selectionStart}if(document.selection){if(t.focus(),a){var i=document.selection.createRange(),o=document.body.createTextRange();return o.moveToElementText(t),o.setEndPoint("EndToEnd",i),o.text.length}var e=0,n=t.createTextRange(),o=document.selection.createRange().duplicate(),l=o.getBookmark();for(n.moveToBookmark(l);n.moveStart("character",-1)!==0;)e++;return e}return t.selectionStart?t.selectionStart:0}if(e==-1&&(e=this[a?"text":"val"]().length),window.getSelection)a?(t.focus(),window.getSelection().collapse(t.firstChild,e)):t.setSelectionRange(e,e);else if(document.body.createTextRange)if(a){var n=document.body.createTextRange();n.moveToElementText(t),n.moveStart("character",e),n.collapse(!0),n.select()}else{var n=t.createTextRange();n.move("character",e),n.select()}return a||t.focus(),e}})(jQuery);class y{constructor(e){this.fieldHandle=e.fieldHandle,this.metaBadgeInfo=e.metaBadgeInfo,this.maxDescriptionLength=e.maxDescriptionLength,this.initMetadataFieldButtons(),this.addMetaBadgesToUi()}initMetadataFieldButtons(){let e=this,t="fields-"+this.fieldHandle+"-meta-details-tabs";this.metaDetailsTabs=document.querySelectorAll("#"+t+" div.btn");let a="fields-"+this.fieldHandle+"-meta-details-body";if(this.metaDetailsBodyContainers=document.querySelectorAll("#"+a+" div.matrixblock"),!(this.metaDetailsBodyContainers.length<1)){for(let i of this.metaDetailsTabs)i.addEventListener("click",function(o){let n=$(o.target);n.is("div")||(n=n.closest("div.btn"));let l=$("#fields-projectsMetadata-meta-details-tabs .active");if(n.is(l))return!0;let r=n.attr("data-type"),c="#fields-"+e.fieldHandle+"-meta-details-body .fields-"+r,h=document.querySelector(c);for(let d of e.metaDetailsTabs)d.classList.remove("active");for(let d of e.metaDetailsBodyContainers)d.style.display="none";$(h).show(),n.addClass("active")});$(this.metaDetailsBodyContainers[0]).show(),this.metaDetailsTabs[0].classList.add("active")}}addMetaBadgesToUi(){let e=this;for(let t in this.metaBadgeInfo){let a=this.metaBadgeInfo[t].type,i=this.metaBadgeInfo[t].handle,o=this.metaBadgeInfo[t].badgeClass,n=document.querySelector("div."+o).innerHTML,l="#fields-"+i+"-label",r="#fields-"+i+"-field input",c=$(r);if(i==="title"&&(l="#title-label",c=$("#title")),e.appendMetaBadge(l,n),Craft.initUiElements($(l)),a==="optimizedTitleField"&&(c.attr("maxlength",60),new Garnish.NiceText(c,{showCharsLeft:!0})),a==="optimizedDescriptionField"){let h="#fields-"+i+"-field textarea",d=$(h);d.attr("maxlength",e.maxDescriptionLength),new Garnish.NiceText(d,{showCharsLeft:!0})}}}getCustomizationSettings(e){return $("input[name='fields["+this.fieldHandle+"][metadata]["+e+"]']")}appendMetaBadge(e,t){$(e).find(".sprout-info").length===0&&$(e).append(t).removeClass("hidden")}}class w{constructor(e){this.keywordsFieldId=e.keywordsFieldId,this.initKeywordsField()}initKeywordsField(){}}window.SproutMetaMetadataField=y;window.SproutMetaKeywordsField=w;typeof Craft.SproutMeta>"u"&&(Craft.SproutMeta={});Craft.SproutMeta.EditableTable=Garnish.Base.extend({initialized:!1,id:null,baseName:null,columns:null,sorter:null,biggestId:-1,$table:null,$tbody:null,$addRowBtn:null,init:function(s,e,t,a){this.id=s,this.baseName=e,this.columns=t,this.setSettings(a,Craft.SproutMeta.EditableTable.defaults),this.$table=$("#"+s),this.$tbody=this.$table.children("tbody"),this.sorter=new Craft.DataTableSorter(this.$table,{helperClass:"editabletablesorthelper",copyDraggeeInputValuesToHelper:!0}),this.isVisible()?this.initialize():this.addListener(Garnish.$win,"resize","initializeIfVisible")},isVisible:function(){return this.$table.height()>0},initialize:function(){if(this.initialized)return;this.initialized=!0,this.removeListener(Garnish.$win,"resize");const s=this.$tbody.children();for(let e=0;e<s.length;e++)new Craft.SproutMeta.EditableTable.Row(this,s[e]);this.$addRowBtn=this.$table.next(".buttons").children(".add"),this.addListener(this.$addRowBtn,"activate","addRow")},initializeIfVisible:function(){this.isVisible()&&this.initialize()},addRow:function(){const s=this.settings.rowIdPrefix+(this.biggestId+1),e=Craft.SproutMeta.EditableTable.getRowHtml(s,this.columns,this.baseName,{}),t=$(e).appendTo(this.$tbody);new Craft.SproutMeta.EditableTable.Row(this,t),this.sorter.addItems(t),t.find("input,textarea,select").first().focus(),this.settings.onAddRow(t)}},{textualColTypes:["singleline","multiline","number"],defaults:{rowIdPrefix:"",onAddRow:$.noop,onDeleteRow:$.noop},getRowHtml:function(s,e,t,a){let i='<tr data-id="'+s+'">';for(let o in e){const n=e[o],l=t+"["+s+"]["+o+"]",r=typeof a[o]<"u"?a[o]:"",c=Craft.inArray(n.type,Craft.SproutMeta.EditableTable.textualColTypes);switch(i+='<td class="'+(c?"textual":"")+" "+(typeof n.class<"u"?n.class:"")+'"'+(typeof n.width<"u"?' width="'+n.width+'"':"")+">",n.type){case"selectOther":{t.indexOf("ownership")>-1?i+='<div class="field sprout-selectother"><div class="select sprout-selectotherdropdown"><select onchange="setDefault(this)" name="'+l+'">':i+='<div class="field sprout-selectother"><div class="select sprout-selectotherdropdown"><select name="'+l+'">';let d=!1,p="disabled selected";for(let f in n.options){const u=n.options[f];if(typeof u.optgroup<"u")d?i+="</optgroup>":d=!0,i+='<optgroup label="'+u.optgroup+'">';else{const m=typeof u.label<"u"?u.label:u,g=typeof u.value<"u"?u.value:f,b=typeof u.disabled<"u"?u.disabled:!1;i+="<option "+p+' value="'+g+'"'+(g===r?" selected":"")+(b?" disabled":"")+">"+m+"</option>"}p=""}d&&(i+="</optgroup>"),i+="</select></div>",i+='<div class="texticon clearable sprout-selectothertext hidden"><input class="text fullwidth" type="text" name="'+l+'" value="" autocomplete="off"><div class="clear" title="Clear"></div></div>',i+="</div>";break}case"checkbox":{i+='<input type="hidden" name="'+l+'"><input type="checkbox" name="'+l+'" value="1"'+(r?" checked":"")+">";break}default:i+='<input class="text fullwidth" type="text" name="'+l+'" value="'+r+'">'}i+="</td>"}return i+='<td class="thin action"><a class="move icon" title="'+Craft.t("sprout","Reorder")+'"></a></td><td class="thin action"><a class="delete icon" title="'+Craft.t("sprout","Delete")+'"></a></td></tr>',i}});Craft.SproutMeta.EditableTable.Row=Garnish.Base.extend({table:null,id:null,niceTexts:null,$tr:null,$tds:null,$textareas:null,$deleteBtn:null,init:function(s,e){this.table=s,this.$tr=$(e),this.$tds=this.$tr.children();const t=parseInt(this.$tr.attr("data-id").substr(this.table.settings.rowIdPrefix.length));t>this.table.biggestId&&(this.table.biggestId=t),this.$textareas=$(),this.niceTexts=[];const a={};let i=0;for(let n in this.table.columns){let l=this.table.columns[n];if(Craft.inArray(l.type,Craft.SproutMeta.EditableTable.textualColTypes)){const r=$("textarea",this.$tds[i]);this.$textareas=this.$textareas.add(r),this.addListener(r,"focus","onTextareaFocus"),this.addListener(r,"mousedown","ignoreNextTextareaFocus"),this.niceTexts.push(new Garnish.NiceText(r,{onHeightChange:$.proxy(this,"onTextareaHeightChange")})),(l.type==="singleline"||l.type==="number")&&(this.addListener(r,"keypress",{type:l.type},"validateKeypress"),this.addListener(r,"textchange",{type:l.type},"validateValue")),a[n]=r}i++}this.initSproutFields(),this.onTextareaHeightChange();for(let n in this.table.columns){let l=this.table.columns[n];l.autopopulate&&typeof a[l.autopopulate]<"u"&&!a[n].val()&&new Craft.HandleGenerator(a[n],a[l.autopopulate])}const o=this.$tr.children().last().find(".delete");this.addListener(o,"click","deleteRow")},initSproutFields:function(){Craft.SproutFields.initFields(this.$tr)},onTextareaFocus:function(s){this.onTextareaHeightChange();const e=$(s.currentTarget);if(e.data("ignoreNextFocus")){e.data("ignoreNextFocus",!1);return}setTimeout(function(){const t=e.val();if(typeof e[0].setSelectionRange<"u"){const a=t.length*2;e[0].setSelectionRange(0,a)}else e.val(t)},0)},ignoreNextTextareaFocus:function(s){$.data(s.currentTarget,"ignoreNextFocus",!0)},validateKeypress:function(s){const e=s.keyCode?s.keyCode:s.charCode;!Garnish.isCtrlKeyPressed(s)&&(e===Garnish.RETURN_KEY||s.data.type==="number"&&!Craft.inArray(e,Craft.SproutMeta.EditableTable.Row.numericKeyCodes))&&s.preventDefault()},validateValue:function(s){let e;if(s.data.type==="number"){const t=s.currentTarget.value.match(/^\s*(-?[\d.]*)/);t!==null?e=t[1]:e=""}else e=s.currentTarget.value.replace(/[\r\n]/g,"");e!==s.currentTarget.value&&(s.currentTarget.value=e)},onTextareaHeightChange:function(){let s=-1;for(let t=0;t<this.niceTexts.length;t++)this.niceTexts[t].height>s&&(s=this.niceTexts[t].height);this.$textareas.css("min-height",s);const e=this.$textareas.first().parent().height();e>s&&this.$textareas.css("min-height",e)},deleteRow:function(){this.table.sorter.removeItems(this.$tr),this.$tr.remove(),this.table.settings.onDeleteRow(this.$tr)}},{numericKeyCodes:[9,8,37,38,39,40,45,91,46,190,48,49,50,51,52,53,54,55,56,57]});class C{constructor(e){let t=this;this.fieldHandle=e.fieldHandle,this.selectFieldId=e.selectFieldId;let a="#fields-"+this.fieldHandle+"-meta-details-body "+this.selectFieldId,i=document.querySelector(a);if(i!==null){let o=i.options[i.selectedIndex].value;this.currentContainerId=this.getTargetContainerId(o),this.currentContainer=document.getElementById(this.currentContainerId),this.currentContainer&&this.currentContainer.classList.remove("hidden"),i.addEventListener("change",function(n){t.toggleOpenGraphFieldContainer(n,t)})}}toggleOpenGraphFieldContainer(e,t){let a=e.target,i=a.options[a.selectedIndex].value,o=t.getTargetContainerId(i),n=document.getElementById(o);n&&n.classList.remove("hidden"),t.currentContainer&&t.currentContainer.classList.add("hidden"),t.currentContainerId=o,t.currentContainer=n}getTargetContainerId(e){return"#fields-"+e}}window.MetaDetailsToggle=C;class v{constructor(e){this.items=e.items,this.mainEntityValues=e.mainEntityValues,this.initLegacyCode(),this.initOtherLegacyCode()}initLegacyCode(){let e=this,t="",a=function(h,d){$.each(h,function(p,f){p>=d&&$(f).html(t)})},i=function(h,d){$.each(h,function(p,f){p>=d&&$(f).closest("div.organizationinfo-dropdown").addClass("hidden")})},o=function(h){h.closest("div.organizationinfo-dropdown").removeClass("hidden")},n=function(h,d){let p="",f="";$.each(d,function(u,m){f=u.replace(/([A-Z][^A-Z\b])/g," $1").trim(),p+='<option value="'+u+'">'+f+"</option>",m&&$.each(m,function(g,b){f="&nbsp;&nbsp;&nbsp;"+g.replace(/([A-Z][^A-Z\b])/g," $1").trim(),p+='<option value="'+g+'">'+f+"</option>"})}),h.append(p)},l=$(".mainentity-firstdropdown select"),r=$(".mainentity-seconddropdown select"),c="";l.on("change",function(){c=l.val(),a($(".organization-info :input"),1),i($(".organization-info :input"),1),!(typeof e.items[c]>"u"||c===""||e.items[c].length<=0)&&e.items[c][0]&&(o(r),n(r,e.items[c][0]))}),r.on("change",function(){r.val()})}initOtherLegacyCode(){let t=this.mainEntityValues;$(".mainentity-firstdropdown select").change(function(){this.value==="barrelstrength-sprout-schema-personschema"?$(".mainentity-seconddropdown select").addClass("hidden"):$(".mainentity-seconddropdown select").removeClass("hidden")}),t&&(t.hasOwnProperty("schemaTypeId")&&t.schemaTypeId&&$(".mainentity-firstdropdown select").val(t.schemaTypeId).change(),t.hasOwnProperty("schemaOverrideTypeId")&&t.schemaOverrideTypeId&&$(".mainentity-seconddropdown select").val(t.schemaOverrideTypeId).change())}}window.SproutMetaWebsiteIdentitySettings=v;class T{constructor(e){this.items=e.items,this.websiteIdentity=e.websiteIdentity,this.firstDropdownId=e.firstDropdownId,this.secondDropdownId=e.secondDropdownId,this.thirdDropdownId=e.thirdDropdownId,this.initInfoIcons(),this.initWebsiteIdentityField(),this.moreWebsiteIdentityStuff()}initInfoIcons(){document.querySelectorAll("[data-additional-info]").forEach(function(t){let a=t.dataset.additionalInfo;document.getElementById(a+"-label").appendChild(t),t.classList.toggle("hidden")})}initWebsiteIdentityField(){let e=this,t=$(this.firstDropdownId),a=$(this.secondDropdownId),i=$(this.thirdDropdownId),o="",n="";t.on("change",function(){o=t.val(),e.clearDropDown($("#organization :input"),1),e.disableDropDown($("#organization :input"),1),o!==""&&e.items[o].hasOwnProperty("children")&&(e.enableDropDown(a),e.generateOptions(a,e.items[o].children))}),a.on("change",function(){if(o=$("#main-entity-first-dropdown").val(),n=a.val(),e.clearDropDown($("#organization :input"),2),e.disableDropDown($("#organization :input"),2),n==="")return;let l=e.items[o].children;for(let r=0;r<l.length;r++)if(l[r].name===n){l[r].hasOwnProperty("children")&&(e.enableDropDown(i),e.generateOptions(i,l[r].children));break}})}moreWebsiteIdentityStuff(){let e=this.websiteIdentity;e&&(e.hasOwnProperty("organizationSubTypes")&&e.organizationSubTypes[0]&&$("#main-entity-first-dropdown").val(e.organizationSubTypes[0]).trigger("change"),e.hasOwnProperty("organizationSubTypes")&&e.organizationSubTypes[1]&&$("#main-entity-second-dropdown").val(e.organizationSubTypes[1]).trigger("change"),e.hasOwnProperty("organizationSubTypes")&&e.organizationSubTypes[2]&&$("#main-entity-third-dropdown").val(e.organizationSubTypes[2]).trigger("change")),$("#identityType").change(function(){this.value==="Person"?($(".person-info").removeClass("hidden"),$(".organization-info").addClass("hidden")):($(".person-info").addClass("hidden"),$(".organization-info").removeClass("hidden")),this.value==="Organization"?($(".organization-info").removeClass("hidden"),$(".person-info").addClass("hidden"),$("#main-entity-first-dropdown").val()==="LocalBusiness"&&$("#localbusiness").removeClass("hidden")):($(".organization-info").addClass("hidden"),$(".person-info").removeClass("hidden"))}),$("#main-entity-first-dropdown").change(function(){this.value==="LocalBusiness"?$("#localbusiness").removeClass("hidden"):$("#localbusiness").addClass("hidden")})}clearDropDown(e,t){let a='<option value="" selected="selected"></option>';$.each(e,function(i,o){i>=t&&$(o).html(a)})}disableDropDown(e,t){$.each(e,function(a,i){a>=t&&$(i).closest("div.organizationinfo-dropdown").addClass("hidden")})}enableDropDown(e){e.closest("div.organizationinfo-dropdown").removeClass("hidden")}generateOptions(e,t){let a="",i="";for(let o=0;o<t.length;o++)i=t[o].name.replace(/([A-Z][^A-Z\b])/g," $1").trim(),a+='<option value="'+t[o].name+'">'+i+"</option>";e.append(a)}}window.SproutMetaWebsiteIdentity=T;
//# sourceMappingURL=meta-339e2af8.js.map