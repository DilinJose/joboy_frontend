import {  postData } from "../../api/services"

export const getCategoriesData = ()=>async(dispatch)=>{
const reqData= {city:"1",lang:"1"}
const config = {
    header:{
        'Authorization':`Basic asd`,
        'session':"asd",
        'Cookie':'asd'
    }
}
    const response = await postData("service/list",reqData,config)
    if(response.status){
        dispatch()
    }
}