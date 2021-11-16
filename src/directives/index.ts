import type { App } from 'vue';
import { setupImgArrowDirective } from './imgArrow';

export function setupGlobDirectives(app: App) {
  setupImgArrowDirective(app);
}
