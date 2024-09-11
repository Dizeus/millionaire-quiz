interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h2 className="">{text}</h2>;
};

export default Title;
