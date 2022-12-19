import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRepcipientNotification } from '@application/use-cases/count-recipient-notifications';
import { GetRepcipientNotification } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification-use-case';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRepcipientNotification,
    GetRepcipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
