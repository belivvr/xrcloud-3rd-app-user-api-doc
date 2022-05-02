---
sidebar_position: 4
---

# Hubs

### API Address

[POST] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes/{sceneSid}/hubs/{hubSid}`

### Description

Get html to enter Hubs.  
When you render html, you enter Hubs.

### Headers

```
Authorization: Bearer refresh_token
Content-Type: application/json
```

### Body

```json
{
  "nickname": "user nickname",
  "avatarId": "user avatarId"
}
```

### Response

```html
Http Status: 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
...
...
...
```
