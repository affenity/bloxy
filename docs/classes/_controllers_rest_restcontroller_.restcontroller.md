
# Class: RESTController

## Hierarchy

* **RESTController**

## Index

### Constructors

* [constructor](_controllers_rest_restcontroller_.restcontroller.md#constructor)

### Properties

* [client](_controllers_rest_restcontroller_.restcontroller.md#client)
* [cookieJar](_controllers_rest_restcontroller_.restcontroller.md#cookiejar)
* [options](_controllers_rest_restcontroller_.restcontroller.md#options)
* [requestHandlers](_controllers_rest_restcontroller_.restcontroller.md#requesthandlers)
* [requester](_controllers_rest_restcontroller_.restcontroller.md#requester)
* [responseHandlers](_controllers_rest_restcontroller_.restcontroller.md#responsehandlers)

### Methods

* [addCookie](_controllers_rest_restcontroller_.restcontroller.md#addcookie)
* [addRequestHandler](_controllers_rest_restcontroller_.restcontroller.md#addrequesthandler)
* [addResponseHandler](_controllers_rest_restcontroller_.restcontroller.md#addresponsehandler)
* [createCookie](_controllers_rest_restcontroller_.restcontroller.md#createcookie)
* [fetchXCSRFToken](_controllers_rest_restcontroller_.restcontroller.md#fetchxcsrftoken)
* [getCookies](_controllers_rest_restcontroller_.restcontroller.md#getcookies)
* [getProxy](_controllers_rest_restcontroller_.restcontroller.md#getproxy)
* [getUserAgent](_controllers_rest_restcontroller_.restcontroller.md#getuseragent)
* [getXCSRFToken](_controllers_rest_restcontroller_.restcontroller.md#getxcsrftoken)
* [init](_controllers_rest_restcontroller_.restcontroller.md#init)
* [request](_controllers_rest_restcontroller_.restcontroller.md#request)
* [setOptions](_controllers_rest_restcontroller_.restcontroller.md#setoptions)
* [setProxy](_controllers_rest_restcontroller_.restcontroller.md#setproxy)
* [setUserAgent](_controllers_rest_restcontroller_.restcontroller.md#setuseragent)
* [setXCSRFToken](_controllers_rest_restcontroller_.restcontroller.md#setxcsrftoken)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new RESTController**(`client`: [Client](_client_client_.client.md), `options?`: [RESTControllerOptions](../modules/_interfaces_restinterfaces_.md#restcontrolleroptions)): *[RESTController](_controllers_rest_restcontroller_.restcontroller.md)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |
`options?` | [RESTControllerOptions](../modules/_interfaces_restinterfaces_.md#restcontrolleroptions) |

**Returns:** *[RESTController](_controllers_rest_restcontroller_.restcontroller.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="cookiejar" name="cookiejar"></a>  cookieJar

• **cookieJar**: *CookieJar*

___

### <a id="options" name="options"></a>  options

• **options**: *[RESTControllerOptions](../modules/_interfaces_restinterfaces_.md#restcontrolleroptions)*

___

### <a id="requesthandlers" name="requesthandlers"></a>  requestHandlers

• **requestHandlers**: *[RESTRequestHandler](../modules/_interfaces_restinterfaces_.md#restrequesthandler)[]*

___

### <a id="requester" name="requester"></a>  requester

• **requester**: *[RESTRequester](../modules/_interfaces_restinterfaces_.md#restrequester)*

___

### <a id="responsehandlers" name="responsehandlers"></a>  responseHandlers

• **responseHandlers**: *[RESTResponseHandler](../modules/_interfaces_restinterfaces_.md#restresponsehandler)[]*

## Methods

### <a id="addcookie" name="addcookie"></a>  addCookie

▸ **addCookie**(`cookie`: Cookie, `domain`: string, `setCookieOptions?`: undefined | object): *Cookie*

Adds a cookie to the cookie jar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cookie` | Cookie | The cookie to add |
`domain` | string | The domain to add it for |
`setCookieOptions?` | undefined &#124; object | Options for setting the cookie |

**Returns:** *Cookie*

___

### <a id="addrequesthandler" name="addrequesthandler"></a>  addRequestHandler

▸ **addRequestHandler**(`handler`: [RESTRequestHandler](../modules/_interfaces_restinterfaces_.md#restrequesthandler)): *void*

Adds a request handler

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handler` | [RESTRequestHandler](../modules/_interfaces_restinterfaces_.md#restrequesthandler) | The request handler  |

**Returns:** *void*

___

### <a id="addresponsehandler" name="addresponsehandler"></a>  addResponseHandler

▸ **addResponseHandler**(`handler`: [RESTResponseHandler](../modules/_interfaces_restinterfaces_.md#restresponsehandler)): *void*

Adds a response handler

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`handler` | [RESTResponseHandler](../modules/_interfaces_restinterfaces_.md#restresponsehandler) | The response handler  |

**Returns:** *void*

___

### <a id="createcookie" name="createcookie"></a>  createCookie

▸ **createCookie**(`cookieOptions`: [RESTCreateCookieOptions](../modules/_interfaces_restinterfaces_.md#restcreatecookieoptions)): *Cookie*

Creates a new cookie and returns it, no side effects

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cookieOptions` | [RESTCreateCookieOptions](../modules/_interfaces_restinterfaces_.md#restcreatecookieoptions) | The options to use |

**Returns:** *Cookie*

___

### <a id="fetchxcsrftoken" name="fetchxcsrftoken"></a>  fetchXCSRFToken

▸ **fetchXCSRFToken**(): *Promise‹string›*

Fetches a new XCSRF token

**Returns:** *Promise‹string›*

___

### <a id="getcookies" name="getcookies"></a>  getCookies

▸ **getCookies**(`domain`: string): *Cookie[]*

Gets the cookies for a given domain stored in the jar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`domain` | string | The domain to retrieve the cookies for |

**Returns:** *Cookie[]*

___

### <a id="getproxy" name="getproxy"></a>  getProxy

▸ **getProxy**(): *string | undefined*

Gets the proxy used

**Returns:** *string | undefined*

___

### <a id="getuseragent" name="getuseragent"></a>  getUserAgent

▸ **getUserAgent**(): *string | undefined*

Gets the user agent

**Returns:** *string | undefined*

___

### <a id="getxcsrftoken" name="getxcsrftoken"></a>  getXCSRFToken

▸ **getXCSRFToken**(): *Promise‹string | undefined›*

Gets the existing xcsrf token if it's not more than 5 minutes old,
otherwise, fetch a new one

**Returns:** *Promise‹string | undefined›*

___

### <a id="init" name="init"></a>  init

▸ **init**(): *void*

Initiates the RESTController

**Returns:** *void*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [RESTRequestOptions](../modules/_interfaces_restinterfaces_.md#restrequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

Sends a request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [RESTRequestOptions](../modules/_interfaces_restinterfaces_.md#restrequestoptions) | The options |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

___

### <a id="setoptions" name="setoptions"></a>  setOptions

▸ **setOptions**(`options?`: [RESTControllerOptions](../modules/_interfaces_restinterfaces_.md#restcontrolleroptions)): *[RESTControllerOptions](../modules/_interfaces_restinterfaces_.md#restcontrolleroptions)*

Sets the options for the RESTController

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [RESTControllerOptions](../modules/_interfaces_restinterfaces_.md#restcontrolleroptions) | The options to use |

**Returns:** *[RESTControllerOptions](../modules/_interfaces_restinterfaces_.md#restcontrolleroptions)*

___

### <a id="setproxy" name="setproxy"></a>  setProxy

▸ **setProxy**(`proxyURL`: string): *void*

Sets the proxy for the requests

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`proxyURL` | string | The proxy URL  |

**Returns:** *void*

___

### <a id="setuseragent" name="setuseragent"></a>  setUserAgent

▸ **setUserAgent**(`userAgent`: string): *void*

Sets the user agents for future requests

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`userAgent` | string | The user agent to use  |

**Returns:** *void*

___

### <a id="setxcsrftoken" name="setxcsrftoken"></a>  setXCSRFToken

▸ **setXCSRFToken**(`token`: string): *void*

Sets the XCSRF token

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | string | The xcsrf token to use in future requets  |

**Returns:** *void*
