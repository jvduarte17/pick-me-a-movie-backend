import { Http } from "./Http";
import express, { Express, Request, Response } from "express";
import cors from "cors";

export default class ExpressAdapter implements Http {
  private readonly app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors())
  }
  
  listen(port: number): void {
    this.app.listen(port, () => console.log(`Server is running in port ${port}`))
  }

  on(method: string, url: string, callback: Function): void {
    this.app[method as keyof Express](url, async (req: Request, res: Response) => {
      const output = await callback(req.params, req.body);
      res.json(output)
    })
  }
}