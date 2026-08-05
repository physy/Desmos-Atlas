import React, {type ImgHTMLAttributes} from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

type ArticleImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
};

export default function ArticleImage({src, ...props}: ArticleImageProps) {
  return <img {...props} src={useBaseUrl(src)} />;
}
