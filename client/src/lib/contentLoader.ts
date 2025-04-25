import contentData from '../assets/data/content.json';

// Type definitions
type ContentData = typeof contentData;

// Helper function to get specific content sections
export function getContent(): ContentData {
  return contentData;
}

// Get specific sections
export function getHomeContent() {
  return contentData.home;
}

export function getAboutContent() {
  return contentData.about;
}

export function getProjectsContent() {
  return contentData.projects;
}

export function getBlogContent() {
  return contentData.blog;
}

export function getContactContent() {
  return contentData.contact;
}

export function getNavigationContent() {
  return contentData.navigation;
}

export function getFooterContent() {
  return contentData.footer;
}

export function getSkills() {
  return contentData.skills;
}

export function getExperiences() {
  return contentData.experiences;
}

// Default export for the entire content
export default contentData;