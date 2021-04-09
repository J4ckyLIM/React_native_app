export const formatText = ({
  text,
  maximumSize,
}: {
  text: string;
  maximumSize: number;
}) => {
  return text.length < maximumSize
    ? text
    : `${text.substring(0, maximumSize)}...`;
};
