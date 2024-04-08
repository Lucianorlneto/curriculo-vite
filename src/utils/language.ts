export function getTranslation({
  language,
  ptText,
  enText,
}: {
  language?: Languages;
  ptText: string;
  enText: string;
}) {
  if (language === "en") return enText;

  return ptText;
}
