import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export async function routerIntercepterBefore({
  to,
  from,
  next,
}: {
  to: RouteLocationNormalized;
  from: RouteLocationNormalized;
  next: NavigationGuardNext;
}): Promise<void> {
  console.log(from);
  console.log(to);
   next();
}