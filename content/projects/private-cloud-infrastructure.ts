import type { Project } from "@/content/types";

export const privateCloudInfrastructureProject: Project = {
  slug: "private-cloud-infrastructure",
  title: "Private Cloud Provisioning with OpenNebula and Terraform",
  year: "2025",
  role: "Infrastructure Design and IaC Implementation",
  summary: "Built an Infrastructure as Code workflow for provisioning virtual machines on OpenNebula using Terraform, with Ceph-backed storage design, network segmentation, reusable compute modules, and centralized Terraform state management.",
  stack: ["Terraform", "OpenNebula", "KVM", "Ceph", "Terraform Cloud", "GitHub Actions", "Ubuntu"],
  slides: [
    {
      number: 1,
      id: "overview",
      label: "Overview",
      title: "Private Cloud Provisioning with OpenNebula and Terraform",
      layout: "title",
      eyebrow: "01 / 05",
      summary: "Infrastructure as Code workflow for private cloud VM provisioning on OpenNebula.",
      body: [
        "This project focuses on repeatable private cloud provisioning by combining Terraform automation, OpenNebula compute resources, Ceph-backed storage, and a structured deployment workflow.",
      ],
      metrics: [
        { label: "Provisioning", value: "Terraform" },
        { label: "Platform", value: "OpenNebula" },
        { label: "Storage", value: "Ceph" },
      ],
      image: {
        src: "/projects/private-cloud-infrastructure/topology_white_bg.png",
        alt: "OpenNebula private cloud topology diagram",
        caption: "Topology showing deployer node, segmented networks, and compute or storage nodes in the private cloud environment.",
      },
    },
    {
      number: 2,
      id: "problem",
      label: "Problem",
      title: "Problem",
      layout: "bullets",
      eyebrow: "02 / 05",
      bullets: [
        "Manual VM provisioning in private cloud environments is slow, repetitive, and prone to inconsistency.",
        "Storage, networking, and machine context need a repeatable process instead of one-off UI-based creation.",
        "Collaboration becomes harder when state and infrastructure changes are not centrally tracked.",
        "A private cloud stack also needs clear separation between service traffic and management access.",
      ],
    },
    {
      number: 3,
      id: "architecture",
      label: "Architecture",
      title: "Cluster and Storage Architecture",
      layout: "split",
      eyebrow: "03 / 05",
      body: [
        "The infrastructure uses OpenNebula for compute orchestration and Ceph for distributed storage. The design separates data plane execution from control plane management, while keeping storage access redundant through Ceph-backed architecture.",
      ],
      aside: [
        "KVM hosts run the virtual machines",
        "Ceph provides replicated storage through OSD-backed architecture",
        "OpenNebula frontend manages metadata and orchestration",
      ],
      image: {
        src: "/projects/private-cloud-infrastructure/cluster_work_white_bg.png",
        alt: "Cluster architecture for OpenNebula and Ceph",
        caption: "Cluster architecture showing control plane and data plane responsibilities across OpenNebula and Ceph.",
      },
    },
    {
      number: 4,
      id: "iac-flow",
      label: "IaC Flow",
      title: "Infrastructure as Code Flow",
      layout: "code",
      eyebrow: "04 / 05",
      body: [
        "The provisioning flow is designed around source-controlled Terraform code, remote state management, and automation-ready execution. The repository structure separates variables, reusable compute logic, and VM configuration data.",
      ],
      image: {
        src: "/projects/private-cloud-infrastructure/iac_flow_white_bg.png",
        alt: "Terraform IaC workflow for OpenNebula provisioning",
        caption: "Automation flow using GitHub, GitHub Actions, Terraform Cloud, and OpenNebula provisioning.",
      },
    },
    {
      number: 5,
      id: "outcomes",
      label: "Outcomes",
      title: "Outcomes and Lessons",
      layout: "metrics",
      eyebrow: "05 / 05",
      body: [
        "The project established a cleaner and more reproducible provisioning model for private cloud resources, while also reinforcing infrastructure modularity and automation discipline.",
      ],
      metrics: [
        { label: "Provisioning model", value: "Declarative" },
        { label: "State", value: "Terraform Cloud" },
        { label: "Resource logic", value: "Reusable module" },
        { label: "Collaboration", value: "Automation-ready" },
      ],
    },
  ],
};
