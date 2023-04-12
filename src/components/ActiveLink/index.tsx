import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  // Se a rota que estamos acessando for igual ao link que ele clicou entao ativamos o className
  const className = asPath === rest.href ? activeClassName : "";

  // o cloneElement é pra gente poder passar o children e tbm uma variável, ali no caso o className
  return (
    <Link {...rest} legacyBehavior>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
