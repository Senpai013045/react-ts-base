interface Props {
  children: React.ReactNode;
}

export const Modal = ({children}: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-ui-darker rounded-lg p-4">{children}</div>
    </div>
  );
};
