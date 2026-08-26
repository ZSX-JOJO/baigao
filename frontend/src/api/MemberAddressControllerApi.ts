
/**
* 收货地址管理
*/
import axios from 'axios';
import type { MemberAddressDto } from './dto/MemberAddressDto';


/**
* createMemberAddress:创建收货地址管理
* 
* @returns 
*/
export const MemberAddressControllerCreate = (data: MemberAddressDto, config?: any) => {
   return axios.post(`/api/memberAddress/create`, data, config);
}
/**
* updateMemberAddress:编辑收货地址管理
* id：id;
* @returns 
*/
export const MemberAddressControllerUpdate = (id: string,data: MemberAddressDto, config?: any) => {
   return axios.post(`/api/memberAddress/update/${id}`, data, config);
}
/**
* deleteMemberAddress:删除收货地址管理
* id：id;
* @returns 
*/
export const MemberAddressControllerDelete = (id: string, config?: any) => {
   return axios.delete(`/api/memberAddress/delete/${id}`, config);
}
/**
* getMemberAddressById:根据id获取收货地址管理详情
* id：id;
* @returns 
*/
export const MemberAddressControllerGetDetailById = (id: string, config?: any) => {
   return axios.get(`/api/memberAddress/getDetail/${id}`, { ...config });
}
/**
* getMemberAddressPage:获取收货地址管理分页
* pageSize：单页显示条数;pageIndex：当前页码;keyWord：搜索关键字;
* @returns 
*/
export const MemberAddressControllerGetPage = (query: { pageSize: number,pageIndex: number,keyWord: string }, config?: any) => {
   return axios.get(`/api/memberAddress/getPage`, { params: query,...config });
}
