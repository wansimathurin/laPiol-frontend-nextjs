import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCardComponent = () => {
  return (
   <div className="flex flex-col gap-4 h-[450px] w-[340px]">
      <Skeleton className="h-[350px] w-full rounded-3xl"/>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default SkeletonCardComponent
