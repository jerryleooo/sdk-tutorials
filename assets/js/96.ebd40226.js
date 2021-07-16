(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{697:function(t,e,o){"use strict";o.r(e);var r=o(0),l=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),o("p",[t._v("In this tutorial, you will build a functional "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos SDK"),o("OutboundLink")],1),t._v(" application and, in the process, learn the basic concepts and structures of the SDK. The example will showcase how quickly and easily you can "),o("strong",[t._v("build your own blockchain from scratch")]),t._v(" on top of the Cosmos SDK.")]),t._v(" "),o("p",[t._v("By the end of this tutorial you will have a functional "),o("code",[t._v("nameservice")]),t._v(" application, a mapping of strings to other strings ("),o("code",[t._v("map[string]string")]),t._v("). This is similar to "),o("a",{attrs:{href:"https://namecoin.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Namecoin"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://ens.domains/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ENS"),o("OutboundLink")],1),t._v(", or "),o("a",{attrs:{href:"https://handshake.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Handshake"),o("OutboundLink")],1),t._v(", which all model the traditional DNS systems ("),o("code",[t._v("map[domain]zonefile")]),t._v("). Users will be able to buy unused names, or sell/trade their name.")]),t._v(" "),o("p",[t._v("All of the final source code for this tutorial project is in this directory (and compiles). However, it is best to follow along manually and try building the project yourself!")]),t._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("golang")]),t._v(" >1.15"),o("OutboundLink")],1),t._v(" installed")]),t._v(" "),o("li",[t._v("Github account and either "),o("a",{attrs:{href:"https://hub.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github CLI"),o("OutboundLink")],1),t._v(" or "),o("a",{attrs:{href:"https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Desktop (64-bit required)"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Desire to create your own blockchain!")])]),t._v(" "),o("p",[t._v("For this tutorial we will be using "),o("a",{attrs:{href:"https://github.com/tendermint/starport",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starport"),o("OutboundLink")],1),t._v(" v0.13.1, an easy to use tool for building blockchains. To install "),o("code",[t._v("starport")]),t._v(" into "),o("code",[t._v("/usr/local/bin")]),t._v(", run the following command:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCBodHRwczovL2dldC5zdGFycG9ydC5uZXR3b3JrL3N0YXJwb3J0QHYwLjEzLjEhIHwgYmFzaAo="}}),t._v(" "),o("p",[t._v("You can also use Starport v0.13.1 on the web in a "),o("a",{attrs:{href:"http://gitpod.io/#https://github.com/tendermint/starport/tree/v0.13.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-based IDE"),o("OutboundLink")],1),t._v(". Learn more about other ways to "),o("a",{attrs:{href:"https://github.com/tendermint/starport/blob/develop/docs/1%20Introduction/2%20Install.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("install Starport"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"tutorial"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),o("p",[t._v("Through the course of this tutorial you will create the following files that make up your application:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9uYW1lc2VydmljZQrilJzilIDilIAgTWFrZWZpbGUK4pSc4pSA4pSAIE1ha2VmaWxlLmxlZGdlcgrilJzilIDilIAgYXBwLmdvCuKUnOKUgOKUgCBjbWQK4pSCwqDCoCDilJzilIDilIAgbmFtZXNlcnZpY2VjbGkK4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCBtYWluLmdvCuKUgsKgwqAg4pSU4pSA4pSAIG5hbWVzZXJ2aWNlZArilILCoMKgICAgICDilJTilIDilIAgbWFpbi5nbwrilJzilIDilIAgZ28ubW9kCuKUnOKUgOKUgCBnby5zdW0K4pSU4pSA4pSAIHgKICAgIOKUlOKUgOKUgCBuYW1lc2VydmljZQogICAgICAgIOKUnOKUgOKUgCBhbGlhcy5nbwogICAgICAgIOKUnOKUgOKUgCBjbGllbnQKICAgICAgICDilILCoMKgIOKUnOKUgOKUgCBjbGkKICAgICAgICDilILCoMKgIOKUgsKgwqAg4pSc4pSA4pSAIHF1ZXJ5LmdvCiAgICAgICAg4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCB0eC5nbwogICAgICAgIOKUgsKgwqAg4pSU4pSA4pSAIHJlc3QKICAgICAgICDilILCoMKgICAgICDilJzilIDilIAgcXVlcnkuZ28KICAgICAgICDilILCoMKgICAgICDilJzilIDilIAgcmVzdC5nbwogICAgICAgIOKUgsKgwqAgICAgIOKUlOKUgOKUgCB0eC5nbwogICAgICAgIOKUnOKUgOKUgCBnZW5lc2lzLmdvCiAgICAgICAg4pSc4pSA4pSAIGhhbmRsZXIuZ28KICAgICAgICDilJzilIDilIAga2VlcGVyCiAgICAgICAg4pSCwqDCoCDilJzilIDilIAga2VlcGVyLmdvCiAgICAgICAg4pSCwqDCoCDilJTilIDilIAgcXVlcmllci5nbwogICAgICAgIOKUnOKUgOKUgCB0eXBlcwogICAgICAgIOKUgiAgIOKUnOKUgOKUgCBjb2RlYy5nbwogICAgICAgIOKUgiAgIOKUnOKUgOKUgCBlcnJvcnMuZ28KICAgICAgICDilIIgICDilJzilIDilIAgZXhwZWN0ZWRfa2VlcGVycy5nbwogICAgICAgIOKUgiAgIOKUnOKUgOKUgCBrZXkuZ28KICAgICAgICDilIIgICDilJzilIDilIAgbXNncy5nbwogICAgICAgIOKUgiAgIOKUnOKUgOKUgCBxdWVyaWVyLmdvCiAgICAgICAg4pSCICAg4pSU4pSA4pSAIHR5cGVzLmdvCiAgICAgICAg4pSU4pSA4pSAIG1vZHVsZS5nbwo="}}),t._v(" "),o("p",[t._v("Follow along! The first step describes the design of your application.")])],1)}),[],!1,null,null,null);e.default=l.exports}}]);