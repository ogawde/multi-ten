"use client";

import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import {createBlog} from "./actions"
import { useOrganization } from "@clerk/nextjs";

export default function OrgLanding() {
  const [blogContent, setBlogContent] = React.useState("");
  const [title, setTitle] = React.useState("");

  const selectedOrg = useOrganization()

  console.log(selectedOrg)

  const handleCreateBlog = async() => { 
    if (!selectedOrg.organization?.id) return null
      await createBlog({
        body: blogContent.trim(),
        orgId: selectedOrg.organization?.id ,
        title: title,
      })
   }

  return (
    <main>
      <Nav />
      <div className="p-10">
        <Input
          placeholder="Title goes here..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <Textarea
          placeholder="Start Writing your content here..."
          onChange={(e) => setBlogContent(e.target.value)}
          value={blogContent}
        />
        <Button onClick={handleCreateBlog} className="mt-2" >Add blog +</Button>
      </div>
    </main>
  );
}
