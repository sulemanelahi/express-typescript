import { Request, Response } from 'express';
import subscriber from '../models/model';
// -------------------------------------------

// perform create operation
export const create = async (req: Request, res: Response) => {
  const { firstName, lastName, picture, gender, dateOfBirth, profession, shoeSize, hairColor, hairLength, braSize, waistSize, height, weight, cast } = req?.body;
  try {
    await subscriber.create({
      firstName,
      lastName,
      picture,
      gender,
      dateOfBirth,
      profession,
      shoeSize,
      hairColor,
      hairLength,
      braSize,
      waistSize,
      height,
      weight,
      cast,
    });
    return res.status(201).send('Data Saved');
  } catch (error) {
    console.error(`Error: ${error} `);
    res.status(400).send(error);
  }
};

// perform read operation
export const read = async (req: Request, res: Response) => {
  try {
    const subscribers = await subscriber.find({});
    return res.status(200).send(subscribers);
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

export const search = async (req: Request, res: Response) => {
  try {
    const subscribers = await subscriber.find({});
    const userQuery = req.query;
    const filteredSubscribers = subscribers.filter((subscriber: any) => {
      for (const key in userQuery) {
        if (subscriber[key] == userQuery[key]) {
          return subscriber;
        }
      }
    });
    return res.status(200).send(filteredSubscribers);
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};
