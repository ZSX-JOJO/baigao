export class ResponseInfoDtoDto {

    /**
     * 状态：-1错误，0警告，1成功
     */
    status!: String;
    
    /**
     * 响应数据
     */
    data!: object;
    
    /**
     * 提示消息
     */
    message!: String;
    
}