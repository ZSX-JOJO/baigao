import { ApiProperty } from "@nestjs/swagger";
import { BaseDTO } from "src/common-dto/base.dto";
import { DC0008 } from "src/system-config/dto/system-config.schema";

export class MemberMangerDTO extends BaseDTO {
    /**
     * 会员管理模型
     * 
     */
    @ApiProperty({
        description: '用户名称',
    })
    userName: string;
    @ApiProperty({
        description: '用户头像',
    })
    avatar: string;
    @ApiProperty({
        description: '用户UUID',
    })
    UUID: string;
    @ApiProperty({
        description: 'openId',
    })
    openId: string;
    @ApiProperty({
        description: '性别：1男，2女，0未知',
    })
    sex: number;
    @ApiProperty({
        description: '年龄',
    })
    age: number;
    @ApiProperty({
        description: '电话号码',
    })
    phoneNumber: string;
    @ApiProperty({
        description: '会员二维码',
    })
    memberQR: string;
    @ApiProperty({
        description: '用户角色,根据会员等级获取角色',
    })
    role: string[];
    @ApiProperty({
        description: '会员等级（分销等级）',
    })
    rank: DC0008;
    
}