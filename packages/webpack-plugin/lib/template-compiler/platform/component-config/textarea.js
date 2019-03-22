const TAG_NAME = 'textarea'

module.exports = function ({ print }) {
  /**
   * @type {function(isError: (number|boolean|string)?): void} aliLog
   * @desc - 无法转换时告知用户的通用方法，接受0个或1个参数，意为是否error级别
   */
  const aliLog = print('ali', TAG_NAME)
  return {
    test: TAG_NAME,
    props: [
      {
        test: /^(auto-focus|fixed|cursor-spacing|cursor|show-confirm-bar|selection-start|selection-end|adjust-position|aria-label)$/,
        ali: aliLog()
      }
    ],
    event: [
      {
        test: /^(focus|blur|input|confirm)$/,
        ali (eventName) {
          const eventMap = {
            'blur': 'blur',
            'focus': 'focus',
            'input': 'input',
            'confirm': 'confirm'
          }
          return eventMap[eventName]
        }
      },
      {
        test: /^(linechange)$/,
        ali: aliLog()
      }
    ]
  }
}