import { Controller, Get,Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    @Get()
    getAllCars(){
        return this.carlist;
    }

    @Get(':id')
    getCarById( @Param('id') id:string){
        console.log({id});
        return this.carlist[id]
    }
}
