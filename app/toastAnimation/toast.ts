
import { Animation } from '@ionic/core'

export function toastEnter(AnimationC: Animation, baseEl: ShadowRoot, position: string): Promise<Animation> {
  const baseAnimation = new AnimationC();

  const wrapperAnimation = new AnimationC();

  const hostEl = (baseEl.host || baseEl) as HTMLElement;
  const wrapperEl = baseEl.querySelector('.toast-wrapper') as HTMLElement;

  wrapperAnimation.addElement(wrapperEl);

  const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(8px + var(--ion-safe-area-top, 0px))`;

  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperEl.style.opacity = '1';
      wrapperAnimation.fromTo('transform', `translateY(-${hostEl.clientHeight}px)`, 'translateY(10px)')
      break;
    case 'middle':
      const topPosition = Math.floor(
        hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2
      );
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }
  return Promise.resolve(baseAnimation
    .addElement(hostEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(400)
    .add(wrapperAnimation));
}
