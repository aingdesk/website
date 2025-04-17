# 知识库相关接口
## 获取知识库状态

POST /rag/rag_status

用途：在使用知识库之前调用

PS：如果code!=200，请调用 /manager/install_model 接口安装 bge-m3:latest 模型后重试

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
// 知识库可用的情况
{
    "status":0,
    "code":200,
    "msg":"知识库组件正常",
    "error_msg":"",
    "message":null
}


// 知识库不可用的情况，此时请先调用模型安装接口安装bge-m3:latest模型
{
    "status": -1,
    "code": 500,
    "msg": "请先安装bge-m3:latest",
    "error_msg": "model 'bge-m3:latest' not found",
    "message": ""
}
```

## 获取嵌入模型列表

POST /rag/get_embedding_models

用途：在创建知识库时调用

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |
|              |              |            |              |          |

| **响应字段说明** |              |            |
| ---------------- | ------------ | ---------- |
| **字段名称**     | **数据类型** | **说明**   |
| title            | string       | 标题       |
| supplierName     | string       | 供应商名称 |
| model            | string       | 模型名称   |
| contextLength    | number       | 上下文长度 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": {
        "SiliconFlow": [
            {
                "title": "SiliconFlow/BAAI/bge-large-en-v1.5",
                "supplierName": "SiliconFlow",
                "model": "BAAI/bge-large-en-v1.5",
                "size": 0,
                "contextLength": 512
            },
            {
                "title": "SiliconFlow/BAAI/bge-large-zh-v1.5",
                "supplierName": "SiliconFlow",
                "model": "BAAI/bge-large-zh-v1.5",
                "size": 0,
                "contextLength": 512
            },
            {
                "title": "SiliconFlow/netease-youdao/bce-embedding-base_v1",
                "supplierName": "SiliconFlow",
                "model": "netease-youdao/bce-embedding-base_v1",
                "size": 0,
                "contextLength": 512
            },
            {
                "title": "SiliconFlow/BAAI/bge-m3",
                "supplierName": "SiliconFlow",
                "model": "BAAI/bge-m3",
                "size": 0,
                "contextLength": 512
            },
            {
                "title": "SiliconFlow/Pro/BAAI/bge-m3",
                "supplierName": "SiliconFlow",
                "model": "Pro/BAAI/bge-m3",
                "size": 0,
                "contextLength": 512
            }
        ],
        "ollama": [
            {
                "title": "ollama/nomic-embed-text:latest",
                "supplierName": "ollama",
                "model": "nomic-embed-text:latest",
                "size": 274302450,
                "contextLength": 512
            },
            {
                "title": "ollama/bge-m3:latest",
                "supplierName": "ollama",
                "model": "bge-m3:latest",
                "size": 1157672605,
                "contextLength": 512
            },
            {
                "title": "ollama/mxbai-embed-large:latest",
                "supplierName": "ollama",
                "model": "mxbai-embed-large:latest",
                "size": 669615493,
                "contextLength": 512
            }
        ]
    }
}
```

## 创建知识库

POST /rag/create_rag

用途：创建知识库

| **请求表单**     |              |               |              |                                                |
| ---------------- | ------------ | ------------- | ------------ | ---------------------------------------------- |
| **参数名称**     | **数据类型** | **默认值**    | **是否必传** | **说明**                                       |
| ragName          | string       |               | 是           | 知识库名称（允许中文、英文），但不能有特殊符号 |
| ragDesc          | string       |               | 是           | 知识库描述，可以传空字符串                     |
| supplierName     | string       | ollama        | 否           | 模型供应商                                     |
| enbeddingModel   | string       | bge-m3:latest | 是           | 嵌入模型                                       |
| searchStrategy   | number       | 2             | 否           | 检索策略 1=混合检索 2=向量检索 3=全文检索      |
| maxRecall        | number       | 5             | 否           | 最大召回数                                     |
| recallAccuracy   | number       | 0.1           | 否           | 召回精度                                       |
| resultReordering | number       | 0             | 否           | 结果重排序 1=开启 0=关闭 PS: 目前仅语义重排    |
| rerankModel      | string       |               | 否           | 重排序模型                                     |
| queryRewrite     | number       | 0             | 否           | 查询重写 1=开启 0=关闭                         |
| vectorWeight     | number       | 7             | 否           | 向量语言权重                                   |
| keywordWeight    | number       | 3             | 否           | 关键词权重                                     |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"知识库创建成功",
    "error_msg":"",
    "message":null
}
```

## 删除知识库

POST /rag/remove_rag

用途：删除知识库

| **请求表单** |              |            |              |            |
| ------------ | ------------ | ---------- | ------------ | ---------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**   |
| ragName      | string       |            | 是           | 知识库名称 |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |

**响应示例：**

```JSON
{
    "status":0,
    "code":200,
    "msg":"知识库删除成功",
    "error_msg":"",
    "message":null
}
```

## 获取知识库列表

POST /rag/get_rag_list

用途：展示知识库列表

| **请求表单** |              |            |              |          |
| ------------ | ------------ | ---------- | ------------ | -------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明** |

| **响应字段说明**    |              |                                                    |
| ------------------- | ------------ | -------------------------------------------------- |
| **字段名称**        | **数据类型** | **说明**                                           |
| ragName             | string       | 知识库名称                                         |
| ragDesc             | string       | 知识库描述                                         |
| ragCreateTime       | number       | 创建时间                                           |
| embeddingModel      | string       | 嵌入模型                                           |
| searchStrategy      | number       | 检索策略 1=混合检索 2=向量检索 3=全文检索          |
| maxRecall           | number       | 最大召回数                                         |
| recallAccuracy      | number       | 召回精度                                           |
| resultReordering    | number       | 结果重排序 1=开启 0=关闭 PS: 目前仅语义重排        |
| rerankModel         | number       | 重排序模型                                         |
| queryRewrite        | number       | 查询重写 1=开启 0=关闭                             |
| vectorWeight        | number       | 向量权重                                           |
| keywordWeight       | number       | 关键词权重                                         |
| supplierName        | string       | 嵌入模型供应商                                     |
| embeddingModelExist | bool         | 嵌入模型是否可用                                   |
| errorMsg            | string       | 错误信息（嵌入模型不可用时有内容，否则为空字符串） |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": [
        {
            "ragName": "11122",
            "ragDesc": "11122",
            "ragCreateTime": 1741334727,
            "embeddingModel": "bge-m3:latest111",
            "searchStrategy": 1,
            "maxRecall": 10,
            "recallAccuracy": 0.1,
            "resultReordering": 1,
            "rerankModel": "",
            "queryRewrite": 0,
            "vectorWeight": 0.7,
            "keywordWeight": 0.3,
            "supplierName": "ollama",
            "embeddingModelExist": false,
            "errorMsg": "指定嵌套模型不存在: bge-m3:latest111"
        },
        {
            "ragName": "5555",
            "ragDesc": "5555",
            "ragCreateTime": 1741569528,
            "embeddingModel": "bge-m3:latest",
            "searchStrategy": 1,
            "maxRecall": 10,
            "recallAccuracy": 0.1,
            "resultReordering": 1,
            "rerankModel": "",
            "queryRewrite": 0,
            "vectorWeight": 0.7,
            "keywordWeight": 0.3,
            "supplierName": "ollama",
            "embeddingModelExist": true,
            "errorMsg": ""
        },
        {
            "ragName": "test",
            "ragDesc": "test",
            "ragCreateTime": 1741331747,
            "embeddingModel": "bge-m3:latest",
            "searchStrategy": 1,
            "maxRecall": 10,
            "recallAccuracy": 0.1,
            "resultReordering": 1,
            "rerankModel": "",
            "queryRewrite": 0,
            "vectorWeight": 0.7,
            "keywordWeight": 0.3,
            "supplierName": "ollama",
            "embeddingModelExist": true,
            "errorMsg": ""
        },
        {
            "ragName": "堡塔",
            "ragDesc": "宝塔面板相关知识",
            "ragCreateTime": 1741331747,
            "embeddingModel": "bge-m3:latest",
            "searchStrategy": 1,
            "maxRecall": 10,
            "recallAccuracy": 0.1,
            "resultReordering": 1,
            "rerankModel": "",
            "queryRewrite": 0,
            "vectorWeight": 0.7,
            "keywordWeight": 0.3,
            "supplierName": "ollama",
            "embeddingModelExist": true,
            "errorMsg": ""
        }
    ]
}
```

