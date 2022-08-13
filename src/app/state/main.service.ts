import { MainStore } from './main.store';
 
export class MainService {
  constructor(private mainStore: MainStore) {}

  updateComponentName(newName: string) {
    this.mainStore.update({componentName: newName});
  }  
}