const timeDifference = value => {
  if (!value) return '';
  const date = new Date(value);
  const now = new Date();

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const years = Math.floor(days / 365);
  const months = date.getMonth() - now.getMonth();

  if (years > 0) return `${years} years ago`;
  if (months > 0) return `${months} months ago`;

  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 30) return `${days} days ago`;

  return `${years} years ago`;
};

export default timeDifference;