## 修改知识库

POST /rag/modify_rag

用途：目前只支持修改描述

| **请求表单**     |              |            |              |                                             |
| ---------------- | ------------ | ---------- | ------------ | ------------------------------------------- |
| **参数名称**     | **数据类型** | **默认值** | **是否必传** | **说明**                                    |
| ragName          | string       |            | 是           | 知识库名称                                  |
| ragDesc          | string       |            | 是           | 知识库描述，可以传空字符串                  |
| searchStrategy   | number       | 2          | 否           | 检索策略 1=混合检索 2=向量检索 3=全文检索   |
| maxRecall        | number       | 5          | 否           | 最大召回数                                  |
| recallAccuracy   | number       | 0.1        | 否           | 召回精度                                    |
| resultReordering | number       | 0          | 否           | 结果重排序 1=开启 0=关闭 PS: 目前仅语义重排 |
| rerankModel      | string       |            | 否           | 重排序模型                                  |
| queryRewrite     | number       | 0          | 否           | 查询重写 1=开启 0=关闭                      |
| vectorWeight     | number       | 7          | 否           | 向量语言权重                                |
| keywordWeight    | number       | 3          | 否           | 关键词权重                                  |

| **响应字段说明** |              |            |
| ---------------- | ------------ | ---------- |
| **字段名称**     | **数据类型** | **说明**   |
| ragName          | string       | 知识库名称 |
| ragDesc          | string       | 知识库描述 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "知识库修改成功",
    "error_msg": "",
    "message": [
        {
            "ragName": "test",
            "ragDesc": "the is test"
        }
    ]
}
```

## 上传文档

POST /rag/upload_doc

用途：上传文档，批量

| **请求表单** |              |               |              |                                                              |
| ------------ | ------------ | ------------- | ------------ | ------------------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值**    | **是否必传** | **说明**                                                     |
| ragName      | string       |               | 是           | 知识库名称                                                   |
| filePath     | string       |               | 是           | JSON数组，示例：JSON.stringify(["D:\\Users\\hwl\Downloads\\Linux面板知识库\\防篡改\\购买和安装.docx"]) 知识库支持的文件格式如下：Word文档：docx：.docxdoc：.doc表格类型：xlsx：.xlsxxls：.xlscsv：.csv演示文稿类型：pptx：.pptxppt：.pptPDF 文件：.pdf网页文件：html：.htmlhtm：.htm图片类型：（仅识别中文和英文）jpg：.jpgjpeg：.jpegpng：.pnggif：.gifbmp：.bmpwebp：.webpMarkdown 文件：md：.mdmarkdown：.markdown纯文本文件：txt：.txtlog：.log |
| separators   | string[]     | ["\n\n","。"] | 否           | 分块关键词（支持正则表达式）字符串分块：["。"]正则表达式：["/(第.{1,10}条\s)/"]PS：正则表达式无需增加修饰符，默认会自动增加g修饰符 |
| chunkSize    | number       | 500           | 否           | 切片长度，建议不超过1000，否则可能超出嵌入模型上下文长度，导致嵌入失败 |
| overlapSize  | number       | 50            | 否           | 重叠长度，建议为chunkSize的10% ~ 20%，如果明确分割符能分割出比较好的效果，此值直接设为0关闭重叠效果更好 |

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
    "msg": "上传成功",
    "error_msg": "",
    "message": null
}
```

## 获取知识库文档列表

POST /rag/get_rag_doc_list

用途：上传文档，批量

| **请求表单** |              |            |              |            |
| ------------ | ------------ | ---------- | ------------ | ---------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**   |
| ragName      | string       |            | 是           | 知识库名称 |

