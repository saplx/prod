import { createSelector } from '@reduxjs/toolkit';
import { Counter } from 'entities/Counter/ui/Counter';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (Counter: CounterSchema) => Counter.value,
);
