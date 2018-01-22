import { requiredParameter } from '../../util/index.js';

export function bindEvent(
  event = requiredParameter('event'),
  selector = requiredParameter('selector'),
  prevent = true) {

  return function (target, propertyKey, descriptor) {


    Reflect.defineMetadata(
      'bindEvent',
      { event, selector, prevent, propertyKey },
      Object.getPrototypeOf(target), propertyKey);

    return descriptor;
  }
}