"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi";

interface BeforeAfterProp {
  beforeAfter?: {
    title?: string;
    description?: string;
    before: any;
    after: any;
    beforeLabel?: string;
    afterLabel?: string;
    beforeLinkLabel?: string;
    afterLinkLabel?: string;
    beforeLink?: string;
    afterLink?: string;
    beforeVideo?: string;
    afterVideo?: string;
    newSectionsIntro?: string;
    newSectionsNote?: string;
    newSections?: {
      title: string;
      file?: string;
      description: string;
      image?: any;
    }[];
  };
}

const ProjectBeforeAfter = ({ beforeAfter }: BeforeAfterProp) => {
  // Hooks must run unconditionally, before any early return (rules-of-hooks).
  const [openVideo, setOpenVideo] = useState<{
    src: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    if (!openVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenVideo(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openVideo]);

  if (!beforeAfter) return null;

  const {
    title = "Before & After",
    description,
    before,
    after,
    beforeLabel = "Tutorial",
    afterLabel = "My",
    beforeLinkLabel,
    afterLinkLabel,
    beforeLink,
    afterLink,
    beforeVideo,
    afterVideo,
    newSections,
    newSectionsIntro,
    newSectionsNote,
  } = beforeAfter;

  return (
    <section className="container 2xl:px-[280px] lg:px-[72px] px-[24px] py-[72px] bg-[#FFFFFF] dark:bg-[#151E2C]">
      <div className="text-[#0252CD] dark:text-[#428DFF] font-poppins font-semibold md:text-[14px] text-[12px] md:leading-[20px] leading-[17px] pb-[10px]">
        Before &amp; After
      </div>
      <div className="text-[#151E2C] dark:text-[#FFFFFF] font-poppins font-semibold md:text-[32px] text-[28px] md:leading-[34px] leading-[29px]">
        {title}
      </div>

      {description && (
        <div className="w-full py-[29px] text-[#6F74A7] dark:text-[#F3F8FF] font-poppins font-normal md:text-[20px] text-[14px] md:leading-[30px] leading-[21px]">
          {description}
        </div>
      )}

      {(beforeVideo || afterVideo) && (
        <div className="mt-[48px]">
          <div className="pb-[20px] font-poppins text-[16px] font-semibold text-[#151E2C] dark:text-[#FFFFFF] md:text-[20px]">
            See them in motion
          </div>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
            {[
              {
                src: beforeVideo,
                label: beforeLabel,
                linkLabel: beforeLinkLabel ?? beforeLabel,
                poster: before,
                link: beforeLink,
              },
              {
                src: afterVideo,
                label: afterLabel,
                linkLabel: afterLinkLabel ?? afterLabel,
                poster: after,
                link: afterLink,
              },
            ]
              .filter((v) => v.src)
              .map((v) => (
                <figure key={v.label} className="m-0">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenVideo({ src: v.src as string, label: v.label })
                      }
                      aria-label={`Play ${v.label} video with sound`}
                      className="group relative block w-full overflow-hidden rounded-[12px] border border-[#0252CD] border-opacity-10"
                    >
                      <video
                        src={v.src}
                        poster={(v.poster as any)?.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="pointer-events-none aspect-video w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0252CD] shadow-md transition-transform group-hover:scale-110">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                    </button>
                    <figcaption className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-poppins text-[12px] text-white">
                      {v.label}
                    </figcaption>
                  </div>
                  {v.link && (
                    <Link
                      href={v.link}
                      target="_blank"
                      className="mt-[14px] flex items-center justify-center gap-1 font-poppins text-[14px] font-semibold text-[#0252CD] hover:underline dark:text-[#428DFF] md:text-[16px]"
                    >
                      <FaEarthAfrica size={16} />
                      {v.linkLabel} version
                      <HiOutlineArrowRight size={18} />
                    </Link>
                  )}
                </figure>
              ))}
          </div>
          <p className="pt-[14px] text-center font-poppins text-[12px] text-[#6F74A7] dark:text-[#F3F8FF] md:text-[14px]">
            Click a video to play it full-size with sound.
          </p>
        </div>
      )}

      {newSections && newSections.length > 0 && (
        <div className="mt-[56px]">
          <div className="pb-[8px] font-poppins text-[16px] font-semibold text-[#151E2C] dark:text-[#FFFFFF] md:text-[20px]">
            What I added
          </div>
          {newSectionsIntro && (
            <p className="pb-[32px] font-poppins text-[14px] font-normal leading-[22px] text-[#6F74A7] dark:text-[#F3F8FF] md:text-[16px] md:leading-[26px]">
              {newSectionsIntro}
            </p>
          )}
          <ol className="flex flex-col gap-[28px]">
            {newSections.map((s, i) => (
              <li key={s.title} className="flex gap-[16px]">
                <span className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0252CD]/10 font-poppins text-[13px] font-semibold text-[#0252CD] dark:bg-[#428DFF]/20 dark:text-[#428DFF]">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-[10px] gap-y-[4px]">
                    <span className="font-poppins text-[16px] font-semibold text-[#151E2C] dark:text-[#FFFFFF] md:text-[18px]">
                      {s.title}
                    </span>
                    {s.file && (
                      <span className="rounded-[6px] bg-[#0252CD]/[0.06] px-[8px] py-[2px] font-mono text-[12px] text-[#6F74A7] dark:bg-white/[0.07] dark:text-[#A8AEC7]">
                        {s.file}
                      </span>
                    )}
                  </div>
                  <p className="pt-[6px] font-poppins text-[14px] font-normal leading-[22px] text-[#6F74A7] dark:text-[#F3F8FF] md:text-[15px] md:leading-[24px]">
                    {s.description}
                  </p>
                  {s.image && (
                    <div className="mt-[14px] max-w-[560px] overflow-hidden rounded-[10px] border border-[#0252CD] border-opacity-10">
                      <Image src={s.image} alt={s.title} className="h-auto w-full" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
          {newSectionsNote && (
            <p className="mt-[32px] border-l-2 border-[#0252CD] pl-[16px] font-poppins text-[14px] font-normal italic leading-[22px] text-[#6F74A7] dark:border-[#428DFF] dark:text-[#F3F8FF] md:text-[15px] md:leading-[24px]">
              {newSectionsNote}
            </p>
          )}
        </div>
      )}

      {openVideo && (
        <div
          onClick={() => setOpenVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${openVideo.label} video`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1100px]"
          >
            <button
              type="button"
              onClick={() => setOpenVideo(null)}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <video
              src={openVideo.src}
              controls
              autoPlay
              loop
              playsInline
              className="aspect-video w-full rounded-[12px] bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectBeforeAfter;
