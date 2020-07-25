(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1136:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("69式是一种。。。咳咳，六九问题是一道很有趣的算法题。嗯，不服来辩。")])]),s._v(" "),n("h2",{attrs:{id:"_01、题目示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01、题目示例"}},[s._v("#")]),s._v(" 01、题目示例")]),s._v(" "),n("blockquote",[n("p",[s._v("注意，num每一位上的数字都是 6 或者 9 。")])]),s._v(" "),n("br"),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("题目：1323. 6 和 9 组成的最大数字")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("给你一个仅由数字 6 和 9 组成的正整数 "),n("code",[s._v("num")]),s._v("。")])])])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("大概就是这么个意思：")]),s._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(921),alt:"PNG"}}),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：num = 9669\n输出：9969\n\n解释：\n改变第一位数字可以得到 6669 。\n改变第二位数字可以得到 9969 。\n改变第三位数字可以得到 9699 。\n改变第四位数字可以得到 9666 。\n其中最大的数字是 9969 。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_02、题解分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02、题解分析"}},[s._v("#")]),s._v(" 02、题解分析")]),s._v(" "),n("blockquote",[n("p",[s._v("因为题目太简单了，所以。。。。我也不知道为什么拿来讲。反正不是凑字数 😂（我一定不会告诉你我是因为标题污所以选它的）")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("我们只要找到 num 中最高位的 6，将其翻转成 9，就可以找到答案。")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//java")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximum69Number "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        \n        s "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("replaceFirst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("执行结果：")]),s._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(922),alt:"PNG"}}),s._v(" "),n("br"),s._v(" "),n("p",[s._v("emmmmm，大概就是这样。。。。我感觉要被锤，溜了溜了。")]),s._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(923),alt:"PNG"}}),s._v(" "),n("h2",{attrs:{id:"_03、知识点总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03、知识点总结"}},[s._v("#")]),s._v(" 03、知识点总结")]),s._v(" "),n("blockquote",[n("p",[s._v("写出上面的答案，大概率是被面试官锤了。那这道题到底是考察我们什么呢？")])]),s._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(924),alt:"PNG"}}),s._v(" "),n("p",[s._v("大家可以看到，这是一道数学题。所以我们需要用数学的方法来进行求解。具体代码如下：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//java")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("maximum69Number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("            \n            num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("            \n            num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("            \n            num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("            \n            num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("其实这种解法，和上面的解法没什么区别。"),n("strong",[s._v("都是从高位到低位进行判断，遇到 6 就将其变为 9")]),s._v("。只不过，上面是通过 replaceFirst 来进行，下面通过数值相加的方式来进行。那这种方法的效率我们看看：")]),s._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(925),alt:"PNG"}}),s._v(" "),n("p",[s._v("吊炸天有没有！难怪古人说，学好数理化，走遍天下都不怕。只会 replace 画，面试结束找妈妈。")]),s._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(926),alt:"PNG"}}),s._v(" "),n("p",[s._v("现在你知道为什么你和别人一起去面试，面试官挂了你，而选择别人了吧。"),n("strong",[s._v("面试官的思维，往往就是这么朴实无华且枯燥。")])]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("今天的题目到这里就结束了，你学会了吗？快来评论区留下你的想法吧！")])])}),[],!1,null,null,null);t.default=e.exports},921:function(s,t,a){s.exports=a.p+"assets/img/1.fee741e6.jpg"},922:function(s,t,a){s.exports=a.p+"assets/img/2.e6b05cdb.jpg"},923:function(s,t,a){s.exports=a.p+"assets/img/3.0c3a60cf.gif"},924:function(s,t,a){s.exports=a.p+"assets/img/4.577ac376.jpg"},925:function(s,t,a){s.exports=a.p+"assets/img/5.e942f55e.jpg"},926:function(s,t,a){s.exports=a.p+"assets/img/6.cc7c7072.jpg"}}]);