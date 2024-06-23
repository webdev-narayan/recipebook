import { Injectable, NestMiddleware } from "@nestjs/common";
import * as morgan from "morgan";
@Injectable()
export class MorganMiddleware implements NestMiddleware {
    private readonly format: string;
    constructor() {
        this.format = "dev";
    }
    use(req: any, res: any, next: (error?: any) => void) {
        morgan("dev")(req, res, next)
    }
}
