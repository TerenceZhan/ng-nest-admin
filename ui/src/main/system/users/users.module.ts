import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutesModule } from './users-routes.module';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ShareModule } from 'src/share/share.module';
import { AdToolModule } from 'src/share/tool/tool.module';
import { AdAdaptionModule } from 'src/share/adaption/adaption.module';
import { XTableModule } from '@ng-nest/ui/table';
import { XInnerModule } from '@ng-nest/ui/inner';
import { XFormModule } from '@ng-nest/ui/form';
import { XButtonModule } from '@ng-nest/ui/button';
import { XTreeModule } from '@ng-nest/ui/tree';
import { XLinkModule } from '@ng-nest/ui/link';
import { XMessageBoxModule } from '@ng-nest/ui/message-box';
import { XMessageModule } from '@ng-nest/ui/message';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    XButtonModule,
    XInnerModule,
    XTableModule,
    XFormModule,
    XTreeModule,
    XLinkModule,
    XMessageModule,
    XMessageBoxModule,
    AdToolModule,
    AdAdaptionModule,
    UsersRoutesModule
  ],
  declarations: [UsersComponent, UserDetailComponent]
})
export class UsersModule {}
