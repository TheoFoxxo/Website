import styles from "../../styles/button.module.scss";// this is like button icon thing lol
interface Props {
  text: string;
  link?: string;
  onClick?: () => void;
}
const Button: React.FC<Props> = ({ 
    text,
    link,
    onClick
  }) => {     
  return (
    <div className={styles.buttosn}>
      {link ? (
        <a href={link}>
          <button>{text}</button>
        </a>
      ) : (
        <button onClick={onClick}>{text}</button>
      )}
    </div>
  );
}

export default Button;