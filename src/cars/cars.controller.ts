import { Body, Controller, Delete, Get,Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

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
        @Param('id',ParseUUIDPipe ) id:string ,
        @Body() UpdateCarDto: UpdateCarDto
    ){
         return this.carsService.update(id, UpdateCarDto);
    }
    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        this.carsService.delete(id)
        return {
            msg: 'delete',
            id
        }
    }

}
