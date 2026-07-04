import type { Project } from "@/content/types";

export const flutterDeliveryWorkflowProject: Project = {
  slug: "flutter-delivery-workflow-bug-fixing",
  title: "Flutter Delivery Workflow Bug Fixing",
  year: "2025",
  role: "Bug Fixing and Frontend Stability Improvement",
  summary: "Resolved workflow bugs in a Flutter-based delivery application, improving navigation consistency, QR scanning reliability, printer flow handling, and frontend resilience against inconsistent API responses.",
  stack: ["Flutter", "Android", "QR Scanning", "Bluetooth Printing", "Mobile UI"],
  slides: [
    {
      number: 1,
      id: "overview",
      label: "Overview",
      title: "Flutter Delivery Workflow Bug Fixing",
      layout: "title",
      eyebrow: "01 / 05",
      summary: "Stability and workflow fixes for a Flutter-based delivery application used in day-to-day operations.",
      body: [
        "This work focused on diagnosing and resolving user-facing workflow bugs that affected routing, scanning, printing, and delivery data reliability in a production-style mobile application.",
      ],
      metrics: [
        { label: "Platform", value: "Flutter / Android" },
        { label: "Focus", value: "Workflow stability" },
        { label: "Scope", value: "User-facing operations" },
      ],
    },
    {
      number: 2,
      id: "problem",
      label: "Problem",
      title: "Problem",
      layout: "bullets",
      eyebrow: "02 / 05",
      bullets: [
        "Delivery workflow bugs disrupted daily operations and reduced app reliability for users in the field.",
        "Navigation behavior across top-level pages was inconsistent, especially around Android back handling.",
        "QR scanning and printing flows needed stronger validation and clearer feedback to prevent operational mistakes.",
        "Inconsistent backend API responses could leak incorrect delivery item data into the frontend.",
      ],
    },
    {
      number: 3,
      id: "routing-and-scan",
      label: "Routing and Scan",
      title: "Routing and QR Workflow Fixes",
      layout: "bullets",
      eyebrow: "03 / 05",
      bullets: [
        "Fixed Android back-navigation and routing issues across top-level pages to improve navigation consistency.",
        "Improved QR scanning flow with input normalization to reduce malformed scan handling.",
        "Added duplicate prevention and manual entry support to make the scan workflow more resilient.",
      ],
    },
    {
      number: 4,
      id: "printing-and-api",
      label: "Printing and API",
      title: "Printing Reliability and Frontend Safeguards",
      layout: "bullets",
      eyebrow: "04 / 05",
      bullets: [
        "Enhanced Bluetooth thermal printing by supporting saved printer selection and better connection handling.",
        "Improved user feedback during printing and action flows to make failures easier to understand and recover from.",
        "Added frontend safeguards against inconsistent backend API responses so incorrect delivery item data would not be shown to users.",
      ],
    },
    {
      number: 5,
      id: "outcomes",
      label: "Outcomes",
      title: "Outcomes and Lessons",
      layout: "metrics",
      eyebrow: "05 / 05",
      body: [
        "The result was a more stable operational workflow with better usability, clearer feedback, and stronger tolerance against edge cases in both device interaction and backend data handling.",
      ],
      metrics: [
        { label: "Navigation", value: "More consistent" },
        { label: "QR flow", value: "Safer input handling" },
        { label: "Printing", value: "More reliable" },
        { label: "UI quality", value: "Improved feedback" },
      ],
    },
  ],
};
