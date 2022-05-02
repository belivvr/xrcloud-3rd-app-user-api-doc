---
sidebar_position: 2
---

# Scenes

### API Address

[GET] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes`

### Description

Get all `scene` registered in your Application.

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

Get a `scene` registered in your Application.

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
