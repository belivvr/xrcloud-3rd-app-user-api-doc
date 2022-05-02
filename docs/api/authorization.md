---
sidebar_position: 1
---

# Authorization

### API Address

[POST] `https://3rd-api.xrcloud.belivvr.com/v1/auth/login`

### Description

You can get access `token` what needs `appId` and `appKey`.  
`appId` may be exposed, but please don't expose `appKey`.
(If it's exposed, you must reissue it.)  
  
You should save `access_token` and `refresh_token`.  
XRCloud API server save only one of `access_token` and `refresh_token`,  
Only can access latest `token`, can't access before `token`.

#### Description of token

1. You: Issued `token` by authorization API
2. Hacker: After you get `token`, new issued `token`.
3. You: Can't access by your `token`

In the event of hacking as shown above, only the last token issued is recognized to make the user aware that the `appKey` has been exposed  
If the `token` issued just now becomes unavailable, `appKey` is exposed, so you have to reissue `appKey`.

### Headers

```
Content-Type: application/json
```

### Body

```json
{
  "appId": "your app id",
  "appKey": "your app key"
}
```

### Response

```json
Http Status: 201 Created
Content-Type: application/json

{
  "access_token": "given access token", // expires 1 hour
  "refresh_token": "given refresh token" // expires 2 days
}
```

---

### API Address

[POST] `https://3rd-api.xrcloud.belivvr.com/v1/auth/refresh`

### Description

Refresh `token` when `access_token` is expired.

### Headers

```
Content-Type: application/json
Authorization: Bearer refresh_token
```

### Body
```json
{
  "appId": "your app id",
  "appKey": "your app key"
}
```

### Response
```json
Http Status: 201 Created
Content-Type: application/json

{
  "access_token": "given access token", // expires 1 hour
  "refresh_token": "given refresh token" // expires 2 days
}
```
