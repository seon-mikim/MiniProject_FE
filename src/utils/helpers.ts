interface DetructedEmailString {
  emailId: string;
  emailDomain: string;
}

export function emailSeparator(email: string): DetructedEmailString {
  const destructedStringArray = email.split('@');

  return { emailId: destructedStringArray[0], emailDomain: destructedStringArray[1] };
}

export function formatDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
}

export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = './default_profile.png';
}
