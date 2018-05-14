/**
 * Created by shaoxiaoze on 2018/5/14.
 */
import http from '../apis/http'
export function loginAsync() {
    return http.post('/api/user/loginByOpenId',
        {
            openid: 2526567,
            appid: 'plGvg74ZG82Mv7VRoDgUYVRyCwfxW0kT',
            app_secret: 'PSZ2i0ZilUf0i0a7Ng9PRvw3UjzJekD',
            saas: 1,
            nickname: 'nickname',
            avatarUrl: 'http://yun.abcpen.com/Fks2h_IWm6CyI6UuHLNqRtbpGeJP',
            cookies: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiaWRcIjo3MjA5MCxcImxhc3RfbG9naW5fdGltZVwiOjE1MjYyNjg0MTYyMzQsXCJhcHBvcmdfaWRcIjpcIjExXCIsXCJvcGVuaWRcIjpcIjI1MjY1NjdcIn0iLCJhdWQiOiJhYmNwZW4iLCJpYXQiOjE1MjYyNjg0MTZ9.uBV5WgH6i4nbbAsAGqliIciVEeoVPzIOAzU5SXo5mkU',
            room_id: 179790554
        }
    )
}