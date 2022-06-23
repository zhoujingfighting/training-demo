import { Container, injectable, inject } from "inversify";
import 'reflect-metadata';
import { Cat } from "./cat";
import { Dog } from "./dog";

const container = new Container();

container.bind(Cat).toSelf();
container.bind(Dog).toSelf();

container.get(Dog).wangwang()
container.get(Dog).apple()