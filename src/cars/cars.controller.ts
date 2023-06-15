import { Body, Controller, Delete, Get,Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes( ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}
    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id',ParseUUIDPipe ) id:string){
        console.log({ id: id });
        return this.carsService.findOnebyId(id)
    }

    @Post()
    createCar(@Body() createCarDto:CreateCarDto){
        return this.carsService.create(createCarDto);
    }
    @Patch(':id')
    updateCar(
        @Param('id', ) 
        @Body() body:any
    ){
         return body
    }
    @Delete(':id')
    deleteCar(@Param('id', ) id:string){
        return {
            msg: 'delete',
            id
        }
    }

}
