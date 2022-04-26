import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurants.entity';
export declare class RestaurantResolver {
    restaurants(veganOnly: boolean): Restaurant[];
    createRestaurant(creatingRestaurantDto: CreateRestaurantDto): boolean;
}
