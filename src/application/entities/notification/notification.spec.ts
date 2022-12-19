import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova Solicitação de amizade'),
      category: 'social',
      recipientId: 'exaple-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});