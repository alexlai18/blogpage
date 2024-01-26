"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export function SearchBar() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    router.push(`/blogs?filter=${search}`);
    setLoading(false);
  }

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search..."
          className="sm:w-[150px], md:w-[250px] lg:w-[300px]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>{loading ? <Icons.spinner className="h-4 w-4 animate-spin" /> :<MagnifyingGlassIcon />}</Button>
      </form>
    </div>
  )
}