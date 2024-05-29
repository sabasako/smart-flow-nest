import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  private isEnabled = {};

  toggleFeature(status: { status: boolean }) {
    this.isEnabled = status;
  }

  isFeatureEnabled() {
    return this.isEnabled;
  }
}
