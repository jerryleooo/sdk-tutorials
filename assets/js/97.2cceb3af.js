(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{676:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"application-goals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-goals"}},[e._v("#")]),e._v(" Application Goals")]),e._v(" "),a("p",[e._v("The goal of the application you are building is to let users buy names and to set a value these names resolve to. The owner of a given name will be the current highest bidder. In this section, you will learn how these simple requirements translate to application design.")]),e._v(" "),a("p",[e._v("A blockchain application is just a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/State_machine_replication",target:"_blank",rel:"noopener noreferrer"}},[e._v("replicated deterministic state machine"),a("OutboundLink")],1),e._v(". As a developer, you just have to define the state machine (i.e. what the state, a starting state and messages that trigger state transitions), and "),a("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("Tendermint")]),a("OutboundLink")],1),e._v(" will handle replication over the network for you.")]),e._v(" "),a("blockquote",[a("p",[e._v("Tendermint is an application-agnostic engine that is responsible for handling the "),a("em",[e._v("networking")]),e._v(" and "),a("em",[e._v("consensus")]),e._v(" layers of your blockchain. In practice, this means that Tendermint is responsible for propagating and ordering transaction bytes. Tendermint Core relies on an eponymous Byzantine-Fault-Tolerant (BFT) algorithm to reach consensus on the order of transactions. For more on Tendermint, click "),a("a",{attrs:{href:"https://tendermint.com/docs/introduction/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),a("OutboundLink")],1),e._v(" is designed to help you build state machines. The SDK is a "),a("strong",[e._v("modular framework")]),e._v(", meaning applications are built by aggregating a collection of interoperable modules. Each module contains its own message/transaction processor, while the SDK is responsible for routing each message to its respective module.")]),e._v(" "),a("p",[e._v("Here are the modules you will need for the nameservice application:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("auth")]),e._v(": This module defines accounts and fees and gives access to these functionalities to the rest of your application.")]),e._v(" "),a("li",[a("code",[e._v("bank")]),e._v(": This module enables the application to create and manage tokens and token balances.")]),e._v(" "),a("li",[a("code",[e._v("staking")]),e._v(" : This module enables the application to have validators that people can delegate to.")]),e._v(" "),a("li",[a("code",[e._v("distribution")]),e._v(" : This module give a functional way to passively distribute rewards between validators and delegators.")]),e._v(" "),a("li",[a("code",[e._v("slashing")]),e._v(" : This module disincentivizes people with value staked in the network, ie. Validators.")]),e._v(" "),a("li",[a("code",[e._v("supply")]),e._v(" : This module holds the total supply of the chain.")]),e._v(" "),a("li",[a("code",[e._v("nameservice")]),e._v(": This module does not exist yet! It will handle the core logic for the "),a("code",[e._v("nameservice")]),e._v(" application you are building. It is the main piece of software you have to work on to build your application.")])]),e._v(" "),a("p",[e._v("Now, take a look at the two main parts of your application: the state and the message types.")]),e._v(" "),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("The state represents your application at a given moment. It tells how much token each account possesses, what are the owners and price of each name, and to what value each name resolves to.")]),e._v(" "),a("p",[e._v("The state of tokens and accounts is defined by the "),a("code",[e._v("auth")]),e._v(" and "),a("code",[e._v("bank")]),e._v(" modules, which means you don't have to concern yourself with it for now. What you need to do is define the part of the state that relates specifically to your "),a("code",[e._v("nameservice")]),e._v(" module.")]),e._v(" "),a("p",[e._v("In the SDK, everything is stored in one store called the "),a("code",[e._v("multistore")]),e._v(". Any number of key/value stores (called "),a("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types#KVStore",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("KVStores")]),a("OutboundLink")],1),e._v(" in the Cosmos SDK) can be created in this multistore. For this application, we will use one store to map "),a("code",[e._v("name")]),e._v("s to its respective "),a("code",[e._v("whois")]),e._v(", a struct that holds a name's value, owner, and price.")]),e._v(" "),a("h2",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("Messages are contained in transactions. They trigger state transitions. Each module defines a list of messages and how to handle them. Here are the messages you need to implement the desired functionality for your nameservice application:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("MsgSetName")]),e._v(": This message allows name owners to set a value for a given name.")]),e._v(" "),a("li",[a("code",[e._v("MsgBuyName")]),e._v(": This message allows accounts to buy a name and become its owner.\n"),a("ul",[a("li",[e._v("When someone buys a name, they are required to pay the previous owner of the name a price higher than the price the previous owner paid for it. If a name does not have a previous owner yet, they must burn a "),a("code",[e._v("MinPrice")]),e._v(" amount.")])])])]),e._v(" "),a("p",[e._v("When a transaction (included in a block) reaches a Tendermint node, it is passed to the application via the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI"),a("OutboundLink")],1),e._v(" and decoded to get the message. The message is then routed to the appropriate module and handled there according to the logic defined in the "),a("code",[e._v("Handler")]),e._v(". If the state needs to be updated, the "),a("code",[e._v("Handler")]),e._v(" calls the "),a("code",[e._v("Keeper")]),e._v(" to perform the update. You will learn more about these concepts in the next steps of this tutorial.")]),e._v(" "),a("h3",{attrs:{id:"now-that-you-have-decided-on-how-your-application-functions-from-a-high-level-perspective-it-is-time-to-start-implementing-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#now-that-you-have-decided-on-how-your-application-functions-from-a-high-level-perspective-it-is-time-to-start-implementing-it"}},[e._v("#")]),e._v(" Now that you have decided on how your application functions from a high-level perspective, it is time to start implementing it.")])])}),[],!1,null,null,null);t.default=n.exports}}]);