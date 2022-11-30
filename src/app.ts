import cors from "cors";
import express, { Application, Request, Response } from "express";
import ip from "ip";
import { HttpResponse } from "../src/domain/response";
import { Code } from "./enum/code.enum";
import { Status } from "./enum/status.enum";
import patientRoutes from "./routes/patient.routes";

export class APP {
    private readonly app:Application;
    private readonly APPLICATION_RUNNING = " Application is Running on : ";
    private readonly ROUTE_NOT_FOUND = "Application Route Not Found";

    constructor(private readonly port:(string | number) = process.env.SERVER_PORT || 3000){
        this.app = express();
        this.middleware();
        this.route();
    }
    
    listen() : void {
        this.app.listen(this.port);
        console.info(`${this.APPLICATION_RUNNING} ${ip.address()}:${this.port}`);

    }

    private middleware() : void{
        this.app.use(cors({origin: '*'}));
        this.app.use(express.json());
    }

    private route():void {
        this.app.use('/patients',patientRoutes);
        this.app.get('/',(req: Request,res: Response ) =>res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, 'Welcome to Patients API v1.0')));
        this.app.all('*',(req:Request, res: Response) =>res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND,Status.NOT_FOUND, this.ROUTE_NOT_FOUND)));
    }
    
}