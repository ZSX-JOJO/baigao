
/**
* 广告管理
*/
import {post,get,del} from '@/utils/request.js';
// AdMangerDto：./dto/AdMangerDto';


/**
* createAd:创建广告
* 
* @returns 
*/
export function AdMangerControllerCreate(AdMangerDto){
   return post(`/rotation/create`, AdMangerDto);
}
/**
* updateAd:编辑广告
* id：id;
* @returns 
*/
export function AdMangerControllerUpdate(id,AdMangerDto){
   return post(`/rotation/update/${id}`, AdMangerDto);
}
/**
* deleteAd:删除广告
* id：id;
* @returns 
*/
export function AdMangerControllerDelete(id ){
   return del(`/rotation/delete/${id}`);
}
             
/**
* getAdPage:获取广告分页
* pageSize：单页显示条数;pageIndex：当前页码;keyWord：搜索关键字;position：广告位置，取字典管理中：DC0002的值;isRelease：发布状态，0全部，1已发布，2未发布;
* @returns 
*/
export function AdMangerControllerGetPage(query){
	// query:{pageSize,pageIndex,keyWord,position,isRelease} 
   return get(`/rotation/getPage`, query);
}
/**
* 获取已发布的广告列表，无需登录
* 
* @returns 
*/
export function AdMangerControllerGetList(){
	// query:{} 
   return get(`/rotation/getList`, {});
}
