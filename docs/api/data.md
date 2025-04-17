# 数据存储目录
## 获取当前用户数据存储目录信息

POST /index/get_data_save_path

用途：设置页面、或用户在修改存储目录后用于查看文件复制进度

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| oldPath          | string       | 旧的用户数据存储目录                                         |
| currentPath      | string       | 当前用户数据存储目录                                         |
| isMove           | bool         | 是否要移动数据到新路径（当修改存储目录后，此值为true，完成复制后此值恢复为false） |
| isMoveSuccess    | bool         | 是否移动成功（当修改存储目录后，且完成复制后此值恢复为true） |
| isClearOldPath   | bool         | 旧目录被删除后，此值为true，否则为false                      |
| dataSize         | number       | 数据目录大小（每次启动只计算一次）                           |
| copyStatus       | object       | 数据复制状态，用于显示复制进度：                copyStatus: {                    status:0,   // 0:未开始,1:正在复制,2:复制完成,-1:复制失败                    speed:0,    // 复制速度                    total:0,    // 总大小                    current:0,  // 已复制大小                    percent:0,  // 复制进度                    startTime:0, // 复制开始时间                    endTime:0,  // 复制结束时间                    fileTotal:0, // 复制文件总数                    fileCurrent:0, // 复制文件当前数量                    message:'', // 复制信息                    error:'',   // 复制错误信息                } |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
        "oldPath": "F:\\desk-top-ai\\data",
        "currentPath": "f:\\data",
        "isMove": false,
        "isMoveSuccess": true,
        "isClearOldPath": false,
        "dataSize": 171432049,
        "copyStatus": {
            "status": 2,
            "speed": 4762001,
            "total": 171432049,
            "current": 171432049,
            "percent": 100,
            "startTime": 1743557609,
            "endTime": 1743557645,
            "message": "复制完成",
            "error": "",
            "fileTotal": 6143,
            "fileCurrent": 6143
        }
    }
}
```

## 设置数据保存路径

POST /index/set_data_save_path

用途：设置页面修改用户数据保存路径时

| **请求表单** |              |            |              |                                            |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                   |
| newPath      | string       |            | 是           | 新的目录，注意：此目录必须存在，且为空目录 |

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
    "error_msg": ""
}
```