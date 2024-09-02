import { Request, Response } from "express";
import { IHelloWorld } from "../interfaces/IHelloWorld";

export class HelloWorldController {
  private helloWorldService: IHelloWorld;

  constructor(helloWorldService: IHelloWorld) {
    this.helloWorldService = helloWorldService;
  }

  sendHelloWorld(req: Request, res: Response): void {
    const message: string = this.helloWorldService.execute();

    // Turbo console message
    console.log("🚀 ~ HelloWorldController ~ helloWorld ~ message:", message);

    res.json({ message });
  }
}
