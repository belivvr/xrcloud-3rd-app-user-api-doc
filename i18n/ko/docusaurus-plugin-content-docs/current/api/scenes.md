---
sidebar_position: 2
---

# Scenes

### API Address

[GET] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes`

### Description

App에 등록한 모든 Scene들을 조회합니다.

### Headers

```
Authorization: Bearer refresh_token
```

### Response

```json
Http Status: 200 OK
Content-Type: application/json

[
  {
    "resourceId": "scene1 id",
    "resourceType": "SCENE",
    "active": true,
    "name": "scene1",
    "publishType": "PUBLIC",
    "thumbnailUrl": "https://scene-thumbnail-url",
    "insertedAt": "2022-04-30T07:28:06.574Z",
    "updatedAt": "2022-04-30T07:28:06.574Z"
  },
  {
    "resourceId": "scene2 id",
    "resourceType": "SCENE",
    "active": true,
    "name": "scene2",
    "publishType": "PUBLIC",
    "thumbnailUrl": "https://scene-thumbnail-url",
    "insertedAt": "2022-04-30T07:28:06.574Z",
    "updatedAt": "2022-04-30T07:28:06.574Z"
  }
]
```

### API Address

[GET] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes/{sceneId}`

### Description

Scene의 정보를 조회합니다.

### Headers

```
Authorization: Bearer refresh_token
```

### Response

```json
Http Status: 200 OK
Content-Type: application/json

{
  "resourceId": "scene1 id",
  "resourceType": "SCENE",
  "active": true,
  "name": "scene1",
  "publishType": "PUBLIC",
  "thumbnailUrl": "https://scene-thumbnail-url",
  "insertedAt": "2022-04-30T07:28:06.574Z",
  "updatedAt": "2022-04-30T07:28:06.574Z"
}
```

### API Address

[POST] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes`

### Description

Scene을 앱에 추가할 때 자동생성 된 허브에 접속할 수 있는 html을 받습니다.

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

