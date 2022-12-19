import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRepcipientNotificationRequest {
  recipientId: string;
}

interface CountRepcipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRepcipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRepcipientNotificationRequest,
  ): Promise<CountRepcipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
