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
        img: Mock.Random.dataImage('200x200', 'Test imgs!!!'),
        author: '@cname',
        avatar: Mock.Random.dataImage('100x100', '头像'),
        authorId: '@id',
        description: '@cparagraph(15,20)',
        createTime: '@datetime(yyyy-MM-dd HH:mm:ss)',
        changeTime: '@datetime(yyyy-MM-dd HH:mm:ss)',
        'likes|0-300': 1,
        'comments|0-300': 1,
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
      content: '@cparagraph(100,200)',
      img: Mock.Random.dataImage('600x200', 'Test imgs!!!'),
      author: '@cname',
      avatar: Mock.Random.dataImage('100x100', '头像'),
      authorId: '@id'
    }
  })

  Mock.mock(/blog\/comment\/\d+$/, 'get', {
    message: 'get blogs success',
    code: 'SUCCESS',
    result: true,
    'data|5-20': [
      {
        'id|+1': 1,
        title: '@cword(5,10)',
        img: Mock.Random.dataImage('200x200', 'Test imgs!!!'),
        author: '@cname',
        avatar: Mock.Random.dataImage('100x100', '头像'),
        authorId: '@id',
        content: '@cparagraph(1,2)',
        createTime: '@datetime(yyyy-MM-dd HH:mm:ss)'
      }
    ]
  })
}
