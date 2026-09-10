export const ROLES = {
  STUDENT: 'student',
  MENTOR: 'mentor',
  ADMIN: 'admin',
};

export const TASK_STATUS = {
  PENDING: 'pending',
  SUBMITTED: 'submitted',
  REVIEWED: 'reviewed',
  COMPLETED: 'completed',
};

export const SUBMISSION_STATUS = {
  SUBMITTED: 'submitted',
  REVIEWED: 'reviewed',
  GRADED: 'graded',
};

export const PRIORITY_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

export const NOTIFICATION_TYPES = {
  TASK_ASSIGNED: 'task_assigned',
  SUBMISSION_REVIEWED: 'submission_reviewed',
  FEEDBACK_ADDED: 'feedback_added',
  MESSAGE_RECEIVED: 'message_received',
  GRADE_UPDATED: 'grade_updated',
};

// Grade boundary thresholds (score out of 100)
export const SCORE_THRESHOLDS = {
  EXCELLENT: 85,
  PASSING: 60,
  FAILING: 0,
};

// Human-readable page titles mapped by route key
export const PAGE_TITLES = {
  dashboard: 'Dashboard',
  tasks: 'My Tasks',
  submissions: 'Submissions',
  leaderboard: 'Leaderboard',
  analytics: 'Analytics',
  messages: 'Messages',
  profile: 'My Profile',
  admin: 'Admin Panel',
};
