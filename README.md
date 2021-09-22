# 项目说明

这是一个vscode插件，功能是翻译和朗读，并可以快速的替换翻译内容；


## 用法：
1. 安装并启用本插件；
2. 选择并配置翻译接口参数，目前支持baidu翻译api;
3. 在编辑器中选中要翻译的中文或者英文内容，鼠标右键点击：翻译并朗读
4. 如果配置正确，会弹出翻译列表，选中一条翻译结果，就可以替换文本了；

## 配置

|参数名字|类型|默认值|说明|
|---|---|---|---|
|translateSpeaker.enable | boolean | true | 是否启用插件功能 |
|translateSpeaker.enableSpeak | boolean | true | 是否启用语音朗读 |
|translateSpeaker.apiType | string | 'youdaoFree'| 接口类型，目前支持：baidu=百度翻译api(需要账号)，youdaoFree=有道，googleFree=谷歌（需要VPN） |
|translateSpeaker.appId  | string | 无 | 翻译API的账号 |
|translateSpeaker.password  | string | 无 | 翻译API的密钥 |
|translateSpeaker.formatEnglish | boolean | true | 英文自动转成格式变量，根据常见扩展名自动转换规范变量名称，比如apple tree输出为appleTree |

### 百度翻译API配置
如何获取百度翻译API的账号
https://blog.csdn.net/zhebushibiaoshifu/article/details/115682054

百度翻译接口文档]
https://api.fanyi.baidu.com/product/113



