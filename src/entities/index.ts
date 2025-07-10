import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from './Counter/model/slice/counterSlice';
import { Counter } from './Counter/ui/Counter';
import { CounterSchema } from './Counter/model/types/counterSchema';

export {
    CounterSchema,
    Counter,
    counterReducer,
    StateSchema,
};
