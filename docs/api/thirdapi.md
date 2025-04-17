# 第三方模型管理
## 获取模型供应商列表

POST /model/get_supplier_list

用途：打开模型管理时

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明** |              |                                                        |
| ---------------- | ------------ | ------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                               |
| supplierTitle    | string       | 模型供应商标题（中文名）                               |
| supplierName     | string       | 模型供应商名称                                         |
| baseUrl          | string       | 接口地址                                               |
| baseUrlExample   | string       | 接口地址示例                                           |
| isUseUrlExample  | bool         | 是否在baseUrl为空时，自动填充baseUrlExample值到baseUrl |
| apiKey           | string       | API-Key                                                |
| home             | string       | 官网地址                                               |
| help             | string       | 使用教程连接                                           |
| status           | bool         | 状态                                                   |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": [
        {
            "supplierTitle":"百度飞桨",
            "supplierName": "ppaistudio",
            "baseUrl": "https://api-l7rader5fac7r5fe.aistudio-app.com/v1",
            "baseUrlExample":"https://api-xxxxx.aistudio-app.com/v1",
            "isUseUrlExample": false,
            "apiKey": "020c4352b49f5a805ccfb52ce367be088445f054",
            "home": "https://aistudio.baidu.com",
            "help": "https://aistudio.baidu.com",
            "status": false
        },
        ...
    ]
}
```

## 获取指定供应商下的模型列表——done

POST /model/get_models_list

用途：选中模型供应商时

| **请求表单** |              |            |              |                |
| ------------ | ------------ | ---------- | ------------ | -------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**       |
| supplierName | string       |            | 是           | 模型供应商名称 |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| supplierName     | string       | 模型供应商名称                                               |
| modelName        | string       | 模型名称                                                     |
| capability       | array        | 模型功能，如：llm、embedding、vision、tools，这些值可能同时存在，不过embedding功能是单一的，包含vision说明支持图片识别，包含tools说明支持工具调用包含embedding说明不是大语言模型，而是向量模型，主要用于将内容转换为向量 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": [
        {
            "supplierName": "百度飞桨",
            "modelName": "deepseek-r1:14b",
            "capability": ["llm"],
        }
        ...
    ]
}
```

## 添加模型

POST /model/add_models

用途：用户添加对应模型供应商新模型时

| **请求表单** |              |            |              |                                                              |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                                     |
| supplierName | string       |            | 是           | 模型供应商名称                                               |
| title        | string       |            | 是           | 模型标题（允许中文，可为空字符串）                           |
| modelName    | string       |            | 是           | 模型名称                                                     |
| capability   | string       |            | 是           | JSON.stringify模型功能，如：llm、embedding、vision、tools，这些值可能同时存在，不过embedding功能是单一的，包含vision说明支持图片识别，包含tools说明支持工具调用包含embedding说明不是大语言模型，而是向量模型，主要用于将内容转换为向量 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "添加成功",
    "error_msg": "",
    "message": null
}
```

## 删除模型

POST /model/remove_models

用途：用户从模型供应商删除模型时

| **请求表单** |              |            |              |                |
| ------------ | ------------ | ---------- | ------------ | -------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**       |
| supplierName | string       |            | 是           | 模型供应商名称 |
| modelName    | string       |            | 是           | 模型名称       |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "删除成功",
    "error_msg": "",
    "message": null
}
```

## 设置模型供应商配置

POST /model/set_supplier_config

用途：用户从模型供应商删除模型时

| **请求表单** |              |            |              |                |
| ------------ | ------------ | ---------- | ------------ | -------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**       |
| supplierName | string       |            | 是           | 模型供应商名称 |
| baseUrl      | string       |            | 是           | 接口地址       |
| apiKey       | string       |            | 是           | API-Key        |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "设置成功",
    "error_msg": "",
    "message": null
}
```

## 重新获取在线模型列表

POST /model/get_online_models

用途：用户希望重新获取在线列表时（注意：需API支持）

| **请求表单** |              |            |              |                |
| ------------ | ------------ | ---------- | ------------ | -------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**       |
| supplierName | string       |            | 是           | 模型供应商名称 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": null
}
```

## 检查模型供应商API配置是否正确

POST /model/check_supplier_config

用途：用户填写完API-Token点击检查按钮时

| **请求表单** |              |            |              |                |
| ------------ | ------------ | ---------- | ------------ | -------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**       |
| supplierName | string       |            | 是           | 模型供应商名称 |
| baseUrl      | string       |            | 是           | 接口地址       |
| apiKey       | string       |            | 是           | API-Key        |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "配置正确",
    "error_msg": "",
    "message": null
}

