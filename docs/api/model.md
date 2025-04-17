# 模型管理
## 获取模型管理器信息

POST /manager/get_model_manager

用途：启动程序时，首个调用的接口，用于检查是否安装模型管理器，和已安装的模型列表等

| **请求表单** |              |            |              |                   |
| ------------ | ------------ | ---------- | ------------ | ----------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**          |
| manager_name | string       | all        | 否           | 可传：ollama、ALL |

| **响应字段说明** |              |                                |
| ---------------- | ------------ | ------------------------------ |
| **字段名称**     | **数据类型** | **说明**                       |
| manager_name     | string       | 管理器名称，如：ollama         |
| version          | string       | 管理器版本                     |
| models           | array        | 大模型列表，参考大模型字段说明 |
| status           | bool         | 是否安装                       |

| **大模型字段说明** |              |                                                              |
| ------------------ | ------------ | ------------------------------------------------------------ |
| **字段名称**       | **数据类型** | **说明**                                                     |
| full_name          | string       | 完整模型名称，如：deepseek-r1:1.5b                           |
| model              | string       | 模型名称，如：deepseek-R1                                    |
| msg                | string       | 英文描述                                                     |
| title              | string       | 中文描述                                                     |
| parameters         | string       | 参数规模，如1.5b                                             |
| install            | bool         | 是否安装                                                     |
| size               | bool         | 模型文件大小                                                 |
| download_size      | int          | 下载大小（如果未安装状态）                                   |
| link               | string       | 模型介绍页URL地址                                            |
| pull_count         | string       | 模型下载次数                                                 |
| updated            | string       | 更新时间，如：5 days ago                                     |
| updated_time       | int          | 将updated重新计算为时间戳，如：1738896215                    |
| capability         | array        | 模型功能，如：llm、embedding、vision、tools，这些值可能同时存在，不过embedding功能是单一的，包含vision说明支持图片识别，包含tools说明支持工具调用包含embedding说明不是大语言模型，而是向量模型，主要用于将内容转换为向量 |
| running            | bool         | 是否为启动状态                                               |
| memory_size        | int          | 当前占用内存大小，只有running=true时有意义                   |
| memory_require     | int          | 内存大小要求，通常是最低                                     |
| need_gpu           | bool         | 是否需要GPU                                                  |
| performance        | int          | 基于当前机器配置，评估模型的性能(单位tokens/s)，参考：-1=未评估，0=无法运行，1-3=非常慢，4-7=慢，8-25=一般，26-40=快，40+=极速 |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"模型管理信息获取成功",
    "error_msg":"",
    "message":[
        {
            "manager_name":"ollama",
            "version":"3.1",
            "status":true,
            "models":[
                {
                    "full_name": "deepseek-r1:1.5b",
                    "model": "deepseek-r1",
                    "parameters": "1.5b",
                    "download_size": "1.1GB",
                    "size": 1117322599,
                    "msg": "DeepSeek's first-generation of reasoning models with comparable performance to OpenAI-o1, including six dense models distilled from DeepSeek-R1 based on Llama and Qwen.",
                    "title": "DeepSeek第一代与OpenAI-o1性能相当的推理模型，包括六个基于Llama和Qwen从DeepSeek-R1中蒸馏出的密集模型。",
                    "link": "https://ollama.com/library/deepseek-r1:1.5b",
                    "pull_count": "14.2M",
                    "tag_count": "29",
                    "updated": "5 days ago",
                    "updated_time": 1738896215,
                    "capability": [
                      "llm"
                    ],
                    "install": true,
                    "running": false,
                    "memory_size": 0,
                    "memory_require": 0,
                    "need_gpu": false,
                    "performance": -1
                  },
                ...
            ]
        }
        ...
    ]
}
```

## 安装模型管理器

POST /manager/install_model_manager

用途：下载并安装指定模型管理器

| **请求表单** |              |            |              |                                                  |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                         |
| manager_name | string       | ollama     | 是           | 可传：ollama                                     |
| models_path  | string       |            | 否           | 指定ollama模型存储路径（可调用路径选择接口选择） |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"安装任务创建成功",
    "error_msg":"",
    "message":{
    }
            
}
```

