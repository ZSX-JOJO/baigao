import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

//接口权限验证
@Injectable()
export class PowerGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const roles = this.reflector.get<string[]>('AuthTag', context.getHandler());
        const user: any = request.user;
        if (roles && roles.length) {
            const powerTags = user?.menuPowerTagList;
            if (!Array.isArray(powerTags)) {
                return false;
            }
            return roles.every((tag) => powerTags.includes(tag));
        }
        return false;
    }
}