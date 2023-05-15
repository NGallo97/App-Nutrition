export interface ButtonConfig {
  title: string;
  imgUrl: string;
  description: string;
  buttonDescription: string;
  buttonImg: string;
  style: StyleButtonConfig;
}

export interface StyleButtonConfig {
  display: string;
  alignItems: string;
  justifyContent: string;
  width: string;
  height: string;
  background: string;
  borderRadius: string;
  transform: string;
  fontSize: string;
}
