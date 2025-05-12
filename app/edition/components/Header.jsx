"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-slate-800 text-white px-6 py-3 h-16 fixed w-full z-10">
      <div className="flex items-center ml-56">
        <Link href="/">
          <img src="/headerFooter/logoblanco2.webp" alt="Digimedia" width="150" height="50" className="h-auto" />
        </Link>
      </div>

      <Button variant="destructive" size="sm" asChild className="bg-red-600 hover:bg-red-700">
        <Link href="/dashboard/blogs" className="flex items-center">
          <ArrowLeft className="mr-0 h-4 w-4" />
          Regresar
        </Link>
      </Button>
    </header>
  )
}