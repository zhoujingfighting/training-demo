import { injectable, inject } from "inversify";
import 'reflect-metadata';
import { Cat } from './cat';

interface Eat {
    apple: () => void
}

@injectable()
export class Dog implements Eat {
    constructor(
        @inject(Cat) protected readonly cat: Cat
    ){}
    wangwang() {
        this.cat.miaomiao();
        console.log('dog wang wang!!');
    }
    apple(){
        console.log('I.m eating apple')
    };
}