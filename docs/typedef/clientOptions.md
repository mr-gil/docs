---
sidebar_position: 1
---

# clientOptions

The Options for the client

## Types
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Properties

|Parameter | Type | Can break | Description |
|-----|------|-----| ---- |
| restRetryInterval | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Yes 💀 | Time in milliseconds to wait for retrying the REST request |
| restRetries |  [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |  Yes 💀 | No. of retries if failed to request |
| token | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  | Token of the bot to start the client |
| versionGateway | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |  Yes 💀 | The Guilded API version number for websocket to use |
| cacheSize | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | The maximum amount of collection size to hold. Overrides the old one if exceeded |
| cacheMessage | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |  | Cache messages to make things faster but compromises storage (cacheSize works) |
