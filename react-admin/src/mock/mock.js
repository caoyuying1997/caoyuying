import Mock from 'mockjs'
Mock.mock('https://www.qmtech.com/getBannerList',{
    'list|1-10':[
        {
            'id|+1': 1,
            'name':'@cname',
            'status|1':true

        }
    ]
})