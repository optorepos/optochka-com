import type { NextApiRequest, NextApiResponse } from 'next';
import Telegram from '@/services/Telegram.service';

interface Data {
  data: unknown;
  location: unknown;
  message: string;
}

const telegram = new Telegram(
  process.env.TELEGRAM_TOKEN,
  process.env.TELEGRAM_CHAT_ID
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const order = {
        number: req.body.number || '0001',
        name: req.body.name || 'Без имени',
        phone: req.body.phone || '99 249 90 99',
        latitude: req.body.latitude || 47.75106,
        longitude: req.body.longitude || -117.41571,
        products: req.body.products || 'Без товаров',
        price: req.body.price || 0,
      };
      const message =
        `🎉 Just another order! \n\n` +
        `<b>Order №${order.number}</b> \n` +
        `<b>Name:</b> ${order.name} \n` +
        `<b>Phone:</b> ${order.phone} \n` +
        `<b>Total:</b> ${order.price} UZS \n\n` +
        `<b>Products:</b>\n` +
        `${order.products}`;

      console.log(message);
      const location = await telegram.sendLocation(
        order.latitude,
        order.longitude
      );
      const responce = await telegram.sendMessage(
        message,
        location.data.result.message_id
      );

      res
        .status(200)
        .json({ message: 'ok', data: responce.data, location: location.data });
    } catch (err: any) {
      res.status(500).json({
        message: err.message,
        data: {},
        location: {},
      });
    }
  }
}
