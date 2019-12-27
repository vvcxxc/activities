import http from './http_card'

// 请求卡片列表
export const getCardList = () => {
    return http({
        url: 'list/index',
        method: 'get',
    })
}

// 请求新卡
export const getNewCard = () => {
    return http({
        url: 'list/now',
        method: 'get'
    })
}

// 翻卡
export const getCardInfo = data =>
    http({
        url: 'list/gain',
        method: 'post',
        data
    })

//  消除卡片
export const delCard = () =>
    http({
        url: 'list/del',
        method: 'delete'
    })