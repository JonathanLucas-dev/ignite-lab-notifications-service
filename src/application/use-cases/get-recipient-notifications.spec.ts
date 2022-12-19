import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '../../../test/factories/notification-factory';
import { GetRepcipientNotification } from './get-recipient-notifications';

describe('Get recipients notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRepcipientNotification = new GetRepcipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { notifications } = await getRepcipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          recipientId: 'recipient-1',
        }),
        expect.objectContaining({
          recipientId: 'recipient-1',
        }),
      ]),
    );
  });
});
