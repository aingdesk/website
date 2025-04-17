# MCP接口文档
## 获取已安装的MCP服务器列表

POST /mcp/get_mcp_server_list

用途：打开MCP设置

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| name             | string       | 名称                                                         |
| description      | string       | 描述                                                         |
| type             | string       | 类型   stdio \| sse                                          |
| command          | string       | 执行命令  npx \| uv \| 其它可执行文件全路径    type=stdio时有值 |
| baseUrl          | string       | 服务器URL地址，type=sse时有值                                |
| env              | object       | 环境变量  type=stdio时有值                                   |
| args             | string[]     | 参数  type=stdio时有值                                       |
| isActive         | bool         | 是否可用                                                     |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message":[
        {
            "name": "bt-panel-mcp",
            "description": "宝塔面板MCP服务器",
            "type": "stdio",
            "command": "F:\\mcp\\mcp_btpanel\\build\\mcp-btpanel.exe",
            "baseUrl": "",
            "env": {
                "BT_BASE_URL": "https://192.168.10.26:8888",
                "BT_API_TOKEN": "xxxxx"
            },
            "args": [],
            "isActive": false
        }
    ]
}
```

## 获取常用的MCP服务器列表（含已安装/未安装）

POST /mcp/get_common_server_list

用途：需要安装MCP时

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| name             | string       | 名称                                                         |
| description      | string       | 描述                                                         |
| type             | string       | 类型   stdio \| sse                                          |
| command          | string       | 执行命令  npx \| uv \| 其它可执行文件全路径    type=stdio时有值 |
| baseUrl          | string       | 服务器URL地址，type=sse时有值                                |
| env              | object       | 环境变量  type=stdio时有值                                   |
| args             | string[]     | 参数  type=stdio时有值                                       |
| is_install       | bool         | 是否已安装                                                   |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message":[
        {
            "name": "bt-panel-mcp",
            "description": "宝塔面板MCP服务器",
            "type": "stdio",
            "command": "F:\\mcp\\mcp_btpanel\\build\\mcp-btpanel.exe",
            "baseUrl": "",
            "env": {
                "BT_BASE_URL": "https://192.168.10.26:8888",
                "BT_API_TOKEN": "xxxxx"
            },
            "args": [],
            "is_install":true
        }
    ]
}
```

## 获取指定MCP信息

POST /mcp/get_mcp_server_info

用途：修改MCP时

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
| name         | string       |            | 是           | MCP名称  |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| name             | string       | 名称                                                         |
| description      | string       | 描述                                                         |
| type             | string       | 类型   stdio \| sse                                          |
| command          | string       | 执行命令  npx \| uv \| 其它可执行文件全路径    type=stdio时有值 |
| baseUrl          | string       | 服务器URL地址，type=sse时有值                                |
| env              | object       | 环境变量  type=stdio时有值                                   |
| args             | string[]     | 参数  type=stdio时有值                                       |
| is_active        | bool         | 是否可用                                                     |
| tools            | object[]     | 工具列表                                                     |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message":
        {
            "name": "bt-panel-mcp",
            "description": "宝塔面板MCP服务器",
            "type": "stdio",
            "command": "F:\\mcp\\mcp_btpanel\\build\\mcp-btpanel.exe",
            "baseUrl": "",
            "env": {
                "BT_BASE_URL": "https://192.168.10.26:8888",
                "BT_API_TOKEN": "xxxxx"
            },
            "args": [],
            "is_active":true,
            "tools":[
                {
                    "name":"get_site_list",
                    "description":"获取网站列表",
                    "is_active":true
                }
            ]
        }
    
}
```

## 修改指定MCP信息

POST /mcp/modify_mcp_server

用途：修改MCP时

| **请求表单** |              |            |              |                                                              |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                                     |
| name         | string       |            | 是           | MCP名称                                                      |
| description  | string       |            | 是           | 描述                                                         |
| type         | string       |            | 是           | 类型   stdio \| sse                                          |
| command      | string       |            | 是           | 执行命令  npx \| uv \| 其它可执行文件全路径    type=stdio时有值 |
| baseUrl      | string       |            | 是           | 服务器URL地址，type=sse时有值                                |
| env          | object       |            | 是           | 环境变量  type=stdio时有值                                   |
| args         | string[]     |            | 是           | 参数  type=stdio时有值                                       |
| is_active    | bool         |            | 是           | 是否可用                                                     |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "修改成功",
    "error_msg": "",
    "message":null
    
}
```

## 修改指定MCP工具可用性

POST /mcp/modify_mcp_tools

用途：修改MCP时

