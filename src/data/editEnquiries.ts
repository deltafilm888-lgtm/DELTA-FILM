export function editEnquiryLinks(projectTitle?: string) {
  const introduction = projectTitle
    ? `Hi Artem, I saw “${projectTitle}” and would like a quote for a similar edit.`
    : 'Hi Artem, I’d like a quote for an edit.';
  const brief = encodeURIComponent([
    introduction,
    '',
    'What we’re making (type, number of videos and lengths):',
    'Footage or reference link:',
    'Deadline and time zone:',
    'Budget range, if known:',
  ].join('\r\n'));

  return {
    email: `mailto:hello@delta-film.com?subject=Video%20editing%20enquiry&body=${brief}`,
    whatsapp: `https://wa.me/84862659753?text=${brief}`,
  };
}
