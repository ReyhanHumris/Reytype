/**
 * Calculate Words Per Minute (WPM)
 * Standard: 1 word = 5 characters
 * @param {number} correctChars - Number of correctly typed characters
 * @param {number} timeInSeconds - Total time elapsed in seconds
 * @returns {number} WPM value
 */
export function calculateWPM(correctChars, timeInSeconds) {
  if (timeInSeconds === 0) return 0;
  const minutes = timeInSeconds / 60;
  const words = correctChars / 5;
  return Math.round(words / minutes);
}

/**
 * Calculate typing accuracy
 * @param {number} correctChars - Number of correctly typed characters
 * @param {number} totalChars - Total characters typed
 * @returns {number} Accuracy percentage (0-100)
 */
export function calculateAccuracy(correctChars, totalChars) {
  if (totalChars === 0) return 100;
  return Math.round((correctChars / totalChars) * 100);
}

/**
 * Get performance rating based on WPM
 * @param {number} wpm
 * @returns {{ label: string, color: string, emoji: string }}
 */
export function getPerformanceRating(wpm) {
  if (wpm >= 100) return { label: 'Legendary!', color: '#f59e0b', emoji: '🏆' };
  if (wpm >= 80) return { label: 'Expert!', color: '#8b5cf6', emoji: '⚡' };
  if (wpm >= 60) return { label: 'Advanced!', color: '#06b6d4', emoji: '🔥' };
  if (wpm >= 40) return { label: 'Good!', color: '#10b981', emoji: '👍' };
  if (wpm >= 20) return { label: 'Keep Going!', color: '#3b82f6', emoji: '💪' };
  return { label: 'Beginner', color: '#6b7280', emoji: '🌱' };
}
