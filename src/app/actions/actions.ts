"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createList(formData: FormData) {
  const user = await currentUser();

  if (!user || !user.id) throw new Error("Not authenticated");

  const existingUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!existingUser) throw new Error("User not found in database");

  const text = formData.get("text");
  if (typeof text !== "string" || text.trim() === "") {
    throw new Error("Invalid text");
  }

  await db.list.create({
    data: {
      text,
      userId: existingUser.id,
      dueDate: new Date(),
    },
  });

  revalidatePath("/");
}

export async function deleteList(id: string) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const dbUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!dbUser) {
    throw new Error("User not found");
  }

  const list = await db.list.findUnique({
    where: { id },
  });

  if (!list || list.userId !== dbUser.id) {
    throw new Error("Not authorized to delete this list");
  }

  await db.list.delete({
    where: { id },
  });

  revalidatePath("/");
}

export async function toggleComplete(id: string) {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  const dbUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!dbUser) throw new Error("User not found");

  const list = await db.list.findUnique({ where: { id } });

  if (!list || list.userId !== dbUser.id) {
    throw new Error("Not authorized");
  }

  await db.list.update({
    where: { id },
    data: { isComplete: !list.isComplete },
  });

  revalidatePath("/");
}
