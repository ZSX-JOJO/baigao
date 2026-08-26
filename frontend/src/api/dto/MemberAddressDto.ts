export class MemberAddressDto {

    _id?: string;
    /**
     * 最后更新用户
     */
    addUser?: string;

    /**
     * 添加时间
     */
    addDate?: string;

    /**
     * 最后更新用户
     */
    updateUser?: string;

    /**
     * 最后更新时间
     */
    updateDate?: string;

    /**
     * 文件UUID数组，只要文章上传文件，保留原有数据且把上传的文件UUID都push到该数组中。
     */
    fileIds?: string[];

    /**
     * 所属会员
     */
    memberUUID!: string;

    /**
     * 行政区划
     */
    administrativeDivision!: string;

    /**
     * 行政区划名称
     */
    administrativeDivisionText!: string;

    /**
     * 详细地址
     */
    address!: string;

    /**
     * 联系人
     */
    contacts!: string;

    /**
     * 联系电话
     */
    contactsPhone!: string;

}