| **响应字段说明** |              |                                                              |
| ---------------- | ------------ | ------------------------------------------------------------ |
| **字段名称**     | **数据类型** | **说明**                                                     |
| doc_id           | string       | 文档ID                                                       |
| doc_name         | string       | 文档名称                                                     |
| doc_file         | string       | 文档归档路径                                                 |
| md_file          | string       | 文档解析后的MD文件路径                                       |
| doc_rag          | string       | 文档所属知识库                                               |
| doc_abstract     | string       | 文档摘要                                                     |
| doc_keywords     | string[]     | 文档关键词                                                   |
| is_parsed        | number       | 文档是否解析成向量，0=等待解析 1=已解析/已嵌入 \| 2=已解析  3=已嵌入 |
| separators       | string[]     | 分割符                                                       |
| chunkSize        | number       | 分片大小                                                     |
| overlapSize      | number       | 重叠长度                                                     |
| update_time      | number       | 文档更新时间                                                 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": [
        {
            "doc_id": "f29c8c00-f98f-11ef-b5d8-5f0f7fedf181",
            "doc_name": "购买和安装.docx",
            "doc_file": "{DATA_DIR}\\rag\\test\\source\\购买和安装.docx",
            "md_file": "{DATA_DIR}\\rag\\test\\markdown\\购买和安装.docx.md",
            "doc_rag": "test",
            "doc_abstract": "购买和安装\n\n工具1-企业级防篡改\n\n企业防篡改价格\n\n价格受不同版本、购买年限、购买时间等因素影响，请查看以下页面查询具体价格信息：https://www.bt.cn/new/product/tam...",
            "doc_keywords": [
                "篡改",
                "点击",
                "购买",
                "企业级",
                "安装"
            ],
            "is_parsed": 1,
            "update_time": 1741158212
        },
        {
            "doc_id": "ad408ab0-f99b-11ef-aaab-91a043b91dc9",
            "doc_name": "使用.docx",
            "doc_file": "{DATA_DIR}\\rag\\test\\source\\使用.docx",
            "md_file": "{DATA_DIR}\\rag\\test\\markdown\\使用.docx.md",
            "doc_rag": "test",
            "doc_abstract": "使用\n\n工具1-企业防篡改\n\n怎么快速启用企业级防篡改，并查看拦截效果？\n\n第一步：点击【保护列表】，点击【添加保护】，选择自己需要添加的站点，\n\n第二步：测试防护效果\n\n①插件测试\n\n在插件中，直接...",
            "doc_keywords": [
                "test",
                "www",
                "php",
                "wwwroot",
                "文件"
            ],
            "is_parsed": 1,
            "update_time": 1741163250
        },
        {
            "doc_id": "d217d8c0-f99b-11ef-aaab-91a043b91dc9",
            "doc_name": "简介.docx",
            "doc_file": "{DATA_DIR}\\rag\\test\\source\\简介.docx",
            "md_file": "{DATA_DIR}\\rag\\test\\markdown\\简介.docx.md",
            "doc_rag": "test",
            "doc_abstract": "简介\n\n堡塔防篡改介绍\n\n》\n\n工具1-企业级防篡改\n\n企业版-防篡改介绍\n\n企业版-防篡改，又称\"企业防篡改\"，企业版安全插件，该插件属于内核型防篡改，可实时监控网站目录或文件，并在网站被恶意篡改时...",
            "doc_keywords": [
                "篡改",
                "网站",
                "专业版",
                "防护",
                "插件"
            ],
            "is_parsed": 1,
            "update_time": 1741163311
        },
        {
            "doc_id": "d664ebc0-f99b-11ef-aaab-91a043b91dc9",
            "doc_name": "常见问题.docx",
            "doc_file": "{DATA_DIR}\\rag\\test\\source\\常见问题.docx",
            "md_file": "{DATA_DIR}\\rag\\test\\markdown\\常见问题.docx.md",
            "doc_rag": "test",
            "doc_abstract": "常见问题\n\n分类\n\n购买与授权\n\n安装与配置\n\n功能使用\n\n性能与优化\n\n故障排查\n\n模板\n\n描述：详细描述问题场景\n\n解决步骤：逐步说明解决方法\n\n工具1-企业级防篡改\n\n问题1：防篡改到期了，无法...",
            "doc_keywords": [
                "篡改",
                "防护",
                "网站",
                "tamper",
                "文件"
            ],
            "is_parsed": 1,
            "update_time": 1741163318
        }
    ]
}
```

## 下载指定文档

GTE /rag/download_doc

用途：下载文档

| **请求表单** |              |            |              |            |
| ------------ | ------------ | ---------- | ------------ | ---------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**   |
| ragName      | string       |            | 是           | 知识库名称 |
| docName      | string       |            | 是           | 文档名称   |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |
|                  |              |          |

**响应示例：**

```JSON
// 流式响应，建议直接 window.open
```

1. ## 访问图片

GTE /rag/images

用途：访问图片

| **请求表单** |              |            |              |              |
| ------------ | ------------ | ---------- | ------------ | ------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**     |
| r            | string       |            | 是           | 知识库名称   |
| n            | string       |            | 是           | 图片名称hash |

| **响应字段说明** |              |          |
| ---------------- | ------------ | -------- |
| **字段名称**     | **数据类型** | **说明** |
|                  |              |          |
|                  |              |          |

**响应示例：**

```JSON
// image
```

## 删除指定文档

GTE /rag/remove_doc

用途：删除文档

| **请求表单** |              |            |              |                                                      |
| ------------ | ------------ | ---------- | ------------ | ---------------------------------------------------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                             |
| ragName      | string       |            | 是           | 知识库名称                                           |
| docIdList    | string       |            | 是           | 要删除的文档ID列表，JSON.stringify(["dddd","ccccc"]) |

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
    "msg": "删除成功",
    "error_msg": "",
    "message": null
}
```

## 重新索引指定文档

GTE /rag/reindex_document

用途：暂时无用，后续支持修改文档内容时使用

| **请求表单** |              |            |              |            |
| ------------ | ------------ | ---------- | ------------ | ---------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**   |
| ragName      | string       |            | 是           | 知识库名称 |
| docId        | string       |            | 是           | 文档ID     |

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
    "msg": "操作成功",
    "error_msg": "",
    "message": null
}
```

## 重新生成知识库索引

GTE /rag/reindex_rag

用途：暂时无用，后续支持修改知识库嵌套模型时调用

| **请求表单** |              |            |              |            |
| ------------ | ------------ | ---------- | ------------ | ---------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**   |
| ragName      | string       |            | 是           | 知识库名称 |

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
    "msg": "操作成功",
    "error_msg": "",
    "message": null
}
```

## 检索知识库

GTE  /rag/search_document

用途：测试知识库召回效果时使用，对话时选择了知识库，在调用chat前调用

| **请求表单** |              |            |              |                                                              |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                                     |
| ragList      | string       |            | 是           | 调用的知识库列表，支持多个，示例：JSON.stringify(["test","test"]) |
| queryText    | string       |            | 是           | 查询内容                                                     |

