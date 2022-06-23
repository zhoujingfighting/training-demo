import { injectable, inject } from "inversify";
import 'reflect-metadata'

@injectable()
export class Cat {

    miaomiao() {
        console.log('cat miao miao !!');
    }
}