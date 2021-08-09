import S from './styles';


export interface Props {
    readonly options: Array
    readonly isLoading
    readonly defaultValue
    readonly isClearable
    readonly isDisabled
    readonly isMulti
    readonly defaultMenuIsOpen
}


const defaultProps: Props = {
  variant: 'default',
  size: 'medium',
};

const Button: React.FC<BaseButtonType & Props> = ({
  ...props
}) => {
  return (
    <S.SelectBox  {...props}>
   
    </S.SelectBox>
  );
};

Button.defaultProps = defaultProps;

export default Button;