| **响应字段说明** |              |                                              |
| ---------------- | ------------ | -------------------------------------------- |
| **字段名称**     | **数据类型** | **说明**                                     |
| id               | string       | 文档分片ID                                   |
| doc              | string       | 召回的内容，可能是分片内容，也可能是文档全文 |
| docId            | string       | 来源文档ID                                   |
| docName          | string       | 来源文档名称                                 |
| docFile          | string       | 来源文档全路径                               |
| score            | number       | 综合评分，越小越好                           |
| vectorScore      | number       | 向量相似度评分，越小越好                     |
| keywordScore     | number       | 关键词和语干语义维度距离评分，越大越好       |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "操作成功",
    "error_msg": "",
    "message": [
        {
            "id": "d51eb020-f99b-11ef-aaab-91a043b91dc9",
            "doc": "专业版-网站防篡改介绍\n\n专业版-网站防篡改，又称\"网站防篡改\",专业版安全插件，该插件是一款事件型防篡改工具，可实时监控网站目录或文件，并在网站被恶意篡改时，通过备份数据恢复被篡改的文件或目录，防止网站被植入非法信息、网站被挂马等入侵行为，保障网站正常运行。\n\n兼容版本：支持x86-64、arm64架构，支持linux、windows\n\n》 \n\n专业版-网站防篡改功能\n\n拦截概览\n\n黑白名单配置\n\n文件监控\n\n文件异常恢复\n\n操作日志\n\n》\n\n专业版-网站防篡改适用场景\n\n适用于电商网站、门户网站等php网站防护，适用于网站数量尽可能少于300个，而且每个网站占用小于10G\n\n》\n\n专业版-网站防篡改旧版介绍\n\n专业版-网站防篡改_旧版，又称\"网站防篡改_旧版\",是网站防篡改的前身,专业版插件，目前暂停维护，版本为3.6.7\n\n该插件属于事件型防篡改，可实时监控网站目录或文件，\n\n》 \n\n这三款防篡改，各自有什么区别？\n\n企业防篡改：\n\n防护能力:提供更深入的防护，能在篡改行为发生时直接阻止\n\n功能上：支持自定义添加防护目录，可在文件管理页面上管理防篡改、可配置实时告警",
            "docId": "d217d8c0-f99b-11ef-aaab-91a043b91dc9",
            "docName": "简介.docx",
            "docFile": "F:\\desk-top-ai\\data\\rag\\test\\markdown\\简介.docx.md",
            "score": -216.87814941406248,
            "vectorScore": -309.825927734375,
            "keywordScore": 0
        },
        {
            "id": "d52b8160-f99b-11ef-aaab-91a043b91dc9",
            "doc": "管理防篡改、可配置实时告警\n\n适用场景：只支持amd结构，适用于大规模、高流量的网站环境，能够支持更复杂的使用场景\n\n网站防篡改：\n\n防护能力:关注事后恢复文件，重点在于监控文件变化，发现文件被篡改行为，在10ms内，将异常文件还原正常\n\n功能上：企业版的基础版，界面更简洁\n\n适用场景：适合中小型网站，防护网站数量和占用有一定要求\n\n网站防篡改-旧版：目前暂停维护\n\n》\n\n什么情况下，用企业版防篡改呢？\n\n如果是单网站超过10g的，或者同时需要防护300多个网站以上的情况下，推荐用企业级防篡改，网站防篡改防护的网站数量太多或者网站太大，都会极大影响网站防篡改防护效果，而企业级受到的影响就小很多。\n\n》",
            "docId": "d217d8c0-f99b-11ef-aaab-91a043b91dc9",
            "docName": "简介.docx",
            "docFile": "F:\\desk-top-ai\\data\\rag\\test\\markdown\\简介.docx.md",
            "score": -243.41119995117185,
            "vectorScore": -347.73028564453125,
            "keywordScore": 0
        },
        {
            "id": "d51142a0-f99b-11ef-aaab-91a043b91dc9",
            "doc": "简介\n\n堡塔防篡改介绍\n\n》\n\n工具1-企业级防篡改\n\n企业版-防篡改介绍\n\n企业版-防篡改，又称\"企业防篡改\"，企业版安全插件，该插件属于内核型防篡改，可实时监控网站目录或文件，并在网站被恶意篡改时，在内核系统调用层，实时拦截一系列恶意篡改的文件或目录的行为，防止网站被植入非法信息、网站被挂马等入侵行为，保障网站正常运行。\n\n兼容版本：目前只兼容AMD架构，支持市面上主流linux系统，如centos、debian、ubuntu、kylin、opencloud、deep23、Amazon、Anolis OS等\n\n》\n\n企业版-防篡改功能\n\n拦截概览\n\n目录防护\n\n黑白名单配置\n\n进程白名单\n\n告警设置\n\n操作日志\n\n》\n\n企业版-防篡改应用场景\n\n适用于政务网站、教育机构、学校网站、企业站点等网站，可同时防护数量多且网站占用大的网站，支持自定义添加防护目录\n\n》 \n\n工具2-网站防篡改\n\n专业版-网站防篡改介绍",
            "docId": "d217d8c0-f99b-11ef-aaab-91a043b91dc9",
            "docName": "简介.docx",
            "docFile": "F:\\desk-top-ai\\data\\rag\\test\\markdown\\简介.docx.md",
            "score": -266.2134307861328,
            "vectorScore": -380.3049011230469,
            "keywordScore": 0
        },
        {
            "id": "4c025060-f998-11ef-876b-937b0c2bb41d",
            "doc": "购买和安装\n\n工具1-企业级防篡改\n\n企业防篡改价格\n\n价格受不同版本、购买年限、购买时间等因素影响，请查看以下页面查询具体价格信息：https://www.bt.cn/new/product/tamper_drive.html\n\n详情请联系客服，并留言“购买企业防篡改”。\n\n》\n\n如何购买企业防篡改\n\n三种途径\n\n一是点击面板右侧栏【软件商店】，搜索【企业级防篡改】，在最新版本，点击【立即购买】\n\n二是点击面板右侧栏【文件】，在文件管理中，点击【企业级防篡改】，即可购买\n\n三是线下购买\n\n》\n\n企业防篡改购买和使用注意事项\n\n如果购买机器大于50台，点击该https://www.bt.cn/，扫描右侧二维码，即可添加客服企业微信，可领取优惠券\n\n》\n\n企业防篡改支持哪些操作系统\n\n支持市面上主流linux系统，如Centos、Debian、Ubuntu、Kylin、Opencloud、Deep23、Amazon、Anolis os等。\n\n若出现不兼容操作系统，请联系客服或进堡塔防篡改QQ群239775744\n\n》\n\n推荐什么系统",
            "docId": "f29c8c00-f98f-11ef-b5d8-5f0f7fedf181",
            "docName": "购买和安装.docx",
            "docFile": "F:\\desk-top-ai\\data\\rag\\test\\markdown\\购买和安装.docx.md",
            "score": -298.4025146484375,
            "vectorScore": -426.289306640625,
            "keywordScore": 0
        },
        {
            "id": "d664ebc0-f99b-11ef-aaab-91a043b91dc9",
            "doc": "常见问题\n\n分类\n\n购买与授权\n\n安装与配置\n\n功能使用\n\n性能与优化\n\n故障排查\n\n模板\n\n描述：详细描述问题场景\n\n解决步骤：逐步说明解决方法\n\n工具1-企业级防篡改\n\n问题1：防篡改到期了，无法关闭防护，该怎么处理\n\n描述：防篡改到期后，会遗留防护进程\n\n解决步骤：\n\n①面板上执行：直接将插件删除，也可以关闭防护进程\n\n②终端执行\n\nPython企业级防篡改：/etc/init.d/bt-tamper stop网站防篡改：systemctl stop tamper_proof.service\n\n》\n\n问题2：安装后，显示\"内核不兼容\"了，怎么处理？\n\n描述：安装好防篡改后，点击插件，发现显示\"版本不兼容\"问题\n\n解决步骤：\n\n第一步：查看架构和linux内核，目前只支持amd架构，如果是arm的就请用\"网站防篡改\"\n\nPythonuname -r //查看内核版本\n\n第二步：查看当前服务器是否有编译环境，\n\nubuntu/debian\n\nBashls /usr/src/linux-headers-*ls /lib/modules/\n\nCentos\n\nBashrpm -qa kernel-devel   #查看kernel-devel版本rpm -qa kernel-headers\n\n若输出的结果文件，和uname -r相同，则可自行编译，符合编译情况如图展示\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=f1407e42bf100b57840e54e4f3938fb5.png)\n\n若缺少某个内核开发文件，比如没有kernel-devel*的包，就需要找到内核开发包\n\ncentos内核开发包下载，可参考https://yum.oracle.com/repo/OracleLinux/OL8/baseos/latest/x86_64/index.html\n\nPython# 编译包  强制编译，拒绝自动升级 无视编译rpm -ivh --force kernel-devel-4.18.0-193.el8.x86_64.rpm --nodeps\n\n详细的可参考文章：【教程贴】解决企业级防篡改内核不兼容问题\n\n第三步：若编译环境没问题，还是出现\"不兼容\"情况\n\n依次执行下面指令\n\nPythonchmod +x /www/server/panel/plugin/tamper_core/install.shbash install.sh install\n\n根据编译过程中出现的报错，进行针对性调整，如果还是无法解决，请联系客服或进堡塔防篡改QQ群239775744\n\n》\n\n问题3：企业级防篡改常用指令有哪些？\n\n查看防篡改状态\n\nPython/etc/init.d/bt-tamper status\n\n关闭防篡改\n\nPython/etc/init.d/bt-tamper stop\n\n开启防篡改\n\nPython/etc/init.d/bt-tamper start\n\n重启防篡改\n\nPython/etc/init.d/bt-tamper restart\n\n》\n\ncentos 8的机器是不是安装不上企业级防篡改\n\n执行下面指令\n\nPythonchmod +x /www/server/panel/plugin/tamper_core/install.shbash install.sh install\n\n查看下编译失败的原因，根据编译过程中出现的报错，进行针对性调整，如果还是无法解决，请联系客服或进堡塔防篡改QQ群239775744\n\n》\n\n客户数据库访问权限是所有人，但是想把权限改成只读不写。防篡改插件针对数据文件进行防护吗\n\n目前不建议针对sql文件进行防护，部分数据库文件防护后，会出现数据库文件无法读取问题\n\n防篡改插件是否支持使用root权限，都无法从服务器修改的吗？\n\n支持，可拦截root用户的一系列文件操作，默认开启root用户拦截\n\n》\n\n开启了企业防篡改，wp插件就访问不了，这种该怎么处理\n\n在wp管理后台中，再点击一次wp插件，并观察防篡改的拦截日志是否有增加，若是出现误拦截情况，把对应路径加白即可。\n\n》\n\n网站总需要通过FTP上传代码，是否可以指定自己的电脑ip放行掉？\n\n目前不支持放行指定IP的操作，可将FTP这个进程加白，同样可实现放行效果。\n\n》\n\n开启防篡改，网站业务打不开\n\n 同样使用的场景：开启后，网站出现大量告警日志，怎么调整防护配置\n\n第一步：点击频繁告警或者无法打开的网站，查看拦截日志\n\n第二步：添加白名单，在确保业务正常运行的前提下，尽可能缩小放行白名单范围\n\n判断需要加白的标准：\n\n该目录为缓存目录，像cache、tmp这些；\n\n需要频繁修改且不是重要的文件。\n\n如果文件要频繁修改，但不能放行，这个又需要怎么处理？\n\n        举例：/www/wwwroot/bt.cn/config/config.php 频繁需要修改\n\n        放行这个文件，并将这个文件权限设置为644\n\n》\n\n文件管理界面中，点击指定文件进行防护，没有效果\n\n在文件管理中，针对某个文件夹config进行防护，却没有效果，如下图所示\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=b438ba3fec64a2ef8d308dfb6fa79948.png)\n\n查看下站点的防护配置的白名单，是不是添加了config/目录，是的话，就删除\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=48524b15c1bf89be950a86c8b3dd0490.png)\n\n》\n\n如何卸载掉防篡改工具\n\n第一种：面板上卸载，点击【软件商店】，选择对应防篡改工具，点击【卸载】即可\n\n第二种：终端执行，企业防篡改和网站防篡改卸载指令如下\n\n卸载企业防篡改\n\nPython /www/server/panel/plugin/tamper_core/install.sh uninstall\n\n卸载网站防篡改\n\nPython /www/server/panel/plugin/tamper_proof_refactored/install.sh uninstall\n\n》\n\n工具2-网站防篡改\n\n网站防篡改和企业防篡改有什么区别？\n\n企业防篡改：\n\n防护能力:提供更深入的防护，能在篡改行为发生时直接阻止\n\n功能上：支持自定义添加防护目录，可在文件管理页面上管理防篡改、可配置实时告警\n\n适用场景：只支持amd结构，适用于大规模、高流量的网站环境，能够支持更复杂的使用场景\n\n网站防篡改：\n\n防护能力:关注事后恢复文件，重点在于监控文件变化，发现文件被篡改行为，在10ms内，将异常文件还原正常\n\n功能上：企业版的基础版，界面更简洁\n\n适用场景：适合中小型网站，防护网站数量和占用有一定要求\n\n》\n\n网站防篡改支持ARM架构吗?\n\n支持，网站防篡改支持AMD和ARM架构\n\n》\n\n开启防护，卡在防护界面好久，是不是卡住了？怎么关掉?\n\n如果待防护的网站中，存在\"单网站超过10g的，或者同时需要防护300多个网站以上\"情况,使用网站防篡改首次防护会比较慢，需要等待，若卡了许久，进度条没有变动的情况下，请执行下面指令，即可停止防护.\n\nPythonsystemctl status tamper_proof.service\n\n》\n\n开启防护后，出现大量的拦截日志，这个怎么处理？\n\n点击\"出现大量拦截日志\"的站点日志，将对应路径加白即可。\n\n举个例子\n\n站点：/www/wwwroot/bt.cn/\n\n频繁报错：/www/wwwroot/bt.cn/runtime/20251109/cache.php\n\n将该路径/www/wwwroot/bt.cn/runtime/加入白名单即可\n\n》\n\n网站防篡改可不可以放行面板的操作\n\n目前不支持，企业防篡改可支持放行面板操作，如有需要，请安装【企业防篡改】\n\n》\n\n网站防篡改配置好防护策略后，为什么不能立刻生效？\n\n网站防篡改重新配置防护策略后，需重启下防护服务，再查看防护效果\n\n》\n\n工具3-网站防篡改-win版",
            "docId": "d664ebc0-f99b-11ef-aaab-91a043b91dc9",
            "docName": "常见问题.docx",
            "docFile": "F:\\desk-top-ai\\data\\rag\\test\\markdown\\常见问题.docx.md",
            "score": -313.4588165283203,
            "vectorScore": -447.7983093261719,
            "keywordScore": 0
        },
        {
            "id": "ad408ab0-f99b-11ef-aaab-91a043b91dc9",
            "doc": "使用\n\n工具1-企业防篡改\n\n怎么快速启用企业级防篡改，并查看拦截效果？\n\n第一步：点击【保护列表】，点击【添加保护】，选择自己需要添加的站点，\n\n第二步：测试防护效果\n\n①插件测试\n\n在插件中，直接点击【模拟攻击】，选择好待测试的目录，点击确定，即可查看效果，最后可在对应站点的拦截日志中，查阅到拦截信息\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=bdede6365f550ecdf48e2246b279f3d8.png)\n\n②终端测试\n\n进入终端shell，任意进入一个正在防护的目录，比如进入/www/wwwroot/www.bt.tamper.com/\n\nPythoncd /www/wwwroot/www.bt.tamper.com/\n\n尝试创建文件2.php\n\nPythontouch 2.php\n\n若返回信息\"touch: setting times of '2.php': No such file or directory\",则可视为拦截成功，最后可查看站点的拦截日志，即可查看到对应拦截信息。\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=a4bc10424febb2a1aefa3d13c2cc31b2.png)\n\n详细内容可参考文档：【教程贴】企业防篡改常见使用场景\n\n》\n\n企业级防篡改的黑白名单需要怎么配置\n\n黑白名单配置总共分为五大部分：基础设置、受保护文件后缀、受保护文件、目录白名单、文件白名单\n\n①基础设置：全局配置，可以手动关闭部分拦截行为，默认配置即可\n\n②受保护文件后缀:添加文件后缀，主要为文件名结尾的字符串，如.php,.html,.js,index.php\n\n若要防护以php为结尾的文件，则添加.php，匹配内容为./1.php ./test/2.php \n\n③受保护文件\n\n添加对象为需要保护的文件，目前支持四种添加方式，具体如下\n\n假设防护站点路径为/www/wwwroot/test/\n\n完整文件路径，如: /www/wwwroot/test/123.log\n\n相对于网站的相对路径，如: 全路径是/www/wwwroot/test/app/123.log，即可添加相对路径./app/123.log\n\n指定目录下的所有文件，如：/www/wwwroot/test/app/* 相对路径./app/*\n\n指定目录下的指定文件类型，如：/www/wwwroot/test/app/*.log 相对路径./app/*.log\n\n④目录白名单\n\n添加对象为目录，且一定要以\"/\"结尾，需添加多个，可用\",\"隔开。\n\n目前支持三种添加方式：全路径、目录名、相对路径，具体如下\n\n举个例子，防护站点路径为/www/wwwroot/test/\n\n全路径添加：/www/wwwroot/test/runtime\n\n匹配:/www/wwwroot/test/runtime目录下所有文件，将全部放行，不做拦截\n\n不匹配：/www/wwwroot/test111/\n\n目录名添加：tmp\n\n匹配：/www/wwwroot/test/tmp/目录所有文件将放行，不做拦截\n\n不匹配：/www/wwwroot/test/1111tmp\n\n相对路径添加：cache/test/ \n\n匹配：/www/cache/test/1.txt /cache/test/\n\n不匹配：/www/cache/test /cache/\n\n注意项\n\n全路径首位必需为/，如：/www/abc/cache/test/\n\n添加相对路径时首位不能是/，如：cache/test/ 或 test\n\n添加全路径和相对路径时，必须以\"/\"结尾\n\n⑤文件白名单\n\n主要是针对文件进行白名单配置，目前支持五种添加方式\n\n完整文件路径，如: /www/wwwroot/test/123.php\n\n相对于网站的相对路径\n\n若想放行/www/wwwroot/test/app/123.php ，可添加相对路径./app/123.php\n\n所有同名文件，如：123.php\n\n指定目录下的所有文件 ./app/*\n\n若想放行/www/wwwroot/test/app/* ，可添加相对路径./app/*\n\n指定目录下的指定文件类型 ./app/*.php\n\n若想要放行/www/wwwroot/test/app/目录下所有php文件，可添加相对路径./app/*.php\n\n注意项\n\n添加文件白名单时，若需要添加相对路径，必须以\"./\"为开头\n\n》\n\n企业级防篡改有没有一键识别当前网站，自动生成防护策略\n\n选择一个待配置的站点，点击【配置】，再点击【自动配置】，会自动识别当前网站CMS版本，进行针对性生成对应的防护配置。\n\n》\n\n网站很多，怎么将当前的配好黑白名单一键应用到其他站点上呢？\n\n选择一个已配置的站点，点击【配置】，再点击【应用至其他网站】，选择需要一键应用的站点即可\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=1667aa825b392f53f4e88b5b4fd3cafc.png)\n\n》\n\n添加黑白名单策略时，有哪些注意项\n\n白名单规则具备最高优先级，黑白名单策略存在重合情况，以白名单为主\n\n目录白名单和文件白名单不能混淆添加，目录白名单只能放行目录，文件白名单只能放行文件\n\n》\n\n企业级防篡改怎么配置告警配置，能在发生篡改后，能及时通知用户？\n\n步骤：点击【告警设置】，点击【创建告警任务】，配置告警方式、告警频率，即可点击【创建】\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=75136eed81d185643978bee190082ee1.png)\n\n》\n\n企业级防篡改配置告警时，有哪些注意项\n\n告警频率尽可能不要太快，比如说5分钟内篡改3次，每次间隔10s就触发告警，不然会出现频繁重复告警。\n\n》\n\n工具2-网站防篡改\n\n核心：开启防护，并添加防护目录->测试防护效果->出现误拦截，针对配置适配黑白名单\n\n网站防篡改怎么快速启动？\n\n点击插件后，将同步该面板上的所有php站点，\n\n点击【服务状态】按钮，若显示绿色，则为开启状态\n\n在针对需要防护的网站，将模式切换为【拦截模式】，即可正常防护\n\n》\n\n网站防篡改怎么测试防护效果\n\n模拟黑客进行篡改指定站点信息，并获取权限，本次模拟测试不会影响业务的正常运行，无需担忧。\n\n第一种：官方模拟测试，点击【模拟测试】按钮，选择指定站点，即可查看拦截效果\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=23f4f14085e8328e276ce19a154c5e66.png)\n\n第二种：手动测试，在面板上进行测试\n\n在面板上，修改一个正处于防护文件后，F5刷新下页面，再次查看该文件，即可会发现这个文件还原了。\n\n》\n\n网站防篡改怎么配置黑白名单\n\n白名单（排除目录）       白名单初次安装后，会有一个默认配置，请根据自己需要，进行配置（注意：排除目录优先级>保护列表）效果：排除目录中的路径，都将会放行，不做拦截处理，可将缓存文件路径加进去排除文件或者目录的填写格式如下⭐⭐1、通配符 * 例如: /www/wwwroot/bt.cn/test/*.php            /www/wwwroot/bt.cn/test/目录下所有的php文件都放行，不做拦截2、完整路径 /www/wwwroot/bt.cn/runtime/                      /www/wwwroot/bt.cn/runtime/目录下所有文件都放行，不做拦截3、完整文件路径 /www/wwwroot/bt.cn/runtime/bt.php     网站bt.cn的目录runtime下的bt.php不做拦截4、单路径格式 runtime                                                     代表只要路径中存在runtime就会放行5、单文件格式 bt.php                                                       代表文件名为bt.php就会放行说明-通配符支持如下几种格式1、完整路径/www/wwwroot/bt.cn/test/*                          这个目录下所有的文件都排除2、完整路径后缀名 /www/wwwroot/bt.cn/test/*.php       这个目录下php都排除3、相对路径 /logs/                                                       包含logs目录都会排除\n\n黑名单（保护列表）       初次安装也有默认配置，目前支持四种添加方式\n\n完整文件路径，如: /www/wwwroot/test/123.php\n\n相对于网站的相对路径\n\n若想放行/www/wwwroot/test/app/123.php ，可添加相对路径./app/123.php\n\n所有同名文件，如：123.php\n\n文件扩展名：如php、jsp\n\n》\n\n网站防篡改有没有一键识别当前网站，自动生成防护策略\n\n网站防篡改不支持自动配置黑白名单，有专属规则匹配，可选择一个待配置的站点，点击【配置】，再点击【专属规则】，勾选当前网站CMS版本，进行针对性生成对应的防护配置。\n\n》\n\n网站很多，怎么将当前的配好黑白名单一键应用到其他站点上呢？\n\n选择一个已配置的站点，点击【配置】，再点击【一键应用】，选择需要一键应用的站点即可\n\n》",
            "docId": "ad408ab0-f99b-11ef-aaab-91a043b91dc9",
            "docName": "使用.docx",
            "docFile": "F:\\desk-top-ai\\data\\rag\\test\\markdown\\使用.docx.md",
            "score": -322.1308227539062,
            "vectorScore": -460.1868896484375,
            "keywordScore": 0
        },
        {
            "id": "4c0cb0a0-f998-11ef-876b-937b0c2bb41d",
            "doc": "44\n\n》\n\n推荐什么系统\n\n优先推荐debian12，其次就是Ubuntu22、OpenCloud 9、TencentOS Server4、AlibabaCloud3，最后为麒麟、统信、欧拉等Linux系统\n\n》\n\n企业防篡改兼容哪些硬件架构/平台\n\n目前只支持x86-64架构的CPU，包括Intel、AMD等\n\n》\n\n安装流程\n\n点击面板右侧栏【软件商店】，搜索【企业级防篡改】，点击安装，安装后界面如下：\n\n![图片](http://127.0.0.1:7071/rag/images?r=test&n=f8b7d6e937afbfd1b5efa29f905565a1.png)\n\n》\n\n工具2-网站防篡改\n\n网站防篡改价格\n\n价格受不同版本、购买年限、购买时间等因素影响，请查看以下页面查询具体价格信息：https://www.bt.cn/new/product/tamper_drive.html，详情请联系客服。\n\n》\n\n如何购买网站防篡改\n\n一是点击面板右侧栏【软件商店】，搜索【网站防篡改程序】，在最新版本，点击【立即购买】",
            "docId": "f29c8c00-f98f-11ef-b5d8-5f0f7fedf181",
            "docName": "购买和安装.docx",
            "docFile": "F:\\desk-top-ai\\data\\rag\\test\\markdown\\购买和安装.docx.md",
            "score": -329.10907592773435,
            "vectorScore": -470.15582275390625,
            "keywordScore": 0
        }
    ]
}
```

## 测试分块

GTE /rag/test_chunk

用途：在上传文件时，用户调整文档分割参数点击【预览】按钮时

| **请求表单** |              |            |              |                                                              |
| ------------ | ------------ | ---------- | ------------ | ------------------------------------------------------------ |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**                                                     |
| filename     | string       |            | 是           | 要测试的文档路径                                             |
| chunkSize    | number       |            | 是           | 分块大小                                                     |
| overlapSize  | number       |            | 是           | 重叠大小                                                     |
| separators   | string[]     |            | 是           | 分块关键词（支持正则表达式）字符串分块：["。"]正则表达式：["/(第.{1,10}条\s)/"]PS：正则表达式无需增加修饰符，默认会自动增加g修饰符 |

| **响应字段说明** |              |                              |
| ---------------- | ------------ | ---------------------------- |
| **字段名称**     | **数据类型** | **说明**                     |
| content          | string       | 解析后的文档文本内容（完整） |
| chunkList        | string[]     | 分块内容                     |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "操作成功",
    "error_msg": "",
    "message": {
        "content": "－1－\n\n中华人民共和国刑法\n（1979 年 7 月 1 日第五届全国人民代表大会第...",
        "chunkList": [
             "中华人民共和国刑法\n（1979 年 7 月 1 日...",
             "第一节 刑罚的种类\n第二节 管制\n第三节 拘役\n第四节 有期徒刑...",
             "第一条 为了惩罚犯罪，保护人民，根据宪法，结合我国同犯罪作斗争的具体经验及实际情况，制定本法。",
             ...
         ]
        
    }
}
```

