import React from "react"
import { cn } from "../../lib/utils"

const Avatar = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    >
      {children}
    </div>
  )
}

const AvatarImage = ({
  className,
  src,
  alt = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
}

const AvatarFallback = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback } 