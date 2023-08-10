export const Link = ({ to, title }) => {
  return (
    <a className="text-light font-bold hover:text-primary" href={to}>{title}</a>  
)
}
