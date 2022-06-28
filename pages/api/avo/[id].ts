import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => { 
  const db = new DB()

  //capturar el id que envuar por parametro en la URL. 
  const id = request.query.id  

  const avo = await db.getById(id as string);
  
  response.status(200).json(avo)

} 

export default allAvos