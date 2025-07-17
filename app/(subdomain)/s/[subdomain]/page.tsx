import { NextRequest } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import OrgLanding from "@/app/(root)/org/[slug]/page";
import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { eq } from "drizzle-orm";
interface Params {
  subdomain: string;
}

export default async function HomePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });

  const orgID = org.id;
  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgID));
  return <div>
    {blogs.map(blog => <div>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
    </div>)}
  </div>;
}
