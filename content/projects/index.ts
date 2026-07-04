import { flutterDeliveryWorkflowProject } from "@/content/projects/flutter-delivery-workflow-bug-fixing";
import { nmsPlatformProject } from "@/content/projects/nms-platform";
import { privateCloudInfrastructureProject } from "@/content/projects/private-cloud-infrastructure";
import type { Project } from "@/content/types";

export const projects: Project[] = [
  nmsPlatformProject,
  flutterDeliveryWorkflowProject,
  privateCloudInfrastructureProject,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
