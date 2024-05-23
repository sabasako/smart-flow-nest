import { Injectable } from '@nestjs/common';

@Injectable()
export class GardenService {
  private gardens = {
    2: {
      name: 'Garden A',
      isActive: true,
      duration: [0, 0, 0, 0],
    },
  };

  getGardenById(id: number) {
    return this.gardens[id];
  }

  updateGardenStatus(gardenId: number, ec: number) {
    if (this.gardens[gardenId]) {
      this.gardens[gardenId].duration = [ec, ec, ec, ec];
      return { success: true };
    }
    return { error: 'Garden not found' };
  }
}
