const axios = require('axios');

class Telegram {
  private token: string | undefined;
  private chatId: string | undefined;
  private url: string;
  constructor(token: string | undefined, chatId: string | undefined) {
    this.token = token;
    this.chatId = chatId;
    this.url = `https://api.telegram.org/bot${this.token}`;
  }

  async sendMessage(message: string, replyToMessageId?: number) {
    const url = this.url + `/sendMessage`;
    const responce = await axios.get(url, {
      params: {
        chat_id: this.chatId,
        text: message,
        parse_mode: 'HTML',
        reply_to_message_id: replyToMessageId,
      },
    });
    return responce;
  }

  async sendLocation(latitude: number, longitude: number) {
    const url =
      this.url +
      `/sendLocation?chat_id=${this.chatId}&latitude=${latitude}&longitude=${longitude}`;
    const responce = await axios.get(url);
    return responce;
  }
}

export default Telegram;
