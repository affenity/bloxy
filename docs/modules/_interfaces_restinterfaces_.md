
# Module: "interfaces/RESTInterfaces"

## Index

### Type aliases

* [RESTControllerOptions](_interfaces_restinterfaces_.md#restcontrolleroptions)
* [RESTCreateCookieOptions](_interfaces_restinterfaces_.md#restcreatecookieoptions)
* [RESTRequestHandler](_interfaces_restinterfaces_.md#restrequesthandler)
* [RESTRequestOptions](_interfaces_restinterfaces_.md#restrequestoptions)
* [RESTRequester](_interfaces_restinterfaces_.md#restrequester)
* [RESTResponseDataType](_interfaces_restinterfaces_.md#restresponsedatatype)
* [RESTResponseHandler](_interfaces_restinterfaces_.md#restresponsehandler)
* [RESTResponseOptions](_interfaces_restinterfaces_.md#restresponseoptions)

### Object literals

* [DefaultCreateCookieOptions](_interfaces_restinterfaces_.md#const-defaultcreatecookieoptions)
* [DefaultRESTControllerOptions](_interfaces_restinterfaces_.md#const-defaultrestcontrolleroptions)
* [DefaultRESTRequestOptions](_interfaces_restinterfaces_.md#const-defaultrestrequestoptions)

## Type aliases

### <a id="restcontrolleroptions" name="restcontrolleroptions"></a>  RESTControllerOptions

Ƭ **RESTControllerOptions**: *object*

#### Type declaration:

* **proxy**? : *undefined | string*

* **requester**(): *function*

  * (`requestOptions`: [RESTRequestOptions](_interfaces_restinterfaces_.md#restrequestoptions)): *Promise‹unknown›*

* **userAgent**? : *undefined | string*

* **xcsrf**? : *undefined | string*

* **xcsrfSet**? : *undefined | number*

___

### <a id="restcreatecookieoptions" name="restcreatecookieoptions"></a>  RESTCreateCookieOptions

Ƭ **RESTCreateCookieOptions**: *object*

#### Type declaration:

* **domain**: *string*

* **hostOnly**: *boolean*

* **httpOnly**: *boolean*

* **key**: *string*

* **value**: *string*

___

### <a id="restrequesthandler" name="restrequesthandler"></a>  RESTRequestHandler

Ƭ **RESTRequestHandler**: *function*

#### Type declaration:

▸ (`request`: RESTRequest): *boolean | [Error](../classes/_util_errors_errors_.bloxyhttperror.md#static-error)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | RESTRequest |

___

### <a id="restrequestoptions" name="restrequestoptions"></a>  RESTRequestOptions

Ƭ **RESTRequestOptions**: *object*

#### Type declaration:

* **body**? : *unknown*

* **checks**? : *RESTResponseOptions["checks"]*

* **followAllRedirects**? : *undefined | false | true*

* **form**? : *undefined | object*

* **formData**? : *undefined | object*

* **headers**? : *undefined | object*

* **json**? : *Array‹unknown› | object | string*

* **method**? : *"GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | string*

* **proxy**? : *undefined | string*

* **qs**? : *undefined | object*

* **responseOptions**? : *[RESTResponseOptions](_interfaces_restinterfaces_.md#restresponseoptions)*

* **throwHttpErrors**? : *undefined | false | true*

* **url**: *string*

* **userAgent**? : *undefined | string*

* **verification**? : *undefined | string*

* **xcsrf**? : *string | boolean*

___

### <a id="restrequester" name="restrequester"></a>  RESTRequester

Ƭ **RESTRequester**: *function*

#### Type declaration:

▸ (`requestOptions`: [RESTRequestOptions](_interfaces_restinterfaces_.md#restrequestoptions)): *Promise‹[RESTResponseDataType](_interfaces_restinterfaces_.md#restresponsedatatype)›*

**Parameters:**

Name | Type |
------ | ------ |
`requestOptions` | [RESTRequestOptions](_interfaces_restinterfaces_.md#restrequestoptions) |

___

### <a id="restresponsedatatype" name="restresponsedatatype"></a>  RESTResponseDataType

Ƭ **RESTResponseDataType**: *object*

#### Type declaration:

* **body**: *any*

* **headers**: *Record‹string, string›*

* **requestUrl**: *string*

* **status**: *string*

* **statusCode**: *number*

* **url**: *string*

___

### <a id="restresponsehandler" name="restresponsehandler"></a>  RESTResponseHandler

Ƭ **RESTResponseHandler**: *function*

#### Type declaration:

▸ (`response`: [RESTResponse](../classes/_controllers_rest_response_restresponse_.restresponse.md)): *boolean | [Error](../classes/_util_errors_errors_.bloxyhttperror.md#static-error)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [RESTResponse](../classes/_controllers_rest_response_restresponse_.restresponse.md) |

___

### <a id="restresponseoptions" name="restresponseoptions"></a>  RESTResponseOptions

Ƭ **RESTResponseOptions**: *object*

#### Type declaration:

* **allowedStatusCodes**? : *number[]*

* **allowedStatuses**? : *string[]*

* **checks**? : *undefined | object*

* **disallowedStatusCodes**? : *number[]*

* **disallowedStatuses**? : *string[]*

* **onlyJSON**? : *undefined | false | true*

## Object literals

### <a id="const-defaultcreatecookieoptions" name="const-defaultcreatecookieoptions"></a> `Const` DefaultCreateCookieOptions

### ▪ **DefaultCreateCookieOptions**: *object*

### <a id="domain" name="domain"></a>  domain

• **domain**: *string* = ".roblox.com"

### <a id="hostonly" name="hostonly"></a>  hostOnly

• **hostOnly**: *boolean* = false

### <a id="httponly" name="httponly"></a>  httpOnly

• **httpOnly**: *boolean* = false

___

### <a id="const-defaultrestcontrolleroptions" name="const-defaultrestcontrolleroptions"></a> `Const` DefaultRESTControllerOptions

### ▪ **DefaultRESTControllerOptions**: *object*

### <a id="proxy" name="proxy"></a>  proxy

• **proxy**: *undefined* = undefined

### <a id="requester" name="requester"></a>  requester

• **requester**: *Got‹›* = got

### <a id="useragent" name="useragent"></a>  userAgent

• **userAgent**: *string* = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"

### <a id="xcsrf" name="xcsrf"></a>  xcsrf

• **xcsrf**: *undefined* = undefined

### <a id="xcsrfset" name="xcsrfset"></a>  xcsrfSet

• **xcsrfSet**: *undefined* = undefined

___

### <a id="const-defaultrestrequestoptions" name="const-defaultrestrequestoptions"></a> `Const` DefaultRESTRequestOptions

### ▪ **DefaultRESTRequestOptions**: *object*

### <a id="headers" name="headers"></a>  headers

• **headers**: *object*

#### Type declaration:

### <a id="method" name="method"></a>  method

• **method**: *string* = "GET"

▪ **checks**: *object*

* **body**: *boolean* = true

* **captcha**: *boolean* = true

* **status**: *boolean* = true

* **statusCode**: *boolean* = true

* **xcsrf**: *boolean* = true
