---
sidebar_position: 1
---

# Authorization

## Authorization token 발급

### API Address

[POST] `https://3rd-api.xrcloud.belivvr.com/v1/auth/login`

### Description

등록된 `appId`와 `appKey`를 이용하여 `token`을 얻습니다.  
`appId`는 노출될 수 있으나, `appKey`는 절대 노출하지 마시기 바랍니다.  
(만약 노출 시 꼭 재발급 하셔야 합니다.)  
  
발행된 `access_token`과 `refresh_token`은 저장하고 계셔야 합니다.  
서버에서는 단 하나의 `access_token`과 `refresh_token`을 저장하고 있으며,  
마지막으로 발급한 `token`만이 이용 가능하며 그 전에 발급했던 `token`은 이용이 불가능해집니다.

#### token에 대한 설명

- 사용자: login API를 통해 `token`을 발급함
- 해커: 사용자가 `token`을 발급 한 후 login API를 통해 `token`을 발급함
- 사용자: 발급한 `token`을 이용할 수 없음.

위의 상황처럼 해킹이 벌어질 시 사용자가 `appKey`가 노출되었음을 인지하게 하기 위해 마지막에 발행된 `token`만을 인정하며,  
만약 방금 발행했던 `token`이 자꾸 이용이 불가능한 상태가 된다면 `appKey`가 노출된 것이므로 `appKey`를 재발급 하셔야 합니다.

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

## Authorization token 재발급

### API Address

[POST] `https://3rd-api.xrcloud.belivvr.com/v1/auth/refresh`

### Description

`access_token`의 이용기간이 만료되어 새로운 토큰으로 갱신 시 이용합니다.

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
