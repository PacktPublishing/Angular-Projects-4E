import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'buildings',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'buildings/:id',
    renderMode: RenderMode.Server
  }
];
