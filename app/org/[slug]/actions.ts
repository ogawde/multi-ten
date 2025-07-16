"use server";

import { db } from "@/db";
import { blogTable, createBlogType, selectBlogType } from "@/db/schema";

export const createBlog = async (payload: createBlogType) => {
  const [blog] = await db.insert(blogTable).values(payload).returning( {
    id: blogTable.id
  } )
  return blog.id; 
};

// export const selectBlog = (blogData: selectBlogType) => {

// };
