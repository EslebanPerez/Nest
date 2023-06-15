import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[]=[
        {
            id:uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        }, {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    public findAll(){
        return this.cars;
    }

    public findOnebyId(id:string){
        const car = this.cars.find(car => car.id===id);
        if(!car) throw new NotFoundException(`Car with id '${id}' not found`)
        return car;
    }

    public create( CreateCarDto: CreateCarDto){
         //const { brand, model } = CreateCarDto
        // const car = this.cars.push({id: uuid(), brand, model})
        // return car;
        const car:Car={
            id: uuid(),
            ...CreateCarDto
        }
        this.cars.push(car);
        return car;
    }

}