## 设置ollama接口地址

POST /manager/set_ollama_host

用途：初始化时，用户可以安装，也可以设置ollama地址；此外，在本地模型管理应该也提供ollama地址设置

| **请求表单** |              |                        |              |                                        |
| ------------ | ------------ | ---------------------- | ------------ | -------------------------------------- |
| **参数名称** | **数据类型** | **默认值**             | **是否必传** | **说明**                               |
| ollama_host  | string       | http://127.0.0.1:11434 | 是           | ollama接口地址，如果不设置，使用默认值 |

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

## 选择路径（通用）

POST /index/select_folder

用途：需要用户选择路径时

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明** |              |            |
| ---------------- | ------------ | ---------- |
| **字段名称**     | **数据类型** | **说明**   |
| folder           | string       | 选中的路径 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "选择成功",
    "error_msg": "",
    "message": {
        "folder": "d:\\Users\\hwl\\Documents"
    }
}
```

## 获取模型管理器安装进度

POST /manager/get_model_manager_install_progress

用途：请求安装模型管理器后，立即调用此接口显示安装进度

| **请求表单** |              |            |              |              |
| ------------ | ------------ | ---------- | ------------ | ------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**     |
| manager_name | string       | ollama     | 是           | 可传：ollama |

| **响应字段说明** |              |                                                          |
| ---------------- | ------------ | -------------------------------------------------------- |
| **字段名称**     | **数据类型** | **说明**                                                 |
| status           | int          | 0=等待执行 1=正在下载  2=正在安装 3=安装成功 -1=安装失败 |
| total            | int          | 模型大小(bytes)                                          |
| completed        | int          | 已下载大小(bytes)                                        |
| progress         | 48           | 下载进度，百分比                                         |
| speed            | int          | 下载速度(bytes) 每秒                                     |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"获取成功",
    "error_msg":"",
    "message":{
        "status": 1,
        "progress": 48,
        "speed": 1613824,
        "total": 4683073184,
        "completed": 2256206100
  }
            
}
```

## 获取模型列表

POST /manager/get_model_list

用途：获取指定管理器下的所有可用模型（含未安装的）

| **请求表单** |              |            |              |                          |
| ------------ | ------------ | ---------- | ------------ | ------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                 |
| manager_name | string       | ollama     | 否           | 管理器名称，默认：ollama |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| model            | string       | 模型名称，如：deepseek-R1                                    |
| title            | string       | 中文描述                                                     |
| parameters       | string       | 参数规模，如1.5b                                             |
| install          | bool         | 是否安装                                                     |
| size             | bool         | 模型文件大小                                                 |
| running          | bool         | 是否为启动状态                                               |
| memory_size      | int          | 当前占用内存大小，只有running=true时有意义                   |
| memory_require   | int          | 内存大小要求，通常是最低                                     |
| need_gpu         | bool         | 是否需要GPU                                                  |
| performance      | int          | 基于当前机器配置，评估模型的性能(单位tokens/s)，参考：-1=未评估，0=无法运行，1-3=非常慢，4-7=慢，8-25=一般，26-40=快，40+=极速 |
| is_default       | bool         | 是否默认模型，如果为默认模型，下次打开对话自动选择此模型     |

## 获取机器配置信息

GET/POST /manager/get_configuration_info

用途：引导安装，安装模型，其它用户需要查看时

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明**     |              |                                     |
| -------------------- | ------------ | ----------------------------------- |
| **字段名称**         | **数据类型** | **说明**                            |
| cpu_model            | string       | CPU型号                             |
| cpu_cores            | int          | CPU核心数                           |
| cpu_clock            | string       | CPU主频速度，如4.9GHz               |
| memory_size          | int          | 内存大小                            |
| free_memory_size     | int          | 可用内存大小                        |
| gpu_model            | string       | GPU型号                             |
| gpu_type             | string       | GPU类型，如：Nvidia、AMD、Intel等   |
| is_cuda              | bool         | 是否支持cuda                        |
| gpu_memory           | int          | GPU内存大小                         |
| gpu_free_memory_size | int          | GPU可用内存大小                     |
| os_type              | string       | 操作系统类型：Windows、Linux、MacOS |
| os_name              | string       | 操作系统名称：Ubuntu 20.04 LTS      |
| os_version           | string       | 20.04.1                             |
| recommend            | string       | 模型选择建议(文字描述)              |

