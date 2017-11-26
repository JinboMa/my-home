import Mock from 'mockjs'
import mockTip from './mock-tip'

export default function () {
  mockTip()

  Mock.mock(/login$/, 'post', {
    message: 'login success',
    code: 'SUCCESS',
    result: true,
    data: { token: 'HSHJFjksgbfjagSA' }
  })

  Mock.mock(/blog\/list/, 'get', {
    message: 'get blogs success',
    code: 'SUCCESS',
    result: true,
    'data|5-20': [
      {
        'id|+1': 1,
        title: '@cword(5,10)',
        author: '@cname',
        authorId: '@id',
        description: '@cparagraph(1,2)',
        createTime: '@datetime(yyyy-MM-dd HH:mm:ss)',
        changeTime: '@datetime(yyyy-MM-dd HH:mm:ss)',
        'groups|1-3': [
          {
            'id|+1': 1,
            name: '@cname'
          }
        ]
      }
    ]
  })

  Mock.mock(/blog\?blog_id=/, 'get', {
    message: 'get blogs success',
    code: 'SUCCESS',
    result: true,
    data: {
      title: '@cword(5,10)',
      content: '@cparagraph(4,8)'
    }
  })
}
