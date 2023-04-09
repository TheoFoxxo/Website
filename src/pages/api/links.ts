import type { NextApiRequest, NextApiResponse } from 'next'
import {linkShit} from '../../utils/config'

type Data = {
    twitter: string,
    github: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ twitter: linkShit.thebluebird, github: linkShit.thesquid})
}
