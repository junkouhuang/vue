webpackJsonp([7],{laG3:function(e,r,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={data:function(){return{loading:!1,rules:{spmc:[{required:!0,message:"请输入商品名称",trigger:"blur"}],itemno:[{required:!0,message:"请输入采购编码",trigger:"blur"}],dw:[{required:!0,message:"请选择采购单位",trigger:"blur"}],lbid:[{required:!0,message:"请选择商品类别",trigger:"blur"}],cz:[{required:!0,message:"请输入材质",trigger:"blur"}],price:[{required:!0,message:"请录入价格",trigger:"blur"}]},scaleClass:"",ruleForm:{spmc:"",itemno:"",dw:"",spcode:"",lbid:"",lbidArr:[],lbmc:"",cz:"",price:"",ys:"",cm:"",jdsl:"",dws:[],lboptions:[],cms:[],tableData:[]}}},created:function(){var e=this;this.$api.page("productlb/getProductLbPageList",{},localStorage.token,function(r){var l=new Array;l.length=0;for(var t=0;t<r[0].children.length;t++){var o=new Array;if(o.length=0,r[0].children[t].children.length>0){for(var a=0;a<r[0].children[t].children.length;a++)o.push({value:r[0].children[t].children[a].id,label:r[0].children[t].children[a].text});l.push({value:r[0].children[t].id,label:r[0].children[t].text,children:o})}else l.push({value:r[0].children[t].id,label:r[0].children[t].text})}e.ruleForm.lboptions=l;for(var n=0;n<e.ruleForm.lboptions.length;n++)for(var i=0;i<e.ruleForm.lboptions[n].children.length;i++)console.log(e.ruleForm.lboptions[n].children),console.log(e.$route.query.row.lbid),e.ruleForm.lboptions[n].children[i].value==e.$route.query.row.lbid&&(e.ruleForm.lbidArr=[e.ruleForm.lboptions[n].value,e.$route.query.row.lbid],e.ruleForm.lbmc=e.$route.query.row.lbmc,e.ruleForm.lbid=e.$route.query.row.lbid)},function(e){console.log("获取类别列表失败")}),this.$api.page("dw/getErpDwList",{},localStorage.token,function(r){var l=new Array;l.length=0;for(var t=0;t<r.length;t++)l.push({value:r[t].dwmc,label:r[t].dwmc});e.ruleForm.dws=l},function(e){console.log("获取单位列表失败")}),this.$api.page("sizeinfo/getSizeinfos",{},localStorage.token,function(r){var l=new Array;l.length=0;for(var t=0;t<r.length;t++)l.push({value:r[t].cmmc,label:r[t].cmmc});e.ruleForm.cms=l},function(e){console.log("获取尺码列表失败")}),this.ruleForm.spmc=this.$route.query.row.spmc,this.ruleForm.itemno=this.$route.query.row.itemno,this.ruleForm.dw=this.$route.query.row.dw,this.ruleForm.spcode=this.$route.query.row.spcode,this.ruleForm.cz=this.$route.query.row.cz,this.ruleForm.price=this.$route.query.row.price,this.scaleClass="scaleClass"},methods:{submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(r){r?(e.loading=!0,0==e.ruleForm.tableData.length?(e.loading=!1,e.$message({message:"表单填写不完整，请检查是否填写详情信息",duration:"2500",type:"warning"})):e.$api.put("product/addProductInfo",{spmc:e.ruleForm.spmc,spcode:e.ruleForm.spcode,dw:e.ruleForm.dw,lbid:e.ruleForm.lbid,lbmc:e.ruleForm.lbmc,cz:e.ruleForm.cz,price:e.ruleForm.price,itemno:e.ruleForm.itemno,erpSpmxes:e.ruleForm.tableData},localStorage.token,function(r){e.$message({message:r.msg,duration:"1000",type:"success"}),e.$router.push({path:"/Nav1/MerchandiseTable"})},function(e){console.log("新增商品信息失败")})):e.$message({message:"表单填写不完整，请检查基本信息是否填写完整",duration:"2500",type:"warning"})})},resetForm:function(){this.$message({message:"重置成功",type:"warning"})},handleChangelb:function(){var e=this;this.$api.page("product/getProductCodeByLbid/"+this.ruleForm.lbidArr[1],{},localStorage.token,function(r){e.ruleForm.spcode=r.obj;for(var l=0;l<e.ruleForm.lboptions.length;l++)for(var t=0;t<e.ruleForm.lboptions[l].children.length;t++)e.ruleForm.lboptions[l].children[t].value==e.ruleForm.lbidArr[1]&&(e.ruleForm.lbmc=e.ruleForm.lboptions[l].children[t].label,e.ruleForm.lbid=e.ruleForm.lbidArr[1])},function(e){console.log("获取商品编码失败")})},handleCmYsSl:function(){var e=this;this.ruleForm.cm?this.$prompt("请为"+this.ruleForm.cm+"指定数量","系统提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/^\+?[1-9]\d*$/,inputErrorMessage:"数量不能小于0",inputType:"number"}).then(function(r){var l=r.value;e.ruleForm.jdsl=l,e.$prompt("请为"+e.ruleForm.cm+"指定颜色","系统提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/\s*\S+?/,inputErrorMessage:"颜色必填",inputType:"text"}).then(function(r){var l=r.value;e.ruleForm.ys=l,e.ruleForm.tableData.push({cm:e.ruleForm.cm,jdsl:e.ruleForm.jdsl,ys:e.ruleForm.ys})}).catch(function(){})}).catch(function(){}):this.$message({message:"请选择尺码",type:"warning"})},gotoParentPage:function(){this.$router.push({path:"/Nav1/MerchandiseTable"})}}},o={render:function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("div",{class:e.scaleClass},[e._m(0),e._v(" "),l("el-form",{ref:"ruleForm",staticStyle:{"text-align":"left"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[l("el-tabs",{attrs:{"tab-position":"right"}},[l("el-tab-pane",{attrs:{label:"基本信息"}},[l("el-form-item",{attrs:{label:"商品名称",prop:"spmc"}},[l("el-input",{attrs:{type:"text",placeholder:"商品名称",clearable:"",maxlength:"60",autocomplete:"off"},model:{value:e.ruleForm.spmc,callback:function(r){e.$set(e.ruleForm,"spmc",r)},expression:"ruleForm.spmc"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"采购编码",prop:"itemno"}},[l("el-input",{attrs:{type:"text",placeholder:"采购编码",clearable:"",maxlength:"40",autocomplete:"off"},model:{value:e.ruleForm.itemno,callback:function(r){e.$set(e.ruleForm,"itemno",r)},expression:"ruleForm.itemno"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"单位",prop:"dw"}},[l("el-select",{attrs:{placeholder:"单位",clearable:"",filterable:""},model:{value:e.ruleForm.dw,callback:function(r){e.$set(e.ruleForm,"dw",r)},expression:"ruleForm.dw"}},e._l(e.ruleForm.dws,function(e){return l("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"款号",prop:"spcode"}},[l("el-input",{attrs:{type:"text",disabled:!0},model:{value:e.ruleForm.spcode,callback:function(r){e.$set(e.ruleForm,"spcode",r)},expression:"ruleForm.spcode"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商品类别",prop:"lbid"}},[l("el-cascader",{attrs:{filterable:"","show-all-levels":!1,"expand-trigger":"hover",options:e.ruleForm.lboptions},on:{change:e.handleChangelb},model:{value:e.ruleForm.lbidArr,callback:function(r){e.$set(e.ruleForm,"lbidArr",r)},expression:"ruleForm.lbidArr"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"材质",prop:"cz"}},[l("el-input",{attrs:{type:"text",placeholder:"材质",clearable:"",maxlength:"20",autocomplete:"off"},model:{value:e.ruleForm.cz,callback:function(r){e.$set(e.ruleForm,"cz",r)},expression:"ruleForm.cz"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"价格",prop:"price"}},[l("el-input-number",{attrs:{"controls-position":"right",min:1},model:{value:e.ruleForm.price,callback:function(r){e.$set(e.ruleForm,"price",r)},expression:"ruleForm.price"}})],1)],1),e._v(" "),l("el-tab-pane",{attrs:{label:"详情"}},[l("el-form-item",{attrs:{prop:"cm"}},[l("el-select",{attrs:{placeholder:"尺码",clearable:"",filterable:""},model:{value:e.ruleForm.cm,callback:function(r){e.$set(e.ruleForm,"cm",r)},expression:"ruleForm.cm"}},e._l(e.ruleForm.cms,function(e){return l("el-option",{attrs:{label:e.label,value:e.value}})})),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.handleCmYsSl}},[e._v("添加")])],1),e._v(" "),l("el-form-item",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.ruleForm.tableData}},[l("el-table-column",{attrs:{prop:"cm",label:"尺码"}}),e._v(" "),l("el-table-column",{attrs:{prop:"ys",label:"颜色"}}),e._v(" "),l("el-table-column",{attrs:{prop:"jdsl",label:"数量"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"360"},scopedSlots:e._u([{key:"default",fn:function(r){return[l("el-row",[l("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-edit"}},[e._v("修改")]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"}},[e._v("删除")])],1)]}}])})],1)],1)],1)],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(r){return r.preventDefault(),e.submitForm(r)}}},[e._v("提交")]),e._v(" "),l("el-button",{nativeOn:{click:function(r){return r.preventDefault(),e.gotoParentPage(r)}}},[e._v("返回")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"tip"},[r("p",[this._v("温馨提醒：表单界面右侧有选项卡，必须将基本信息和详情填写完毕才可以提交表单")])])}]};var a=l("VU/8")(t,o,!1,function(e){l("tJBn")},"data-v-654ba968",null);r.default=a.exports},tJBn:function(e,r){}});
//# sourceMappingURL=7.e508c730471e9d1411c0.js.map