---
sidebar_position: 4
---

# Hubs

### API Address

[POST] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes/{sceneSid}/hubs/{hubSid}`

### Description

Hubs에 입장할 수 있는 html을 얻습니다.  
html을 랜더링 하면 Hubs에 진입합니다.

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
