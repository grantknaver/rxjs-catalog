import { Store, StoreConfig } from '@datorama/akita';

export interface MainState {
   componentName: string;
}

export function createInitialState(): MainState {
  return {
    componentName: ''
  };
}

@StoreConfig({ name: 'main' })
export class MainStore extends Store<MainState> {
  constructor() {
    super(createInitialState());
  }
}