# API接口文档

## 接口地址

```
http://127.0.0.1:7071
```

## 传参数格式约定

所有参数通过FORM表单中的data参数以JSON字符串的格式传递

PS：后端会严格验证参数的字段格式及其数据类型，请严格按要求传递参数

```HTTP
Content-Type: application/x-www-form-urlencoded
data=JSON.stringify(args)

示例：
let args = {
    name:"test",
    sex:1
}

let url = '/api/generate'

post(url,args,function(res){
    console.log(res)
})
```

## 响应格式约定

PS：以下是非流程响应的约定，如果是流式响应，是直接响应内容的

| 字段      | 类型   | 说明                                                         |
| :-------- | :----- | :----------------------------------------------------------- |
| status    | int    | 状态，0=成功，-1=失败，请结合code和error_msg字段处理         |
| code      | int    | 状态码，请参考第三节：响应状态码参考                         |
| msg       | string | 响应消息提示，通常是可被理解的提示信息                       |
| error_msg | string | 错误信息，status==false 时此字段可能有值，通常是详细的错误信息，此消息主要用于排查异常 |
| message   | any    | 返回的数据，不需要返回数据时，可能为null                     |

