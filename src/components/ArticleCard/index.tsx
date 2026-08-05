import React, {type ReactNode} from "react";
import Link from "@docusaurus/Link";

export type ArticleCardProps = {
  to: string;
  title: string;
  description: string;
  label?: string;
};

export function ArticleCard({to, title, description, label}: ArticleCardProps) {
  const external = /^https?:\/\//.test(to);

  return (
    <Link
      className="article-card"
      to={to}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label && <span className="article-card__label">{label}</span>}
      <span className="article-card__title">{title}</span>
      <span className="article-card__description">{description}</span>
      <span className="article-card__action" aria-hidden="true">
        {external ? "↗" : "→"}
      </span>
    </Link>
  );
}

export function ArticleCardGrid({children}: {children: ReactNode}) {
  return <div className="article-card-grid">{children}</div>;
}

export default ArticleCard;
