// src/adapters/controllerst/ErrorController.ts
export class ErrorController {
  static handle404() {
    return {
      title: '404',
      message: 'Seite nicht gefunden',
    };
  }

  static handle500() {
    return {
      title: '500',
      message: 'Interner Serverfehler',
    };
  }
}
