import { f as fail, r as redirect } from "../../../chunks/index.js";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { d as private_env } from "../../../chunks/shared-server.js";
import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";
if (!private_env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
const client = neon(private_env.DATABASE_URL);
const db = drizzle(client);
const user = pgTable("user", {
  id: text("id").primaryKey(),
  age: integer("age"),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull()
});
pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => user.id),
  expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull()
});
const contactForm2 = pgTable("contact_form2", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull()
});
pgTable("contact_form", {
  id: text("id").primaryKey(),
  // Use a UUID for primary key
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" }).defaultNow().notNull()
});
const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const schema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      message: z.string().min(1)
    });
    const result = schema.safeParse(data);
    if (!result.success) {
      return fail(400, { error: "Invalid form input", issues: result.error.flatten() });
    }
    try {
      await db.insert(contactForm2).values({
        id: crypto.randomUUID(),
        name: result.data.name,
        email: result.data.email,
        message: result.data.message
      });
      throw redirect(303, "/");
    } catch (error) {
      console.error("Database error:", error);
      return fail(500, {
        error: "An error occurred while saving the form data. Please try again later."
      });
    }
  }
};
export {
  actions
};
