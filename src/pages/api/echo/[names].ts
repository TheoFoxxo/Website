import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler( req: NextApiRequest, res: NextApiResponse) {
    const { names } = req.query;
    let msgs = "My Name Is Gustavo But You Can Call Me Gus";
    res.status(200).json([{ echo: names, message: msgs}]);
}
   