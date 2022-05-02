---
sidebar_position: 3
---

# Avatars

### API Address

[GET] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/avatars`

### Description

App에 등록한 모든 아바타들을 조회합니다.

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
    "resourceId": "avatar1 id",
    "resourceType": "AVATAR",
    "active": true,
    "name": "avatar1",
    "publishType": "PUBLIC",
    "thumbnailUrl": "https://avatar-thumbnail-url",
    "insertedAt": "2022-04-30T07:28:06.574Z",
    "updatedAt": "2022-04-30T07:28:06.574Z"
  },
  {
    "resourceId": "avatar2 id",
    "resourceType": "AVATAR",
    "active": true,
    "name": "avatar2",
    "publishType": "PUBLIC",
    "thumbnailUrl": "https://avatar-thumbnail-url",
    "insertedAt": "2022-04-30T07:28:06.574Z",
    "updatedAt": "2022-04-30T07:28:06.574Z"
  }
]
```

### API Address

[GET] `https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/avatars/{avatarId}`

### Description

아바타의 정보를 조회합니다.

### Headers

```
Authorization: Bearer refresh_token
```

### Response

```json
Http Status: 200 OK
Content-Type: application/json

{
  "resourceId": "avatar1 id",
  "resourceType": "AVATAR",
  "active": true,
  "name": "avatar1",
  "publishType": "PUBLIC",
  "thumbnailUrl": "https://avatar-thumbnail-url",
  "insertedAt": "2022-04-30T07:28:06.574Z",
  "updatedAt": "2022-04-30T07:28:06.574Z"
}
```
