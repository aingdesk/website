# 语言包 API 文档
## 设置当前语言

POST /index/set_language

请求表单

| 参数名称 | 数据类型 | 默认值 | 是否必传 | 说明                          |
| -------- | -------- | ------ | -------- | ----------------------------- |
| language | string   | 无     | 是       | 要设置的语言，如 'zh' 或 'en' |

响应字段说明

| 字段名称  | 数据类型 | 说明                              |
| --------- | -------- | --------------------------------- |
| status    | number   | 状态码，0 表示成功，非 0 表示失败 |
| code      | number   | HTTP 状态码，200 表示成功         |
| msg       | string   | 操作结果的消息，如“设置成功”      |
| error_msg | string   | 错误信息，成功时为空              |
| message   | object   | 一般为空                          |

响应示例

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "设置成功",
    "error_msg": "",
    "message": {}
}
```

可能的错误响应示例及说明

```JSON
{
    "status": 1,
    "code": 500,
    "msg": "设置失败",
    "error_msg": "设置语言配置或清除缓存出错：[具体错误信息]",
    "message": {}
}
```

**说明**：当设置语言配置或清除缓存时出现错误，会返回此类错误。错误信息会包含具体的错误详情。

1. ## 获取前端语言包

POST /index/get_client_language

请求参数

无

响应字段说明

| 字段名称  | 数据类型 | 说明                              |
| --------- | -------- | --------------------------------- |
| status    | number   | 状态码，0 表示成功，非 0 表示失败 |
| code      | number   | HTTP 状态码，200 表示成功         |
| msg       | string   | 操作结果的消息，如“获取成功”      |
| error_msg | string   | 错误信息，成功时为空              |
| message   | object   | 客户端语言包的内容                |

响应示例

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
        "key1": "value1",
        "key2": "value2"
    }
}
```

可能的错误响应示例及说明

```JSON
{
    "status": 1,
    "code": 500,
    "msg": "获取客户端语言包失败",
    "error_msg": "读取文件或解析 JSON 出错：[具体错误信息]",
    "message": {}
}
```

**说明**：当读取客户端语言包文件或解析其内容为 JSON 时出现错误，会返回此类错误。错误信息会包含具体的错误详情。

1. ## 获取服务端语言包（暂时无用）

 POST /index/get_server_language

请求参数

无

响应字段说明

| 字段名称  | 数据类型 | 说明                              |
| --------- | -------- | --------------------------------- |
| status    | number   | 状态码，0 表示成功，非 0 表示失败 |
| code      | number   | HTTP 状态码，200 表示成功         |
| msg       | string   | 操作结果的消息，如“获取成功”      |
| error_msg | string   | 错误信息，成功时为空              |
| message   | object   | 服务端语言包的内容                |

响应示例

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
        "key1": "value1",
        "key2": "value2"
    }
}
```

可能的错误响应示例及说明

```JSON
{
    "status": 1,
    "code": 500,
    "msg": "获取服务端语言包失败",
    "error_msg": "读取文件或解析 JSON 出错：[具体错误信息]",
    "message": {}
}
```

**说明**：当读取服务端语言包文件或解析其内容为 JSON 时出现错误，会返回此类错误。错误信息会包含具体的错误详情。