# 服务端文件接口
## 上传文件

POST /files/upload

用途：对话时上传附件，或其它需要上传文件的情况

PS：直接FormData上传文件，无需其它参数

<table>
    <thead>
        <tr>
            <th colspan="5">请求表单</th>
        </tr>
        <tr>
            <th>参数名称</th>
            <th>数据类型</th>
            <th>默认值</th>
            <th>是否必传</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th colspan="3">响应字段说明</th>
        </tr>
        <tr>
            <th>字段名称</th>
            <th>数据类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>filepath</td>
            <td>string</td>
            <td>文件存储路径</td>
        </tr>
        <tr>
            <td>url</td>
            <td>string</td>
            <td>文件访问地址（下载）</td>
        </tr>
    </tbody>
</table>

**响应示例：**

```JSON
{
    "status": 0,
    "code": 200,
    "msg": "上传成功",
    "error_msg": "",
    "message": {
        "filepath": "2025-3-18\\购买和安装.docx",
        "url": "/files/get?filepath=2025-3-18\\购买和安装.docx"
    }
}
```

## 获取文件（下载）

POST /files/get

用途：需要下载或引用文件时

<table>
    <thead>
        <tr>
            <th colspan="5">请求表单</th>
        </tr>
        <tr>
            <th>参数名称</th>
            <th>数据类型</th>
            <th>默认值</th>
            <th>是否必传</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>filepath</td>
            <td>string</td>
            <td></td>
            <td>是</td>
            <td>文件存储路径</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th colspan="3">响应字段说明</th>
        </tr>
        <tr>
            <th>字段名称</th>
            <th>数据类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

**响应示例：**

// 直接响应文件