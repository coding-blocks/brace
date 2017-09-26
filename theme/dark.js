ace.define("ace/theme/dark", ["require", "exports", "module", "ace/lib/dom"], function (acequire, exports, module) {

  exports.isDark = true;
  exports.cssClass = "ace-dark";
  exports.cssText = ".ace-dark .ace_gutter {\
background: #272727;\
color: #8F908A\
}\
.ace-dark .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-dark {\
background-color: #202020!important;\
color: #F8F8F2\
}\
.ace-dark .ace_cursor {\
color: #F8F8F0\
}\
.ace-dark .ace_marker-layer .ace_selection {\
background: #323331\
}\
.ace-dark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #323331;\
}\
.ace-dark .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-dark .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-dark .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-dark .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-dark .ace_invisible {\
color: #52524d\
}\
.ace-dark .ace_entity.ace_name.ace_tag,\
.ace-dark .ace_keyword,\
.ace-dark .ace_meta.ace_tag,\
.ace-dark .ace_storage {\
color: #F92672\
}\
.ace-dark .ace_punctuation,\
.ace-dark .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-dark .ace_constant.ace_character,\
.ace-dark .ace_constant.ace_language,\
.ace-dark .ace_constant.ace_numeric,\
.ace-dark .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-dark .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-dark .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-dark .ace_support.ace_constant,\
.ace-dark .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-dark .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-dark .ace_storage.ace_type,\
.ace-dark .ace_support.ace_class,\
.ace-dark .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-dark .ace_entity.ace_name.ace_function,\
.ace-dark .ace_entity.ace_other,\
.ace-dark .ace_entity.ace_other.ace_attribute-name,\
.ace-dark .ace_variable {\
color: #A6E22E\
}\
.ace-dark .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-dark .ace_string {\
color: #E6DB74\
}\
.ace-dark .ace_comment {\
color: #75715E\
}\
.ace-dark .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}\
.ace_editor.ace_autocomplete {\
border-color: #272727!important;\
}\
.ace-dark .ace_content {\
background: #202020;\
}\
.ace-dark.ace_autocomplete .ace_content {\
background: #272727;\
color: #fff!important;\
border:none;\
}\
.ace-dark .ace_content .ace_active-line{\
background: #202020!important;\
border:none;\
}\
.ace-dark .ace_content .ace_line-hover {\
background: #202020!important;\
border:none!important;\
}";

  var dom = acequire("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});
