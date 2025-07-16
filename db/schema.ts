import {  pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const blogTable = pgTable("blogs", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 80 }).notNull(),
  body: varchar({ length: 3000 }).notNull(),
  orgId: text().notNull(),
});


// username ,etc to be added later 

export type createBlogType = typeof blogTable.$inferInsert;
export type selectBlogType = typeof blogTable.$inferInsert;