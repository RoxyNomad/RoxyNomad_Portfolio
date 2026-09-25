// src/i18n/getMessages.ts
import type { GetServerSidePropsContext } from "next";

export async function getMessages(context: GetServerSidePropsContext) {
  const locale = context.locale ?? "de";
  const messages = (await import(`../messages/${locale}.json`)).default;
  return { messages };
}
