export interface IModalRootProps {
  children: React.ReactNode;
  show: boolean;
}

export interface IOptionsFullModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
}
export interface IFullModalProps {
  children: React.ReactNode;
  options: IOptionsFullModalProps;
}