| **请求表单** |              |            |              |                                                              |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                                     |
| name         | string       |            | 是           | MCP名称                                                      |
| tools        | object       |            | 是           | `工具可用状态（需将所有工具的状态标记好一起提交）：{ "get_site_list":true, "add_site":false}` |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "设置成功",
    "error_msg": "",
    "message":null
    
}
```

## 检查环境状态

POST /mcp/get_status

用途：打开MCP设置时

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| node_npx         | number       | node.js环境安装状态，未安装不可使用npx命令   0=未安装 1=已安装 2=正在安装 -1=安装失败 |
| python_uv        | number       | python环境安装状态，未安装不可使用uv命令 0=未安装 1=已安装 2=正在安装 -1=安装 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
        "node_npx":1,
        "python_uv":0
    }
    
}
```

## 安装node.js环境

POST /mcp/install_npx

用途：安装node.js环境

PS: 提交后，轮询检查环境状态接口

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "正在安装，请稍候...",
    "error_msg": "",
    "message":null
    
}
```

## 安装python环境（暂不支持）

POST /mcp/install_uv

用途：安装python环境

PS: 提交后，轮询检查环境状态接口

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "正在安装，请稍候...",
    "error_msg": "",
    "message":null
    
}
```

## 添加MCP服务器

POST /mcp/add_mcp_server

用途：手动添加MCP服务器

| **请求表单** |              |            |              |                                                              |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                                     |
| name         | string       |            | 是           | MCP名称                                                      |
| description  | string       |            | 否           | 描述，可为空                                                 |
| type         | string       |            | 是           | 类型   stdio \| sse                                          |
| command      | string       |            | 否           | 执行命令  npx \| uv \| 其它可执行文件全路径    type=stdio时必传 |
| baseUrl      | string       |            | 否           | 服务器URL地址，type=sse时必传                                |
| env          | object       |            | 否           | 环境变量  type=stdio时必传                                   |
| args         | string[]     |            | 否           | 参数  type=stdio时必传                                       |
| uv-index     | string       |            | 否           | UV源，command=uv 时必传                                      |
| npm-index    | string       |            | 否           | NPM源 command=npx时必传                                      |

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
    "message":null
    
}
```

## 卸载MCP服务

POST /mcp/remove_mcp_server

用途：卸载指定MCP服务

| **请求表单** |              |            |              |             |
| ------------ | ------------ | ---------- | ------------ | ----------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**    |
| name         | string       |            | 是           | MCP服务名称 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "卸载成功",
    "error_msg": "",
    "message":null
}
```

## 通过NPM安装指定MCP包

POST /mcp/npm_install_package

用途：手动添加MCP服务器

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
| package_name | string       |            | 是           | MCP名称  |
| npm-index    | string       |            | 是           | NPM源    |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "安装成功",
    "error_msg": "",
    "message":null
    
}
```

## 通过UV安装指定MCP包（暂不支持）

POST /mcp/uv_install_package

用途：手动添加MCP服务器

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
| package_name | string       |            | 是           | MCP名称  |
| uv-index     | string       |            | 是           | UV源     |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "安装成功",
    "error_msg": "",
    "message":null
}
```

## 获取可用的源列表

POST /mcp/get_registry_list

用途：手动添加MCP服务器

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明** |              |            |
| ---------------- | ------------ | ---------- |
| **字段名称**     | **数据类型** | **说明**   |
| pypi             | object[]     | pypi源列表 |
| npm              | object[]     | NPM源列表  |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
        "pypi": [
            {
                "name": "pypi",
                "url": "https://pypi.python.org/simple",
                "description": "Python官方源"
            },
            {
                "name": "清华大学源",
                "url": "https://pypi.tuna.tsinghua.edu.cn/simple",
                "description": "清华大学源，适合中国用户"
            }
        ],
        "npm": [
            {
                "name": "npm",
                "url": "https://registry.npmjs.org",
                "description": "npm官方源"
            },
            {
                "name": "淘宝源",
                "url": "https://registry.npmmirror.com",
                "description": "淘宝源，适合中国用户"
            }
        ]
    }
}
```

## 获取MCP-Server配置文件

POST /mcp/get_mcp_config_body

用途：修改MCP配置文件

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明** |              |              |
| ---------------- | ------------ | ------------ |
| **字段名称**     | **数据类型** | **说明**     |
| mcp_config_body  | string       | 配置文件内容 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
        "mcp_config_body":"xxxxx"
    }
}
```

## 保存MCP-Server配置文件

POST /mcp/save_mcp_config_body

用途：修改MCP配置文件

| **请求表单**    |              |            |              |                      |
| --------------- | ------------ | ---------- | ------------ | -------------------- |
| **参数名称**    | **数据类型** | **默认值** | **是否必传** | **说明**             |
| mcp_config_body | string       |            | 是           | 修改后的配置文件内容 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "配置已保存",
    "error_msg": "",
    "message": null
}
```

## 同步云端MCP列表

POST /mcp/sync_cloud_mcp

用途：同步最新的MCP列表

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "同步成功",
    "error_msg": "",
    "message": null
}
```