// 失败的情况
{
    "status": -1,
    "code": 500,
    "msg": "连接失败，请检查",
    "error_msg": "具体错误内容：xxxxxx",
    "message": null
}
```

## 获取模型供应商API配置

POST /model/get_supplier_config

用途：用户点击模型供应端时

| **请求表单** |              |            |              |                |
| ------------ | ------------ | ---------- | ------------ | -------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**       |
| supplierName | string       |            | 是           | 模型供应商名称 |

| **响应字段说明** |              |                                                        |
| ---------------- | ------------ | ------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                               |
| supplierTitle    | string       | 模型供应商标题（中文名）                               |
| supplierName     | string       | 模型供应商名称                                         |
| baseUrl          | string       | 接口地址                                               |
| baseUrlExample   | string       | 接口地址示例                                           |
| isUseUrlExample  | bool         | 是否在baseUrl为空时，自动填充baseUrlExample值到baseUrl |
| apiKey           | string       | API-Key                                                |
| home             | string       | 官网地址                                               |
| help             | string       | 使用教程连接                                           |
| status           | bool         | 状态                                                   |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
            "supplierTitle":"百度飞桨",
            "supplierName": "ppaistudio",
            "baseUrl": "https://api-l7rader5fac7r5fe.aistudio-app.com/v1",
            "baseUrlExample":"https://api-xxxxx.aistudio-app.com/v1",
            "isUseUrlExample": false,
            "apiKey": "020c4352b49f5a805ccfb52ce367be088445f054",
            "home": "https://aistudio.baidu.com",
            "help": "https://aistudio.baidu.com",
            "status": false
        }
}
```

## 设置模型供应商状态

POST /model/set_supplier_status

用途：用户希望禁用或启用模型供应商时

| **请求表单** |              |            |              |                              |
| ------------ | ------------ | ---------- | ------------ | ---------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                     |
| supplierName | string       |            | 是           | 模型供应商名称               |
| status       | string       |            | 是           | 状态： true=启用，false=停用 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "设置成功",
    "error_msg": "",
    "message": null
}
```

## 设置模型状态

POST /model/set_model_status

用途：用户希望启用或停用模型时

| **请求表单** |              |            |              |                              |
| ------------ | ------------ | ---------- | ------------ | ---------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                     |
| supplierName | string       |            | 是           | 模型供应商名称               |
| modelName    | string       |            | 是           | 模型名称，多个用逗号隔开     |
| status       | string       |            | 是           | 状态： true=启用，false=停用 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "设置成功",
    "error_msg": "",
    "message": null
}
```

## 添加新的模型供应商

POST /model/add_supplier

用途：用户希望手动添加模型供应商时

| **请求表单**  |              |            |              |                              |
| ------------- | ------------ | ---------- | ------------ | ---------------------------- |
| **参数名称**  | **数据类型** | **默认值** | **是否必传** | **说明**                     |
| supplierTitle | string       |            | 是           | 模型供应商标题(可以是中文)   |
| supplierName  | string       |            | 是           | 模型供应商名称（不能有中文） |
| baseUrl       | string       |            | 是           | 接口地址                     |
| apiKey        | string       |            | 是           | API-Key                      |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "设置成功",
    "error_msg": "",
    "message": null
}
```

## 删除模型供应商

POST /model/remove_supplier

用途：用户希望手动添加模型供应商时

| **请求表单** |              |            |              |                              |
| ------------ | ------------ | ---------- | ------------ | ---------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                     |
| supplierName | string       |            | 是           | 模型供应商名称（不能有中文） |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "删除成功",
    "error_msg": "",
    "message": null
}
```

## 修改模型标题（别名）

POST /model/set_model_title

用途：用户希望重名命模型时

| **请求表单** |              |            |              |                              |
| ------------ | ------------ | ---------- | ------------ | ---------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                     |
| supplierName | string       |            | 是           | 模型供应商名称（不能有中文） |
| modelName    | string       |            | 是           | 模型名称                     |
| title        | string       |            | 是           | 标题（允许中文）             |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "修改成功",
    "error_msg": "",
    "message": null
}
```

## 修改模型功能

POST /model/set_model_capability

用途：用户希望重名命模型时

| **请求表单** |              |            |              |                               |
| ------------ | ------------ | ---------- | ------------ | ----------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                      |
| supplierName | string       |            | 是           | 模型供应商名称                |
| modelName    | string       |            | 是           | 模型名称                      |
| capability   | string       |            | 是           | 功能列表，如：["llm","tools"] |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "修改成功",
    "error_msg": "",
    "message": null
}
```

## 修改模型信息

POST /model/modify_model

用途：用户希望同时修改别名和功能时

| **请求表单** |              |            |              |                               |
| ------------ | ------------ | ---------- | ------------ | ----------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                      |
| supplierName | string       |            | 是           | 模型供应商名称                |
| modelName    | string       |            | 是           | 模型名称                      |
| capability   | string       |            | 是           | 功能列表，如：["llm","tools"] |
| title        | string       |            | 是           | 模型标题（别名）              |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "修改成功",
    "error_msg": "",
    "message": null
}
```