```JSON
{
  "status": 0,
  "code": 200,
  "msg": "获取配置信息成功",
  "error_msg": "",
  "message": {
    "cpu_model": "AMD Ryzen 9 3900X 12-Core Processor            ",
    "cpu_cores": 24,
    "cpu_clock": "3.793GHz",
    "memory_size": 68628742144,
    "free_memory_size": 39185162240,
    "gpu_model": "NVIDIA GeForce RTX 4090",
    "gpu_type": "Nvidia",
    "is_cuda": true,
    "gpu_memory": 24564,
    "gpu_free_memory_size": 21751,
    "os_type": "Windows",
    "os_name": "Microsoft Windows 11 专业版",
    "os_version": "10.0.26100",
    "recommend": "根据您的硬件配置，可以流畅运行大部分中大规模的模型，如：32b、27b、24b、14b、7b 等"
  }
}
```

## 安装指定大模型

POST /manager/install_model

用途：引导安装，安装模型

| **请求表单** |              |            |              |                          |
| ------------ | ------------ | ---------- | ------------ | ------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                 |
| model        | string       |            | 是           | 要安装的模型名称         |
| parameters   | string       |            | 是           | 要安装的参数参数规模版本 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"安装任务创建成功",
    "error_msg":"",
    "message":null
            
}
```

## 获取大模型安装进度

POST /manager/get_model_install_progress

用途：请求安装大模型后，立即调用此接口显示安装进度

| **请求表单** |              |            |              |                          |
| ------------ | ------------ | ---------- | ------------ | ------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                 |
| model        | string       |            | 是           | 要安装的模型名称         |
| parameters   | string       |            | 是           | 要安装的参数参数规模版本 |

| **响应字段说明** |              |                                                          |
| ---------------- | ------------ | -------------------------------------------------------- |
| **字段名称**     | **数据类型** | **说明**                                                 |
| status           | int          | 0=等待执行 1=正在下载  2=正在安装 3=安装成功 -1=安装失败 |
| digest           | string       | 文件名                                                   |
| total            | int          | 模型大小(bytes)                                          |
| completed        | int          | 已下载大小(bytes)                                        |
| progress         | 48           | 下载进度，百分比                                         |
| speed            | int          | 下载速度(bytes) 每秒                                     |

**响应示例：**

```JSON
{
  "status": 0,
  "code": 200,
  "msg": "获取安装进度成功",
  "error_msg": "",
  "message": {
    "digest": "sha256:96c415656d377afbff962f6cdb2394ab092ccbcbaab4b82525bc4ca800fe8a49",
    "status": 1,
    "progress": 48,
    "speed": 1613824,
    "total": 4683073184,
    "completed": 2256206100
  }
}
```

## 重新选择下载节点

POST /manager/reconnect_model_download

作用：当模型下载速度变得很慢时调用，比如从10MB速度降到200KB这种

PS：重新开始下载后，将从断点续传此前的进度，不会从头开始下载。

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"将为您重新下载，并断点续传。",
    "error_msg":"",
    "message":null
}
```

## 删除指定大模型

POST /manager/remove_model

用途：删除大模型

| **请求表单** |              |            |              |                             |
| ------------ | ------------ | ---------- | ------------ | --------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                    |
| model        | string       |            | 是           | 模型名称，示例：deepseek-R1 |
| parameters   | string       |            | 是           | 要安装的参数参数规模版本    |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"删除成功",
    "error_msg":"",
    "message":null
}
```

## 提交前端日志

POST /index/write_logs

用途：前端报错时

PS: %appdata%/aingdesk/logs 目录查看日志内容

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
| logs         | string       |            | 是           | 错误信息 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"写入成功",
    "error_msg":"",
    "message":null
            
}
```