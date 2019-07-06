(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{189:function(t,a,e){t.exports=e.p+"assets/img/image-20190224213349903-1015229.873c6879.png"},190:function(t,a,e){t.exports=e.p+"assets/img/image-20190224213416204-1015256.3fc68853.png"},293:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安装配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装配置")]),t._v(" "),s("h2",{attrs:{id:"软件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 软件安装")]),t._v(" "),s("h2",{attrs:{id:"服务器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器配置")]),t._v(" "),s("p",[t._v("下面是宝塔面板为例进行说明")]),t._v(" "),s("h2",{attrs:{id:"设置访问目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置访问目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置访问目录")]),t._v(" "),s("p",[t._v("将网站运行目录指向到 "),s("code",[t._v("public")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(189),alt:"image-20190224213349903"}})]),t._v(" "),s("h2",{attrs:{id:"开启404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启404","aria-hidden":"true"}},[t._v("#")]),t._v(" 开启404")]),t._v(" "),s("p",[t._v("注释掉以下网站配置项，可以开启Laravel Router 404。（如果你想使用服务器的404页面，就不需要设置了）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#error_page 404 /404.html;\n")])])]),s("p",[s("img",{attrs:{src:e(190),alt:"image-20190224213416204"}})]),t._v(" "),s("h1",{attrs:{id:"中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件","aria-hidden":"true"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("中间件")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("modue")]),t._v(" "),s("td",[t._v("加载站点与模块数据。后台模块开发时必须使用。")])])])]),t._v(" "),s("h2",{attrs:{id:"常用函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用函数")]),t._v(" "),s("h3",{attrs:{id:"route-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-class","aria-hidden":"true"}},[t._v("#")]),t._v(" route_class")]),t._v(" "),s("p",[t._v("根据路由生成以 "),s("code",[t._v("-")]),t._v(" 分隔的css样式名称")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 根据路由设置样式类\n * @return string|null\n */\nfunction route_class()\n")])])]),s("h3",{attrs:{id:"issuperadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issuperadmin","aria-hidden":"true"}},[t._v("#")]),t._v(" isSuperAdmin")]),t._v(" "),s("p",[t._v("超级管理员检测")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 超级管理员检测\n * @return bool\n */\nfunction isSuperAdmin(): bool\n")])])]),s("h3",{attrs:{id:"module-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-access","aria-hidden":"true"}},[t._v("#")]),t._v(" module_access")]),t._v(" "),s("p",[t._v("模块权限判断")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 模块权限判断\n * @param string $permission 权限标识\n * @param string|null $module 模块标识\n * @param bool $abort 验证失败时显示错误页面\n * @return mixed\n * @throws Exception\n */\nfunction module_access(string $permission, string $module = null, $abort = false)\n")])])]),s("h3",{attrs:{id:"site"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site","aria-hidden":"true"}},[t._v("#")]),t._v(" site")]),t._v(" "),s("p",[t._v("获取当前站点对象，只在后台站点管理和前台有效。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 保存或获取当前站点\n * @param \\App\\Models\\Site|null $site 站点模型\n * @return \\App\\Models\\Site\n */\nfunction site(\\App\\Models\\Site $site = null): ?\\App\\Models\\Site\n")])])]),s("h3",{attrs:{id:"module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module","aria-hidden":"true"}},[t._v("#")]),t._v(" module")]),t._v(" "),s("p",[t._v("获取当前使用的模块对象，只在后台站点管理和前台有效。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 保存或获取当前模块\n * @param \\App\\Models\\Module $module 模型对象\n * @return \\App\\Models\\Module|null\n */\nfunction module(\\App\\Models\\Module $module = null): ?\\App\\Models\\Module\n")])])]),s("h3",{attrs:{id:"tableforeign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tableforeign","aria-hidden":"true"}},[t._v("#")]),t._v(" tableForeign")]),t._v(" "),s("p",[t._v("函数用于实现表关联的外键约束。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 表外键关联约束\n * @param Illuminate\\Database\\Schema\\Blueprint $table Blueprint 迁移对象(直接传递迁移文件中的$table)\n * @param string $tableName 关联表\n * @param string $foreignKey 关联字段\n */\nfunction tableForeign(\\Illuminate\\Database\\Schema\\Blueprint $table, string $tableName, string $foreignKey): void\n")])])]),s("h2",{attrs:{id:"系统管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统管理")]),t._v(" "),s("h4",{attrs:{id:"系统配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统配置")]),t._v(" "),s("p",[t._v("系统配置主要是影响后台系统管理")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/image-20190224214207819-1015727.png",alt:"image-20190224214207819"}})]),t._v(" "),s("p",[t._v("获取系统配置如下（系统变量可以后台查看）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{config_get('变量名','默认值','system')}}\n")])])]),s("h2",{attrs:{id:"站点管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站点管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 站点管理")]),t._v(" "),s("h3",{attrs:{id:"站点配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#站点配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 站点配置")]),t._v(" "),s("p",[t._v("每个站点拥有独立的配置项。")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/image-20190224214024168.png",alt:"image-20190224214024168"}})]),t._v(" "),s("p",[t._v("使用以下方式获取站点配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{config_get('变量名','默认值','site')}}\n")])])]),s("h2",{attrs:{id:"模块开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 模块开发")]),t._v(" "),s("h3",{attrs:{id:"生成链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成链接")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("module_link")]),t._v(" 函数可以方便的生成模块链接，函数会添加 "),s("code",[t._v("sid")]),t._v(" 站点编号与 "),s("code",[t._v("mid")]),t._v(" 模块编号。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module_link(路由，路由参数)\n")])])]),s("p",[t._v("也可以使用系统 route()函数生成路由，但需要手动添加 "),s("code",[t._v("sid")]),t._v(" 与 "),s("code",[t._v("mid")]),t._v(" 参数")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("route(路由，['sid'=>site()['id'],'mid'=>module()['mid']])\n")])])]),s("h3",{attrs:{id:"域名访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名访问")]),t._v(" "),s("p",[s("strong",[t._v("配置域名")])]),t._v(" "),s("p",[t._v("在模块设计时开启 "),s("code",[t._v("系统菜单>域名管理")]),t._v("  选项后，在站点管理下就有模块域名设置菜单了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/image-20190224004751501-0940471.png",alt:"image-20190224004751501"}})]),t._v(" "),s("p",[s("strong",[t._v("域名访问")])]),t._v(" "),s("p",[t._v("使用域名会访问到模块的 "),s("code",[t._v("SystemController")]),t._v(" 控制器的 "),s("code",[t._v("domain")]),t._v(" 方法")]),t._v(" "),s("h2",{attrs:{id:"微信公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信公众号")]),t._v(" "),s("p",[t._v("对微信公众号的支持我们提供了非常丰富的功能。")]),t._v(" "),s("h3",{attrs:{id:"模块配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 模块配置")]),t._v(" "),s("h4",{attrs:{id:"数据表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据表","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据表")]),t._v(" "),s("p",[t._v("执行 "),s("code",[t._v("artisan module:make-migration News Shop")]),t._v("在 "),s("code",[t._v("Shop")]),t._v(" 模块中创建数据表 "),s("code",[t._v("News")]),t._v(" ，并且数据表必须存在 "),s("code",[t._v("site_id")]),t._v(" 与 "),s("code",[t._v("module_id")]),t._v(" 字段")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Schema::create('news', function (Blueprint $table) {\n\t$table->increments('id');\n\t$table->string('content')->comment('回复的文本内容');\n\ttableForeign($table, 'sites', 'site_id');\n\ttableForeign($table, 'modules', 'module_id');\n\t$table->timestamps();\n});\n")])])]),s("h4",{attrs:{id:"模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 模型")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("artisan module:make-model News Shop")]),t._v(" 在 "),s("code",[t._v("Shop")]),t._v(" 模块中创建模型"),s("code",[t._v("News")]),t._v(" ,并在模型中创建与微信关键词表的关联的函数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public function keyword()\n{\n\treturn $this->morphOne(Keyword::class, 'model');\n}\n")])])]),s("h4",{attrs:{id:"控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("...\nclass TextController extends Controller\n{\n\tpublic function create(Text $text)\n\t{\n        return view('module.text.create',compact('text'));\n\t}\n\t\n\tpublic function store(Request $request, ChatServer $server)\n\t{\n        $data = $request->input();\n        $data['site_id'] = site()['id'];\n        $data['module_id'] = module()['id'];\n\n        //保存微信数据\n        \\DB::beginTransaction();\n        $server->save(Text::create($data));\n        \\DB::commit();\n        return redirect(module_link('module.text.index'))->with('success', '保存成功');\n\t}\n\n\tpublic function edit(Text $text)\n\t{\n        return view('module.text.edit', compact('text'));\n\t}\n\n\tpublic function update(Request $request, Text $text, ChatServer $server)\n\t{\n        \\DB::beginTransaction();\n        $text->update($request->input());\n        $server->save($text);\n        \\DB::commit();\n        return redirect(module_link('module.text.index'))->with('success', '保存成功');\n\t}\n\n\tpublic function destroy(Text $text)\n\t{\n        \\DB::transaction(function () use ($text) {\n            $text->keyword->delete();\n            $text->delete();\n        });\n        return back()->with('success', '删除成功');\n\t}\n}\n")])])]),s("h4",{attrs:{id:"视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 视图")]),t._v(" "),s("p",[s("code",[t._v("components.keyword")]),t._v(" 为关键词组件。"),s("code",[t._v("tag")]),t._v(" 关键词标签（模块可以根据tag做不同处理方式）,"),s("code",[t._v("model")]),t._v(" 为数据模型执行新增方法时传递空模型。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@extends('layouts.module')\n@section('content')\n    <form action=\"{{module_link('module.text.store')}}\" method=\"post\">\n        @csrf\n\t\t@include('components.keyword',['tag'=>'text','model'=>$text])\n\t\t...\n\t\t添加到模型的表单的，关键词的表单系统会自动处理\n    </form>\n@endsection\n")])])]),s("h2",{attrs:{id:"前端组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端组件")]),t._v(" "),s("h3",{attrs:{id:"面包屑导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面包屑导航","aria-hidden":"true"}},[t._v("#")]),t._v(" 面包屑导航")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@include('components.breadcrumb',['menus'=>['微信普通文本消息'=>'#']])\n")])])]),s("p",[s("img",{attrs:{src:"assets/image-20190226215812661-1189492.png",alt:"image-20190226215812661"}})]),t._v(" "),s("h3",{attrs:{id:"图片上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片上传","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片上传")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("uploadImage")]),t._v(" 函数上传图片，参数为input表单的name值。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div class="form-group">\n\t<label>图片上传</label>\n\t<div class="input-group mb-1">\n\t\t<input type="text" class="form-control" name="icon" value="">\n\t\t<div class="input-group-append">\n\t\t<button class="btn btn-outline-secondary" onclick="uploadImage(\'icon\')" type="button">\n\t\t\t选择图标\n\t\t</button>\n\t\t</div>\n\t</div>\n\t<img class="img-thumbnail d-block" src="">\n</div>\n')])])]),s("h3",{attrs:{id:"文件上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件上传","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件上传")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("uploadFile")]),t._v(" 函数上传文件，参数1为input表单的name值，参数2为上传类型（不设置时使用系统配置项）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div class="form-group">\n\t<label>文件上传</label>\n\t<div class="input-group mb-1">\n\t\t<input type="text" class="form-control" name="icon" value="">\n\t\t<div class="input-group-append">\n\t\t<button class="btn btn-outline-secondary" onclick="uploadFile(\'icon\')" type="button">\n\t\t\t选择文件\n\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n')])])]),s("h3",{attrs:{id:"函数库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数库","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数库")]),t._v(" "),s("h4",{attrs:{id:"destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy","aria-hidden":"true"}},[t._v("#")]),t._v(" destroy")]),t._v(" "),s("p",[t._v("用于触发删除资源使用的前端脚本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * 删除事件\n * @param bt 按钮\n * @param message 提示消息\n */\nfunction destroy(bt, message) {\n")])])]),s("p",[t._v("使用代码如下，注意 "),s("code",[t._v("form")]),t._v(" 必须在按钮前面")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<form action=\"{{route('site.chat.destroy',[$site,$chat])}}\" method=\"post\">\n\t@csrf @method('DELETE')\n</form>\n<button type=\"button\" onclick=\"destroy(this,'确定删除 {{$chat['name']}} 公众号吗？')\">\n\t删除公众号\n</button>\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);