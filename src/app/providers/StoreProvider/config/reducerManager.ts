import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    // Приводим тип сразу к тому, что хотим:
    let combinedReducer = combineReducers(reducers) as Reducer<StateSchema, AnyAction>;

    let keysToRemove: Array<StateSchemaKey> = [];

    return {
        getReducerMap: () => reducers,

        // Теперь сигнатура ровно совпадает с ReducerManager:
        reduce: (state: StateSchema | undefined, action: AnyAction): StateSchema => {
            let intermediate = state;

            if (keysToRemove.length > 0 && intermediate) {
                intermediate = { ...intermediate };
                keysToRemove.forEach((key) => {
                    delete (intermediate as any)[key];
                });
                keysToRemove = [];
            }

            // Здесь используется наш «up‑casted» reducer
            return combinedReducer(intermediate, action);
        },

        add: (key: StateSchemaKey, reducer) => {
            if (reducers[key]) return;
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers) as Reducer<StateSchema, AnyAction>;
        },

        remove: (key: StateSchemaKey) => {
            if (!reducers[key]) return;
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers) as Reducer<StateSchema, AnyAction>;
        },
    };
}
