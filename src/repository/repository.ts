import {Entity} from '../entity/entity';

export declare class Repository<T extends Entity> {
  persist(entity: T): Promise<T>;
}
