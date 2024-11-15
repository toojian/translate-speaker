const vscode = require("vscode");
const say = require("say");

// 获取配置参数
const getConfigValue = function (name) {
    return vscode.workspace.getConfiguration('translateSpeaker').get(name);
}
// 检测是否中文
function isChinese(text) {
    return /[\u4E00-\u9FA5\uF900-\uFA2D]/.test(text)
}

// 显示信息框
function showInformationMessage(message, code) {
    return vscode.window.showInformationMessage(message, { title: '知道了', code }).then(() => {
        // 点击信息框知道了按钮
    })
}

// 语音播报
function speakText(text) {
    if (getConfigValue('enableSpeak')) {
        say.stop();
        setTimeout(() => {
            say.speak(text);
        }, 10);
    }
}

// 选中的英文文本清洗干净
function englishClearSelectionText(text) {
    // if (!text) {
    //     return text;
    // }
    // const englishNotCodingMode = getConfigValue('englishNotCodingMode');
    if (text) {
        // 下划线，连接线，小数点自动替换成空格
         text = text.replace(/_|-|\./g, ' ');
        // 驼峰替换成空格，连续大写不处理
        text = text.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
        //去掉多余空格
        // text = text.replace(/\s+/g, " ").trim();
    }
    return text;
}

/**把一个长的字符串转成短的带...的 */
function longTextShowShort(text,size=15){
    if(!text){return text}
    let shortText = text.substring(0,size)
    if(shortText.length<text.length){
        shortText += '...'
    }
    return shortText
}



module.exports = {
    getConfigValue,
    isChinese,
    showInformationMessage,
    speakText,
    englishClearSelectionText,
    longTextShowShort
};
