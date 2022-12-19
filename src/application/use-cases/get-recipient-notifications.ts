import { Notification } from '@application/entities/notification/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface GetRepcipientNotificationRequest {
  recipientId: string;
}

interface GetRepcipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRepcipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRepcipientNotificationRequest,
  ): Promise<GetRepcipientNotificationResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
