/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function getVimeoEmbedUrl(url: string) {
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (!match) {
    return null;
  }

  const id = match[1];
  return `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1&background=1&byline=0&title=0&portrait=0`;
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-44 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-44 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex flex-col h-full border border-border/60 rounded-xl overflow-hidden",
        "bg-card hover:shadow-lg hover:shadow-black/8 hover:-translate-y-0.5",
        "transition-all duration-300 ease-out cursor-pointer",
        className
      )}
    >
      {/* Media area */}
      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            (() => {
              const vimeoUrl = getVimeoEmbedUrl(video);
              if (vimeoUrl) {
                return (
                  <div className="relative w-full h-44 overflow-hidden">
                    <iframe
                      src={vimeoUrl}
                      title={`${title} video`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="absolute inset-0 w-full h-full pointer-events-none scale-105"
                    />
                  </div>
                );
              }

              return (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-44 object-cover"
                />
              );
            })()
          ) : image ? (
            <div className="relative w-full h-44 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ) : (
            <div className="w-full h-44 bg-muted" />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Link badges */}
        {links && links.length > 0 && (
          <div className="absolute top-2.5 right-2.5 flex flex-wrap gap-1.5">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1 text-[11px] font-medium bg-black/70 text-white hover:bg-black/90 backdrop-blur-sm border-0 px-2 py-0.5"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-bold text-sm leading-snug">{title}</h3>
            <time className="text-[11px] text-muted-foreground/70">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm shrink-0 mt-0.5"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Description */}
        <div className="text-[13px] flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-3 border-t border-border/50 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[10px] font-medium border border-border/60 h-5 w-fit px-1.5 rounded-md bg-muted/40"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
