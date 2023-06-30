import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemLogModule } from 'src/system-log/system-log.module';
import { AdminMenuController } from './admin-menu.controller';
import { AdminMenuService } from './admin-menu.service';
import { AdminMenu, AdminMenuSchema } from './dto/admin-menu.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: AdminMenu.name,schema: AdminMenuSchema}]),SystemLogModule],
    providers: [AdminMenuService],
    exports: [AdminMenuService],
    controllers: [AdminMenuController]
})
export class AdminMenuModule {}
