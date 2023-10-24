interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function Button(props: ButtonProps) {
  return <button className="bg-whitedisabled:bg-[#C0BCDF]"   {...props}>Clique aqui</button>
}