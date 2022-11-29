---
sidebar_position: 1
tags:
  - class
  - core
keywords:
  - client
  - core
  - bot
  - class
last_update:
  date: 11/28/2022
  author: Rahul Marban
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Client

The Client Core of your bot that interacts with Guilded API

#### This page represents the class [`Client`](https://github.com/mr-gil/mr.gil/blob/master/src/Client.ts)

**extends [EventEmitter](https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter)**

## Constructor

The Instance of the Client class can be created using

```ts
const { Client } = require("mr.gil");

// highlight-start
const client = new Client();
// highlight-end
```

### Parameters

```ts
new Client(options?: clientOptions);
```

| Parameter | Type                                         | Required | Description                |
| --------- | -------------------------------------------- | -------- | -------------------------- |
| options   | [clientOptions](/docs/typedef/clientOptions) | No       | The Options for the client |

### Returns

- [`Client`](client)

<br></br>

# Table of contents:

<div className="grid">

<details>
<summary>
Properties
</summary>

- [cacheDocs](#cachedocs)
- [cacheCalendar](#cachecalendar)
- [cacheTopics](#cachetopics)
- [cacheLists](#cachelists)
- [cacheMessage](#cachemessage)
- [cacheSize](#cachesize)
- [channels](#channels)
- [gateway](#gateway)
- [rest](#rest) `READ-ONLY`
- [readyTimestamp](#readytimestamp)
- [resumeTimes](#resumetimes)
- [servers](#servers)
- [token](#token)
- [uptime](#uptime)
- [url](#url)
- [user](#user)
- [users](#users)

</details>

<details>
<summary>
Methods
</summary>

- [login](#login)
- [processData](#processdata)
- [reconnect](#reconnect) `AVOID`

</details>

<details>
<summary>
Events
</summary>

<details>
<summary>
BotMembership
</summary> 

- [botCreate](#botcreate)
- [botDelete](#botdelete)

</details>

<details>
<summary>
Calendar
</summary> 

- [calendarCreate](#calendarcreate)
- [calendarUpdate](#calendarupdate)
- [calendarDelete](#calendardelete)

</details>

<details>
<summary>
CalendarRSVP
</summary> 

- [rsvpUpdate](#rsvpupdate)
- [rsvpBulkUpdate](#rsvpbulkupdate)
- [rsvpDelete](#rsvpdelete)

</details>

<details>
<summary>
Channel
</summary> 

- [channelCreate](#channelcreate)
- [channelUpdate](#channelupdate)
- [channelDelete](#channeldelete)

</details>

<details>
<summary>
Doc
</summary> 

- [docCreate](#doccreate)
- [docUpdate](#docupdate)
- [docDelete](#docdelete)

</details>

<details>
<summary>
ForumTopic
</summary> 

- [topicCreate](#topiccreate)
- [topicUpdate](#topicupdate)
- [topicDelete](#topicdelete)
- [topicPin](#topicpin)
- [topicUnpin](#topicunpin)
- [topicLock](#topiclock)
- [topicUnlock](#topicunlock)

</details>

<details>
<summary>
ForumTopic Reaction
</summary> 

- [topicReact](#topicreact)
- [topicUnreact](#topicunreact)

</details>

<details>
<summary>
ListItem
</summary> 

- [listCreate](#listcreate)
- [listUpdate](#listupdate)
- [listDelete](#listdelete)
- [listComplete](#listcomplete)
- [listUncomplete](#listuncomplete)

</details>

<details>
<summary>
Message
</summary> 

- [messageCreate](#messagecreate)
- [messageUpdate](#messageupdate)
- [messageDelete](#messagedelete)

</details>

<details>
<summary>
Message Reaction
</summary> 

- [messageReact](#messagereact)
- [messageUnReact](#messageunreact)

</details>

<details>
<summary>
Server Role
</summary> 

- [roleUpdate](#roleupdate)

</details>

<details>
<summary>
ServerMember
</summary> 

- [memberJoin](#memberjoin)
- [memberRemove](#memberremove)
- [memberUpdate](#memberupdate)
- [memberKick](#memberkick)
- [memberBan](#memberban)
- [memberUnban](#memberunban)

</details>

<details>
<summary>
Webhooks
</summary> 

- [webhookCreate](#webhookcreate)
- [webhookUpdate](#webhookupdate)

</details>

</details>

</div>

## Properties

#### [.cacheDocs](#cachedocs)

Cache Docs components to make fetching faster but compromises storage

**Returns:** _?[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

---

#### [.cacheCalendar](#cachecalandar)

Cache Calandar components to make fetching faster but compromises storage

**Returns:** _?[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

---

#### [.cacheTopics](#cachetopics)

Cache ForumTopic components to make fetching faster but compromises storage

**Returns:** _?[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

----

#### [.cacheLists](#cachelists)

Cache List components to make fetching faster but compromises storage

**Returns:** _?[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

----

#### [.cacheMessage](#cachemessage)

Cache messages to make fetch faster but compromises storage

**Returns:** _?[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

----

#### [.cacheSize](#cachesize)

The maximum amount of collection size to hold. Overrides the old item if exceeded

**Returns:** _?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

----

#### [.channels](#channels)

Collection of channels that are cached to the client

**Returns:** _[ChannelCollection](/collection/channels)_

----

#### [.gateway](#gateway)

The Gateway version of the API that the library use to interact with Guilded API

**Returns:** _?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

----

#### [.rest](#rest)

`READ-ONLY`
The REST Manager which interacts with the API using HTTPS.

**Returns:** _[RESTManager](/managers/rest)_

----

#### [.readyTimestamp](#readytimestamp)

The time of when did the client core went to READY state

**Returns:** _?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

----

#### [.resumeTimes](#resumetimes)

Number of times the library resumes the connection that exists with the API

**Returns:** _?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

----

#### [.servers](#servers)

Collection of servers that are cached to the client

**Returns:** _[ServerCollection](/collection/servers)_

----

#### [.token](#token)

Token of the bot to start the client `PRIVATE`

<div className="dang">
This string is very confidential. This should be kept secret
</div>

**Returns:** _?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)_

---

#### [.uptime](#uptime)

The time of how long the client core went to READY state `(in milliseconds)`

**Returns:** _?[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)_

---

#### [.url](#url)

The Websocket url of the Guilded API

**Returns:** _?[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)_

---

#### [.user](#user)

User that the client is logged in as

**Returns:** _?[User](/typedef/user)_

---

#### [.users](#users)

Collection of Users that are cached to the client

**Returns:** _[UserCollection](/collection/users)_

---

## Methods

#### [login](#login)

Logs the bot in, Establishes a handshake with Guilded API.

Usage:
[login](#login)(_[token](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)_)

### Parameters

```ts
client.login(token: string);
```

| Parameter | Type                                                                                              | Required | Description                                           |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------- |
| token     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Yes      | The Token of the bot to authorize for the Guilded API |

### Returns

- `void`

---

#### [processData](#processdata)

Processes the data string to JSON Object `(not useful for end-user)`

Usage:
[processData](#processdata)(_[jsonString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)_)

### Parameters

```ts
client.processData(data: string);
```

| Parameter | Type                                                                                              | Required | Description                                          |
| --------- | ------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- |
| data      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Yes      | A Function to convert the data string to JSON Object |

### Returns

- `Object | string`

---

#### [reconnect](#reconnect)

Reconnects to the websocket using Keep_Alive protocol `(DO NOT USE IT | THIS IS A AUTOMATED PROCESS)`

---

## Events

Client is a class extended from `EventEmitter`. The events can be ran by
```ts
client.on("EVENT_NAME", (COMPONENTS) => {

})
```
(or)
```ts
client.once("EVENT_NAME", (COMPONENTS) => {

})
```

where,
`EVENT_NAME`: Event name listed below
`COMPONENTS`: Components listed on the respective event name

------------

### BotMembership Events

#### [botCreate](#botcreate)
Guilded API Event: `BotServerMembershipCreated`

Fires with:

| Name | Type | Description  |
| --------- | --------- |  ------------------ |
| bot      | [botCreate](/typedef/botCreate) | A Bot Create object that contains who created the bot in what server |

----

#### [botDelete](#botdelete)
Guilded API Event: `BotServerMembershipDeleted`

Fires with:

| Name | Type | Description  |
| --------- | --------- |  ------------------ |
| bot      | [botDelete](/typedef/botDelete) | A Bot Delete object that contains who deleted the bot in what server |