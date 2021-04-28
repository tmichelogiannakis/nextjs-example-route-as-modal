import { NextApiRequest, NextApiResponse } from 'next';
import DUMMY_ITEMS from '../../../data';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { id } = req.query;
  const item = DUMMY_ITEMS.find(i => i.id === id);
  res.status(200).json(item);
};

export default handler;
