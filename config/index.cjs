/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbd7cd239ca329244',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '201d2b0b2c31ce374b156d0e4fee4f06',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEjM861s1PlFxHPVVgAu893qpPjk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'D9TL9-Hx-0YqAO2BkYeI1JQr7ndzwo5xB4GhMoc9OsI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '03-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '12-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-01-01' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: 'frankcao',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEjM86_Z3i1Cvb5HcM1rts9zlYcw',
      // 使用 微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'D9TL9-Hx-0YqAO2BkYeI1JQr7ndzwo5xB4GhMoc9OsI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '03-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-01-01' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'w5VlmVU2v0p9arjQ8vR6iLGXLRwbfobLPGL2sIqaCz8',

  CALLBACK_USERS: [
    {
      name: 'frankcao',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEjM86_Z3i1Cvb5HcM1rts9zlYcw',
    }
  ],

}

module.exports = USER_CONFIG

