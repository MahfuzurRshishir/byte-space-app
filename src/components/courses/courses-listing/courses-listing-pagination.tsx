"use client";

import { useState } from "react";
import type { CourseCardProps } from "@/lib/types/course";
import CoursesListingGrid from "@/components/courses/courses-listing/courses-listing-grid";

interface CoursesListingPaginationProps {
  courses: CourseCardProps[];
  perPage?: number;
}

const btnBase =
  "inline-flex items-center justify-center w-[32px] h-[32px] rounded-full " +
  "min-[640px]:w-[36px] min-[640px]:h-[36px] " +
  "[font-family:var(--font-satoshi)] font-medium text-[13px] min-[640px]:text-[14px] " +
  "leading-none transition-colors duration-150 cursor-pointer focus:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-primary/30";

const btnActive  = btnBase + " bg-primary text-white";
const btnDefault = btnBase + " bg-transparent text-[#4B4C53] hover:bg-[#F5F5F6]";
const btnNav     = btnBase + " bg-transparent text-[#4B4C53] hover:bg-[#F5F5F6]";

export default function CoursesListingPagination({
  courses,
  perPage = 9,
}: CoursesListingPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / perPage);
  const startIdx   = (currentPage - 1) * perPage;
  const paginated  = courses.slice(startIdx, startIdx + perPage);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center gap-8 min-[640px]:gap-10 w-full">

      {/* Course grid — only the current page slice */}
      <CoursesListingGrid courses={paginated} />

      {/* Pagination controls */}
      <nav aria-label="Course pages" className="flex items-center gap-1 min-[480px]:gap-1.5">

        {/* Previous */}
        <button
          type="button"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${btnNav} disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Previous page"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => goTo(page)}
            className={page === currentPage ? btnActive : btnDefault}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          type="button"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${btnNav} disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Next page"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </nav>
    </div>
  );
}