## 优化知识库数据表

GTE /rag/optimize_table

用途：当用户知识库占用磁盘过大时调用，可释放一定的磁盘空间

| **请求表单** |              |            |              |            |
| ------------ | ------------ | ---------- | ------------ | ---------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**   |
| ragName      | string       |            | 是           | 知识库名称 |

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
    "msg": "优化成功,释放空间: 0B",
    "error_msg": "",
    "message": null
}
```

## 获取知识库文档分片列表

GTE /rag/get_doc_chunk_list

用途：在知识库点击文档时

| **请求表单** |              |            |              |            |
| ------------ | ------------ | ---------- | ------------ | ---------- |
| **参数名称** | **数据类型** | **默认值** | **是否必传** | **说明**   |
| ragName      | string       |            | 是           | 知识库名称 |
| docId        | string       |            | 是           | 文档ID     |

| **响应字段说明** |              |              |
| ---------------- | ------------ | ------------ |
| **字段名称**     | **数据类型** | **说明**     |
| id               | string       | 分片ID       |
| docId            | string       | 文档ID       |
| doc              | string       | 分片内容     |
| tokens           | string       | 内容分词结果 |

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "获取成功",
    "error_msg": "",
    "message": [
        {
          "id": "8a01d7f0-1a5e-11f0-b35a-03faf00731da",
          "docId": "7f3da600-1a5e-11f0-b35a-03faf00731da",
          "doc": "[宝塔面板-防篡改使用教程]#1 POS[-1-565]\n使用\n\n工具1-企业防篡改\n\n怎么快速启用企业级防篡改，并查看拦截效果？\n\n第一步：点击【保护列表】，点击【添加保护】，选择自己需要添加的站点，\n\n第二步：测试防护效果\n\n①插件测试\n\n在插件中，直接点击【模拟攻击】，选择好待测试的目录，点击确定，即可查看效果，最后可在对应站点的拦截日志中，查阅到拦截信息\n\n![IMG]({URL}/rag/images?r=宝塔&n=6772216c2413a6a09f84d918e47dbec5.png)\n\n②终端测试\n\n进入终端shell，任意进入一个正在防护的目录，比如进入/www/wwwroot/www.bt.tamper.com/\n\nPythoncd /www/wwwroot/www.bt.tamper.com/\n\n尝试创建文件2.php\n\nPythontouch 2.php\n\n若返回信息\"touch: setting times of '2.php': No such file or directory\",则可视为拦截成功，最后可查看站点的拦截日志，即可查看到对应拦截信息。\n\n![IMG]({URL}/rag/images?r=宝塔&n=ff1ea421fa6b0a4f704a40224a1b8be4.png)\n\n详细内容可参考文档：【教程贴】企业防篡改常见使用场景》",
          "tokens": "[ 宝塔 面板 - 防 篡改 使用 教程 ] # 1   POS [ - 1-565 ] \n 使用 \n \n 工具 1 - 企业 防 篡改 \n \n 怎么 快速 启用 企业 企业级 防 篡改 ， 并 查看 拦截 效果 ？ \n \n 第一 一步 第一步 ： 点击 【 保护 列表 】 ， 点击 【 添加 保护 】 ， 选择 自己 需要 添加 的 站点 ， \n \n 第二 二步 第二步 ： 测试 防护 效果 \n \n ① 插件 测试 \n \n 在 插件 中 ， 直接 点击 【 模拟 攻击 】 ， 选择 好待 测试 的 目录 ， 点击 确定 ， 即可 查看 效果 ， 最后 可 在 对应 站点 的 拦截 日志 中 ， 查阅 到 拦截 信息 \n \n ! [ IMG ] ( { URL } / rag / images ? r = 宝塔 & n = 6772216c2413a6a09f84d918e47dbec5 . png ) \n \n ② 终端 测试 \n \n 进入 终端 shell ， 任意 进入 一个 正在 防护 的 目录 ， 比如 进入 / www / wwwroot / www . bt . tamper . com / \n \n Pythoncd   / www / wwwroot / www . bt . tamper . com / \n \n 尝试 创建 文件 2 . php \n \n Pythontouch   2 . php \n \n 若 返回 信息 \" touch :   setting   times   of   ' 2 . php ' :   No   such   file   or   directory \" , 则 可 视为 拦截 成功 ， 最后 可 查看 站点 的 拦截 日志 ， 即可 查看 到 对应 拦截 信息 。 \n \n ! [ IMG ] ( { URL } / rag / images ? r = 宝塔 & n = ff1ea421fa6b0a4f704a40224a1b8be4 . png ) \n \n 详细 内容 可 参考 文档 ： 【 教程 贴 】 企业 防 篡改 常见 使用 场景 》"
        },
        ...
    ]
}
```