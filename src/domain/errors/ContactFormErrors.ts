export class ValidationError extends Error {
  constructor(public details: Record<string, string>) {
    super("Validation failed");
    this.name = "ValidationError";
  }
}

export class EmailSendError extends Error {
  constructor() {
    super("Failed to send contact form via email");
    this.name = "EmailSendError";
  }
}
