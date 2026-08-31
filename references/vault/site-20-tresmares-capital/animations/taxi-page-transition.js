import { Core, Transition } from "@scullyio/taxi";

export class CustomTaxiTransition extends Transition {
  onLeave({ from, trigger, done }) {
    // Fade out old view
    from.style.opacity = "0";
    setTimeout(done, 400);
  }

  onEnter({ to, trigger, done }) {
    // Fade in new view
    to.style.opacity = "0";
    setTimeout(() => {
      to.style.opacity = "1";
      done();
    }, 50);
  }
}

export function initTaxiRouter() {
  return new Core({
    transitions: {
      default: CustomTaxiTransition
    }
  });
}
