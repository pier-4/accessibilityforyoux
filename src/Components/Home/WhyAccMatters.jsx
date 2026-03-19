import React from "react";

export default function WhyAccMatters() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="heading-2 text-secondary">
          Why accessibility
          <br />
          matters
        </h2>
        <div className="space-y-6 text-lg text-secondary-hierarchy  max-w-prose-sm ">
          <p>
            96% of homepages fail to meet basic WCAG 2.1 compliance standards.
            You are likely building for a default that excludes millions of
            potential users.
          </p>
          <p>
            Inaccessibility is a business liability. Between the rising wave of
            digital litigation and the direct revenue loss caused by poor UX,
            ignoring accessibility is a financial risk.
          </p>
          <p>
            Accessibility is often treated as an afterthought or a
            &quot;checkbox&quot; task rather than a foundational constraint,
            leading to products that look functional but perform poorly for your
            entire user base.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-md">
        {/* Replace with actual Question Mark Graphic */}
        <div className="w-48 h-64 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-6xl">
          ?
        </div>
        <div className="flex flex-col items-center gap-2 text-sm font-medium">
          <div className="bg-primary px-4 py-2 rounded-full text-primary-foreground flex items-center gap-3">
            <span className="text-lg font-bold">AA</span>
            <div className="w-8 h-4 bg-white rounded-full flex items-center px-1">
              <div className="w-3 h-3 bg-secondary rounded-full ml-auto"></div>
            </div>
          </div>
          <span className="text-secondary-hierarchy">
            try pressing the button
          </span>
          <span className="text-primary font-bold">Contrast 4.5 (AA)</span>
          <span className="text-red-500 font-bold">Contrast 1.02 (X)</span>
        </div>
      </div>
    </section>
  );
}
