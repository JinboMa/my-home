import Mock from 'mockjs'
import mockTip from './mock-tip'

mockTip()

export default function () {
  Mock.mock(/login$/, 'post', {
    message: 'login success',
    code: 'SUCCESS'
  })

  Mock.mock(/blogs/, 'get', {
    message: 'get blogs success',
    code: 'SUCCESS',
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
}
