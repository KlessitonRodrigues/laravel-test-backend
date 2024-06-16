declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    w?: string;
    h?: string;
    maxw?: string;
    maxh?: string;
    p?: string;
    m?: string;
    mb?: number;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    center?: boolean;
    wrap?: boolean;
    rows?: number;
    cols?: number;
    responsive?: boolean;
    reverse?: boolean;
    half?: boolean;
    src?: string;
    flexwrap?: boolean;
    delay?: string;
  };

  type Page = {
    fullScreen?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
  };

  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type: Utils.IconTypes;
  };

  type Text = {
    path: string;
    tag?: Utils.TextTags;
  };

  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon';
    title?: string;
    description?: string;
  };

  type Modal = {
    show: boolean;
    title?: string;
    children?: React.ReactNode;
    onClose?: () => void;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactNode;
  };

  type Accordion = {
    title: React.ReactElement;
    content: React.ReactElement;
    delayLoad?: boolean;
  };

  type Form<T> = {
    onSubmit?: (form: T) => void;
  };

  type InputField = {
    label?: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    onChange?: (value: string) => void;
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
  };

  type AppHeader = {
    onCreateAnnounce?: () => void;
  };
}
